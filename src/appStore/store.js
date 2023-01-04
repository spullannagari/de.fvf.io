import { configureStore } from "@reduxjs/toolkit";
import testCaseReducer from "../resultsTable/resultsSlice";

export default configureStore({
  reducer: {
    testCases: testCaseReducer,
  },
});
