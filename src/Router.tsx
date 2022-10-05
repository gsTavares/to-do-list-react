import {Routes, Route} from 'react-router-dom'
import { Landing } from './pages/Landing'
import Login from './pages/Login'
import Todo from './pages/Todo'

export default function Router() {
    return (
        <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/login' element={<Login />} />
            <Route path='/user/todo' element={<Todo />} />
        </Routes>
    )
}