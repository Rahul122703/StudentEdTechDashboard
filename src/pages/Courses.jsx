import {
  FaLaptopCode,
  FaChartBar,
  FaPalette,
  FaBrain,
  FaCloud,
  FaShieldAlt,
} from "react-icons/fa";
import { useState } from "react";
import { CourseCard } from "../components";

// Original data with tags
const coursesData = [
  {
    title: "Web Development Fundamentals",
    instructor: "Engr. Zaib Ul Nissa",
    progress: 75,
    lessons: 12,
    hours: 24,
    color: "bg-green-500",
    icon: <FaLaptopCode size={50} className="text-white" />,
    tags: ["active", "technical"],
  },
  {
    title: "Data Science Essentials",
    instructor: "Engr. Faiz Nadeem Aalmani",
    progress: 45,
    lessons: 10,
    hours: 20,
    color: "bg-blue-500",
    icon: <FaChartBar size={50} className="text-white" />,
    tags: ["enrolled", "technical"],
  },
  {
    title: "UI/UX Design Principles",
    instructor: "Engr. Kainat Memon",
    progress: 60,
    lessons: 8,
    hours: 16,
    color: "bg-orange-500",
    icon: <FaPalette size={50} className="text-white" />,
    tags: ["active"],
  },
  {
    title: "Machine Learning Fundamentals",
    instructor: "TBA",
    progress: 0,
    lessons: 0,
    hours: 0,
    color: "bg-purple-600",
    icon: <FaBrain size={50} className="text-white" />,
    tags: ["technical"],
  },
  {
    title: "Advanced JavaScript",
    instructor: "Engr. Ayesha Khan",
    progress: 35,
    lessons: 14,
    hours: 22,
    color: "bg-yellow-500",
    icon: <FaLaptopCode size={50} className="text-white" />,
    tags: ["enrolled", "technical"],
  },
  {
    title: "Database Management Systems",
    instructor: "Dr. Aslam Shaikh",
    progress: 80,
    lessons: 15,
    hours: 30,
    color: "bg-red-500",
    icon: <FaChartBar size={50} className="text-white" />,
    tags: ["active", "technical"],
  },
  {
    title: "React JS Mastery",
    instructor: "Engr. Bilal Ahmed",
    progress: 50,
    lessons: 20,
    hours: 25,
    color: "bg-cyan-600",
    icon: <FaLaptopCode size={50} className="text-white" />,
    tags: ["active", "technical"],
  },
  {
    title: "Cloud Computing Basics",
    instructor: "Engr. Sara Malik",
    progress: 65,
    lessons: 10,
    hours: 18,
    color: "bg-indigo-500",
    icon: <FaCloud size={50} className="text-white" />,
    tags: ["technical"],
  },
  {
    title: "Cyber Security 101",
    instructor: "Dr. Imran Qureshi",
    progress: 20,
    lessons: 6,
    hours: 12,
    color: "bg-gray-700",
    icon: <FaShieldAlt size={50} className="text-white" />,
    tags: ["enrolled", "technical"],
  },
  {
    title: "Python for Beginners",
    instructor: "Engr. Hina Rizvi",
    progress: 90,
    lessons: 18,
    hours: 28,
    color: "bg-pink-500",
    icon: <FaLaptopCode size={50} className="text-white" />,
    tags: ["active", "technical"],
  },
];

const filterOptions = ["all", "active", "enrolled", "technical"];

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");

  const filteredCourses = coursesData.filter((course) => {
    const matchesSearch = course.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesFilter = filter === "all" || course.tags.includes(filter);

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gray-100 p-6 text-black">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">My Courses</h1>
        <p className="text-gray-600 mb-6">
          Manage and track all your enrolled courses
        </p>

        {/* Search bar and filters */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <input
            type="text"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-md shadow-sm"
          />

          <div className="flex gap-2">
            {filterOptions.map((option) => (
              <button
                key={option}
                onClick={() => setFilter(option)}
                className={`px-4 py-2 rounded-md border text-sm ${
                  filter === option
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-800 border-gray-300"
                }`}
              >
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course, index) => (
              <CourseCard key={index} course={course} />
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No courses found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Courses;
