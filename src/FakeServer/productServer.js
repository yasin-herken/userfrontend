import { createServer } from "miragejs";

export function ProductServer({ environment = "development" }) {
  return createServer({
    environment,
    routes() {
      this.get("/:category/:id", (schema, request) => {
        const { category, id } = request.params;
        return {
          product: {
            id: id,
            category: category,
            name: "Product Name",
            price: {
              currency: "USD",
              value: 100,
              oldPrice: 200,
            },
            description: "Product Description",
            image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            title: "Product Title",
            rating: {
              rate: 4.5,
              reviews: 10,
            },
          },
        };
      });
    },
  });
}
