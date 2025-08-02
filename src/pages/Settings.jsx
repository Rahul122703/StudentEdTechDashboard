import React, { useState } from "react";
import Switch from "react-switch";

const Settings = () => {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    assignmentReminders: true,
    discussionNotifications: false,
    courseRecommendations: true,
    autoSaveProgress: true,
    showGradesPublicly: false,
  });

  const handleToggle = (key) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Settings</h2>

      {/* Notification Preferences */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h3 className="text-lg font-semibold mb-4">Notification Preferences</h3>

        {[
          {
            label: "Email Notifications",
            key: "emailNotifications",
            desc: "Receive email notifications for course updates",
          },
          {
            label: "Assignment Reminders",
            key: "assignmentReminders",
            desc: "Receive reminders for upcoming assignments",
          },
          {
            label: "Discussion Notifications",
            key: "discussionNotifications",
            desc: "Receive notifications for discussion replies",
          },
          {
            label: "Course Recommendations",
            key: "courseRecommendations",
            desc: "Receive recommendations for new courses",
          },
        ].map((item) => (
          <div
            key={item.key}
            className="flex items-center justify-between py-3 border-b"
          >
            <div>
              <p className="font-medium">{item.label}</p>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
            <Switch
              onChange={() => handleToggle(item.key)}
              checked={settings[item.key]}
              onColor="#3b82f6"
              offColor="#d1d5db"
              uncheckedIcon={false}
              checkedIcon={false}
              height={20}
              width={40}
            />
          </div>
        ))}
      </div>

      {/* Other Preferences */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Other Preferences</h3>

        {[
          {
            label: "Auto Save Progress",
            key: "autoSaveProgress",
            desc: "Automatically save your course progress",
          },
          {
            label: "Show Grades Publicly",
            key: "showGradesPublicly",
            desc: "Allow others to see your grades",
          },
        ].map((item) => (
          <div
            key={item.key}
            className="flex items-center justify-between py-3 border-b"
          >
            <div>
              <p className="font-medium">{item.label}</p>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
            <Switch
              onChange={() => handleToggle(item.key)}
              checked={settings[item.key]}
              onColor="#3b82f6"
              offColor="#d1d5db"
              uncheckedIcon={false}
              checkedIcon={false}
              height={20}
              width={40}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Settings;
