import React, {useState} from 'react'
import './App.css';
import Navigation from './Components/Navigation';
import GlobalPages from './Components/GlobalPage';

function App() {

  const [btnActive, setBtnActive] = useState(2)

  const functionChangeActiveBtn = (index) => {
    setBtnActive(index)
  }

  return (
    <div className="App">
      <Navigation btnActive={btnActive} setBtnActive={setBtnActive} functionChangeActiveBtn={functionChangeActiveBtn} />
      <GlobalPages btnActive={btnActive} setBtnActive={setBtnActive} functionChangeActiveBtn={functionChangeActiveBtn} />
    </div>
  );
}

export default App;
