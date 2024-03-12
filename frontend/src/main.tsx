import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import "./main.css"
import Main from './pages/Main'
import Api from './pages/Api'

const router = createBrowserRouter([
    { path: '/', element: <Main /> },
    { path: '/get-started', element: <Main /> },
    { path: '/api', element: <Api /> },
    { path: '/api/:name', element: <Api /> },
    { path: '/ressources', element: <Main /> },
    { path: '/code', element: <Main /> }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
