import {publicRequest} from "../Requests/RequestMethods";

export const postComplete = async (data) => {
  const res = await publicRequest.post("/api/order", data);
  if (res.status === 200 && res.data) {
    return res.data;
  }
  console.log(res)
  return new Response("Complete is empty", {status: 404});
}