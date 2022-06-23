import { createReducer } from "@reduxjs/toolkit";

//Ввиду маленького размера приложения мне видиться не целесообразно делить редюсеры на отдельные компоненты, или пытаться инкапсюлировать слайсами или просто разделением редюсера. 

import {
    toogleBookList,
    categoriesChange,
    orderByChange,
    bookListFetching,
    bookListFetched,
    bookListFetchingError,
    bookIdChange,
    singleBookFetching,
    singleBookFetched,
    singleBookFetchingError,
    searchingTextChange,
    totalItemsFetched,
    totalItemsFetching,
    totalItemsFetchingError,
} from '../actions';

const initialState = {
    list: true,
    categories: 'all',
    orderBy: 'relevance',
    bookList: [],
    bookListLoadingStatus: 'idle',
    totalItems: 0,
    totalItemsLoadingStatus: 'idle',
    selectedBookId: '',
    singleBook: {},
    singleBookLoadingStatus: 'idle',
    searchingText: '',
}

const reducers = createReducer(initialState, {
    [toogleBookList]: (state, action) => {state.list = action.payload},
    [categoriesChange]: (state, action) => {state.categories = action.payload},
    [orderByChange]: (state, action) => {state.orderBy = action.payload},
    [bookListFetching]: state => {state.bookListLoadingStatus = 'loading'},
    [bookListFetched]: (state, action) => {
        state.bookListLoadingStatus = 'idle';
        state.bookList = action.payload;
    },
    [bookListFetchingError]: state => {state.bookListLoadingStatus = 'error'},
    [totalItemsFetching]: state => {state.totalItemsLoadingStatus = 'loading'},
    [totalItemsFetched]: (state, action) => {
        state.totalItemsLoadingStatus = 'idle';
        state.totalItems = action.payload;
    },
    [totalItemsFetchingError]: state => {state.totalItemsLoadingStatus = 'error'},
    [bookIdChange]: (state, action) => {state.selectedBookId = action.payload},
    [singleBookFetching]: state => {state.singleBookLoadingStatus = 'loading'},
    [singleBookFetched]: (state, action) => {
        state.singleBookLoadingStatus = 'idle';
        state.singleBook = action.payload;
    },
    [singleBookFetchingError]: state => {state.singleBookLoadingStatus = 'error'},
    [searchingTextChange]: (state, action) => {state.searchingText = action.payload},
})

export default reducers;