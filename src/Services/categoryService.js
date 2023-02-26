import {publicRequest} from "../Requests/RequestMethods";


export const getCategories = async () => {
  const response = await publicRequest.get(`/api/categories`);

  if (response.status === 200) {
    return response.data;
  }
  return new Response("Categories are not found", {status: 404});
}