import React, { useState, useEffect } from "react";
import CourseForm from "./CourseForm";
import courseStore from "../stores/courseStore";
import * as courseActions from "../Actions/courseActions";
import { toast } from "react-toastify";
//import PageNotFound from "./pageNotFound";

const ManageCoursePage = (props) => {
  //const [slugValid, setSlugValid] = useState({ valid: false });
  const [errors, setErrors] = useState({});
  const [courses, setCourses] = useState(courseStore.getCourses());
  const [course, setCourse] = useState({
    id: null,
    title: "",
    slug: "",
    authorId: null,
    category: "",
  });

  useEffect(() => {
    courseStore.addChangeListener(onChange);
    let slug = props.match.params.slug;
    if (courses.length === 0) {
      courseActions.loadCourse();
    } else if (slug) {
      setCourse(courseStore.getCourseBySlug(slug));
    }
  }, [courses.length, props.match.params.slug]);

  /*useEffect(() => {
    let slug = props.match.params.slug;
    if (slug) {
      debugger;
      for (let i = 0; i < courses.length; i++) {
        if (courses[i].slug === slug || slug === "")
          setSlugValid({ valid: true });
      }
    }
  }, [props.match.params.slug]);*/

  function onChange() {
    setCourses(courseStore.getCourses());
  }
  function handleChange({ target }) {
    setCourse({
      ...course,
      [target.name]: target.value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!formIsValid()) return;
    courseActions.saveCourse(course).then(() => {
      props.history.push("/courses");
      toast.success("Course Added");
    });
  }
  function formIsValid() {
    const _errors = {};
    if (!course.title) _errors.title = "Title is Required";
    if (!course.authorId) _errors.authorId = "Author ID is Required";
    if (!course.category) _errors.category = "Category is Required";
    setErrors(_errors);
    return Object.keys(_errors).length === 0;
  }
  return (
    <>
      <h2>Manage Course</h2>
      <CourseForm
        errors={errors}
        course={course}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default ManageCoursePage;
