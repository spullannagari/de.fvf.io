import { createSlice } from "@reduxjs/toolkit";
import testData from "../TestData/testData.json";

const initialState = {
  testData,
  selectedTestCase: {},
  isModalOpen: false,
};

export const testCaseSlice = createSlice({
  name: "testCases",
  initialState,
  reducers: {
    addTestCase: (state, action) => {
      const testCase = { ...action.payload, id: state.testData.length + 1 };
      state.testData = [...state.testData, testCase];
    },
    setSelectedTestCase: (state, action) => {
      state.selectedTestCase = action.payload;
    },
    setModalState: (state, action) => {
      state.isModalOpen = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTestCase, setSelectedTestCase, setModalState } =
  testCaseSlice.actions;
export const testCases = (state) => state.testCases.testData;
export const selectedTestCase = (state) => state.testCases.selectedTestCase;
export const modalState = (state) => state.testCases.isModalOpen;

export default testCaseSlice.reducer;
