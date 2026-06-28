import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import API from "../services/api";
import TaskCard from "../components/TaskCard";

function Home() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const fetchTasks = async () => {
    try {
      setLoading(true);

      const res = await API.get("/tasks");

      setTasks(res.data);
    } catch (error) {
      toast.error("Failed to fetch tasks");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const deleteTask = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this task?"
    );

    if (!confirmDelete) return;

    try {
      await API.delete(`/tasks/${id}`);

      toast.success("Task Deleted");

      fetchTasks();
    } catch (error) {
      toast.error("Unable to delete task");
    }
  };

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesStatus =
      status === "All" ||
      task.status === status;

    return matchesSearch && matchesStatus;
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="h-12 w-12 rounded-full border-4 border-blue-600 border-t-transparent animate-spin" />
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-5 py-8">
      <h1 className="text-3xl font-bold mb-6">
        Tasks
      </h1>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <input
          placeholder="Search Tasks"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="border rounded-lg p-3 flex-1"
        />

        <select
          value={status}
          onChange={(e) =>
            setStatus(e.target.value)
          }
          className="border rounded-lg p-3"
        >
          <option>All</option>

          <option>Pending</option>

          <option>In Progress</option>

          <option>Completed</option>
        </select>
      </div>

      {filteredTasks.length === 0 ? (
        <div className="text-center py-20">
          <div className="text-6xl">
            📋
          </div>

          <h2 className="text-2xl font-bold mt-4">
            No Tasks Yet
          </h2>

          <p className="text-gray-500">
            Create your first task
          </p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredTasks.map((task) => (
            <TaskCard
              key={task._id}
              task={task}
              onDelete={deleteTask}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;