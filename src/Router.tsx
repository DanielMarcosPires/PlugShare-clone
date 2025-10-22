import { Route, Routes } from 'react-router-dom'
import { Dashboard } from './pages/Dashboard/page'
import BuscaDeCarro from './pages/BuscaDeCarro/page'
import BrandSearch from './pages/BrandSearch/page'
import CarBrandVa from './pages/CarBrandVa/page'


//Daniel é o responsavel para configurar as rotas

export default function Router() {
  return (
    <Routes>
      <Route path='/car' element={<BuscaDeCarro/>} />
      <Route path='/' element={<BuscaDeCarro/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/brand' element={<BrandSearch/>} />
      <Route path='/car-brand-va' element={<CarBrandVa/>} />
    </Routes>
  )
}