import React, {useEffect, useState} from "react";
import {PopupProps} from "@annotorious/react";
import {Button, Flex, Input} from "antd";

const { TextArea } = Input;

const CommentPopup: React.FC<PopupProps> = ({ annotation, onCreateBody, onUpdateBody }) => {
    const [comment, setComment] = useState('');

    useEffect(() => {
        const commentBody = annotation.bodies.find(body => body.purpose === 'commenting');
        setComment(commentBody && commentBody.value ? commentBody.value : '');
    }, [annotation.bodies]);

    const onSave = () => {
        const updated = {
            purpose: 'commenting',
            value: comment
        };

        const commentBody = annotation.bodies.find(body => body.purpose === 'commenting');
        if (commentBody) {
            onUpdateBody(commentBody, updated);
        } else {
            onCreateBody(updated);
        }
    };

    return (
        <Flex vertical style={{ width: "300px", padding: "4px", gap: "5px" }}>
            <TextArea
                value={comment}
                onChange={e => setComment(e.target.value)}
                style={{ height: "50px", resize: "none" }}
            />
            <Button onClick={onSave} type="primary">Сохранить</Button>
        </Flex>
    )

}

export default CommentPopup;
