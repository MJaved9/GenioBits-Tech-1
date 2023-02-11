import axios from "axios"
import * as types from "./actionType"

const getMEALDetailsLoading = (payload) => {
    return {
      type: types.GET_MEAL_DETAILS_LOADING,
      payload,
    };
  };
  const getMEALDetailsSuccess = (payload) => {
    return {
      type: types.GET_MEAL_DETAILS_SUCCESS,
      payload,
    };
  };
  const getMEALDetailsError = (payload) => {
    return {
      type: types.GET_MEAL_DETAILS_ERROR,
      payload,
    };
  };
  
  const getMEALDetailsAPI = (payload) => (dispatch) => {
    dispatch(getMEALDetailsLoading(payload));
    axios
      .get(` https://note-mock-14.onrender.com/meals?_page=${payload}&_limit=10`)
      .then((r) => dispatch(getMEALDetailsSuccess(r.data)))
      .catch((e) => dispatch(getMEALDetailsError(e.data)));
  };
  
  // ##########################################
  const addMEALDetailsLoading = (payload) => {
    return {
      type: types.DELETE_MEAL_DETAILS_LOADING,
      payload,
    };
  };
  const addMEALDetailsSuccess = (payload) => {
    return {
      type: types.DELETE_MEAL_DETAILS_SUCCESS,
      payload,
    };
  };
  const addMEALDetailsError = (payload) => {
    return {
      type: types.DELETE_MEAL_DETAILS_ERROR,
      payload,
    };
  };
  
  const addMEALDetailsAPI = (payload) => (dispatch) => {
    dispatch(addMEALDetailsLoading(payload));
    axios
      .post(` https://note-mock-14.onrender.com/meals`, payload)
      .then((r) => {
        dispatch(addMEALDetailsSuccess(r.data));
      })
      .then(() => {
        dispatch(getMEALDetailsAPI());
      })
      .catch((e) => dispatch(addMEALDetailsError(e.data)));
  };
  // ##########################################
  const updateMEALDetailsLoading = (payload) => {
    return {
      type: types.UPDATE_MEAL_DETAILS_LOADING,
      payload,
    };
  };
  const updateMEALDetailsSuccess = (payload) => {
    return {
      type: types.UPDATE_MEAL_DETAILS_SUCCESS,
      payload,
    };
  };
  const updateMEALDetailsError = (payload) => {
    return {
      type: types.UPDATE_MEAL_DETAILS_ERROR,
      payload,
    };
  };
  
  const updateMEALDetailsAPI = (payload) => (dispatch) => {
    dispatch(updateMEALDetailsLoading(payload));
    axios
      .patch(
        ` https://note-mock-14.onrender.com/meals/${payload.id}`,
        payload.persone
      )
      .then((r) => {
        dispatch(updateMEALDetailsSuccess(r.data));
      })
      .then(() => {
        dispatch(getMEALDetailsAPI());
      })
      .catch((e) => dispatch(updateMEALDetailsError(e.data)));
  };
  
  // ##########################################
  const deleteMEALDetailsLoading = (payload) => {
    return {
      type: types.DELETE_MEAL_DETAILS_LOADING,
      payload,
    };
  };
  const deleteMEALDetailsSuccess = (payload) => {
    return {
      type: types.DELETE_MEAL_DETAILS_SUCCESS,
      payload,
    };
  };
  const deleteMEALDetailsError = (payload) => {
    return {
      type: types.DELETE_MEAL_DETAILS_ERROR,
      payload,
    };
  };
  
  const deleteMEALDetailsAPI = (payload) => (dispatch) => {
    dispatch(deleteMEALDetailsLoading(payload));
    axios
      .delete(` https://note-mock-14.onrender.com/meals/${payload}`)
      .then((r) => {
        dispatch(deleteMEALDetailsSuccess(r.data));
      })
      .then(() => {
        dispatch(getMEALDetailsAPI());
      })
      .catch((e) => dispatch(deleteMEALDetailsError(e.data)));
  };

  const FilterMEALDetailsAPI = (payload) => (dispatch) => {
    dispatch(getMEALDetailsLoading(payload));
    axios
      .get(payload)
      
      .then((r) => dispatch(getMEALDetailsSuccess(r.data)))
      .catch((e) => dispatch(getMEALDetailsError(e.data)));
  };
  
  export {
    getMEALDetailsAPI,
    addMEALDetailsAPI,
    updateMEALDetailsAPI,
    deleteMEALDetailsAPI,
    FilterMEALDetailsAPI
  };
  