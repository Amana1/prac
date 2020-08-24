import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";
import CourseList from "./CoursesList";
import { Link } from "react-router-dom";
import courseStore from "../stores/courseStore";
import authorStore from "../stores/authorStore";
import { loadCourse, deleteCourse } from "../Actions/courseActions";
import { loadAuthors } from "../Actions/authorActions";
import { toast } from "react-toastify";

function CoursesPage() {
  const [courses, setCourses] = useState(courseStore.getCourses);
  const [authors, setAuthors] = useState(authorStore.getAuthors);

  useEffect(() => {
    /*getCourses().then((_courses) => setCourses(_courses));
      getAuthors().then((_authors) => {
          debugger
          setAuthors(_authors)
      });*/
    courseStore.addChangeListener(onChange);
    authorStore.addChangeListener(onChange);
    if (courseStore.getCourses().length === 0) {
      loadCourse();
        loadAuthors();
    }
    return () => {
      courseStore.removeChangeListener(onChange);
      authorStore.removeChangeListener(onChange);
    };
  }, []);

  function onChange() {
    setCourses(courseStore.getCourses());
    setAuthors(authorStore.getAuthors());
  }

  function handleDeleteCourse(id) {
    deleteCourse(id);
    toast.success("Course Deleted");
  }

  return (
    <>
      <h2>Courses</h2>
      <Link to="/course" className="btn btn-primary">
        Add Course
      </Link>
      <CourseList
        courses={courses}
        authors={authors}
        onDel={handleDeleteCourse}
      />
    </>
  );
}

export default CoursesPage;
