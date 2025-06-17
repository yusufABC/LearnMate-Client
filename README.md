🎓 **LearnMate** — Course Management Platform  
A full-stack web application where students can discover, enroll in, and manage online courses, while instructors can create and control their own course offerings. Built with modern tools, authentication, real-time logic, and responsive design.

---

🔗 **Live Website**  
Visit LearnMate: https://assignment-11-auth-2e9b8.web.app/ 
_Server: https://assignment-11-server-sigma-one.vercel.app/

---
_git-Server-repo:https://github.com/Programming-Hero-Web-Course4/b11a11-server-side-yusufABC
_git client-repo: https://github.com/Programming-Hero-Web-Course4/b11a10-client-side-yusufABC/tree/main

🚀 **Core Features**

### 🔐 Authentication & Authorization
- Firebase-based authentication (Email/Password + Google & GitHub login).
- JWT issued for each login to authorize protected backend routes.
- Redirects to intended private page after login.
- Register with name, photo URL, email, password, and confirm password.
- Password validation: 8+ chars, 1 uppercase, 1 lowercase, 1 number, 1 special.

### 📚 Course Discovery & Enrollment
- Browse latest 6 courses on the homepage.
- Explore most popular (top enrolled) courses in a separate section.
- View full course details on a dedicated details page.
- Enroll button dynamically checks seat availability and enrollment state.
- Only logged-in users can enroll; others see a disabled button with a message.

### 📝 Add, Manage & Edit Courses (For Instructors)
- Authenticated users can:
  - Add new courses (title, description, image URL, duration).
  - View and manage their own courses (edit/delete).
  - Confirm modal before deletion.
  - Edit form pre-filled with existing data.

### 🎓 My Enrolled Courses
- Logged-in users can view all their enrolled courses.
- Option to "Remove Enrollment" to free up a slot.
- Prevent enrolling in more than **3 courses** at a time.
- Show current number of **remaining seats** per course.

---

🎨 **User Experience & Design**

- Fully responsive layout for mobile, tablet, and desktop.
- Dynamic title updates based on current route (React Helmet).
- Dark/light theme toggle across the entire site.
- Toast notifications for feedback on CRUD operations.
- Loading spinners during data fetching (React Suspense + loaders).
- Custom 404 Not Found page.
- Smooth animations using:
  - Framer Motion (hero/banner)
  - React Awesome Reveal
  - React Slick (sliding banners)

---

🛠️ **Tech Stack**

**Frontend:**
- React.js
- React Router DOM
- Tailwind CSS + DaisyUI
- Axios
- Firebase Auth
- React Toastify
- React Helmet Async
- Framer Motion
- React Slick

**Backend:**
- Express.js
- MongoDB
- Node.js
- JSON Web Token (JWT)
- Firebase Admin SDK
- Dotenv for environment variables
- CORS


📢 **Updates & Challenge Features**

✅ JWT-secured login & registration (email/password + social login)  
✅ Enrollment cap: Max 3 courses per user  
✅ Limited seats per course with real-time availability check  
✅ Toggle Enroll → Remove Enroll from Course Details  
✅ Add/Edit/Delete only available to the owner  
✅ Route-based title updates  
✅ Responsive & Accessible UI  
✅ Protected Route Redirect Logic  
✅ Firebase Auth + JWT Verification Middleware  
✅ Toasts, Spinners, Animations, and Dynamic Content  
✅ Hosting on Netlify (Client) & Vercel (Server)

---

👨‍💻 **Author**  
**Assignment-11 Category 20**  
By Yusuf Abdullah Sami — Submitted for the Programming Hero Assignment Series, Batch 11.

---
