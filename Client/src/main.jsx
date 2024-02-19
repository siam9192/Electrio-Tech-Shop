import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './Authentication/AuthProvider/AuthProvider.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Router from './Router/Router.jsx'
import { Provider } from 'react-redux'
import store from './Redux/store.js'

const query = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <QueryClientProvider client={query}>
 <AuthProvider>
 <Provider store={store}>
 <RouterProvider router={Router}>
   
   </RouterProvider>
 </Provider>
 </AuthProvider>
 </QueryClientProvider>
  </React.StrictMode>,
 
)
