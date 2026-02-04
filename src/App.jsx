import './App.css'
import Header from './components/Header'
import QuestionForm from './components/QuestionForm'
import Result from './components/Result'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div className='container'>
        <Header  />
        <QuestionForm />
        <Result />
        <Footer />
      </div>
    </>
  )
}

export default App
