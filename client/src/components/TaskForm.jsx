import { useState } from "react";

function TaskForm({ initialData, onSubmit }) {
  const [form, setForm] = useState(
    initialData || {
      title: "",
      description: "",
      status: "Pending",
      priority: "Medium",
      dueDate: "",
    }
  );

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form
      onSubmit={submit}
      className="bg-white shadow-lg rounded-xl p-6 space-y-5"
    >
      <div>
        <label className="block font-semibold mb-2">Title</label>

        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          required
          placeholder="Enter task title"
          className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      <div>
        <label className="block font-semibold mb-2">Description</label>

        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          rows="4"
          placeholder="Enter description"
          className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      <div>
        <label className="block font-semibold mb-2">Status</label>

        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        >
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      <div>
        <label className="block font-semibold mb-2">Priority</label>

        <select
          name="priority"
          value={form.priority}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>

      <div>
        <label className="block font-semibold mb-2">Due Date</label>

        <input
          type="date"
          name="dueDate"
          value={form.dueDate}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
      >
        Save Task
      </button>
    </form>
  );
}

export default TaskForm;