import {Button, Grid, TextField, Typography} from "@mui/material";
import React from "react";
import defaultPicture from '../about/defaultProfilePicture.webp';
const Comment = (comment,userName, deleteComment, currentUserId) => {
    const canEditComment = currentUserId === comment.userId;
    const canDeleteComment = currentUserId === comment.userId;

    return (
        <div className="comment">

            <div className="comment-image-container">
                <img style={{paddingLeft:10,paddingRight:10, width:50, height:50}} src={defaultPicture}  />
            </div>
            <div className="comment-right-part">
                <div className="comment-content">
                    <div>
                        <Typography style={{fontSize:14}}>{userName+"  "}</Typography>
                        <Typography style={{fontSize:10}}> {comment.createdAt.slice(0,comment.createdAt.length-5).replace("T"," ")}</Typography>
                    </div>
                </div>
                <div className="comment-text">{comment.content}</div>
                <div className="comment-actions">
                    {canEditComment && <div className="comment-action">Edit</div>}
                    {canDeleteComment && <div className="comment-action" onClick={() => deleteComment(comment.id)}>Delete</div>}
                </div>

            </div>
        </div>
    );
};

export default Comment