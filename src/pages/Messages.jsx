import React, { useEffect, useState } from "react";
import {
  FaEnvelope,
  FaUserCircle,
  FaCheckCircle,
  FaReply,
} from "react-icons/fa";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { fetchmessages } from "../redux/messages/messagesThunk";
import { setFilteredMessages } from "../redux/messages/messagesSlice";

const Messages = () => {
  const dispatch = useDispatch();
  const { allMessagesData, filterMessageData, status, error } = useSelector(
    (state) => state.messages
  );

  const [selectedMessages, setSelectedMessages] = useState([]);
  const [expandedId, setExpandedId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const messagesPerPage = 5;

  useEffect(() => {
    dispatch(fetchmessages());
  }, [dispatch]);

  useEffect(() => {
    if (status === "succeeded") {
      const isAdminMsgPresent = allMessagesData.some((msg) => msg.id === 1);
      if (!isAdminMsgPresent) {
        toast.success("📩 New message from Admin received");
      }
      dispatch(setFilteredMessages(allMessagesData));
    } else if (status === "failed") {
      toast.error("Failed to fetch messages");
    }
  }, [status, allMessagesData, dispatch]);

  const markAsRead = (id) => {
    const updated = filterMessageData.map((msg) =>
      msg.id === id ? { ...msg, isRead: true } : msg
    );
    dispatch(setFilteredMessages(updated));
  };

  const markAllAsRead = () => {
    const updated = filterMessageData.map((msg) => ({ ...msg, isRead: true }));
    dispatch(setFilteredMessages(updated));
    toast.success("All messages marked as read");
  };

  const deleteSelected = () => {
    const updated = filterMessageData.filter(
      (msg) => !selectedMessages.includes(msg.id)
    );
    dispatch(setFilteredMessages(updated));
    setSelectedMessages([]);
    toast.success("Selected messages deleted");
  };

  const handleSelect = (id) => {
    setSelectedMessages((prev) =>
      prev.includes(id) ? prev.filter((mid) => mid !== id) : [...prev, id]
    );
  };

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const totalPages = Math.ceil(filterMessageData.length / messagesPerPage);
  const paginatedMessages = filterMessageData.slice(
    (currentPage - 1) * messagesPerPage,
    currentPage * messagesPerPage
  );

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-gray-100 py-10 px-4 text-center text-gray-600">
        Loading messages...
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div className="min-h-screen bg-gray-100 py-10 px-4 text-center text-red-600">
        Error fetching messages: {error}
      </div>
    );
  }

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
          {paginatedMessages.length === 0 ? (
            <p className="text-center text-gray-600">No messages to display.</p>
          ) : (
            paginatedMessages.map((msg) => (
              <div
                key={msg.id}
                className={`bg-white shadow p-4 sm:p-5 rounded-xl border-l-4 transition hover:shadow-md flex flex-col gap-3 ${
                  msg.isRead ? "border-green-400" : "border-blue-500"
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                  <div className="flex flex-col sm:flex-row gap-3 sm:items-start">
                    <div className="flex gap-2 items-start">
                      <input
                        type="checkbox"
                        checked={selectedMessages.includes(msg.id)}
                        onChange={() => handleSelect(msg.id)}
                        className="mt-1"
                      />
                      <FaUserCircle className="text-2xl text-blue-500 mt-1" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-semibold text-gray-800">
                        {msg.sender}
                      </h3>
                      <p className="text-sm text-gray-700 font-medium">
                        {msg.subject}
                      </p>
                      {expandedId === msg.id && (
                        <p className="text-sm text-gray-600 mt-1 break-words">
                          {msg.content}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 items-start sm:items-center">
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
            ))
          )}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-6">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
              className="px-3 py-1 bg-gray-300 hover:bg-gray-400 rounded disabled:opacity-50"
            >
              Prev
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 rounded ${
                  currentPage === i + 1
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className="px-3 py-1 bg-gray-300 hover:bg-gray-400 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}

        <p className="mt-6 text-center text-gray-500 text-sm">
          Stay updated with your instructors and admin team.
        </p>
      </div>
    </div>
  );
};

export default Messages;
