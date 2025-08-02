import React from "react";
import { FaBook, FaCheck, FaGraduationCap, FaCode } from "react-icons/fa";

const Progress = () => {
  const courseProgress = [
    { title: "HTML & CSS", completed: true },
    { title: "JavaScript Basics", completed: true },
    { title: "React.js Fundamentals", completed: true },
    { title: "React Hooks", completed: false },
    { title: "API Integration", completed: false },
    { title: "Resume Builder Tool", completed: false },
  ];

  const heatmapData = [
    [0, 2, 0, 1, 3, 0, 2],
    [1, 0, 4, 1, 0, 3, 0],
    [2, 1, 0, 0, 2, 1, 4],
    [0, 3, 1, 0, 1, 2, 0],
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          My Learning Progress
        </h1>

        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Course Progress
        </h2>
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          {courseProgress.map((course, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 bg-white shadow p-4 rounded-lg"
            >
              <FaBook className="text-blue-600 text-xl" />
              <span className="text-gray-800 font-medium flex-1">
                {course.title}
              </span>
              {course.completed ? (
                <FaCheck className="text-green-500 text-lg" />
              ) : (
                <span className="text-sm text-yellow-600">In Progress</span>
              )}
            </div>
          ))}
        </div>

        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Consistency Heatmap
        </h2>
        <div className="grid grid-cols-7 gap-2 w-fit">
          {heatmapData.map((week, i) =>
            week.map((val, j) => {
              const colorScale = [
                "bg-gray-200",
                "bg-blue-100",
                "bg-blue-300",
                "bg-blue-500",
                "bg-blue-700",
              ];
              return (
                <div
                  key={`${i}-${j}`}
                  className={`w-6 h-6 rounded ${colorScale[val]} border border-gray-300`}
                  title={`Day ${j + 1}, Week ${i + 1}: ${val} activity`}
                ></div>
              );
            })
          )}
        </div>

        <p className="mt-4 text-sm text-gray-500 text-center">
          Activity heatmap (simulated): Brighter means more consistent learning.
        </p>
      </div>
    </div>
  );
};
export default Progress;
