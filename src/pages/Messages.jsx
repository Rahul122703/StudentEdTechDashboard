import React, { useEffect, useState } from "react";
import {
  FaEnvelope,
  FaUserCircle,
  FaCheckCircle,
  FaReply,
  FaTrashAlt,
} from "react-icons/fa";
import toast from "react-hot-toast";

const messagesData = [
  {
    id: 1,
    sender: "Admin",
    subject: "Welcome to the Course Portal",
    content:
      "We’re excited to have you on board! Start exploring your dashboard.",
    isRead: false,
  },
  {
    id: 2,
    sender: "Instructor Zaib Ul Nissa",
    subject: "Assignment Deadline Extended",
    content:
      "The deadline for your web development assignment has been extended by 2 days.",
    isRead: false,
  },
  {
    id: 3,
    sender: "Support",
    subject: "Need Help?",
    content: "Feel free to reach out to support anytime from the help section.",
    isRead: true,
  },
  {
    id: 4,
    sender: "Course Admin",
    subject: "New Module Available",
    content: "A new module on React Hooks is now available in your course.",
    isRead: false,
  },
  {
    id: 5,
    sender: "Instructor John Doe",
    subject: "Live Session Reminder",
    content: "Don’t forget about the live coding session tomorrow at 10:00 AM.",
    isRead: true,
  },
  {
    id: 6,
    sender: "Support",
    subject: "Scheduled Maintenance",
    content: "The platform will be down for maintenance this weekend.",
    isRead: false,
  },
  {
    id: 7,
    sender: "Admin",
    subject: "New Feature Added",
    content: "You can now track your progress with detailed analytics.",
    isRead: true,
  },
  {
    id: 8,
    sender: "Instructor Zaib Ul Nissa",
    subject: "Project Guidelines Updated",
    content: "Please review the updated project submission guidelines.",
    isRead: false,
  },
  {
    id: 9,
    sender: "Admin",
    subject: "Community Forum Launched",
    content:
      "Join discussions and connect with peers on the new community forum.",
    isRead: false,
  },
  {
    id: 10,
    sender: "Support",
    subject: "Feedback Requested",
    content: "Let us know how we’re doing by filling out a short survey.",
    isRead: true,
  },
  {
    id: 11,
    sender: "Instructor John Doe",
    subject: "Extra Practice Material",
    content:
      "Additional exercises on React have been added to the resources section.",
    isRead: true,
  },
  {
    id: 12,
    sender: "Course Admin",
    subject: "Leaderboard Update",
    content: "Check out the latest top performers on the course leaderboard!",
    isRead: false,
  },
  {
    id: 13,
    sender: "Admin",
    subject: "Course Completion Certificate",
    content:
      "Certificates will be available for download after course completion.",
    isRead: true,
  },
  {
    id: 14,
    sender: "Instructor Zaib Ul Nissa",
    subject: "Assignment Feedback Released",
    content: "Feedback for your last assignment is now available.",
    isRead: false,
  },
  {
    id: 15,
    sender: "Support",
    subject: "Password Reset Confirmation",
    content:
      "Your password was successfully changed. Contact support if not done by you.",
    isRead: true,
  },
];

const Messages = () => {
  const [messages, setMessages] = useState(messagesData);

  const [selectedMessages, setSelectedMessages] = useState([]);
  const [expandedId, setExpandedId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const messagesPerPage = 5;

  const newAdminMessage = {
    id: 1,
    sender: "Admin",
    subject: "Welcome to the Course Portal",
    content:
      "We’re excited to have you on board! Start exploring your dashboard.",
    isRead: false,
  };

  useEffect(() => {
    const isAdminMsgPresent = messages.some(
      (msg) => msg.id === newAdminMessage.id
    );
    if (!isAdminMsgPresent) {
      setMessages((prev) => [newAdminMessage, ...prev]);
      toast.success("📩 New message from Admin received");
    }
  }, []);

  const markAsRead = (id) => {
    setMessages(
      messages.map((msg) => (msg.id === id ? { ...msg, isRead: true } : msg))
    );
  };

  const handleSelect = (id) => {
    setSelectedMessages((prev) =>
      prev.includes(id) ? prev.filter((mid) => mid !== id) : [...prev, id]
    );
  };

  const markAllAsRead = () => {
    setMessages(messages.map((msg) => ({ ...msg, isRead: true })));
    toast.success("All messages marked as read");
  };

  const deleteSelected = () => {
    setMessages(messages.filter((msg) => !selectedMessages.includes(msg.id)));
    setSelectedMessages([]);
    toast.success("Selected messages deleted");
  };

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const totalPages = Math.ceil(messages.length / messagesPerPage);
  const paginatedMessages = messages.slice(
    (currentPage - 1) * messagesPerPage,
    currentPage * messagesPerPage
  );

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between mb-4">
          <button
            onClick={markAllAsRead}
            className="bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded-lg"
          >
            Mark All as Read
          </button>
          <button
            onClick={deleteSelected}
            className="bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-4 py-2 rounded-lg"
          >
            Delete Selected
          </button>
        </div>

        <div className="space-y-4">
          {paginatedMessages.map((msg) => (
            <div
              key={msg.id}
              className={`bg-white shadow p-5 rounded-xl border-l-4 transition hover:shadow-md flex flex-col gap-3 ${
                msg.isRead ? "border-green-400" : "border-blue-500"
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    checked={selectedMessages.includes(msg.id)}
                    onChange={() => handleSelect(msg.id)}
                    className="mt-1"
                  />
                  <FaUserCircle className="text-2xl text-blue-500 mt-1" />
                  <div>
                    <h3 className="text-base font-semibold text-gray-800">
                      {msg.sender}
                    </h3>
                    <p className="text-sm text-gray-700 font-medium">
                      {msg.subject}
                    </p>
                    {expandedId === msg.id && (
                      <p className="text-sm text-gray-600 mt-1">
                        {msg.content}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex gap-2 mt-2 md:mt-0">
                  <button
                    onClick={() => toggleExpand(msg.id)}
                    className="text-xs text-blue-600 underline"
                  >
                    {expandedId === msg.id ? "Collapse" : "Expand"}
                  </button>
                  {!msg.isRead ? (
                    <button
                      onClick={() => markAsRead(msg.id)}
                      className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-3 py-1 rounded-md"
                    >
                      Mark as Read
                    </button>
                  ) : (
                    <span className="flex items-center text-green-600 text-sm font-medium">
                      <FaCheckCircle className="mr-1" /> Read
                    </span>
                  )}
                  <button className="text-blue-600 hover:text-blue-800">
                    <FaReply />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-6">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className="px-3 py-1 bg-gray-300 hover:bg-gray-400 rounded"
          >
            Prev
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === i + 1 ? "bg-blue-600 text-white" : "bg-gray-200"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="px-3 py-1 bg-gray-300 hover:bg-gray-400 rounded"
          >
            Next
          </button>
        </div>

        <p className="mt-6 text-center text-gray-500 text-sm">
          Stay updated with your instructors and admin team.
        </p>
      </div>
    </div>
  );
};

export default Messages;
