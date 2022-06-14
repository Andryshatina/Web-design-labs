<template>
	<div class="cart-overlay overlayActive">
		<!-- cart aside -->
		<div class="cart cartActive">
			<span class="close-cart" @click="closeCart">
				<i class="fas fa-window-close"> </i>
			</span>
			<h2>your cart</h2>
			<div class="cart-content">
				<CartItem v-for="lineItem in cart.line_items" :key="lineItem.id" :item="lineItem" class="cart__inner"
					@update-quantity="$emit('update-quantity', $event)"
					@remove-from-cart="$emit('remove-from-cart', $event)" />

				<!-- cart item -->
				<!-- end of cart item -->
			</div>
			<div class="cart-footer" v-if="cart.line_items.length">
				<h3>your total: <span class="cart-total">{{ cart.subtotal.formatted_with_symbol }}</span></h3>
				<button class="clear-cart banner-btn" @click="emptyCart">clear cart</button>
			</div>
		</div>
		<!-- end of cart aside -->
	</div>
</template>

<script>
import CartItem from './CartItem.vue'
export default {
	name: 'CartComponent',
	components: { CartItem },
	props: ['cart'],
	methods: {
		closeCart() {
			this.$emit('close-cart')
		},
		emptyCart() {
			this.$emit('empty-cart');
		}
	}
	// methods: {
	// 	/**
	// 	 * Updates line_items in cart
	// 	 * https://commercejs.com/docs/sdk/cart/#update-cart
	// 	 *  
	// 	 * @param {string} lineItemId ID of the cart line item being updated
	// 	 * @param {number} quantity New line item quantity to update
	// 	 */
	// 	handleUpdateQuantity(lineItemId, quantity) {
	// 		this.$commerce.cart.update(lineItemId, { quantity }).then((resp) => {
	// 			this.cart = resp.cart;
	// 		}).catch((error) => {
	// 			console.log('There is an error updating the cart items', error);
	// 		});
	// 	},
	// }
}
</script>

<style>
.cart-overlay {
	position: fixed;
	top: 0;
	right: 0;
	width: 100%;
	height: 100%;
	transition: all 0.3s linear;
	background: rgba(25, 33, 71, 0.5);
	z-index: 2;
	visibility: hidden;
}

.cart {
	position: fixed;
	top: 0;
	right: 0;
	width: 100%;
	height: 100%;
	overflow-y: auto;
	z-index: 3;
	background: rgb(231, 226, 221);
	padding: 1.5rem;
	transition: all 0.3s linear;
	transform: translateX(100%);
}

.cartActive {
	transform: translateX(0);
}

.overlayActive {
	visibility: visible;
}

@media screen and (min-width: 768px) {
	.cart {
		width: 30vw;
		min-width: 450px;
	}
}

.close-cart {
	font-size: 1.7rem;
	cursor: pointer;
}

.cart h2 {
	text-transform: capitalize;
	text-align: center;
	letter-spacing: 0.1rem;
	margin-bottom: 2rem;
}

.cart-footer {
	margin-top: 2rem;
	letter-spacing: 0.1rem;
	text-align: center;
}

.cart-footer h3 {
	text-transform: capitalize;
	margin-bottom: 1rem;
}

.banner-btn {
	padding: 1rem 3rem;
	text-transform: uppercase;
	letter-spacing: 0.1rem;
	font-size: 1rem;
	background: #2C3333;
	color: #e1fdc1;
	border: 1px solid var(--primaryColor);
	transition: all 0.3s linear;
	cursor: pointer;
}

.banner-btn:hover {
	background: transparent;
	color: var(--primaryColor);
}
</style>