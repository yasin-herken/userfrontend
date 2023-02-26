import {publicRequest} from "../Requests/RequestMethods";

export const  getProductByIdandCategory = async({ category, id }) => {
  const res = await publicRequest.get(`/products/${category}/${id}`);
  if(res.status === 200 && res.data) {
    return res.data;
  }
  return new Response("Product is empty", {status: 404});
}
export const getProducts = async ({pageSize = 12,sortBy = "createdAt",direction = "ASC",page=  0}) => {
  const res = await publicRequest.get("/products",{
    params: {
      pageSize,
      sortBy,
      direction,
      page
    }
  });
  if(res.status === 200 && res.data) {
    return res.data.data;
  }
  return new Response("Products are empty", {status: 404});
}

