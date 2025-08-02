import React, { useState, useEffect } from "react";
import {
  FaUpload,
  FaSearch,
  FaLightbulb,
  FaFileAlt,
  FaCheckCircle,
  FaTools,
  FaClipboardList,
  FaUserTie,
} from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const ResumeTool = () => {
  const [resumeText, setResumeText] = useState("");
  const [loading, setLoading] = useState(false);
  const [stage, setStage] = useState("idle");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (stage === "complete") {
      toast.success("Resume enhancement completed!");
    }
  }, [stage]);

  const handleEnhance = () => {
    setStage("understanding");
    setLoading(true);
    setSuggestions([]);

    setTimeout(() => {
      setStage("analyzing");
      setTimeout(() => {
        setStage("recommending");
        setSuggestions([
          "Add more measurable achievements",
          "Use strong action verbs",
          "Tailor your resume to the job role",
          "Quantify your experience wherever possible",
          "Use bullet points for clarity",
        ]);
        setLoading(false);
        setStage("complete");
      }, 1500);
    }, 1500);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      toast.success("PDF uploaded successfully (simulated)");
    } else {
      toast.error("Only PDF files are supported");
    }
  };

  const steps = [
    {
      stage: "understanding",
      icon: <FaSearch className="text-blue-500 text-2xl" />,
      title: "Understanding Content",
    },
    {
      stage: "analyzing",
      icon: <FaFileAlt className="text-yellow-500 text-2xl" />,
      title: "Analyzing Resume",
    },
    {
      stage: "recommending",
      icon: <FaLightbulb className="text-purple-500 text-2xl" />,
      title: "Recommending Improvements",
    },
    {
      stage: "complete",
      icon: <FaCheckCircle className="text-green-500 text-2xl" />,
      title: "Enhancement Complete",
    },
  ];

  const benefits = [
    {
      icon: <FaClipboardList className="text-indigo-500 text-xl" />,
      title: "Structured Feedback",
      desc: "Get detailed and categorized suggestions for improvement.",
    },
    {
      icon: <FaUserTie className="text-teal-500 text-xl" />,
      title: "Job-Focused Tips",
      desc: "Tailor your resume to match specific roles and industries.",
    },
    {
      icon: <FaTools className="text-orange-500 text-xl" />,
      title: "Easy Editing",
      desc: "Copy suggestions and edit your resume directly in the editor.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Resume Tool
            </h1>
            <p className="text-gray-600">
              Upload your resume or paste your content to get improvement
              suggestions.
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-col lg:flex-row gap-6">
          <div className="flex-1">
            <label className="flex items-center gap-2 cursor-pointer text-blue-600 hover:underline mb-4">
              <FaUpload /> Upload Resume (PDF)
              <input
                type="file"
                accept="application/pdf"
                onChange={handleFileUpload}
                className="hidden"
              />
            </label>

            <textarea
              rows="10"
              value={resumeText}
              onChange={(e) => setResumeText(e.target.value)}
              placeholder="Paste your resume content here..."
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <button
              onClick={handleEnhance}
              disabled={!resumeText.trim() || loading}
              className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
            >
              {loading ? "Enhancing..." : "Enhance Resume"}
            </button>
          </div>

          <div className="flex-1 bg-white shadow rounded-lg p-4 space-y-4">
            <h2 className="text-lg font-semibold text-gray-800">
              Why Use This Tool?
            </h2>
            {benefits.map((b, idx) => (
              <div key={idx} className="flex items-start gap-3">
                {b.icon}
                <div>
                  <h3 className="font-medium text-gray-800">{b.title}</h3>
                  <p className="text-sm text-gray-600">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {stage !== "idle" && (
          <div className="mt-8 bg-white shadow rounded-lg p-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Enhancement Progress:
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 p-3 rounded-lg border ${
                    stage === step.stage || stage === "complete"
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200"
                  }`}
                >
                  {step.icon}
                  <span className="text-gray-700 font-medium">
                    {step.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {suggestions.length > 0 && (
          <div className="mt-6 bg-white shadow rounded-lg p-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Suggestions:
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {suggestions.map((suggestion, index) => (
                <li key={index}>{suggestion}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeTool;
