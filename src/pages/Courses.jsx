import {
  FaLaptopCode,
  FaChartBar,
  FaPalette,
  FaBrain,
  FaCloud,
  FaShieldAlt,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import { CourseCard } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { fetchCourses } from "../redux/courses/coursesThunk";
import { setFilter } from "../redux/courses/coursesSlice";

const filterOptions = ["all", "active", "enrolled", "technical"];

const Courses = () => {
  const dispatch = useDispatch();
  const {
    data: coursesData,
    status,
    filter: currentFilter,
  } = useSelector((state) => state.courses);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCourses());
    }
  }, [dispatch, status]);

  const filteredCourses =
    coursesData?.filter((course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

  return (
    <div className="min-h-screen bg-gray-100 p-6 text-black">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">My Courses</h1>
        <p className="text-gray-600 mb-6">
          Manage and track all your enrolled courses
        </p>

        {/* Search bar and filters */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6 md:sticky fixed top-[4rem] md:top-0 left-6 right-4 w-[90%] bg-white p-3 rounded-xl z-10">
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
                onClick={() => dispatch(setFilter(option))}
                className={`px-4 py-2 rounded-md border text-sm ${
                  currentFilter === option
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-[5rem] md:mt-0">
          {status === "loading" && (
            <p className="text-center text-gray-500 col-span-full">
              Loading courses...
            </p>
          )}

          {status === "succeeded" && filteredCourses.length > 0 ? (
            filteredCourses.map((course, index) => (
              <CourseCard key={index} course={course} />
            ))
          ) : status === "succeeded" && filteredCourses.length === 0 ? (
            <p className="text-center text-gray-500 col-span-full">
              No courses found.
            </p>
          ) : status === "failed" ? (
            <p className="text-center text-red-500 col-span-full">
              Failed to load courses.
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Courses;
