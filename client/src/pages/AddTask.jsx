import { useState } from "react";
import { useNavigate } from "react-router-dom";

import API from "../services/api";
import TaskForm from "../components/TaskForm";

import toast from "react-hot-toast";

function AddTask() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const createTask = async (data) => {
    try {
      setLoading(true);

      await API.post("/tasks", data);

      toast.success("Task Created Successfully");

      navigate("/");
    } catch (error) {
      toast.error("Unable to create task");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-5 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Add New Task</h1>

        <p className="text-gray-500 mt-1">
          Create a new task and manage your workflow efficiently.
        </p>
      </div>

      {loading ? (
        <div className="flex justify-center py-16">
          <div className="h-12 w-12 rounded-full border-4 border-blue-600 border-t-transparent animate-spin" />
        </div>
      ) : (
        <TaskForm onSubmit={createTask} />
      )}
    </div>
  );
}

export default AddTask;