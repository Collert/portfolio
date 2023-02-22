import './App.css';
import Header from './components/Header';
import Main from './components/main/Main';
import cardsData from './components/main/cardsData'

function App() {

  return (
    <>
      <Header/>
      <Main data={cardsData}/>
    </>
  )
}

export default App;
