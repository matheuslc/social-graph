import React, { ReactElement } from 'react';
import { Row, Input, Form, Col, Divider, Button } from 'antd'
import {
  useMutation,
} from '@tanstack/react-query'

import { signup } from '../singup/signupMutation'

type SignupProps = {
  username: string;
  password: string;
}

export function Signup(): ReactElement {
  const mutation = useMutation({
    mutationFn: (values: SignupProps) => {
      return signup(values.username, values.password)
    }
  })

  const onFinish = (values: SignupProps) => {
    mutation.mutate(values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Row justify='space-around' align='middle'>
        <Col span={4}>
          <Divider orientation="left">Signup</Divider>

          <Form name='signup-form' onFinish={onFinish} onFinishFailed={onFinishFailed}>
            <Form.Item label='username' name='username' rules={[{ required: true, message: 'Please input your username!' }]}>
              <Input />
            </Form.Item>

            <Form.Item label='password' name='password' rules={[{ required: true, message: 'Please input your password!' }]}>
              <Input.Password />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  )
}