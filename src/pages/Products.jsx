
import { useState } from "react";

const Products = () => {
  const [input, setInput] = useState("");

  const [tasklist, setTasklist] = useState([
    { id: 1, task: "Learn React", status: false },
  ]);

  const addtask = () => {
    if (input.trim() === "") return;

    const newtask = {
      id: Date.now(),
      task: input.trim(),
      status: false,
    };

    setTasklist((prev) => [...prev, newtask]);
    setInput("");
  };

  const markcomplete = (id) => {
    setTasklist((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, status: !task.status }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasklist((prev) =>
      prev.filter((task) => task.id !== id)
    );
  };

  const completedCount = tasklist.filter(
    (task) => task.status
  ).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-blue-100 px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-xl">

        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-600 text-3xl shadow-lg shadow-indigo-200">
            ✓
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-gray-800">
            My Todo List
          </h1>

          <p className="mt-2 text-gray-500">
            Organize your day, one task at a time
          </p>
        </div>

        {/* Main Card */}
        <div className="rounded-3xl border border-white bg-white/90 p-5 shadow-2xl shadow-indigo-200/50 backdrop-blur sm:p-8">

          {/* Progress */}
          <div className="mb-6 flex items-center justify-between gap-3">
            <div>
              <h2 className="text-xl font-bold text-gray-800">
                Your Tasks
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Stay focused and productive
              </p>
            </div>

            <div className="rounded-2xl bg-indigo-50 px-4 py-3 text-center">
              <p className="text-2xl font-extrabold text-indigo-600">
                {completedCount}/{tasklist.length}
              </p>
              <p className="text-xs font-medium text-indigo-500">
                Completed
              </p>
            </div>
          </div>

          {/* Input */}
          <form
            className="mb-7 flex flex-col gap-3 sm:flex-row"
            onSubmit={(e) => {
              e.preventDefault();
              addtask();
            }}
          >
            <input
              type="text"
              placeholder="What do you need to do?"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="min-w-0 flex-1 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-gray-700 outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
            />

            <button
              type="submit"
              className="rounded-xl bg-indigo-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5 hover:bg-indigo-700 active:translate-y-0"
            >
              + Add Task
            </button>
          </form>

          {/* Task List */}
          <div className="space-y-3">
            {tasklist.length === 0 ? (
              <div className="rounded-2xl border-2 border-dashed border-gray-200 px-4 py-12 text-center">
                <p className="mb-2 text-4xl">📝</p>
                <h3 className="font-semibold text-gray-700">
                  No tasks yet
                </h3>
                <p className="mt-1 text-sm text-gray-400">
                  Add your first task above!
                </p>
              </div>
            ) : (
              tasklist.map((item) => (
                <div
                  key={item.id}
                  className={`flex items-center gap-3 rounded-2xl border p-4 transition duration-200 hover:shadow-md ${
                    item.status
                      ? "border-green-100 bg-green-50/70"
                      : "border-gray-100 bg-white hover:border-indigo-100"
                  }`}
                >
                  {/* Complete Toggle */}
                  <button
                    type="button"
                    onClick={() => markcomplete(item.id)}
                    aria-label={
                      item.status
                        ? "Mark task incomplete"
                        : "Mark task complete"
                    }
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition ${
                      item.status
                        ? "border-green-500 bg-green-500 text-white"
                        : "border-gray-300 hover:border-indigo-500"
                    }`}
                  >
                    {item.status && (
                      <span className="text-sm font-bold">✓</span>
                    )}
                  </button>

                  {/* Task Text */}
                  <span
                    className={`min-w-0 flex-1 break-words text-sm font-medium sm:text-base ${
                      item.status
                        ? "text-gray-400 line-through"
                        : "text-gray-700"
                    }`}
                  >
                    {item.task}
                  </span>

                  {/* Status */}
                  <span
                    className={`hidden rounded-full px-3 py-1 text-xs font-semibold sm:inline-block ${
                      item.status
                        ? "bg-green-100 text-green-700"
                        : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {item.status ? "Done" : "Pending"}
                  </span>

                  {/* Delete */}
                  <button
                    type="button"
                    onClick={() => deleteTask(item.id)}
                    aria-label={`Delete ${item.task}`}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-lg text-gray-400 transition hover:bg-red-50 hover:text-red-500"
                  >
                    ×
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {tasklist.length > 0 && (
            <div className="mt-6 border-t border-gray-100 pt-5 text-center text-sm text-gray-500">
              {completedCount === tasklist.length
                ? "🎉 Great job! All tasks completed."
                : `${tasklist.length - completedCount} tasks remaining. Keep going!`}
            </div>
          )}
        </div>

        <p className="mt-6 text-center text-sm text-gray-400">
       
        </p>
      </div>
    </div>
  );
};

export default Products;