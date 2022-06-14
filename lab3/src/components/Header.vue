<template>
	<nav class="navbar navbar-expand-sm navbar-dark bg-dark" style="position: sticky;">
		<div class="container">
			<a href="#/" class="navbar-brand">
				<img src="../assets/logo/logo.svg" height="30" alt="Bobby">
			</a>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse"
				data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
				aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarToggleExternalContent">
				<ul class="navbar-nav mr-auto">
					<li class="nav-item active">
						<a class="nav-link active text-white" href="#">Shop</a>
					</li>
					<li class="nav-item">
						<a class="nav-link active text-white" href="#">About Us</a>
					</li>
				</ul>
			</div>
			<div class="d-flex align-items-center">
				<a class="me-3 nav-link text-white" href="#/login">Log In</a>
			</div>
			<div class="cart-btn" @click="openCart">
				<span class="nav-icon">
					<i class="fas fa-cart-plus"></i>
				</span>
				<div class="cart-items">{{ total }}</div>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	name: 'HeaderComponent',
	props: ['total'],
	methods: {
		openCart() {
			this.$emit('open-cart');
		}
	}
}
</script>

<style>
.navbar {
	position: sticky;
	top: 0;
	z-index: 1;
}

.cart-btn {
	position: relative;
	cursor: pointer;
	color: #2666CF;
}

.nav-icon {
	font-size: 26px;
}

.cart-items {
	position: absolute;
	top: -8px;
	right: -8px;
	padding: 0 3px;
	border-radius: 30%;
	color: white;
	background: #dd2c35;
}
</style>