import {useState} from "react";
import Header from './components/Header';
import SearchInput from './components/SearchInput';
import Tabs from "./components/Tabs";
import AudioList from "./components/AudioList";

import './App.css';

function App() {
  const [list, setList] = useState(false);

  const onBackButtonPress = () => {
    setList(false);
  };

  return (
    <div className="App m-20">
      <Header/>
      <h2 className="mtb-20 app-quote">Find the best music of Chocolate studio</h2>
      <SearchInput />
      <Tabs />
      {list && (<AudioList onBackButtonPress={onBackButtonPress} />)}
    </div>
  );
}

export default App;
