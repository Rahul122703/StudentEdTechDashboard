import React from "react";
import {
  EnrolledCourseCard,
  UpcomingQuizCard,
  StudyReminderCard,
} from "../components";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const Dashboard = () => {
  const courses = [
    {
      title: "Web Development Fundamentals",
      instructor: "Engr. Zaib Ul Nissa",
      progress: 75,
      icon: "💻",
    },
    {
      title: "Data Science Essentials",
      instructor: "Engr. Faiz Nadeem Aalmani",
      progress: 45,
      icon: "📊",
    },
    {
      title: "UI/UX Design Principles",
      instructor: "Engr. Kainat Memon",
      progress: 60,
      icon: "🎨",
    },
  ];

  const quizzes = [
    {
      title: "JavaScript Fundamentals",
      course: "Web Development Fundamentals",
      date: "15 Jun",
      time: "10:00 AM - 11:30 AM",
    },
    {
      title: "Data Visualization",
      course: "Data Science Essentials",
      date: "18 Jun",
      time: "2:00 PM - 3:30 PM",
    },
    {
      title: "Color Theory",
      course: "UI/UX Design Principles",
      date: "22 Jun",
      time: "11:00 AM - 12:30 PM",
    },
  ];

  const reminders = [
    {
      time: "08:00 AM",
      title: "Review JavaScript Concepts",
      repeat: "Daily",
    },
  ];

  const progressStats = [
    { label: "Courses in Progress", value: 4 },
    { label: "Completed Lessons", value: 12 },
    { label: "Upcoming Quizzes", value: 3 },
    { label: "Average Score", value: 85 },
  ];

  const pieData = [
    { name: "Completed", value: 64 },
    { name: "Remaining", value: 36 },
  ];

  const COLORS = ["#6366F1", "#E5E7EB"];

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <main className="flex-1 p-6 space-y-6">
        {/* Greeting + Weekly Goal */}
        <div className="bg-white rounded-xl shadow p-6">
          <h1 className="text-xl font-bold text-indigo-600 mb-2">
            Welcome, Rahul!
          </h1>
          <p className="text-sm text-gray-600 mb-3">
            You have completed 64% of your weekly goal.
          </p>
          <div className="w-full bg-gray-200 h-3 rounded-full">
            <div
              className="bg-indigo-600 h-3 rounded-full"
              style={{ width: "64%" }}
            />
          </div>
        </div>

        {/* Course Completion Pie Chart */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Weekly Goal Completion
          </h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Pie Chart */}
            <div className="w-full md:w-1/2 h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                    label
                  >
                    {pieData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Progress Stats */}
            <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
              {progressStats.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-indigo-50 text-center py-4 rounded-lg shadow-sm"
                >
                  <div className="text-2xl font-bold text-indigo-600">
                    {item.value}
                  </div>
                  <div className="text-sm text-gray-700 mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enrolled Courses + Quizzes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold">Enrolled Courses</h2>
              <a href="#" className="text-sm text-blue-600">
                View All
              </a>
            </div>
            {courses.map((course, idx) => (
              <EnrolledCourseCard key={idx} course={course} />
            ))}
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold">Upcoming Quizzes</h2>
              <a href="#" className="text-sm text-blue-600">
                View All
              </a>
            </div>
            {quizzes.map((quiz, idx) => (
              <UpcomingQuizCard key={idx} quiz={quiz} />
            ))}
          </div>
        </div>

        {/* Study Reminders */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold">Study Reminders</h2>
            <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm">
              + Add
            </button>
          </div>
          {reminders.map((reminder, idx) => (
            <StudyReminderCard key={idx} reminder={reminder} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
