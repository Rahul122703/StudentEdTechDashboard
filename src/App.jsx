import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { Sidebar, Topbar } from "./components";

import {
  Courses,
  Dashboard,
  Messages,
  Progress,
  ResumeTool,
  Settings,
} from "./pages";

const App = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex flex-col flex-grow">
        <Topbar />

        <main className="p-2 overflow-y-auto md:h-[42.8rem] rounded-lg">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/resume-tool" element={<ResumeTool />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/settings" element={<Settings />} />
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
