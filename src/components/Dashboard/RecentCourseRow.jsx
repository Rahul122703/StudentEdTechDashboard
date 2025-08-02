import React from "react";

const RecentCourseRow = ({ course }) => {
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="px-3 py-2">{course.course}</td>
      <td className="px-3 py-2">{course.instructor}</td>
      <td className="px-3 py-2">{course.hours}</td>
      <td className="px-3 py-2">{course.completed}</td>
      <td className="px-3 py-2">{course.tests}</td>
      <td className="px-3 py-2">{course.lastAccessed}</td>
    </tr>
  );
};

export default RecentCourseRow;
