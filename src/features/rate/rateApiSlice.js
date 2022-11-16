import { axiosInstance, baseURL } from "../../apis/axiosClient";

const rateApiSlice = {
  getCommentRateProductId: (id, size) =>
    axiosInstance.get(
      `${baseURL.comment}/comment/ratecomment?productId=${id}&page=1&size=${size}`
    ),
  addCommentRateProductId: (data) =>
    axiosInstance.post(
      `${baseURL.comment}/products/${data.productId}/reviews`,
      data
    ),
};
export default rateApiSlice;
