import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { toogleBookList,
         categoriesChange,
         orderByChange,
         searchingTextChange } from '../../actions'

import "./appHeader.scss";

const AppHeader = () => {

    //Используем стейт для самосвязанности формы. Это внутренний стейт, другие коспоненты его не используют, не вижу смысла закидывать эту информацию в стор
    const [formValue, setFormValue] = useState('');

    const dispatch = useDispatch();

    const handleCategories = (e) => {
        dispatch(categoriesChange(e.target.value));
    }

    const handleOrderBy = (e) => {
        dispatch(orderByChange(e.target.value));
    }

    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(searchingTextChange(formValue));
        dispatch(toogleBookList(true));
    }

    return(
        <header className="App-header">
            <div className="App-header__title">
                Search for Books
            </div>
            <div className="App-header__search">
                <Form onSubmit={handleSearch}>
                    <Form.Control type='text' placeholder="Search for Book" onChange={(e) => setFormValue(e.target.value)} value={formValue}/>
                    <Button variant="primary" type="submit">Search</Button>
                </Form>
            </div>
            <div className="App-header__filters">
                <div className="App-header__filters__categories">
                    <div>Categories</div>
                    <select onChange={handleCategories}>
                        <option value='all'>All</option>
                        <option value='art'>Art</option>
                        <option value='biography'>Biography</option>
                        <option value='computers'>Computers</option>
                        <option value='history'>History</option>
                        <option value='medical'>Medical</option>
                        <option value='poetry'> Poetry</option>
                    </select>
                </div>
                <div className="App-header__filters__sortBy">
                    <div>Sorting By</div>
                    <select onChange={handleOrderBy}>
                        <option value='Relevance'>Relevance</option>
                        <option value='Newest'>Newest</option>
                    </select>
                </div>
            </div>
        </header>
    )
}

export default AppHeader;