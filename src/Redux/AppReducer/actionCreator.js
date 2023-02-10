import axios from "axios"
import * as types from "./actionType"

const getDOGDetailsLoading = (payload) => {
    return {
      type: types.GET_DOG_DETAILS_LOADING,
      payload,
    };
  };
  const getDOGDetailsSuccess = (payload) => {
    return {
      type: types.GET_DOG_DETAILS_SUCCESS,
      payload,
    };
  };
  const getDOGDetailsError = (payload) => {
    return {
      type: types.GET_DOG_DETAILS_ERROR,
      payload,
    };
  };
  
  const getDOGDetailsAPI = (payload) => (dispatch) => {
    dispatch(getDOGDetailsLoading(payload));
    axios
      .get(`https://mock-4-json-api.onrender.com/dogs?_page=${payload}&_limit=10`)
      .then((r) => dispatch(getDOGDetailsSuccess(r.data)))
      .catch((e) => dispatch(getDOGDetailsError(e.data)));
  };
  
  // ##########################################
  const addDOGDetailsLoading = (payload) => {
    return {
      type: types.DELETE_DOG_DETAILS_LOADING,
      payload,
    };
  };
  const addDOGDetailsSuccess = (payload) => {
    return {
      type: types.DELETE_DOG_DETAILS_SUCCESS,
      payload,
    };
  };
  const addDOGDetailsError = (payload) => {
    return {
      type: types.DELETE_DOG_DETAILS_ERROR,
      payload,
    };
  };
  
  const addDOGDetailsAPI = (payload) => (dispatch) => {
    dispatch(addDOGDetailsLoading(payload));
    axios
      .post(`https://mock-4-json-api.onrender.com/dogs`, payload)
      .then((r) => {
        dispatch(addDOGDetailsSuccess(r.data));
      })
      .then(() => {
        dispatch(getDOGDetailsAPI());
      })
      .catch((e) => dispatch(addDOGDetailsError(e.data)));
  };
  // ##########################################
  const updateDOGDetailsLoading = (payload) => {
    return {
      type: types.UPDATE_DOG_DETAILS_LOADING,
      payload,
    };
  };
  const updateDOGDetailsSuccess = (payload) => {
    return {
      type: types.UPDATE_DOG_DETAILS_SUCCESS,
      payload,
    };
  };
  const updateDOGDetailsError = (payload) => {
    return {
      type: types.UPDATE_DOG_DETAILS_ERROR,
      payload,
    };
  };
  
  const updateDOGDetailsAPI = (payload) => (dispatch) => {
    dispatch(updateDOGDetailsLoading(payload));
    axios
      .patch(
        `https://mock-4-json-api.onrender.com/dogs/${payload.id}`,
        payload.persone
      )
      .then((r) => {
        dispatch(updateDOGDetailsSuccess(r.data));
      })
      .then(() => {
        dispatch(getDOGDetailsAPI());
      })
      .catch((e) => dispatch(updateDOGDetailsError(e.data)));
  };
  
  // ##########################################
  const deleteDOGDetailsLoading = (payload) => {
    return {
      type: types.DELETE_DOG_DETAILS_LOADING,
      payload,
    };
  };
  const deleteDOGDetailsSuccess = (payload) => {
    return {
      type: types.DELETE_DOG_DETAILS_SUCCESS,
      payload,
    };
  };
  const deleteDOGDetailsError = (payload) => {
    return {
      type: types.DELETE_DOG_DETAILS_ERROR,
      payload,
    };
  };
  
  const deleteDOGDetailsAPI = (payload) => (dispatch) => {
    dispatch(deleteDOGDetailsLoading(payload));
    axios
      .delete(`https://mock-4-json-api.onrender.com/dogs/${payload}`)
      .then((r) => {
        dispatch(deleteDOGDetailsSuccess(r.data));
      })
      .then(() => {
        dispatch(getDOGDetailsAPI());
      })
      .catch((e) => dispatch(deleteDOGDetailsError(e.data)));
  };

  const FilterDOGDetailsAPI = (payload) => (dispatch) => {
    dispatch(getDOGDetailsLoading(payload));
    axios
      .get(payload)
      
      .then((r) => dispatch(getDOGDetailsSuccess(r.data)))
      .catch((e) => dispatch(getDOGDetailsError(e.data)));
  };
  
  export {
    getDOGDetailsAPI,
    addDOGDetailsAPI,
    updateDOGDetailsAPI,
    deleteDOGDetailsAPI,
    FilterDOGDetailsAPI
  };
  