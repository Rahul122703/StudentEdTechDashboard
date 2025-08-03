import React from "react";
import { NavLink } from "react-router-dom";
const EnrolledCourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-5 sm:p-6 flex flex-col justify-between gap-4 hover:shadow-md transition-all my-3">
      <div className="flex items-center gap-4">
        <div className="flex-1">
          <h3 className="text-base sm:text-lg font-semibold text-gray-800">
            {course.title}
          </h3>
          <p className="text-sm text-gray-500">
            Instructor: {course.instructor}
          </p>
        </div>
      </div>

      <div className="w-full">
        <p className="text-sm text-gray-700 font-medium mb-1">
          Progress:{" "}
          <span className="text-blue-600 font-semibold">
            {course.progress}%
          </span>
        </p>
        <div className="w-full h-2 bg-gray-200 rounded-full">
          <div
            className="h-full bg-blue-600 rounded-full transition-all duration-300"
            style={{ width: `${course.progress}%` }}
          />
        </div>
      </div>

      <div className="pt-2">
        <NavLink
          to="/courses"
          className="px-2 py-3 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition"
        >
          Continue Learning
        </NavLink>
      </div>
    </div>
  );
};

export default EnrolledCourseCard;
