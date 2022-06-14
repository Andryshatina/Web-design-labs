<template>
  <div class="home">
    <HeaderComponent :total="cart.total_items" @open-cart="toggleCart" />
    <HomeImage />
    <Shop :products="products" @add-to-cart="handleAddToCart" />
    <AboutComponent />
    <Cart v-if="this.isCartVisible" :cart="cart" @close-cart="toggleCart" @update-quantity="handleUpdateQuantity"
      @remove-from-cart="handleRemoveFromCart" @empty-cart="handleEmptyCart" />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComponent from '@/components/Header.vue';
import AboutComponent from '@/components/About.vue'
import HomeImage from '@/components/HomeImage.vue'
import Shop from '@/components/Shop.vue'
import Cart from '@/components/Cart.vue';

export default {
  name: 'HomeView',
  components: {
    HeaderComponent,
    HomeImage,
    Shop,
    AboutComponent,
    Cart
  },
  data() {
    return {
      products: [],
      cart: null,
      isCartVisible: false
    }
  },
  created() {
    this.fetchProducts();
    this.fetchCart();
  },
  methods: {
    fetchProducts() {
      this.$commerce.products.list().then((products) => {
        this.products = products.data;
        console.log(this.products)
      }).catch((error) => {
        console.log('There is an error fetching products', error);
      });
    },
    fetchCart() {
      this.$commerce.cart.retrieve().then((cart) => {
        this.cart = cart;
      }).catch((error) => {
        console.log('There is an error fetching the cart', error);
      });
    },
    handleAddToCart(productId, quantity) {
      //console.log(quantity)
      this.$commerce.cart.add(productId, quantity).then((item) => {
        this.cart = item.cart;
      }).catch((error) => {
        console.log('There is an error fetching the cart', error);
      });
    },
    handleUpdateQuantity(lineItemId) {
      //console.log(lineItemId)
      this.$commerce.cart.update(lineItemId, { quantity: 2 }).then((resp) => {

        this.cart = resp.cart;
      }).catch((error) => {
        console.log('There is an error updating the cart items', error);
      });
    },
    handleRemoveFromCart(lineItemId) {
      this.$commerce.cart.remove(lineItemId).then((resp) => {
        this.cart = resp.cart;
      }).catch((error) => {
        console.log('There was an error updating the cart items', error);
      });
    },
    handleEmptyCart() {
      this.$commerce.cart.empty().then((resp) => {
        this.cart = resp.cart;
      }).catch((error) => {
        console.log('There was an error clearing your cart', error);
      });
    },
    toggleCart() {
      this.isCartVisible = !this.isCartVisible;
    },
  }

}

</script>
