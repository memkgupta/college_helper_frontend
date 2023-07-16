import { createSlice } from "@reduxjs/toolkit";
import { LOADING_PAPERS } from "../constants/paperconstant";

export const paperSlice = createSlice({
  name: "paper",
  initialState: {
    universities:["AKTU","IPU"],
    years:[2022,2021,2020,2019,2018],
    subjects:[{name:"BTECH-AS-3-SEM-MATHEMATICS-4-KAS302-2022",code:"KAS302"},{name:"BTECH-AS-3-SEM-COMMUNICATIONS-4-KAS301-2022",code:"KAS301"}],
  
    papers: [
        {   _id:'1',
        year:2022,
            university: "AKTU",
            logo: "https://aktu.ac.in/images/logo.png",
            exam_name: "BTECH CS 3 SEM",
            subject_name: "BTECH-AS-3-SEM-MATHEMATICS-4-KAS302-2022",
            subject_code:'KAS302',
            pdf_link:
              "https://www.aktuonline.com/btech/btech-as-3-sem-mathematics-4-kas302-2022.pdf",
          },
          { _id:'2',
          year:2021,
            university: "AKTU",
            logo: "https://aktu.ac.in/images/logo.png",
            exam_name: "BTECH CS 3 SEM",
            subject_name: "BTECH-AS-3-SEM-TECHNICAL-COMMUNICATION-KAS301-2022",
            subject_code:'KAS301',
    
            pdf_link:
              "https://www.aktuonline.com/btech/btech-as-3-sem-technical-communication-kas301-2022.pdf",
          }
    ],
    filteredPapers: [
        {
            university: "AKTU",
            logo: "https://upload.wikimedia.org/wikipedia/en/9/98/Dr._A.P.J._Abdul_Kalam_Technical_University_logo.png",
            exam_name: "BTECH CS 3 SEM",
            subject: "BTECH-AS-3-SEM-MATHEMATICS-4-KAS302-2022",
            subject_code:'KAS302',
            pdf_link:
              "https://www.aktuonline.com/btech/btech-as-3-sem-mathematics-4-kas302-2022.pdf",
              year:2022
          },
          {
            university: "AKTU",
            logo: "https://upload.wikimedia.org/wikipedia/en/9/98/Dr._A.P.J._Abdul_Kalam_Technical_University_logo.png",
            exam_name: "BTECH CS 3 SEM",
            subject_name: "BTECH-AS-3-SEM-TECHNICAL-COMMUNICATION-KAS301-2022",
            subject_code:'KAS301',
    
            pdf_link:
              "https://www.aktuonline.com/btech/btech-as-3-sem-technical-communication-kas301-2022.pdf",
              year:2021
          }
    ],
    status: LOADING_PAPERS,
  },
  reducers: {
    loadPapers(state, action) {
      state.papers = action.payload;
      state.filteredPapers = action.payload;
    },
    loadFilteredPapers(state,action){
      state.filteredPapers = action.payload;
    },
    setPapersStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { loadPapers, loadFilteredPapers,setPapersStatus } = paperSlice.actions;

export default paperSlice.reducer;
