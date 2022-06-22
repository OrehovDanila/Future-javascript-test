import { Button, Form } from 'react-bootstrap';

import "./appHeader.scss";

const AppHeader = () => {

    return(
        <header className="App-header">
            <div className="App-header__title">
                Search for Books
            </div>
            <div className="App-header__search">
                <Form>
                    <Form.Control type='text' placeholder="Search for Book"/>
                    <Button variant="primary" type="submit">Search</Button>
                </Form>
            </div>
            <div className="App-header__filters">
                <div className="App-header__filters__categories">
                    <div>Categories</div>
                    <select>
                        <option>All</option>
                        <option>Art</option>
                        <option>Biography</option>
                        <option>Computers</option>
                        <option>History</option>
                        <option>Medical</option>
                        <option>Poetry</option>
                    </select>
                </div>
                <div className="App-header__filters__sortBy">
                    <div>Sorting By</div>
                    <select>
                        <option>Relevance</option>
                        <option>Newest</option>
                    </select>
                </div>
            </div>
        </header>
    )
}

export default AppHeader;