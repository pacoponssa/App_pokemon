import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Cartas from './components/Cartas'
import Pelea from './components/Pelea'
import Ranking from './components/Ranking'

const router = createBrowserRouter([
	{
		path: '',
		element: <App />,
		children: [
			{ path: '', element: <Cartas /> },
			{ path: 'cartas', element: <Cartas /> },
			{ path: 'ranking', element: <Ranking /> },
			{ path: 'pelea', element: <Pelea /> },
		],
	},
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<RouterProvider router={router}>
		<App />
	</RouterProvider>
)
