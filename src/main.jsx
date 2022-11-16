import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import "antd/dist/antd.css";

import { Signup } from '@/routes/Signup';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: "/signup",
    element: <QueryClientProvider client={queryClient}>
              <Signup />
            </QueryClientProvider>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
