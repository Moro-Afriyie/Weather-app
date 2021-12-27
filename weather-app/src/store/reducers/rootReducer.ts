import { combineReducers } from "redux";
import { toggleSearchReducer } from "./toggleSearchReducer";

export const rootReducer = combineReducers({
  toggleSearch: toggleSearchReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;
