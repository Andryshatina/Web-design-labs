<template>
	<section class="shop" id="shop" style="background-color: #DAE1E7;">
		<div class="container pb-5 pt-5">
			<div class="row">
				<div class="col-12 text-center mb-5">
					<h2>Shop</h2>
				</div>
			</div>
			<div class="row products-center">

				<!-- <Product :image="require('../assets/watches/watch2.webp')" title="dsl" price="1" /> -->
				<!-- <Product v-for="product in products" :key="product.id" :image="product.image" :title="product.title"
					:price="product.price" /> -->
				<Product v-for="product in products" :key="product.id" :product="product"
					@add-to-cart="$emit('add-to-cart', $event)" />
				<!-- Watches here -->
			</div>
		</div>
	</section>
</template>

<script>
import Product from './Product.vue';
//import products from '../products.js';
export default {
	name: "ShopComponent",
	props: {
		products: {
			type: Array,
			default: () => [],
		},
	},
	components: { Product },
	// data() {
	// 	return {
	// 		products: products
	// 	}
	// }
}
</script>