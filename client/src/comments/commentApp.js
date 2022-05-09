import Comments from '../Comments'
// Change Comments from currentUserId  to fetch from backend
const commentApp = () => {
    return (
        <div>
            <Comments currentUserId="83dc8c32-9d74-4bd0-8745-1fd8853c9a86"/>
        </div>
    );
};

export default commentApp;