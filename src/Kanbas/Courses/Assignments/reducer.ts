import { createSlice } from "@reduxjs/toolkit";
// import db from "../../Database";

const initialState = {
  assignments: [],
  assignment: {
    title: "",
    week: "",
    dueDate: "",
    points: "",
    course: "",
  },
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },
    addAssignment: (state: any, action: any) => {
      state.assignments.push(action.payload);
    },
    deleteAssignment: (state:any, action:any) => {
      state.assignments = state.assignments.filter(
        (assignment:any) => assignment._id !== action.payload
      );
    },
    updateAssignment: (state:any, action:any) => {
      state.assignments = state.assignments.map((assignment:any) =>
        assignment._id === action.payload._id ? action.payload : assignment
      );
    },
    setAssignment: (state, action) => {
      state.assignment = action.payload;
    },
  },
});

export const {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment, setAssignments
} = assignmentsSlice.actions;
export default assignmentsSlice.reducer;