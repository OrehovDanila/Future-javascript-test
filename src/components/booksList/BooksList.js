
import { Button } from 'react-bootstrap'
import './booksList.scss'
import testImg from '../../resources/test.jpg'

const BooksList = () => {
    return(
        <div>
            <div className="bookList__title">Found 466 results</div>
            <div className="bookList__list">
                <div className="bookList__list__item">
                    <img src={testImg} alt="test img" className='bookList__list__item__img'/>
                    <div className="bookList__list__item__text">
                        <div className="bookList__list__item__categories">Computers</div>
                        <div className="bookList__list__item__title">Node.js для чайников</div>
                        <div className="bookList__list__item__authors">Дудосер</div>
                    </div>
                </div>
                <div className="bookList__list__item">
                    <img src={testImg} alt="test img" className='bookList__list__item__img'/>
                    <div className="bookList__list__item__text">
                        <div className="bookList__list__item__categories">Computers</div>
                        <div className="bookList__list__item__title">Node.js для чайников</div>
                        <div className="bookList__list__item__authors">Дудосер</div>
                    </div>
                </div>
                <div className="bookList__list__item">
                    <img src={testImg} alt="test img" className='bookList__list__item__img'/>
                    <div className="bookList__list__item__text">
                        <div className="bookList__list__item__categories">Computers</div>
                        <div className="bookList__list__item__title">Node.js для чайников</div>
                        <div className="bookList__list__item__authors">Дудосер</div>
                    </div>
                </div>
                <div className="bookList__list__item">
                    <img src={testImg} alt="test img" className='bookList__list__item__img'/>
                    <div className="bookList__list__item__text">
                        <div className="bookList__list__item__categories">Computers</div>
                        <div className="bookList__list__item__title">Node.js для чайников</div>
                        <div className="bookList__list__item__authors">Дудосер</div>
                    </div>
                </div>
                <div className="bookList__list__item">
                    <img src={testImg} alt="test img" className='bookList__list__item__img'/>
                    <div className="bookList__list__item__text">
                        <div className="bookList__list__item__categories">Computers</div>
                        <div className="bookList__list__item__title">Node.js для чайников</div>
                        <div className="bookList__list__item__authors">Дудосер</div>
                    </div>
                </div>
                <div className="bookList__list__item">
                    <img src={testImg} alt="test img" className='bookList__list__item__img'/>
                    <div className="bookList__list__item__text">
                        <div className="bookList__list__item__categories">Computers</div>
                        <div className="bookList__list__item__title">Node.js для чайников</div>
                        <div className="bookList__list__item__authors">Дудосер</div>
                    </div>
                </div>
                <div className="bookList__list__item">
                    <img src={testImg} alt="test img" className='bookList__list__item__img'/>
                    <div className="bookList__list__item__text">
                        <div className="bookList__list__item__categories">Computers</div>
                        <div className="bookList__list__item__title">Node.js для чайников</div>
                        <div className="bookList__list__item__authors">Дудосер</div>
                    </div>
                </div>
                <div className="bookList__list__item">
                    <img src={testImg} alt="test img" className='bookList__list__item__img'/>
                    <div className="bookList__list__item__text">
                        <div className="bookList__list__item__categories">Computers</div>
                        <div className="bookList__list__item__title">Node.js для чайников</div>
                        <div className="bookList__list__item__authors">Дудосер</div>
                    </div>
                </div>
                <div className="bookList__list__item">
                    <img src={testImg} alt="test img" className='bookList__list__item__img'/>
                    <div className="bookList__list__item__text">
                        <div className="bookList__list__item__categories">Computers</div>
                        <div className="bookList__list__item__title">Node.js для чайников</div>
                        <div className="bookList__list__item__authors">Дудосер</div>
                    </div>
                </div>
            </div>
            <Button>Load More</Button>
        </div>
    )
}

export default BooksList;
