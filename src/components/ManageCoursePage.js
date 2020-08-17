import React, { useState } from "react";
import CourseForm from "./CourseForm";

const ManageCoursePage = (props) => {
  const [course, setCourse] = useState({
    id: null,
    title: "",
    slug: "",
    authorId: null,
    category: "",
  });

  function handleTitleChange(e) {
      debugger
  }
  return (
    <>
      <h2>Manage Course</h2>
      {props.match.params.slug}
      <CourseForm course={course} onTitleChange={handleTitleChange} />
    </>
  );
};

export default ManageCoursePage;
