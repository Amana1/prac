import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CoursesList(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author ID</th>
          <th>Category</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.courses.map((courses) => {
          return (
            <tr key={courses.id}>
              <td>
                <Link to={`/course/${courses.slug}`}>{courses.title}</Link>
              </td>
              <td>
                {props.authors.length === 0
                  ? courses.authorId
                  : props.authors[courses.authorId - 1].name}
              </td>
              <td>{courses.category}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => props.onDel(courses.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

CoursesList.propTypes = {
  onDel: PropTypes.func.isRequired,
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      authorId: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
};

/*CoursesList.defaultProps = {
  courses: [],
};*/

export default CoursesList;
