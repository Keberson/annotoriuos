import React, {useEffect, useState} from "react";
import {PopupProps} from "@annotorious/react";
import useRenderCount from "../../../hooks/useRenderCount";


const CommentPopup: React.FC<PopupProps> = (props) => {
    const renderCount = useRenderCount();

    useEffect(() => {
        console.log('Comment renders - ', renderCount);
    }, [renderCount]);
    const [comment, setComment] = useState('');

    // useEffect(() => {
    //     const commentBody = annotation.bodies.find(body => body.purpose === 'commenting');
    //     setComment(commentBody && commentBody.value ? commentBody.value : '');
    // }, [annotation.bodies]);

    // const onSave = () => {
    //     const updated = {
    //         purpose: 'commenting',
    //         value: comment
    //     };
    //
    //     const commentBody = annotation.bodies.find(body => body.purpose === 'commenting');
    //     if (commentBody) {
    //         onUpdateBody(commentBody, updated);
    //     } else {
    //         onCreateBody(updated);
    //     }
    // };

    return (
        <div>
      <textarea
          // value={comment}
          // onChange={e => setComment(e.target.value)}
      />

            <button>Save</button>
        </div>
    )

}

export default CommentPopup;
