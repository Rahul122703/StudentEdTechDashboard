import { FaBook, FaClock, FaCertificate } from "react-icons/fa";

const CourseCard = ({ course }) => {
  return (
    <div className="rounded-2xl shadow-lg overflow-hidden flex flex-col bg-white text-black">
      <div className={`h-32 flex items-center justify-center ${course.color}`}>
        {course.icon}
      </div>
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-semibold text-black">{course.title}</h2>
          <p className="text-sm text-white  dark:text-black-300 mb-2">
            Instructor: {course.instructor}
          </p>
          <p className="text-sm text-black-700 dark:text-black-400 mb-2">
            Progress: {course.progress}%
          </p>
          <div className="w-full bg-gray-200 h-2 rounded-full mb-2">
            <div
              className="h-full bg-blue-600 rounded-full"
              style={{ width: `${course.progress}%` }}
            ></div>
          </div>
        </div>
        <div className="text-sm text-black-600 dark:text-black-300 flex justify-between items-center mt-2">
          <span className="flex items-center gap-1">
            <FaBook /> {course.lessons} Lessons
          </span>
          <span className="flex items-center gap-1">
            <FaClock /> {course.hours} Hours
          </span>
          <span className="flex items-center gap-1">
            <FaCertificate /> Certificate
          </span>
        </div>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          Continue Learning
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
