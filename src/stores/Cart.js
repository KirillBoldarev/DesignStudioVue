/* eslint-disable prefer-const */
import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartStore = defineStore("cart", () => {
  const cart = ref([]);

  function addToCart(product, quantity) {
    const productIdx = cart.value.findIndex(
      (element) => element.id === product.id
    );
    if (productIdx === -1) {
      cart.value.push({
        ...product,
        quantity,
      });
    }
  }

  function changeQuantity(product, action) {
    if (action === "minus") {
      cart.value.forEach((item) => {
        if (item.id === product.id) {
          item.quantity === 1 ? (item.quantity = 1) : item.quantity--;
        }
      });
    }
    if (action === "plus") {
      cart.value.forEach((item) => {
        if (item.id === product.id) {
          item.quantity === 3 ? (item.quantity = 3) : item.quantity++;
        }
      });
    }
  }

  function deleteFromCart(product) {
    let index = cart.value.findIndex((item) => item.id === product.id);
    cart.value.splice(index, 1);
  }

  return {
    cart,
    addToCart,
    changeQuantity,
    deleteFromCart,
  };
});
