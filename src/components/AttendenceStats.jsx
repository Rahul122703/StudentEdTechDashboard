import React from "react";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const COLORS = ["#6366F1", "#E5E7EB"];

const lectureAttendanceData = [
  {
    course: "DS",
    total: 40,
    attended: 36,
  },
  {
    course: "DBMS",
    total: 35,
    attended: 30,
  },
  {
    course: "COA",
    total: 25,
    attended: 20,
  },
];

const courseAttendanceCharts = lectureAttendanceData.map((courseData) => ({
  course: courseData.course,
  data: [
    { name: "Attended", value: courseData.attended },
    { name: "Missed", value: courseData.total - courseData.attended },
  ],
}));

const AttendenceStats = () => {
  return (
    <div className="w-full mt-8 grid md:grid-cols-3 gap-6">
      {courseAttendanceCharts.map((chart, i) => (
        <div key={i} className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-center font-semibold mb-2">{chart.course}</h3>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chart.data}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={50}
                  outerRadius={70}
                  paddingAngle={4}
                  label
                >
                  {chart.data.map((entry, idx) => (
                    <Cell
                      key={`cell-${i}-${idx}`}
                      fill={COLORS[idx % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AttendenceStats;
