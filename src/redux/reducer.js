import * as types from "./actionTypes";

const initialState = {
  data: [],
  loading: false
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_DATA_START:
    case types.UPDATE_DATA_START:
      return {
        ...state,
        loading: true,
      };
    case types.LOAD_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case types.LOAD_DATA_ERROR:
    case types.UPDATE_DATA_SUCCESS:
      state.data.map(e => e.id === 1 ? e.name = action.payload : e);
      return {
        ...state,
        loading: false,
      };
    case types.UPDATE_DATA_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default usersReducer;