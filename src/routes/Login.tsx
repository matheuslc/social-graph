import React, { ReactElement } from 'react'
import { Row, Input, Form, Col, Typography, Button } from 'antd'
import {
  useMutation,
} from '@tanstack/react-query'

import logo from '../assets/logo.png'
import { login, AuthTokens } from '../login/loginMutation'
import { localStorageHook } from '../localstorage/hook'

type LoginProps = {
  username: string
  password: string
}

export function Login(): ReactElement {
  const [token, setToken] = localStorageHook('token')

  const storeToken = (data: AuthTokens) => {
    setToken('access_token', data.access_token)
    setToken('refresh_token', data.refresh_token)
  }

  const mutation = useMutation({
    mutationFn: (values: LoginProps) => {
      return login(values.username, values.password)
    },
    onSuccess: storeToken
  })


  const onFinish = (values: LoginProps) => {
    mutation.mutate(values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <>
      <Row justify="center" align="middle">
        <img className='logo' src={logo} width='300px' />
      </Row>

      <Row justify='space-around' align='middle'>
        <Col sm={12} lg={8}>
          <Typography.Title level={3}>Glad to see you back!</Typography.Title>

          <Form name='signup-form' onFinish={onFinish} onFinishFailed={onFinishFailed}>
            <Form.Item name='username' rules={[{ required: true, message: 'Please input your username!' }]}>
              <Input size='large' placeholder='username' bordered={false} />
            </Form.Item>

            <Form.Item name='password' rules={[{ required: true, message: 'Please input your password!' }]}>
              <Input.Password size='large' placeholder='password' bordered={false} />
            </Form.Item>

            <Form.Item>
              <Button block size='large' disabled={mutation.isLoading} type="primary" htmlType="submit">
                let's goooooo
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  )
}