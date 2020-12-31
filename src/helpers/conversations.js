import Axios from "axios";
const conversationsUrl =
  "https://academlo-whats.herokuapp.com/api/v1/conversations";
  
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ";

  // export const getConversations = async () => {
  //   const res = await Axios.get(conversationsUrl);
  //   return res;
  // };
  
export const createConversation = async (userId, activeUserId) => {
  console.log(userId, activeUserId);

  const postData = {
    members: [userId, activeUserId],
  };

  const axiosConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await Axios.post(conversationsUrl, postData, axiosConfig);

  return res;
};
