import Comments from './comments/Comments'
// Change Comments from currentUserId  to fetch from backend
const commentApp = () => {
    return (
        <div>
            <h1> Hello </h1>
            <Comments currentUserId="1"/> 
        </div>
    );
};

export default commentApp;