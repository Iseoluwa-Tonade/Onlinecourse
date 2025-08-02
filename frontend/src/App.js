import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('/api/v1/courses/')
      .then(response => response.json())
      .then(data => setCourses(data))
      .catch(error => console.error('Error fetching courses:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Coursera Clone</h1>
      </header>
      <div className="course-list">
        <h2>Available Courses</h2>
        {courses.length > 0 ? (
          <ul>
            {courses.map(course => (
              <li key={course.id}>
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <p><em>Instructor: {course.instructor}</em></p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No courses available at the moment.</p>
        )}
      </div>
    </div>
  );
}

export default App;
