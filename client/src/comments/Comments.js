import { useEffect, useState } from "react";
import {getComments as getCommentsApi, createComment as createCommentApi, deleteComment as deleteCommentApi} from "../api";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

const Comments = ({currentUserId}) => {
    const [backendComments, setBackendComments] = useState([]);
    const rootComments = backendComments.filter((backendComment) => backendComment.parentId === null);
    console.log('backendComments', backendComments);


    //TODO: SKAL FÆRDIGGØRES!!!
    const addComment = async (text, parentId) => {
        let username;
        const requestOptions = {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, body: JSON.stringify({
                "eventid": "2dbe800d-a6f0-4633-a094-76b3f7933b23",//TODO: eventID skal hentes ordentligt og indsættes her.
                "content": "haha",
                "userID":"06fdad0c-0bf2-4235-ad59-034d0ffa4184" //TODO: Her skal der bruges token til at hente userID!
            })
        }
        const newComment = await fetch('/comments/add', requestOptions).then((response) => {
            console.log(response)
            if (response.status === 202) {
                return response.json()
            } else {
                //alert("Something went wrong")
                console.log("Something went wrong")
            }
        })
        console.log(newComment)
        //username = JSON.stringify(welcome.username).replaceAll("\"","")

        /*console.log('addComment', text, parentId)
        //fetch userid and name
        createCommentApi(1, username, text, parentId).then(comment => {
            setBackendComments([comment, ...backendComments])
        }) //post to server/database istedetfor blot usestate*/
    }
    const deleteComment = (commentId) => {
        if (window.confirm("Are you sure?")){
            deleteCommentApi(commentId).then(() =>
            {const updatedBackendComments = backendComments.filter(backendComment => backendComment.id !== commentId);
            setBackendComments(updatedBackendComments)})
        }
    }

    async function getComments(eventID){
        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, body: JSON.stringify({
                "eventid": eventID
            })
        }
        const comments = await fetch('/comments/get', requestOptions).then((response) => {
            console.log(response.json)
            if (response.status === 202) {
                return response.json()
            } else {
                //alert("Something went wrong")
                console.log("Something went wrong")
            }
        })
        console.log(comments)

        //TODO: TILFØJ KODE TIL AT VISE KOMMENTS!
    }

    useEffect(() => {
        getComments("2dbe800d-a6f0-4633-a094-76b3f7933b23")
        /*getCommentsApi().then((data) => {
            setBackendComments(data);
        });*/
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