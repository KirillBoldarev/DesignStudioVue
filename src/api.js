import axios from "axios";

export const HTTP = axios.create({
  baseURL:
    "https://stoplight.io/mocks/frontend-skills/frontend-skills/100999302",
});

export default {
  async getPopularProducts() {
    try {
      const response = await HTTP.get("/products/popular");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  async getProduct(id) {
    try {
      const response = await HTTP.get(`/products/${id}`, {
        headers: {
          Prefer: `code=200, example=Example ${id}`,
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
