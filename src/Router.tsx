import { Route, Routes } from 'react-router-dom'
import { Dashboard } from './pages/Dashboard/page'

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<Dashboard/>} />
    </Routes>
  )
}