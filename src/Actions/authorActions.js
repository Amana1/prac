import dispatcher from "../appDispatcher";
import * as courseApi from "../api/authorApi";
import actionTypes from "./actionTypes";

export function loadAuthors() {
  return courseApi.getAuthors().then((authors) => {
    // Hey Dispatcher, go tell all the stores that a course was just created.
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_AUTHORS,
        authors,
    });
  });
}
