import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Signup } from '@/routes/Signup';
import { Login } from '@/routes/Login';

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { ConfigProvider } from 'antd';
import AppCss from '@/App.css';

const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/login"></Navigate>
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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfigProvider theme={{ token:
      {
        colorPrimary: '#252728',
        borderRadius: '0px',
        colorTextBase: '#767676',
        colorLink: '#848CFC',
        colorTextPlaceholder: '#848CFC',
        colorBgBase: '#848CFC',
        colorBgLayout: '#848CFC',
        autoInsertSpaceInButton: false, 
      },
    }}>
      <RouterProvider router={router} />
    </ConfigProvider>
  </React.StrictMode>
)
