import { Button } from 'react-bootstrap'
import GoogleBookServise  from '../../services/GoogleBookServise';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import './booksList.scss'


import { fetchBookList, fetchTotalItems, bookIdChange, toogleBookList, indexChange } from '../../actions';
import BookListItem from '../bookListItem/BookListItem';

//Компонент отвечающий за получение с сервера данных. Значения фильров получает из store

const BooksList = () => {

    //Блок инициализации

    const dispatch = useDispatch();
    const { getVolumesByTitle, getVolumesTotalItems } = GoogleBookServise();

    const books = useSelector(state => state.reducers.bookList)
    const bookListLoadingStatus = useSelector(state => state.reducers.bookListLoadingStatus);

    const totalItems = useSelector(state => state.reducers.totalItems);
    const totalItemsLoadingStatus = useSelector(state => state.reducers.totalItemsLoadingStatus);

    const category = useSelector(state => state.reducers.categories);
    const orderBy = useSelector(state => state.reducers.orderBy);
    const searchingText = useSelector(state => state.reducers.searchingText);
    const index = useSelector(state => state.reducers.index);

    //Приложение будет ререндериться при смене фильтров.

    useEffect(() => {
        if(searchingText !== ''){
            dispatch(fetchBookList(searchingText, orderBy, category, index)(getVolumesByTitle));
            dispatch(fetchTotalItems(searchingText, orderBy, category, index)(getVolumesTotalItems));
        }
        // eslint-disable-next-line
    },[searchingText, orderBy, category, index])


    //Блок заглушек

    if ((bookListLoadingStatus === "loading" || totalItemsLoadingStatus === "loading") && books === []) {
        return <h5 className="text-center mt-5">Загрузка</h5>
    } else if (bookListLoadingStatus === "error" || totalItemsLoadingStatus === "error") {
        return <h5 className="text-center mt-5">Ошибка загрузки</h5>
    }
    if (books.length === 0 && searchingText === '') {
        return <h5 className="text-center mt-5">Введите поисковый запрос</h5>
    }
    const handleOnClick = (id) => {
        dispatch(bookIdChange(id));
        dispatch(toogleBookList(false));
    }

    //Функция для рендера списка с помощью дамб компонентов. Для key используется не id, а и etag, в связи с повторяющемися в api id для одинаковых книг, но разных изданий/версий

    const renderBooksList = (arr) => {
        if (arr.length === 0) {
            return <h5 className="text-center mt-5">Ничего не найдено</h5>
        }

        return arr.map(({etag, ...props}) => {
            return (
                <BookListItem key={etag} {...props} handleOnClick={handleOnClick}/>
            )
        })
    }

    const elements = renderBooksList(books);

    const buttonElement= bookListLoadingStatus === "loading"? <Button disabled >Load More</Button> : <Button onClick={() => dispatch(indexChange(index+30))} >Load More</Button>;

    return(
        <>
            <div className="bookList__title">Found {totalItems} results</div>
            <div className="bookList__list">
                {elements}
            </div>
            {buttonElement}
        </>
    )
}

export default BooksList;
