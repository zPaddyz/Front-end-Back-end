export const getComments = async () => {
    return [
      {
        id: "1",
        body: "1st Comment",
        //username: "Patrick",
        userId: "1",
        parentId: null,
        createdAt: "2021-08-16T23:00:33.010+02:00",
      },
      {
        id: "2",
        body: "2nd comment",
        //username: "Pernille",
        userId: "2",
        parentId: null,
        createdAt: "2021-08-16T23:00:33.010+02:00",
      },
    ];
  };
  
  export const createComment = async (UserID, Username, text, parentId = null) => {
    return {
      id: Math.random().toString(36).substr(2, 9),
      content: text,
      parentId,
      userId: UserID,
      username: Username,
      createdAt: new Date().toISOString(),
    };
  };
  
  export const updateComment = async (text) => {
    return { text };
  };
  
  export const deleteComment = async () => {
    return {};
  };