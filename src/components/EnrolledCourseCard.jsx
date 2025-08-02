import React from "react";

const EnrolledCourseCard = ({ course }) => {
  return (
    <div className="bg-gray-100 rounded-xl p-4 space-y-2">
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 bg-white rounded flex items-center justify-center text-2xl">
          {course.icon}
        </div>
        <div>
          <h3 className="font-semibold">{course.title}</h3>
          <p className="text-sm text-gray-600">
            Instructor: {course.instructor}
          </p>
        </div>
      </div>
      <p className="text-sm">Progress: {course.progress}%</p>
      <div className="w-full bg-gray-300 h-2 rounded">
        <div
          className="bg-blue-600 h-2 rounded"
          style={{ width: `${course.progress}%` }}
        />
      </div>
      <button className="mt-2 bg-blue-600 text-white text-sm px-3 py-1 rounded">
        Continue Learning
      </button>
    </div>
  );
};

export default EnrolledCourseCard;
