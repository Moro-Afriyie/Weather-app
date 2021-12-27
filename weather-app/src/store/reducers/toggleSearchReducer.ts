import { TOGGLE_SEARCH } from "../types/toggleSearchType";

interface Action {
  type: typeof TOGGLE_SEARCH;
}

const initialState = { toggleTheme: false };

export const toggleSearchReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case TOGGLE_SEARCH:
      return {
        ...state,
        toggleTheme: !state.toggleTheme,
      };
    default:
      return state;
  }
};
