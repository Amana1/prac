import React from "react";

function CourseForm(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <div className="field">
          <input
            id="title"
            type="text"
            name="title"
            className="form-control"
            value={props.course.title}
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="title">Author</label>
        <div className="field">
          <select
            id="author"
            name="authorId"
            onChange={props.onChange}
            className="form-control"
            value={props.course.authorId || ''}
          >
            <option value="" />
            <option value="1">Aman</option>
            <option value="2">Rohit</option>
          </select>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="category">Category</label>
        <div className="field">
          <input
            id="category"
            type="text"
            name="category"
            className="form-control"
            value={props.course.category}
          />
        </div>
      </div>
      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

export default CourseForm;
