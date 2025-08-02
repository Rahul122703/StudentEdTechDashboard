import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Layout and common components
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

// Pages
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
      {/* Sidebar on the left */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex flex-col flex-grow">
        <Topbar />

        {/* Page content */}
        <main className="p-4">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/resume-tool" element={<ResumeTool />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/settings" element={<Settings />} />
            {/* Optional: fallback route */}
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
