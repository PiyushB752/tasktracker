import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";

function TaskCard({ task, onDelete }) {
  const statusColors = {
    Pending: "bg-red-100 text-red-700",
    "In Progress": "bg-yellow-100 text-yellow-700",
    Completed: "bg-green-100 text-green-700",
  };

  const priorityColors = {
    Low: "bg-blue-100 text-blue-700",
    Medium: "bg-purple-100 text-purple-700",
    High: "bg-red-100 text-red-700",
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition duration-300">
      <div className="flex justify-between items-start gap-3">
        <h2 className="font-bold text-lg">{task.title}</h2>

        <span
          className={`px-3 py-1 rounded-full text-sm ${
            statusColors[task.status]
          }`}
        >
          {task.status}
        </span>
      </div>

      <p className="text-gray-600 mt-3">{task.description}</p>

      <div className="mt-4">
        <span
          className={`px-3 py-1 rounded-full text-sm ${
            priorityColors[task.priority]
          }`}
        >
          {task.priority}
        </span>
      </div>

      {task.dueDate && (
        <p className="text-sm text-gray-500 mt-4">
          Due: {new Date(task.dueDate).toLocaleDateString()}
        </p>
      )}

      <div className="flex gap-3 mt-5">
        <Link
          to={`/edit/${task._id}`}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          <FaEdit />
          Edit
        </Link>

        <button
          onClick={() => onDelete(task._id)}
          className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg"
        >
          <FaTrash />
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;