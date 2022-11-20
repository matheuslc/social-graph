import React, { ReactElement } from 'react'
import { useState } from 'react'
import './App.css'

import { ConfigProvider, Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'

function App(children: ReactElement) {
  const [count, setCount] = useState(0)

  return (
      <Layout>
        <Content></Content>
      </Layout>
  )
}

export default App
