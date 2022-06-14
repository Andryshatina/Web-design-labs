<template>
	<div class="col-xl-4 col-md-6 col-sm-12 crd_item product">
		<div class="card crd_itself mb-5" style="width: 18rem; text-align: center;">
			<img :src="product.image.url" class="card-img-top crd_image pt-2" alt="image1">
			<div class="card-body">
				<p class="card-text text-center" style="font-size: 24px; font-weight: 600;">{{ product.name }}</p>
				<p class="card-text crd-price text-center" style="font-size: 24px; font-weight: 600;">{{
						product.price.formatted_with_symbol
				}}
				</p>
				<button class="bag-btn" data-id="${id}" @click="addToCart">
					<i class="fas fa-shopping-cart"></i>
					{{ 'Add to Cart' }}
				</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ProductItem',
	props: ['product'],
	methods: {
		addToCart() {
			this.$emit('add-to-cart', this.product.id, 1);
		}
	}
	// created() {
	// 	// props are exposed on `this`
	// 	console.log(this.image)
	// }
}
</script>

<style>
.crd_item {
	display: flex;
	justify-content: center;
	align-items: center;
}

.crd_itself {
	border-radius: 10%;
}

.crd_image {
	border-radius: 15%;
}

.crd-price {
	color: forestgreen;
}

.bag-btn {
	color: #2666CF;
	background: var(--primaryColor);
	border: none;
	text-transform: uppercase;
	letter-spacing: var(--mainSpacing);
	font-weight: bold;
	transition: var(--mainTransition);
	cursor: pointer;
}

.bag-btn:hover {
	color: forestgreen;
}

.fa-shopping-cart {
	margin-right: 0.5rem;
}
</style>