import { useEffect } from "react";
import {
  EnrolledCourseCard,
  UpcomingQuizCard,
  AttendenceStats,
  ParentDashboard,
} from "../components";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import { NavLink } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { fetchCourses } from ".././redux/courses/coursesThunk";

const reminders = [
  { subject: "Math", time: "5:00 PM" },
  { subject: "Science", time: "7:30 PM" },
];

const assignmentData = [
  { day: "1", submissions: 5 },
  { day: "2", submissions: 3 },
  { day: "3", submissions: 8 },
  { day: "4", submissions: 2 },
  { day: "5", submissions: 6 },
  { day: "6", submissions: 7 },
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

const Dashboard = () => {
  const dispatch = useDispatch();
  const { data: coursesData, status } = useSelector((state) => state.courses);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCourses());
    }
  }, [dispatch, status]);

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <main className="flex-1 p-6 space-y-6">
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

        <div className="bg-white rounded-xl shadow p-6 h-auto">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Weekly Goal Completion
          </h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 justify-center h-auto">
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
                  <Legend
                    verticalAlign="bottom"
                    align="center"
                    iconType="circle"
                    layout="horizontal"
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="border border-none w-full md:max-w-[42rem] overflow-auto md:mt-4">
              <AttendenceStats />
            </div>
            <div className="w-full md:w-1/2 grid grid-cols-2 gap-4 ">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="max-h-[30rem] md:col-span-2 space-y-4   overflow-y-auto rounded-xl flex flex-col border border-white  p-3 overflow-clip">
            <div className="flex justify-between items-center sticky top-0 bg-white p-2 shadow-md rounded-lg">
              <h2 className="text-lg font-bold">Recent Courses</h2>
              <NavLink to="/courses">View all</NavLink>
            </div>
            <div>
              {coursesData
                .filter((current) => current.recent)
                .map((course, idx) => (
                  <EnrolledCourseCard key={idx} course={course} />
                ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold">Upcoming Quizzes</h2>
            </div>
            {quizzes.map((quiz, idx) => (
              <UpcomingQuizCard key={idx} quiz={quiz} />
            ))}
          </div>
        </div>

        <ParentDashboard
          reminders={reminders}
          assignmentData={assignmentData}
        />
      </main>
    </div>
  );
};

export default Dashboard;
