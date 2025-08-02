import React from "react";
import { format } from "date-fns";
import { FaBookOpen, FaClock, FaChartBar, FaArrowRight } from "react-icons/fa";

const Dashboard = () => {
  const userName = "Rahul";
  const today = format(new Date(), "eeee, MMMM do");

  return (
    <div className="flex flex-col gap-6 p-4 md:p-8 bg-gray-50 dark:bg-gray-900 min-h-screen ">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
            👋 Hi {userName}
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">{today}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-5 flex items-center gap-4">
          <FaBookOpen className="text-blue-500 text-3xl" />
          <div>
            <h4 className="text-gray-600 dark:text-gray-300 text-sm">
              Enrolled Courses
            </h4>
            <p className="text-xl font-semibold text-gray-800 dark:text-white">
              6
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-5 flex items-center gap-4">
          <FaClock className="text-green-500 text-3xl" />
          <div>
            <h4 className="text-gray-600 dark:text-gray-300 text-sm">
              Weekly Learning Time
            </h4>
            <p className="text-xl font-semibold text-gray-800 dark:text-white">
              4h 30m
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-5 flex items-center gap-4">
          <FaChartBar className="text-purple-500 text-3xl" />
          <div>
            <h4 className="text-gray-600 dark:text-gray-300 text-sm">
              Overall Progress
            </h4>
            <p className="text-xl font-semibold text-gray-800 dark:text-white">
              67%
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-100 dark:bg-blue-900 rounded-xl p-6 flex flex-col justify-between shadow hover:shadow-md transition-all">
          <h3 className="text-xl font-semibold text-blue-900 dark:text-white mb-2">
            Continue Learning
          </h3>
          <p className="text-sm text-blue-800 dark:text-blue-300 mb-4">
            Pick up from where you left off in “React for Beginners”.
          </p>
          <button className="flex items-center text-blue-600 hover:underline font-medium">
            Go to Course <FaArrowRight className="ml-2" />
          </button>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 flex flex-col justify-between shadow hover:shadow-md transition-all">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
            Resume Enhancement
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
            Use AI to enhance your resume and get personalized suggestions.
          </p>
          <button className="flex items-center text-blue-600 hover:underline font-medium">
            Enhance Resume <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
