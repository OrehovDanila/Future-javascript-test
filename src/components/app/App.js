import './App.scss';

import AppHeader from '../appHeader/AppHeader';
import BooksList from '../booksList/BooksList';
import SingleBook from '../singleBook/SingleBook';

import { useSelector } from 'react-redux';

//Основной компонент приложения. Ввиду простоты приложения именно в нём бует меняться отбражение карточки книги

function App() {

  const list = useSelector(state => state.reducers.list);

  const page = list? <BooksList /> : <SingleBook />;

  return (
    <div className="App">
      <AppHeader />
      <main className='App-content'>
        {page}
      </main>
    </div>
  );
}

export default App;
