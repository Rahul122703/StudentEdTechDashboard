import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const COLORS = ["#6366F1", "#E5E7EB"];

const lectureAttendanceData = [
  { course: "DS", total: 40, attended: 36 },
  { course: "DBMS", total: 35, attended: 30 },
  { course: "COA", total: 25, attended: 20 },
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
    <div className="w-full grid md:grid-cols-3 gap-6">
      {courseAttendanceCharts.map((chart, i) => (
        <div key={i} className="bg-white p-4 rounded-xl shadow-md">
          <h3 className="text-center text-base font-semibold mb-2 text-gray-800">
            {chart.course}
          </h3>
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
                  labelLine={false}
                  label={({ name, percent }) =>
                    `${name}: ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {chart.data.map((entry, idx) => (
                    <Cell
                      key={`cell-${i}-${idx}`}
                      fill={COLORS[idx % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Legend
                  layout="horizontal"
                  verticalAlign="bottom"
                  align="center"
                  iconType="circle"
                  wrapperStyle={{ fontSize: "12px", marginTop: "10px" }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AttendenceStats;
