import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/Header'
import './App.css'
import UserInput from './components/userInput'

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  }

  return (
    <>
      <Header/>
      <UserInput onChangeInput={handleChange}/>
    </>
  )
}

export default App
