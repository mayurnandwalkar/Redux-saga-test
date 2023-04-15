import * as types from "./actionTypes";

export const loadDataStart = () => ({
    type: types.LOAD_DATA_START,
});

export const loadDataSuccess = (data) => ({
    type: types.LOAD_DATA_SUCCESS,
    payload: data,
});
  
export const loadDataError = (error) => ({
    type: types.LOAD_DATA_ERROR,
    payload: error,
});

export const updateDataStart = (data) => ({
    type: types.UPDATE_DATA_START,
    payload:data
});

export const updateDataSuccess = (data) => ({
    type: types.UPDATE_DATA_SUCCESS,
    payload:data
})

export const updateDataError = (error) => ({
    type: types.UPDATE_DATA_ERROR,
    payload: error,
});