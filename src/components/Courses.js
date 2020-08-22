import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";
import CourseList from "./CoursesList";
import { Link } from "react-router-dom";
import courseStore from "../stores/courseStore";
import {loadCourse} from "../Actions/courseActions";

function CoursesPage() {
  const [courses, setCourses] = useState(courseStore.getCourses);
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    /*getCourses().then((_courses) => setCourses(_courses));
      getAuthors().then((_authors) => {
          debugger
          setAuthors(_authors)
      });*/
    courseStore.addChangeListener(onChange);
    if(courseStore.getCourses().length === 0) loadCourse()
      return () => courseStore.removeChangeListener(onChange)
  }, []);

  function onChange() {
    setCourses(courseStore.getCourses());
  }
  return (
    <>
      <h2>Courses</h2>
      <Link to="/course" className="btn btn-primary">
        Add Course
      </Link>
      <CourseList courses={courses} authors={authors} />
    </>
  );
}

export default CoursesPage;
