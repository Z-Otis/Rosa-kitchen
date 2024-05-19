import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AppOverviewPage from './components/AppOverviewPage'
import LoadingPage from './components/loading-page/LoadingPage'


export default function App() {
  return (
    <main>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoadingPage />}/>
        <Route path='/kitchen' element={<AppOverviewPage />}/>
      </Routes>
      </BrowserRouter>
    </main>
  )
}