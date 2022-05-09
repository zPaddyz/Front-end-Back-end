import { useEffect, useState } from "react";
import {getComments as getCommentsApi, createComment as createCommentApi, deleteComment as deleteCommentApi} from "./api";
import Comment from "./comments/Comment";
import CommentForm from "./comments/CommentForm";
import ReactDOM from "react-dom";
import EventBox from "./Eventbox/EventBox";

const Comments =  () => {
    const [backendComments, setBackendComments] = useState([]);
    const rootComments = backendComments.filter((backendComment) => backendComment.userId !== null);
    console.log('backendComments', backendComments);


    async function getUser(thingToReturn) {
        let userID;
        const requestOptions = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        const welcome = await fetch('/welcome', requestOptions).then((response) => {
            console.log(response)
            if (response.status === 202) {
                return response.json()
            } else {
                //alert("Something went wrong")
                console.log("Something went wrong")
            }
        })
        if(thingToReturn === "id"){
            userID = JSON.stringify(welcome.user_id).replaceAll("\"","")
        } else {
            userID = JSON.stringify(welcome.username).replaceAll("\"","")
        }
        //console.log(userID)
        return userID
    }


    const addComment = async (text, parentId) => {

        let username

        const requestOptions = {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, body: JSON.stringify({
                "eventid": window.location.href.replace("http://localhost/event/",""),
                "content": document.getElementById("comment-form-textarea").textContent,
                "userID": await getUser("id")
            }),
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
        if (window.confirm("Are you sure?")) {
            deleteCommentApi(commentId).then(() => {
                const updatedBackendComments = backendComments.filter(backendComment => backendComment.id !== commentId);
                setBackendComments(updatedBackendComments)
            })
        }
    }

    async function getComments(eventID) {
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

        await comments.forEach(element => {
            ReactDOM.render(Comment(element,element.user.userName, null, element.userID), document.getElementById("comments-container").appendChild(document.createElement('div')));
        })
        return comments
    }

    useEffect(async () => {
        await getComments(window.location.href.replace("http://localhost/event/",""))
        //setBackendComments(await comments);
        /*getCommentsApi().then((data) => {
            setBackendComments(data);
        });*/
//empty array which means the useEffect will be triggerede only once after mounting the component
    }, []);
    /*let comments = (await getComments("ba599738-e285-4cc3-b979-315bf869c5a1"))
    await comments.forEach(element => {
        ReactDOM.render(Comment(element, deleteComment, element.userId), document.getElementById("root").appendChild(document.createElement('div')));
    })*/
    return (
        <div className="comments" style ={{backgroundColor : "#f6efdf"}}>
            <h3 className="comments-title">Comments</h3>
            <div className="comment-form-title">Write comment</div>
            <CommentForm id="commentForm" submitLabel="Write" handleSubmit={addComment}/>
            <div id="comments-container" className="comments-container">
                {
                    /*rootComments.map(rootComment => (
                        <Comment
                            key={rootComment.id} comment={rootComment}
                            currentUserId={currentUserId}
                            deleteComment={deleteComment}
                        />
                    ))*/}
            </div>
        </div>
    );
};

export default Comments