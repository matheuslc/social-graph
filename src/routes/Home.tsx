import { useMutation } from '@tanstack/react-query'
import MDEditor from '@uiw/react-md-editor'
import { Button, Col, Layout, Row, Tabs } from 'antd'
import ButtonGroup from 'antd/es/button/button-group'
import React, { ReactElement, useContext, useState } from 'react'
import { AuthContext } from '../login/protectedRoute'
import { createPost } from '../post/postMutation'

const EDIT_TAB = 'edit'
const PREVIEW_TAB = 'preview'

type PostValue = {
  content: string
}

export function Home(): ReactElement {
  const [content, setContent] = useState("**Hello**")
  const [tab, setTab] = useState("edit")
  const tokens = useContext(AuthContext)

  const postMutation = useMutation({
    mutationFn: (values: PostValue) => {
      return createPost(tokens, values.content)
    }
  })

  return (
    <>
      <Row>
        <Col span={24}>
          header
        </Col>
      </Row>

      <Row>
        <Col span={4}>
          SIDER
        </Col>

        <Col span={12}>
          <Tabs
            defaultActiveKey={EDIT_TAB}
            onChange={setTab}
            items={[
              {
                key: EDIT_TAB,
                label: 'Writing',
                children: <MDEditor
                  value={content}
                  onChange={setContent}
                  preview={EDIT_TAB}
                  fullscreen={false}
                  hideToolbar={true}
                />
              },
              {
                key: PREVIEW_TAB,
                label: 'Preview',
                children: <MDEditor.Markdown source={content} />
              }
            ]}
          />

          <ButtonGroup>
            <Button type="ghost" onClick={() => postMutation.mutate({ content })}>cancel</Button>
            <Button type="primary" onClick={() => postMutation.mutate({ content })}>share to the world</Button>
          </ButtonGroup>
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          FOOTER
        </Col>
      </Row>
    </>
  )
}