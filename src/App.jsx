import './App.css'
import Header from './components/Header'
import QuestionForm from './components/QuestionForm'
import Result from './components/Result'
import Footer from './components/Footer'
import CalculateResult from './logi/CalculateResult'
import { useState, useEffect } from 'react';

function App() {

  const [values, setValues] = useState({ //saves results sent by Question Form
    comfort: 0,
    growth: 0,
    relations: 0,
    reflect: 0
  });

  const [result, setResult] = useState("");

  const saveValues = (data) =>{
    setValues(data);      //saves results sent by Question Forms

  };

  //calculates the result of the operation based on the values sent by Question Form
  useEffect(() => {
    CalculateResult(values, setResult);
  }, [values]);

  return (
    <>
      <div className='container'>
        <Header  />
        <QuestionForm saveValues={saveValues}/>
        <Result result = {result}/>
        <Footer />
      </div>
    </>
  )
}

export default App
