import { createAction } from "@reduxjs/toolkit";

//Группа экшенов связанных с запросом данных

export const singleBookFetching = createAction('SINGLE_BOOK_FETCHING');
export const singleBookFetched = createAction('SINGLE_BOOK_FETCHED');
export const singleBookFetchingError = createAction('SINGLE_BOOK_FETCHING_ERROR');

export const fetchSingleBook = (id) => (getVolumeById) => (dispatch) => {
    dispatch(singleBookFetching);
    getVolumeById(id)
        .then(data => dispatch(singleBookFetched(data)))
        .catch(() => dispatch(singleBookFetchingError()))
}

export const bookListFetching = createAction('BOOK_LIST_FETCHING');
export const bookListFetched = createAction('BOOK_LIST_FETCHED');
export const bookListFetchingError = createAction('BOOK_LIST_FETCHING_ERROR');

export const bookListClearing = createAction('BOOK_LIST_CLEARING');


export const fetchBookList = (title, sortBy, category, index) => (getVolumesByTitle) => (dispatch) => {
    dispatch(bookListFetching());
    getVolumesByTitle(title, sortBy, category, index)
        .then(data => dispatch(bookListFetched(data)))
        .catch(() => dispatch(bookListFetchingError()))    
}

export const totalItemsFetching = createAction('TOTAL_ITEMS_FETCHING');
export const totalItemsFetched = createAction('TOTAL_ITEMS_FETCHED');
export const totalItemsFetchingError = createAction('TOTAL_ITEMS_FETCHING_ERROR');

export const fetchTotalItems = (title, sortBy, category, index) => (getVolumesTotalItems) => (dispatch) => {
    dispatch(totalItemsFetching());
    getVolumesTotalItems(title, sortBy, category, index)
        .then(data => dispatch(totalItemsFetched(data)))
        .catch(() => dispatch(totalItemsFetchingError()))    
}

//Группа экшенов связанных с фильтрами поиска

export const categoriesChange = createAction('CATEGORIES_CHANGE');
export const orderByChange = createAction('ORDER_BY_CHANGE');
export const searchingTextChange = createAction('SEARCHING_TEXT_CHANGE');

//Группа экшенов связанных с внешним видом приложения

export const toogleBookList = createAction('TOOGLE_BOOK_LIST');
export const bookIdChange = createAction('BOOK_ID_CHANGE');
export const indexChange = createAction('INDEX_CHANGE')
