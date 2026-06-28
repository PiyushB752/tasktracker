import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import toast from "react-hot-toast";

import API from "../services/api";
import TaskForm from "../components/TaskForm";

function EditTask() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [task, setTask] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTask();
  }, []);

  const loadTask = async () => {
    try {
      const res = await API.get(
        `/tasks/${id}`
      );

      setTask(res.data);
    } catch (error) {
      toast.error("Failed to load task");
    } finally {
      setLoading(false);
    }
  };

  const updateTask = async (data) => {
    try {
      await API.put(
        `/tasks/${id}`,
        data
      );

      toast.success(
        "Task Updated Successfully"
      );

      navigate("/");
    } catch (error) {
      toast.error("Update Failed");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center py-16">
        <div className="h-12 w-12 rounded-full border-4 border-blue-600 border-t-transparent animate-spin" />
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-5 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">
          Edit Task
        </h1>

        <p className="text-gray-500">
          Update your task details
        </p>
      </div>

      <TaskForm
        initialData={task}
        onSubmit={updateTask}
      />
    </div>
  );
}

export default EditTask;