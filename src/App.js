import './App.css';
import {useState} from 'react';

function App() {

  const [inputValue, setInputValue] = useState('');
  const [inputColor, setInputColor] = useState('black');

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const checkInput = event => {
    setInputValue(event.target.value);

    if (event.target.value.length < event.target.minLength || event.target.value.length > 10) {
      setInputColor("red")
    }
    else {
    setInputColor("black")
    }
    
    if(isValidEmail(event.target.value)){
      alert("email valida")
    }
    else {
      console.log("email non valida");
    }
  }


  return (
  <>
    <input
    className="text-input"
    type="text"
    value={inputValue}
    style={{ color: inputColor }}
    minLength={5}
    maxLength={15}
    onChange={checkInput}
    ></input>

</>
  );
}

export default App;
