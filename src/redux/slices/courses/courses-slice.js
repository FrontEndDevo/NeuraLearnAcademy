import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  publicCourses: [],
  coursesDependOnSubject: [],
  userData: null,
  subjectCourses: null,
  instructorCourses: null,
  createCourseData: null,
  updateCourseData: null,
  detailCourse: null,
  sectionData: null,
  sectionsData: [],
  updateSectionData: null,
  sectionContent: [],
  getsectionContent: {},
  lectureDeleted: null,
  lectureUpdated: null,
};

const subjectCourseReducer = (state, action) => {
  return {
    ...state,
    subjectCourses: action.payload,
  };
};
const subjectCourseFailReducer = (state) => {
  return {
    ...state,
    subjectCourses: null,
  };
};

const getInstructorCoursesReducer = (state, action) => {
  return {
    ...state,
    instructorCourses: action.payload,
  };
};
const getInstructorCoursesFailReducer = (state) => {
  return {
    ...state,
    instructorCourses: null,
  };
};
const updateUserDataReducer = (state, action) => {
  return {
    ...state,
    userData: action.payload,
  };
};
const updateUserDataFailReducer = (state) => {
  return {
    ...state,
    userData: null,
  };
};
const detailCourseReducer = (state, action) => {
  return {
    ...state,
    detailCourse: action.payload,
  };
};
const detailCourseFailReducer = (state) => {
  return {
    ...state,
    detailCourse: null,
  };
};
const createSectionFailReducer = (state) => {
  return {
    ...state,
    sectionData: null,
  };
};
const getSectionsReducer = (state, action) => {
  return {
    ...state,
    sectionsData: action.payload,
  };
};
const getSectionsFailReducer = (state) => {
  return {
    ...state,
    sectionsData: [],
  };
};
const updateSectionReducer = (state, action) => {
  return {
    ...state,
    updateSectionData: action.payload,
  };
};
const updateSectionFailReducer = (state) => {
  return {
    ...state,
    updateSectionData: null,
  };
};
const createContentReducer = (state, action) => {
  return {
    ...state,
    sectionContent: action.payload,
  };
};
const createContentFailReducer = (state) => {
  return {
    ...state,
    sectionContent: [],
  };
};
const getSectionContentReducer = (state = initialState, action) => {
  const { slug, content } = action.payload;
  return {
    ...state,
    getsectionContent: {
      ...state.getsectionContent,
      [slug]: [...content],
    },
  };
};

const getSectionContentFailReducer = (state = initialState, action) => {
  const { slug } = action.payload;
  return {
    ...state,
    getsectionContent: {
      ...state.getsectionContent,
      [slug]: [],
    },
  };
};
const deleteLectureReducer = (state, action) => {
  return {
    ...state,
    lectureDeleted: action.payload,
  };
};
const deleteLectureFailReducer = (state) => {
  return {
    ...state,
    lectureDeleted: null,
  };
};
const updateLectureReducer = (state, action) => {
  return {
    ...state,
    lectureUpdated: action.payload,
  };
};
const updateLectureFailReducer = (state) => {
  return {
    ...state,
    lectureUpdated: null,
  };
};

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    GETSUBJECTCOURSES_SUCCESS: subjectCourseReducer,
    GETSUBJECTCOURSES_FAIL: subjectCourseFailReducer,
    GETINSTRUCTORCOURSES_SUCCESS: getInstructorCoursesReducer,
    GETINSTRUCTORCOURSES_FAIL: getInstructorCoursesFailReducer,
    UPDATEUSERDATA_SUCCESS: updateUserDataReducer,
    UPDATEUSERDATA_FAIL: updateUserDataFailReducer,
    DETAILCOURSE_SUCCESS: detailCourseReducer,
    DETAILCOURSE_FAIL: detailCourseFailReducer,
    CREATESECTION_FAIL: createSectionFailReducer,
    GETSECTIONS_SUCCESS: getSectionsReducer,
    GETSECTIONS_FAIL: getSectionsFailReducer,
    UPDATESECTION_SUCCESS: updateSectionReducer,
    UPDATESECTION_FAIL: updateSectionFailReducer,
    CREATECONTENT_SUCCESS: createContentReducer,
    CREATECONTENT_FAIL: createContentFailReducer,
    GETCONTENTS_SUCCESS: getSectionContentReducer,
    GETCONTENTS_FAIL: getSectionContentFailReducer,
    DELETELECTURE_SUCCESS: deleteLectureReducer,
    DELETELECTURE_FAIL: deleteLectureFailReducer,
    UPDATELECTURE_SUCCESS: updateLectureReducer,
    UPDATELECTURE_FAIL: updateLectureFailReducer,
    setPublicCourses(state, action) {
      state.publicCourses = action.payload;
    },
    setCoursesDependOnSubject(state, action) {
      state.coursesDependOnSubject = action.payload;
    },
  },
});

export const {
  GETSUBJECTCOURSES_SUCCESS,
  GETSUBJECTCOURSES_FAIL,
  GETINSTRUCTORCOURSES_SUCCESS,
  GETINSTRUCTORCOURSES_FAIL,
  UPDATEUSERDATA_SUCCESS,
  UPDATEUSERDATA_FAIL,
  CREATECOURSE_SUCCESS,
  CREATECOURSE_FAIL,
  UPDATECOURSE_SUCCESS,
  UPDATECOURSE_FAIL,
  DETAILCOURSE_SUCCESS,
  DETAILCOURSE_FAIL,
  CREATESECTION_FAIL,
  GETSECTIONS_SUCCESS,
  GETSECTIONS_FAIL,
  UPDATESECTION_SUCCESS,
  UPDATESECTION_FAIL,
  CREATECONTENT_SUCCESS,
  CREATECONTENT_FAIL,
  GETCONTENTS_SUCCESS,
  GETCONTENTS_FAIL,
  DELETELECTURE_SUCCESS,
  DELETELECTURE_FAIL,
  UPDATELECTURE_SUCCESS,
  UPDATELECTURE_FAIL,
  setPublicCourses,
  setCoursesDependOnSubject,
} = courseSlice.actions;

export default courseSlice.reducer;
