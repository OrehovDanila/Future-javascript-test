import './App.scss';

import AppHeader from '../appHeader/AppHeader';
import BooksList from '../booksList/BooksList';
import SingleBook from '../singleBook/SingleBook';

function App() {

  return (
    <div className="App">
      <AppHeader />
      <main className='App-content'>
        <BooksList />
        {/* <SingleBook /> */}
      </main>
    </div>
  );
}

export default App;
