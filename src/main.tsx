import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Signup } from './routes/Signup';
import { Login } from './routes/Login';
import { AuthTokens } from './login/loginMutation';

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { ConfigProvider } from 'antd';
import AppCss from '@/App.css';
import { Home } from './routes/Home';
import { ProtectedRoute } from './login/protectedRoute';

const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/login"></Navigate>
  },
  {
    path: '/home',
    element: <QueryClientProvider client={queryClient}>
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    </QueryClientProvider>
  },
  {
    path: '/signup',
    element:  
      <QueryClientProvider client={queryClient}>
        <Signup />
      </QueryClientProvider>
  },
  {
    path: '/login',
    element: <QueryClientProvider client={queryClient}>
      <Login />
    </QueryClientProvider>
  }
]);

const root = document.getElementById('root') || document.createElement('div')

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <ConfigProvider theme={{ token:
      {
        colorPrimary: '#252728',
        colorFill: '#252728',
        borderRadius: 0,
        colorTextBase: '#767676',
        colorLink: '#848CFC',
        colorTextPlaceholder: '#848CFC',
        colorBgBase: '#848CFC',
        colorBgLayout: '#848CFC' 
      },
    }}>
      <RouterProvider router={router} />
    </ConfigProvider>
  </React.StrictMode>
)
