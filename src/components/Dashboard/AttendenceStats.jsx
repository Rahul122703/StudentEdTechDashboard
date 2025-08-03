import React from "react";
import { useSelector } from "react-redux";

const AttendenceStats = () => {
  const courses = useSelector((state) => state.courses.data);

  const lectureAttendanceData = courses
    .filter(
      (course) => course.attendance && course.attendance.totalLectures > 0
    )
    .map((course) => ({
      course: course.title,
      total: course.attendance.totalLectures,
      attended: course.attendance.attended,
    }));

  return (
    <div className="w-full flex flex-wrap gap-4 overflow-y-auto max-h-[15rem] p-2 justify-around">
      {lectureAttendanceData.map((data, i) => {
        const percent = ((data.attended / data.total) * 100).toFixed(0);
        return (
          <div
            key={i}
            className="w-50 bg-white p-3 rounded-xl shadow-md flex-shrink-0"
          >
            <h3 className="text-center text-sm font-semibold mb-3 text-gray-800">
              {data.course}
            </h3>
            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
              <div
                className="h-4 bg-indigo-500 transition-all"
                style={{ width: `${percent}%` }}
              />
            </div>
            <div className="text-sm text-center mt-2 text-gray-600">
              {percent}% Attended ({data.attended}/{data.total})
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AttendenceStats;
