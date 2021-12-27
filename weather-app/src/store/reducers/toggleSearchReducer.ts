import { TOGGLE_SEARCH } from "../types/toggleSearchType";

interface Action {
  type: typeof TOGGLE_SEARCH;
}

const initialState = { toggleSearch: false };

export const toggleSearchReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case TOGGLE_SEARCH:
      return {
        ...state,
        toggleTheme: !state.toggleSearch,
      };
    default:
      return state;
  }
};
