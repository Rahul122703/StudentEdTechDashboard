import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { Sidebar, Topbar } from "./components";
import { Toaster } from "react-hot-toast";
import {
  Courses,
  Dashboard,
  Messages,
  Progress,
  ResumeTool,
  Settings,
  Profile,
} from "./pages";

const App = () => {
  return (
    <div className="flex min-h-screen bg-blue-900 rounded-tl-2xl rounded-bl-2xl">
      <Sidebar />

      <div className="flex flex-col flex-grow">
        <Topbar />
        <main className="overflow-y-auto md:h-[42rem] rounded-2xl">
          <Toaster position="top-center" />
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/resume-tool" element={<ResumeTool />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<Profile />} />
            <Route
              path="*"
              element={<h1 className="text-2xl">404 - Page Not Found</h1>}
            />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;
