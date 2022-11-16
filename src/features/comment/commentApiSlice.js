import { axiosInstance, baseURL } from "../../apis/axiosClient";
const commentApiSlice = {
  getCommentProduct: (id, size) =>
    axiosInstance.get(
      `${baseURL.comment}/comment/nonratecomment?productId=${id}&page=1&size=${size}`
    ),
  getReplyCommentParentId: (id) =>
    axiosInstance.get(`${baseURL.comment}/subcomment/${id}`),
  replyComment: (data) =>
    axiosInstance.post(
      `${baseURL.comment}/comments/${data.parentCommentId}/reply`,
      data
    ),
  addCommentProductId: (data) =>
    axiosInstance.post(`${baseURL.comment}/comments`, data),
};

export default commentApiSlice;
