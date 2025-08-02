import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import StudyReminderCard from "./StudyReminderCard";

const ParentDashboard = ({ reminders, assignmentData }) => {
  return (
    <div className="flex flex-wrap justify-between gap-6 p-4">
      <div className="w-full md:w-1/2 bg-white rounded-2xl shadow-md p-5 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-800">
            Study Reminders
          </h2>
          <button className="px-4 py-1.5 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition">
            + Add
          </button>
        </div>
        <div className="space-y-3">
          {reminders.map((reminder, idx) => (
            <StudyReminderCard key={idx} reminder={reminder} />
          ))}
        </div>
      </div>

      <div className="flex-1  bg-white rounded-2xl shadow-md p-2">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Assignment Submissions (This Month)
        </h2>
        <ResponsiveContainer height={300}>
          <LineChart data={assignmentData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="submissions"
              stroke="#2563eb"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ParentDashboard;
