import React from "react";

const UpcomingQuizCard = ({ quiz }) => {
  return (
    <div className="bg-white rounded-lg shadow p-3 space-y-1">
      <div className="text-blue-600 font-bold">{quiz.date}</div>
      <div className="font-medium">{quiz.title}</div>
      <div className="text-sm text-gray-600">{quiz.course}</div>
      <div className="text-xs text-gray-500">{quiz.time}</div>
    </div>
  );
};

export default UpcomingQuizCard;
