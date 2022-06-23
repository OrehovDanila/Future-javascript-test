import GoogleBookServise  from '../../services/GoogleBookServise';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchSingleBook } from '../../actions';

import './singleBook.scss'

//Компонент карточки одной книги

const SingleBook = () => {

    //Блок инициализации

    const dispatch = useDispatch();
    const { getVolumeById } = GoogleBookServise();

    const singleBook = useSelector(state => state.reducers.singleBook);
    const singleBookLoadingStatus = useSelector(state => state.reducers.singleBookLoadingStatus);

    const selectedBookId = useSelector(state => state.reducers.selectedBookId);

    useEffect(() => {
        dispatch(fetchSingleBook(selectedBookId)(getVolumeById));
        // eslint-disable-next-line
    },[selectedBookId])

    //Блок закглушек

    if (singleBookLoadingStatus === "loading") {
        return <h5 className="text-center mt-5">Загрузка</h5>
    } else if (singleBookLoadingStatus === "error") {
        return <h5 className="text-center mt-5">Ошибка загрузки</h5>
    }

    return(
        <div className='singleBook__container'>
            <div className='singleBook__container__imgContainer'>
                <img src={singleBook.thumbnail} alt={singleBook.title} className='singleBook__container__img'/>
            </div>
            <div className='singleBook__container__content'>
                <div className='singleBook__container__content__categories'>{singleBook.categories}</div>
                <div className='singleBook__container__content__title'>{singleBook.title}</div>
                <div className='singleBook__container__content__author'>{singleBook.authors}</div>
                <div className='singleBook__container__content__description'>{singleBook.description}</div>
            </div>
        </div>
    )
}

export default SingleBook;