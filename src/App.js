import './App.css';
import './transitions.css'
import Header from './components/Header';
import Main from './components/main/Main';
import cardsData from './components/main/cardsData'
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { Route, Routes, useLocation } from 'react-router-dom';
import Test from './components/projects/Test';
import React from 'react';

function App() {
  const location = useLocation()
  const transitionAnimationDuration = (parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--transition-animation-duration').slice(1, -2)));
  const [firstLoad, setFirstLoad] = React.useState(sessionStorage.getItem('firstLoad') !== 'false')

  React.useEffect(() => {
    setTimeout(() => {
      setFirstLoad(false)
      sessionStorage.setItem('firstLoad', 'false')
    }, 10000);
    return () => {
      sessionStorage.setItem('firstLoad', 'true')
    }
  },[])

  return (
    <div id='app' className={firstLoad ? 'first-load' : ''}>
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
