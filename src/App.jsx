import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Layout, { Content } from 'antd/lib/layout/layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Layout>
      <Content></Content>
    </Layout>
  )
}

export default App
