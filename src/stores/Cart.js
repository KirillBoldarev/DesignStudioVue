import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartStore = defineStore("cart", () => {
  const cart = ref([]);

  function addToCart(product, count) {
    const productIdx = cart.value.findIndex(
      (element) => element.id === product.id
    );
    if (productIdx === -1) {
      cart.value.push({
        ...product,
        count,
      });
    }
  }

  return {
    cart,
    addToCart,
  };
});
