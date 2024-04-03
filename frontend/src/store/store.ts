import { configureStore } from '@reduxjs/toolkit';
import appReducer from './slices/AppSlice.ts';
import inspectionFormReducer from './slices/InspectionFormSlice.ts';
import issueFormReducer from './slices/IssueFormSlice.ts';
import popUpReducer from './slices/PopUpSlice.ts';

export const store = configureStore({
  reducer: {
    app: appReducer,
    inspectionForm: inspectionFormReducer,
    issueForm: issueFormReducer,
    popUp: popUpReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
