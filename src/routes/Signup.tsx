import React, { ReactElement } from 'react';
import { Row, Input, Form, Col, Typography, Button } from 'antd'
import {
  useMutation,
} from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom';

import logo from '../assets/logo.png';
import { signup } from '../singup/signupMutation'

type SignupProps = {
  username: string
  email: string
  password: string
}

export function Signup(): ReactElement {
  const navigate = useNavigate();
  const redirectToLogin = () => {
    navigate("/login")
  }

  const mutation = useMutation({
    mutationFn: (values: SignupProps) => {
      return signup(values.username, values.email, values.password)
    },
    onSuccess: redirectToLogin,
  })

  const onFinish = (values: SignupProps) => {
    mutation.mutate(values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  }

  return (
    <>
      <Row justify="center" align="middle">
        <img className='logo' src={logo} width='300px' />
      </Row>

      <Row justify='space-around' align='middle'>
        <Col sm={12} lg={8}>
          <Typography.Title level={3}>Create your free account</Typography.Title>

          <Form name='signup-form' onFinish={onFinish} onFinishFailed={onFinishFailed}>
            <Form.Item name='username' rules={[{ required: true, message: 'hum.. missing your username :(' }]}>
              <Input size='large' placeholder='username' bordered={false}/>
            </Form.Item>

            <Form.Item name='email' rules={[{ required: true, message: 'i promise i will not send notifications, ads etc, only important things!' }]}>
              <Input size='large' placeholder='email' bordered={false}/>
            </Form.Item>

            <Form.Item name='password' rules={[{ required: true, message: 'better to add a password than get hacked ' }]}>
              <Input.Password size='large' placeholder='password' bordered={false} />
            </Form.Item>

            <Form.Item>
              <Button block size='large' type="primary" htmlType="submit">
                create your free account
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  )
}