import { EventEmitter } from "events";
import Dispatcher from "../appDispatcher";
import actionTypes from "../Actions/actionTypes";

const CHANGE_EVENT = "change";
let _course = [];
class CourseStore extends EventEmitter {
  addListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getCourses() {
    return _course;
  }

  getCourseBySlug() {
    return _course.find((course) => course.slug === slug);
  }
}

const store = new CourseStore();

Dispatcher.register((action) => {
  switch (action.actionType) {
    case actionTypes.CREATE_COURSE:
      _course.push(action.course);
      store.emitChange();
      break;
    default:
    //nothing to do here
  }
});
export default store;
