import React from "react";

const EnrolledCourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 space-y-4 transition hover:shadow-lg">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xl font-bold">
          {course.icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            {course.title}
          </h3>
          <p className="text-sm text-gray-500">
            Instructor: {course.instructor}
          </p>
        </div>
      </div>

      <div>
        <p className="text-sm font-medium text-gray-700 mb-1">
          Progress: <span className="text-blue-600">{course.progress}%</span>
        </p>
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-600 transition-all duration-300"
            style={{ width: `${course.progress}%` }}
          />
        </div>
      </div>

      <div className="pt-2">
        <button className="w-1/4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 rounded-md transition">
          Continue Learning
        </button>
      </div>
    </div>
  );
};

export default EnrolledCourseCard;
