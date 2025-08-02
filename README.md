# Student Dashboard

## Live Demo

Try it out here: https://student-ed-tech-dashboard.vercel.app

## Steps to Install the Project

1. Clone the project
   ```bash
   git clone https://github.com/Rahul122703/StudentEdTechDashboard.git
   ```
2. Navigate into the project directory
   ```bash
   cd StudentEdTechDashboard
   ```
3. Install dependencies
   ```bash
   npm install
   ```
4. Run the development server
   ```bash
   npm run dev
   ```

## Tech Stack

- ReactVite
- Tailwind CSS
- Redux Toolkit
- Recharts
- Axios

## Screenshots

| Desktop Preview                  | Mobile Preview                  |
| -------------------------------- | ------------------------------- |
| ![Desktop 1](screenshots/d1.png) | ![Mobile 1](screenshots/m1.png) |
| ![Desktop 2](screenshots/d2.png) | ![Mobile 2](screenshots/m2.png) |
| ![Desktop 3](screenshots/d3.png) | ![Mobile 3](screenshots/m3.png) |

## Project Information

This is a responsive student dashboard with the following features:

1. **Home**

   - Contains an overall summary of the student's data (courses completed, progress, notifications, etc.)

2. **My Courses**

   - View all enrolled courses
   - Filter by status: All, Active, Enrolled, Technical
   - Search by course title

3. **Resume Tool**

   - Upload a PDF resume or paste text
   - “Enhance Resume” button shows dummy suggestions
   - Step-by-step progress indicator (Understanding → Analyzing → Recommending → Complete)

4. **Progress**

   - Displays course progress cards
   - Consistency heatmap similar to GitHub contribution graph

5. **Messages**

   - View messages from Admin, Instructors, Support
   - Mark as Read, Delete Selected, Collapse/Expand, Reply
   - Pagination for long message lists

6. **Settings**

   - Toggle switches to adjust dashboard preferences
   - Example toggles: Email Notifications, Assignment Reminders, Auto Save Progress, Show Grades Publicly

7. **Profile**
   - Shows use information such as name,grade,skills.
