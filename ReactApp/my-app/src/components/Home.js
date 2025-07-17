import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem('accessToken');

  const courses = [
    {
      title: "JavaScript Essentials",
      description: "Master JavaScript from scratch",
      image: "https://via.placeholder.com/400x200.png?text=JavaScript+Essentials"
    },
    {
      title: "React for Beginners",
      description: "Build dynamic UIs with React",
      image: "https://via.placeholder.com/400x200.png?text=React+for+Beginners"
    },
    {
      title: "Node.js & Express",
      description: "Backend with Node and Express",
      image: "https://via.placeholder.com/400x200.png?text=Node+and+Express"
    }
  ];

  const handleTakeCourse = () => {
    if (!isAuthenticated) {
      alert("Please login to access this course.");
      navigate('/login');
    } else {
      navigate('/profile'); // or specific course route
    }
  };

  return (
    <>
      {/* Hero Section */}
      <header className="py-5 bg-light text-center">
        <div className="container">
          <h1 className="display-4 fw-bold text-dark">Welcome to E-Learning Hub</h1>
          <p className="lead text-muted">Upgrade your skills from anywhere, anytime.</p>
        </div>
      </header>

      {/* Courses Section */}
      <section className="container py-5">
        <h2 className="mb-4 text-center text-primary fw-bold">Popular Courses</h2>
        <div className="row">
          {courses.map((course, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card shadow-sm h-100 border-0">
                <img src={course.image} className="card-img-top" alt={course.title} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{course.title}</h5>
                  <p className="card-text">{course.description}</p>
                  <button onClick={handleTakeCourse} className="btn btn-outline-primary mt-auto">
                    Take Course
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-light py-4 text-center text-muted">
        © 2025 E-Learning Hub. All rights reserved.
      </footer>
    </>
  );
}

export default Home;
