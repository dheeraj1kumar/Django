import React from 'react';
// import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  const courses = [
    {
      title: "JavaScript Essentials",
      description: "Basics to advanced JavaScript",
      progress: 70,
      image: "https://via.placeholder.com/150"
    },
    {
      title: "React for Beginners",
      description: "Component-based web apps",
      progress: 40,
      image: "https://via.placeholder.com/150"
    },
    {
      title: "UI/UX Design Basics",
      description: "Design intuitive experiences",
      progress: 90,
      image: "https://via.placeholder.com/150"
    },
  ];

  return (
    <div className="d-flex" id="homepage-wrapper">
      {/* Sidebar */}
      <div className="bg-dark text-white p-4 sidebar">
        <h4 className="mb-4">E-Learning Hub</h4>
        <ul className="nav flex-column">
          <li className="nav-item"><Link className="nav-link text-white" to="/">🏠 Dashboard</Link></li>
          <li className="nav-item"><Link className="nav-link text-white" to="/profile">👤 Profile</Link></li>
          <li className="nav-item"><Link className="nav-link text-white" to="/login">🔐 Login</Link></li>
          <li className="nav-item"><Link className="nav-link text-white" to="/register">📝 Register</Link></li>
        </ul>
      </div>

      {/* Main content */}
      <div className="flex-grow-1 p-5 main-content bg-light">
        <h2 className="mb-4">Welcome Back, Dheeraj 👋</h2>

        <div className="mb-5">
          <h4 className="mb-3">Continue Learning</h4>
          <div className="row g-4">
            {courses.map((course, idx) => (
              <div className="col-md-4" key={idx}>
                <div className="card shadow-sm h-100">
                  <img src={course.image} className="card-img-top" alt={course.title} />
                  <div className="card-body">
                    <h5 className="card-title">{course.title}</h5>
                    <p className="card-text">{course.description}</p>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: `${course.progress}%` }}
                      >
                        {course.progress}%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-3">Popular Categories</h4>
          <div className="row text-center">
            <div className="col-md-3 mb-4">
              <div className="category-card bg-primary text-white">📚 Programming</div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="category-card bg-success text-white">🎨 Design</div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="category-card bg-warning text-white">📈 Marketing</div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="category-card bg-danger text-white">🧠 Personal Growth</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
