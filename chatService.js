import axios from 'axios';

export const fetchMessages = async (roomId) => {
  return axios.get(`/api/chats?roomId=${roomId}`);
};
