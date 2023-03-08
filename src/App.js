import './App.css';
import './transitions.css'
import Header from './components/Header';
import HeaderBack from './components/HeaderBack';
import Main from './components/main/Main';
import {cardsDataLandscape, cardsDataPortrait} from './components/main/cardsData'
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { Route, Routes, useLocation } from 'react-router-dom';
import Test from './components/projects/Test';
import RidnaLibrary from './components/projects/RidnaLibrary/RidnaLibrary';
import Iove from './components/projects/IOVE/Iove';
import SFStudio from './components/projects/SFStudio/SFStudio';
import HEUCC from './components/projects/HEUCC/HEUCC';
import React from 'react';
import { useMediaQuery } from 'react-responsive'

function App() {
  const location = useLocation()
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const transitionAnimationDuration = (parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--transition-animation-duration').slice(1, -2)));
  const [firstLoad, setFirstLoad] = React.useState(sessionStorage.getItem('firstLoad') !== 'false')
  const cardsData = isPortrait ? cardsDataPortrait : cardsDataLandscape

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
            <Route path='/' element={<Main data={cardsData} isPortrait={isPortrait}/>}/>
            <Route path='/test' element={<Test/>}/>
            <Route path='/ridnalibrary' element={<RidnaLibrary isPortrait={isPortrait}/>}/>
            <Route path='/sfstudio' element={<SFStudio isPortrait={isPortrait}/>}/>
            <Route path='/heucc' element={<HEUCC isPortrait={isPortrait}/>}/>
            <Route path='/iove' element={<Iove isPortrait={isPortrait}/>}/>
          </Routes>
        </CSSTransition>
      </SwitchTransition>
    </div>
  )
}

export default App;
