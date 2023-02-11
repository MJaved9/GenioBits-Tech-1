import * as types from "./actionType";

const initialState = {
    users: {
      loading: false,
      error: false,
    },
    data: [],
  };
  
  export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case types.GET_MEAL_DETAILS_LOADING:
        return {
          ...state,
          users: {
            loading: true,
            error: false,
          },
        };
      case types.GET_MEAL_DETAILS_SUCCESS:
        return {
          ...state,
          users: {
            loading: false,
            error: false,
          },
          data: [...payload],
        };
      case types.GET_MEAL_DETAILS_ERROR:
        return {
          ...state,
          users: {
            loading: false,
            error: true,
          },
        };
      case types.DELETE_MEAL_DETAILS_LOADING:
        return {
          ...state,
          users: {
            loading: true,
            error: false,
          },
        };
      case types.DELETE_MEAL_DETAILS_SUCCESS:
        return {
          ...state,
          users: {
            loading: false,
            error: false,
          },
        };
      case types.DELETE_MEAL_DETAILS_ERROR:
        return {
          ...state,
          users: {
            loading: false,
            error: true,
          },
        };
      case types.ADD_MEAL_DETAILS_LOADING:
        return {
          ...state,
          users: {
            loading: true,
            error: false,
          },
        };
      case types.ADD_MEAL_DETAILS_SUCCESS:
        return {
          ...state,
          users: {
            loading: false,
            error: false,
          },
        };
      case types.ADD_MEAL_DETAILS_ERROR:
        return {
          ...state,
          users: {
            loading: false,
            error: true,
          },
        };
      case types.UPDATE_MEAL_DETAILS_LOADING:
        return {
          ...state,
          users: {
            loading: true,
            error: false,
          },
        };
      case types.UPDATE_MEAL_DETAILS_SUCCESS:
        return {
          ...state,
          users: {
            loading: false,
            error: false,
          },
        };
      case types.UPDATE_MEAL_DETAILS_ERROR:
        return {
          ...state,
          users: {
            loading: false,
            error: true,
          },
        };
      default:
        return state;
    }
  };
  
