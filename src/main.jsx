import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Component/Root/Root.jsx'
import Dashboard from './Component/Dashboard/Dashboard.jsx'
import Counter from './Component/Counter/Counter.jsx'
import Home from './Component/Home/Home.jsx'
import Jobs from './Component/Jobs/Jobs.jsx'

const router = createBrowserRouter([
  { path: '/', Component: Root },
  {
    path: 'dashboard',
    Component: Dashboard,
    children: [
      { index: true, Component: Home },
      { path: 'jobs', Component: Jobs}
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)