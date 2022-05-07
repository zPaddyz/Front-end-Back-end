const Comment = ({comment, currentUserId, deleteComment}) => {
    const canEditComment = currentUserId === comment.userId;
    const canDeleteComment = currentUserId === comment.userId;

    return (
        <div className="comment">
            <div className="comment-image-container">
               <img src="../about/icon.png" />
            </div>
            <div className="comment-right-part">
                <div className="comment-content">
                    <div className="comment-authour">{comment.username}</div>
                    <div>{comment.createdAt}</div>
                </div>
                <div className="comment-text">{comment.body}</div>
                <div className="comment-actions">
                    {canEditComment && <div className="comment-action">Edit</div>}
                    {canDeleteComment && <div className="comment-action" onClick={() => deleteComment(comment.id)}>Delete</div>}
                </div>
                
            </div>
        </div>
    );
};

export default Comment