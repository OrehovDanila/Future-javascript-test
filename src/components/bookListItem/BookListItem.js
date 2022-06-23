//Dumb-компонент для рендера списка

const BookListItem = ({thumbnail, categories, title, authors, id, handleOnClick}) => {
    return(
        <div className="bookList__list__item" onClick={() => {handleOnClick(id)}}>
            <img src={thumbnail} alt={title} className='bookList__list__item__img'/>
            <div className="bookList__list__item__text">
                <div className="bookList__list__item__categories">{categories}</div>
                <div className="bookList__list__item__title">{title}</div>
                <div className="bookList__list__item__authors">{authors}</div>
            </div>
        </div>
    )
}

export default BookListItem;