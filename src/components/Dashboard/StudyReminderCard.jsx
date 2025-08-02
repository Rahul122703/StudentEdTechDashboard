import React from "react";
import { Pencil, Trash2 } from "lucide-react";

const StudyReminderCard = ({ reminder }) => {
  return (
    <div className="bg-white shadow rounded-lg p-3 flex items-center justify-between">
      <div>
        <div className="text-sm text-blue-600 font-bold">{reminder.time}</div>
        <div className="text-sm">{reminder.title}</div>
        <div className="text-xs text-gray-500">{reminder.repeat}</div>
      </div>
      <div className="flex gap-2 text-gray-500">
        <Pencil size={16} className="cursor-pointer" />
        <Trash2 size={16} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default StudyReminderCard;
