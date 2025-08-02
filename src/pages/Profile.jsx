import React from "react";
import {
  FaUserGraduate,
  FaBookOpen,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaCalendarAlt,
} from "react-icons/fa";

const Profile = () => {
  const user = {
    name: "Rahul Sharma",
    email: "rsharma122703@gmail.com",
    phone: "+91 1234567891",
    address: "Mumbai, Maharashtra, India",
    dob: "2003-12-27",
    enrollmentNo: "BEIT2021001",
    branch: "Information Technology",
    semester: "7th",
    gpa: "8.6 CGPA",
    skills: ["React.js", "Node.js", "Python", "SQL", "Figma"],
    interests: ["Web Development", "Machine Learning", "UI/UX Design"],
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <div className="flex items-center gap-4 border-b pb-6 mb-6">
          <div className="w-20 h-20 rounded-full bg-blue-200 flex items-center justify-center text-3xl font-bold text-white">
            {user.name[0]}
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
            <p className="text-gray-500">
              {user.branch} - {user.semester}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Personal Info
            </h3>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-center gap-2">
                <FaEnvelope /> {user.email}
              </li>
              <li className="flex items-center gap-2">
                <FaPhoneAlt /> {user.phone}
              </li>
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt /> {user.address}
              </li>
              <li className="flex items-center gap-2">
                <FaCalendarAlt /> DOB: {user.dob}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Academic Info
            </h3>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-center gap-2">
                <FaUserGraduate /> Enrollment No: {user.enrollmentNo}
              </li>
              <li className="flex items-center gap-2">
                <FaBookOpen /> Branch: {user.branch}
              </li>
              <li className="flex items-center gap-2">
                <FaBookOpen /> Semester: {user.semester}
              </li>
              <li className="flex items-center gap-2">
                <FaBookOpen /> GPA: {user.gpa}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {user.skills.map((skill, idx) => (
              <span
                key={idx}
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Interests
          </h3>
          <div className="flex flex-wrap gap-2">
            {user.interests.map((interest, idx) => (
              <span
                key={idx}
                className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
