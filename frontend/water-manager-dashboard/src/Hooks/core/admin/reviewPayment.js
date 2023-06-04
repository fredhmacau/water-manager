import instance from "../../configAxios";
import FormData from "form-data";

export default async function reviewPayment(paymentId) {
  const form = new FormData();
  const formHeaders = form.getHeaders;

  const result = await instance.put(`/admin/review-payment/${paymentId}`,form, {
    headers: {
      ...formHeaders,
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });

  return result;
}
