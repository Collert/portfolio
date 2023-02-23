import './App.css';
import './transitions.css'
import Header from './components/Header';
import Main from './components/main/Main';
import cardsData from './components/main/cardsData'
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { Route, Routes, useLocation } from 'react-router-dom';
import Test from './components/projects/Test';

function App() {
  const location = useLocation()
  const transitionAnimationDuration = (parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--transition-animation-duration').slice(1, -2)));

  return (
    <div id='app'>
      <Header/>
      <SwitchTransition>
        <CSSTransition key={location.key} classNames='page' timeout={transitionAnimationDuration}>
          <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Main data={cardsData}/>}/>
            <Route path='/test' element={<Test/>}/>
          </Routes>
        </CSSTransition>
      </SwitchTransition>
    </div>
  )
}

export default App;
