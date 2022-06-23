import { Button } from 'react-bootstrap'
import GoogleBookServise  from '../../services/GoogleBookServise';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import './booksList.scss'


import { fetchBookList, fetchTotalItems } from '../../actions';
import BookListItem from '../bookListItem/BookListItem';

//Компонент отвечающий за получение с сервера данных. Значения фильров получает из store

const BooksList = () => {

    //Блок инициализации

    const dispatch = useDispatch();
    const { getVolumesByTitle, getVolumesTotalItems } = GoogleBookServise();

    const bookListLoadingStatus = useSelector(state => state.reducers.bookListLoadingStatus);
    const books = useSelector(state => state.reducers.bookList)
    const searchingText = useSelector(state => state.reducers.searchingText);
    const totalItems = useSelector(state => state.reducers.totalItems);
    const totalItemsLoadingStatus = useSelector(state => state.reducers.totalItemsLoadingStatus);

    const category = useSelector(state => state.reducers.categories);
    const orderBy = useSelector(state => state.reducers.orderBy);

    //Приложение будет ререндериться при смене фильтров.

    useEffect(() => {
        if(searchingText !== ''){
            dispatch(fetchBookList(searchingText, orderBy, category)(getVolumesByTitle));
            dispatch(fetchTotalItems(searchingText, orderBy, category)(getVolumesTotalItems));
        }
    },[searchingText, orderBy, category])


    //Блок заглушек

    if (bookListLoadingStatus === "loading" || totalItemsLoadingStatus === "loading") {
        return <h5 className="text-center mt-5">Загрузка</h5>
    } else if (bookListLoadingStatus === "error" || totalItemsLoadingStatus === "error") {
        return <h5 className="text-center mt-5">Ошибка загрузки</h5>
    }
    if (books.length === 0 && searchingText === '') {
        return <h5 className="text-center mt-5">Введите поисковый запрос</h5>
    }

    //Функция для рендера списка с помощью дамб компонентов. Для key используется не id, а и etag, в связи с повторяющемися в api id для одинаковых книг, но разных изданий/версий

    const renderBooksList = (arr) => {
        if (arr.length === 0) {
            return <h5 className="text-center mt-5">Ничего не найдено</h5>
        }

        return arr.map(({etag, ...props}) => {
            return (
                <BookListItem key={etag} {...props}/>
            )
        })
    }

    const elements = renderBooksList(books);

    return(
        <>
            <div className="bookList__title">Found {totalItems} results</div>
            <div className="bookList__list">
                {elements}
            </div>
            <Button>Load More</Button>
        </>
    )
}

export default BooksList;
