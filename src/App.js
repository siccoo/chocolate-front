import './App.css';
import Header from './components/Header';
import SearchInput from './components/SearchInput';

function App() {
  return (
    <div className="App m-20">
      <Header/>
      <h2 className="mtb-20 app-quote">Find the best music of Chocolate studio</h2>
      <SearchInput />
    </div>
  );
}

export default App;
