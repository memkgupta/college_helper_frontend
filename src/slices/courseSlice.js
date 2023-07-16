import { createSlice } from "@reduxjs/toolkit";
import { LOADING_COURSES } from "../constants/courseconstant";

const coursesSlice = createSlice({
  name: "courses",
  initialState: {
    subjects:["Compiler Design","Engineering Mathematics","C++","JAVA"],
    categories:["Programming","CORE CS"],
filteredCourses:[      {
  _id: 1,
  subject:'Compiler Design',
  categ:'CORE CS',
  thumbnail:'https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseFeatureImage/24f09887-9bea-45d8-b7ac-2884efeb1e30_CF.png?w=240&dpr=1.3',
  name: "Compelete Engineering Mathematics By SK Sir",
  duration: "1200 min",
  lectures: 20,
  source: "SK Sir",
  source_link: "source Link",
},
{
  _id: 4,
  subject:'Engineering Mathematics',
  categ:'CORE CS',
  thumbnail:'https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseFeatureImage/24f09887-9bea-45d8-b7ac-2884efeb1e30_CF.png?w=240&dpr=1.3',
  name: "Compelete Engineering Mathematics By SK Sir",
  duration: "1200 min",
  lectures: 20,
  source: "SK Sir",
  source_link: "source Link",
},
{
  _id: 2,
  subject:'C++',
  categ:'Programming',
  thumbnail:'https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseFeatureImage/24f09887-9bea-45d8-b7ac-2884efeb1e30_CF.png?w=240&dpr=1.3',
  name: "Compelete C++ By MK Sir",
  duration: "1200 min",
  lectures: 20,
  source: "MK Sir",
  source_link: "source Link",
},
{
  _id: 3,
  subject:'JAVA',
  categ:'Programming',
  thumbnail:'https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseFeatureImage/24f09887-9bea-45d8-b7ac-2884efeb1e30_CF.png?w=240&dpr=1.3',
  name: "Compelete JAVA By kunal Sir",
  duration: "1200 min",
  lectures: 20,
  source: "Kunal Sir",
  source_link: "source Link",
},],
    courses: [
      {
        _id: 1,
        subject:'Compiler Design',
        categ:'CORE CS',
        thumbnail:'https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseFeatureImage/24f09887-9bea-45d8-b7ac-2884efeb1e30_CF.png?w=240&dpr=1.3',
        name: "Compelete Engineering Mathematics By SK Sir",
        duration: "1200 min",
        lectures: 20,
        source: "SK Sir",
        source_link: "source Link",
      },
      {
        _id: 4,
        subject:'Engineering Mathematics',
        categ:'CORE CS',
        thumbnail:'https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseFeatureImage/24f09887-9bea-45d8-b7ac-2884efeb1e30_CF.png?w=240&dpr=1.3',
        name: "Compelete Engineering Mathematics By SK Sir",
        duration: "1200 min",
        lectures: 20,
        source: "SK Sir",
        source_link: "source Link",
      },
      {
        _id: 2,
        subject:'C++',
        categ:'Programming',
        thumbnail:'https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseFeatureImage/24f09887-9bea-45d8-b7ac-2884efeb1e30_CF.png?w=240&dpr=1.3',
        name: "Compelete C++ By MK Sir",
        duration: "1200 min",
        lectures: 20,
        source: "MK Sir",
        source_link: "source Link",
      },
      {
        _id: 3,
        subject:'JAVA',
        categ:'Programming',
        thumbnail:'https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseFeatureImage/24f09887-9bea-45d8-b7ac-2884efeb1e30_CF.png?w=240&dpr=1.3',
        name: "Compelete JAVA By kunal Sir",
        duration: "1200 min",
        lectures: 20,
        source: "Kunal Sir",
        source_link: "source Link",
      },
    ],
    status: LOADING_COURSES,
  },
  reducers: {
    
    loadCourses(state, action) {
      state.courses = action.payload;
      state.filteredCourses = action.payload;
    },
    loadFilteredCourse(state,action){state.filteredCourses =action.payload},
    setCoursesStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { loadCourses, setCoursesStatus,loadFilteredCourse } = coursesSlice.actions;
export default coursesSlice.reducer;
