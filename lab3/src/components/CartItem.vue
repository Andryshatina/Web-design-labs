<template>
	<div class="cart-item" data-id="${id}">
		<img :src="item.image.url" alt="product" />
		<div>
			<h4>{{ item.name }}</h4>
			<h5>{{ item.line_total.formatted_with_symbol }}</h5>
			<span class="remove-item" @click="removeFromCart">
				remove
			</span>
		</div>
		<div>
			<i class="fas fa-chevron-up" @click="() => updateQuantity(item.quantity + 1)"></i>
			<p class="item-amount">{{ item.quantity }}</p>
			<i class="fas fa-chevron-down" @click="() => updateQuantity(item.quantity - 1)"></i>
		</div>
	</div>
</template>

<script>
export default {
	name: 'CartItem',
	props: ['item'],
	methods: {
		updateQuantity(quantity) {
			console.log(quantity)
			if (quantity < 1) {
				return this.removeFromCart();
			}
			this.$emit('update-quantity', this.item.id, quantity);
		},
		removeFromCart() {
			this.$emit('remove-from-cart', this.item.id);
		}
	}
}
</script>

<style>
.cart-item {
	display: grid;
	align-items: center;
	grid-template-columns: auto 1fr auto;
	grid-column-gap: 1.5rem;
	margin: 1.5rem 0;
}

.cart-item img {
	width: 75px;
	height: 75px;
}

.cart-item h4 {
	font-size: 0.85rem;
	text-transform: capitalize;
	letter-spacing: 0.1rem;
}

.cart-item h5 {
	margin: 0.5rem 0;
	letter-spacing: 0.1rem;
}

.remove-item {
	color: grey;
	cursor: pointer;
}

.fa-chevron-up,
.fa-chevron-down {
	color: #2C3333;
	cursor: pointer;
}

.item-amount {
	text-align: center;
	margin-bottom: 0;
}
</style>