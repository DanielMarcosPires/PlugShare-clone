import { Route, Routes } from 'react-router-dom'
import { Dashboard } from './pages/Dashboard/page'
import BuscaDeCarro from './pages/BuscaDeCarro/page'


//Daniel é o responsavel para configurar as rotas

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<BuscaDeCarro/>} />
    </Routes>
  )
}