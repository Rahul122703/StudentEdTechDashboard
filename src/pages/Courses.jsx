import {
  FaLaptopCode,
  FaChartBar,
  FaPalette,
  FaBrain,
  FaCloud,
  FaShieldAlt,
} from "react-icons/fa";
import { CourseCard } from "../components";
const courses = [
  {
    title: "Web Development Fundamentals",
    instructor: "Engr. Zaib Ul Nissa",
    progress: 75,
    lessons: 12,
    hours: 24,
    color: "bg-green-500",
    icon: <FaLaptopCode size={50} className="text-white" />,
  },
  {
    title: "Data Science Essentials",
    instructor: "Engr. Faiz Nadeem Aalmani",
    progress: 45,
    lessons: 10,
    hours: 20,
    color: "bg-blue-500",
    icon: <FaChartBar size={50} className="text-white" />,
  },
  {
    title: "UI/UX Design Principles",
    instructor: "Engr. Kainat Memon",
    progress: 60,
    lessons: 8,
    hours: 16,
    color: "bg-orange-500",
    icon: <FaPalette size={50} className="text-white" />,
  },
  {
    title: "Machine Learning Fundamentals",
    instructor: "TBA",
    progress: 0,
    lessons: 0,
    hours: 0,
    color: "bg-purple-600",
    icon: <FaBrain size={50} className="text-white" />,
  },
  {
    title: "Advanced JavaScript",
    instructor: "Engr. Ayesha Khan",
    progress: 35,
    lessons: 14,
    hours: 22,
    color: "bg-yellow-500",
    icon: <FaLaptopCode size={50} className="text-white" />,
  },
  {
    title: "Database Management Systems",
    instructor: "Dr. Aslam Shaikh",
    progress: 80,
    lessons: 15,
    hours: 30,
    color: "bg-red-500",
    icon: <FaChartBar size={50} className="text-white" />,
  },
  {
    title: "React JS Mastery",
    instructor: "Engr. Bilal Ahmed",
    progress: 50,
    lessons: 20,
    hours: 25,
    color: "bg-cyan-600",
    icon: <FaLaptopCode size={50} className="text-white" />,
  },
  {
    title: "Cloud Computing Basics",
    instructor: "Engr. Sara Malik",
    progress: 65,
    lessons: 10,
    hours: 18,
    color: "bg-indigo-500",
    icon: <FaCloud size={50} className="text-white" />,
  },
  {
    title: "Cyber Security 101",
    instructor: "Dr. Imran Qureshi",
    progress: 20,
    lessons: 6,
    hours: 12,
    color: "bg-gray-700",
    icon: <FaShieldAlt size={50} className="text-white" />,
  },
  {
    title: "Python for Beginners",
    instructor: "Engr. Hina Rizvi",
    progress: 90,
    lessons: 18,
    hours: 28,
    color: "bg-pink-500",
    icon: <FaLaptopCode size={50} className="text-white" />,
  },
];

const Courses = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 text-black">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">My Courses</h1>
        <p className="text-gray-600 mb-6">
          Manage and track all your enrolled courses
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
