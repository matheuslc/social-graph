import { useQuery } from "@tanstack/react-query";
import { Col, Row } from "antd";
import React, { ReactElement, useContext } from "react";
import { AuthContext } from "../login/protectedRoute";

import { timelineQuery } from '../user/timelineQuery'

export function Timeline(): ReactElement {
    const tokens = useContext(AuthContext)
    const timelineQueryInternal = () => {
        return timelineQuery(tokens)
    }

    const { isLoading, error, data } = useQuery(['timeline'], timelineQueryInternal)


    return (
        <Row>
            { data?.posts && data?.posts.map((post, index) => {
                return <Col span={24} key={index}>
                    {post.post.content}
                </Col>
            })} 
        </Row>
    )
}