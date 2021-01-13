import Axios from "axios";

const messagesUrl = "https://academlo-whats.herokuapp.com/api/v1/messages/";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ";

export const getMessages = async (id) => {
  const res = await Axios.get(
    `https://academlo-whats.herokuapp.com/api/v1/conversations/${id}/messages`
  );
  const { data } = res;
  return data[0];
};

export const sendMessage = async (messageData) => {
  const { userId, conversationId, message, timestamp, received } = messageData;

  const postData = {
    userId: userId,
    conversationId: conversationId,
    message: message,
    timestamp: timestamp,
    received: received,
  };
  const axiosConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await Axios.post(messagesUrl, postData, axiosConfig);
  return res;
};

export const deleteMessage = async (messageId) => {
  const res = await Axios.delete(messagesUrl + `${messageId}`);
  return res;
};
