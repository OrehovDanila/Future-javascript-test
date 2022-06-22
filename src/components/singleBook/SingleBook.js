import './singleBook.scss'
import testImg from '../../resources/test.jpg'

const SingleBook = () => {
    return(
        <div className='singleBook__container'>
            <div className='singleBook__container__imgContainer'>
                <img src={testImg} alt="Test Img" className='singleBook__container__img'/>
            </div>
            <div className='singleBook__container__content'>
                <div className='singleBook__container__content__categories'>Art/General</div>
                <div className='singleBook__container__content__title'>Bach</div>
                <div className='singleBook__container__content__author'>Authors</div>
                <div className='singleBook__container__content__description'>Description</div>
            </div>
        </div>
    )
}

export default SingleBook;