import './App.scss';

import AppHeader from '../appHeader/AppHeader';
import BooksList from '../booksList/BooksList';
import SingleBook from '../singleBook/SingleBook';

//Основной компонент приложения. Ввиду простоты приложения именно в нём бует меняться отбражение карточки книги

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
