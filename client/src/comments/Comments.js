import { useEffect, useState } from "react";
import {getComments as getCommentsApi, createComment as createCommentApi, deleteComment as deleteCommentApi} from "../api";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

const Comments = ({currentUserId}) => {
    const [backendComments, setBackendComments] = useState([]);
    const rootComments = backendComments.filter((backendComment) => backendComment.parentId === null);
    console.log('backendComments', backendComments);

    const addComment = (text, parentId) => {
        console.log('addComment', text, parentId)
        createCommentApi(text, parentId).then(comment => { setBackendComments([comment, ...backendComments])})
    }
    const deleteComment = (commentId) => {
        if (window.confirm("Are you sure?")){
            deleteCommentApi(commentId).then(() =>
            {const updatedBackendComments = backendComments.filter(backendComment => backendComment.id !== commentId);
            setBackendComments(updatedBackendComments)})
        }
    }

    useEffect(() => {
        getCommentsApi().then((data) => {
            setBackendComments(data);
        });
//empty array which means the useEffect will be triggerede only once after mounting the component
    }, []);

    return (
        <div className="comments">
            <h3 className="comments-title">Comments</h3>
            <div className="comment-form-title">Write comment</div>
            <CommentForm submitLabel="Write" handleSubmit={addComment}/>
            <div className="comments-container">
               {rootComments.map(rootComment => ( 
               <Comment 
                key={rootComment.id} comment={rootComment}
                currentUserId={currentUserId}
                deleteComment={deleteComment}
               /> 
               ))} 
            </div>
        </div>
    );
};

export default Comments