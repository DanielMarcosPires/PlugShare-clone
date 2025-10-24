import { Route, Routes } from 'react-router-dom'
import { Dashboard } from './pages/Dashboard/page'
import BuscaDeCarro from './pages/BuscaDeCarro/page'
import BrandSearch from './pages/BrandSearch/page'
import {page as Boot} from './pages/Boot/page'
import Sing from './pages/Singup/Sing'
import Singin from './pages/Singin/Singin'
import Opt from './pages/Opt/Opt'

//Daniel é o responsavel para configurar as rotas

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<Boot/>} />
      <Route path='/signup' element={<Sing/>} />
      <Route path='/signin' element={<Singin/>} />
      <Route path='/opt' element={<Opt/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/brand' element={<BrandSearch/>} />
    </Routes>
  )
}