import './App.css';
import './transitions.css'
import Header from './components/Header';
import HeaderBack from './components/HeaderBack';
import Main from './components/main/Main';
import cardsData from './components/main/cardsData'
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { Route, Routes, useLocation } from 'react-router-dom';
import Test from './components/projects/Test';
import RidnaLibrary from './components/projects/RidnaLibrary';
import Iove from './components/projects/Iove';
import SFStudio from './components/projects/SFStudio';
import HEUCC from './components/projects/HEUCC';
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
      {location.pathname === '/' ? <Header url={location.pathname}/> : <HeaderBack/>}
      <SwitchTransition>
        <CSSTransition key={location.key} classNames='page' timeout={transitionAnimationDuration}>
          <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Main data={cardsData}/>}/>
            <Route path='/test' element={<Test/>}/>
            <Route path='/ridnalibrary' element={<RidnaLibrary/>}/>
            <Route path='/sfstudio' element={<SFStudio/>}/>
            <Route path='/heucc' element={<HEUCC/>}/>
            <Route path='/iove' element={<Iove/>}/>
          </Routes>
        </CSSTransition>
      </SwitchTransition>
    </div>
  )
}

export default App;
