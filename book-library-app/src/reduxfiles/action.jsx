import axios from "axios";
import {
  LOGIN,
  USER_REGISTER,
  ADD_BOOK_FAILURE,
  ADD_BOOK_REQUEST,
  ADD_BOOK_SUCCESS,
  FETCH_BOOKS_FAILURE,
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
  UPDATE_BOOK_FAILURE,
  UPDATE_BOOK_REQUEST,
  UPDATE_BOOK_SUCCESS,
  MY_BOOKS_REQUEST,
  MY_BOOKS_SUCCESS,
  MY_BOOKS_FAILURE,
} from "./actionType";
import { toaster } from "../components/ui/toaster";

export const userRegister = (url, payload) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(url, payload);
      if (res.status === 200) {
        dispatch({ type: USER_REGISTER });
        toaster.create({
          title: res.data.message,
          duration: 1500,
          type: "success",
        });
        return Promise.resolve();
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        toaster.create({
          title: error.response.data.message,
          duration: 1500,
          type: "error",
        });
      } else {
        console.log(error.message);
      }
      return Promise.reject(error);
    }
  };
};

export const userLogin = (url, payload) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(url, payload);
      if (res.status === 200) {
        dispatch({ type: LOGIN, payload: res.data });
        localStorage.setItem(
          "auth",
          JSON.stringify({
            isLogged: true,
            token: res.data.token,
            email: res.data.email,
          })
        );
        toaster.create({
          title: res.data.message,
          duration: 1500,
          type: "success",
        });
        return Promise.resolve();
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        toaster.create({
          title: error.response.data.message,
          duration: 1500,
          type: "error",
        });
      } else if (error.response && error.response.status === 401) {
        toaster.create({
          title: error.response.data.message,
          duration: 1500,
          type: "error",
        });
      } else {
        console.log(error.message);
      }
      return Promise.reject(error);
    }
  };
};

export const fetchBooks = (url) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_BOOKS_REQUEST });
    try {
      const res = await axios.get(url);
      if (res.status === 200) {
        dispatch({ type: FETCH_BOOKS_SUCCESS, payload: res.data.books });
      }
    } catch (error) {
      dispatch({ type: FETCH_BOOKS_FAILURE, payload: error.message });
      console.log(error.message);
    }
  };
};

export const fetchMyBooks = (url, token) => {
  return async (dispatch) => {
    dispatch({ type: MY_BOOKS_REQUEST });
    try {
      const res = await axios.get(url, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.status === 200) {
        dispatch({ type: MY_BOOKS_SUCCESS, payload: res.data.mybooks });
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        dispatch({ type: MY_BOOKS_FAILURE, payload: error.response.message });
      } else {
        dispatch({ type: MY_BOOKS_FAILURE, payload: error.message });
        console.log(error.message);
      }
    }
  };
};

export const addBook = (url, token) => {
  return async (dispatch) => {
    dispatch({ type: ADD_BOOK_REQUEST });
    try {
      const res = await axios.post(url, null, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.status === 200) {
        dispatch({ type: ADD_BOOK_SUCCESS });
        toaster.create({
          title: res.data.message,
          duration: 1500,
          type: "success",
        });
      }
    } catch (error) {
      dispatch({ type: ADD_BOOK_FAILURE, payload: error.message });
      console.log(error.message);
    }
  };
};

export const updateBook = (url, payload, token) => {
  return async (dispatch) => {
    dispatch({ type: UPDATE_BOOK_REQUEST });
    try {
      const res = await axios.patch(url, payload, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.status === 200) {
        dispatch({ type: UPDATE_BOOK_SUCCESS });
        toaster.create({
          title: res.data.message,
          duration: 1500,
          type: "success",
        });
      }
    } catch (error) {
      dispatch({ type: UPDATE_BOOK_FAILURE, payload: error.message });
      console.log(error.message);
    }
  };
};
