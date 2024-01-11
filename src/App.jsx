import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/Header'
import './App.css'
import UserInput from './components/userInput'
import Result from './components/results'

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header/>
      <UserInput onChangeInput={handleChange} userInput={userInput}/>
      {!inputIsValid && <p className='center'>Please enter a duration greater than zero</p>}
      {inputIsValid && <Result input={userInput}/>}
    </>
  )
}

export default App
