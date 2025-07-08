import { produce } from "immer";
import {
  FETCH_BOOKS_FAILURE,
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
  ADD_BOOK_FAILURE,
  ADD_BOOK_SUCCESS,
  ADD_BOOK_REQUEST,
  UPDATE_BOOK_REQUEST,
  UPDATE_BOOK_SUCCESS,
  UPDATE_BOOK_FAILURE,
  MY_BOOKS_FAILURE,
  MY_BOOKS_SUCCESS,
  MY_BOOKS_REQUEST,
} from "../actionType";

const initState = {
  books: [],
  mybooks: [],
  isLoading: false,
  isErr: null,
};

export const bookReducer = produce((draft, { type, payload }) => {
  switch (type) {
    case FETCH_BOOKS_REQUEST:
      draft.isLoading = true;
      draft.isErr = null;
      break;
    case FETCH_BOOKS_SUCCESS:
      draft.books = payload;
      draft.isLoading = false;
      draft.isErr = null;
      break;
    case FETCH_BOOKS_FAILURE:
      draft.isLoading = false;
      draft.isErr = payload;
      break;

    case ADD_BOOK_FAILURE:
      draft.isLoading = false;
      draft.isErr = payload;
      break;

    case ADD_BOOK_SUCCESS:
      draft.isLoading = false;
      draft.isErr = null;
      break;

    case ADD_BOOK_REQUEST:
      draft.isLoading = true;
      draft.isErr = null;
      break;

    case UPDATE_BOOK_REQUEST:
      draft.isLoading = true;
      draft.isErr = null;
      break;

    case UPDATE_BOOK_SUCCESS:
      draft.isLoading = false;
      draft.isErr = null;
      break;

    case UPDATE_BOOK_FAILURE:
      draft.isLoading = false;
      draft.isErr = payload;
      break;

    case MY_BOOKS_FAILURE:
      draft.isLoading = false;
      draft.isErr = payload;
      break;

    case MY_BOOKS_SUCCESS:
      draft.mybooks = payload;
      draft.isLoading = false;
      draft.isErr = null;
      break;

    case MY_BOOKS_REQUEST:
      draft.isLoading = true;
      draft.isErr = null;
      break;

    default:
      break;
  }
}, initState);
