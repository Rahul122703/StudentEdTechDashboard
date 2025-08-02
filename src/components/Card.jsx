import React from "react";

const Card = ({ children }) => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-md dark:border-gray-700 dark:bg-gray-800">
      {children}
    </div>
  );
};
export default Card;
