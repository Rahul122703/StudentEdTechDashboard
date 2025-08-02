import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#8884d8", "#82ca9d", "#ffc658"];

const courseStats = [
  { name: "React", enrolled: 50, finished: 30 },
  { name: "JavaScript", enrolled: 70, finished: 40 },
];

const activeCourses = [
  { name: "React" },
  { name: "JavaScript" },
  { name: "TypeScript" },
];

const totalEnrolled = courseStats.reduce((sum, c) => sum + c.enrolled, 0);
const totalFinished = courseStats.reduce((sum, c) => sum + c.finished, 0);
const totalActive = activeCourses.length;

const pieData = [
  { name: "Enrolled", value: totalEnrolled },
  { name: "Finished", value: totalFinished },
  { name: "Active", value: totalActive },
];

const CourseStatusPieChart = () => {
  return (
    <div className="bg-white rounded-xl shadow p-2 max-w-xl mx-auto">
      <h2 className="text-lg font-semibold mb-4 text-center">
        Courses Overview
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={pieData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {pieData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CourseStatusPieChart;
