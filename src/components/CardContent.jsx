import React from "react";

const CardContent = ({ children }) => {
  return (
    <div className="mt-2 text-sm text-gray-700 dark:text-gray-300">
      {children}
    </div>
  );
};

export default CardContent;
