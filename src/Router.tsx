import {Routes, Route} from 'react-router-dom'
import { Landing } from './pages/Landing'

export default function Router() {
    return (
        <Routes>
            <Route path='/' element={<Landing />} />
        </Routes>
    )
}