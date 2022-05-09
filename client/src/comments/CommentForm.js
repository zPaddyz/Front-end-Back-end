import {useState} from "react";

const CommentForm = ({handleSubmit, submitLabel}) => {
    const [text, setText] = useState("");
    const isTextareaDisabled = text.length ===0;
    const onSubmit = event => {
        event.preventDefault()
        handleSubmit(text)
        setText("")
    }
    return (
        <form onSubmit={onSubmit}>
            <div><textarea id="comment-form-textarea" className="comment-form-textarea" value={text} onChange={(e) => setText(e.target.value)} /> </div>
            
            <div class ="comment-container">
                <div class ="comment-button-center"><button className="comment-form-button" disabled={isTextareaDisabled}>{submitLabel}</button></div>
                 </div>
            
            
        </form>
    )
};

export default CommentForm