<template>
	<div class="card bg-dark text-white rounded-0">
		<img src="../assets/homePage/Watches_on_man2.jpg" class="card-img " alt="homeImage">
		<div class="card-img-overlay text-center onImage" style="max-width: 40rem;">
			<h2 class="card-title">Bobby's watches</h2>
			<p class="card-text">The best man's watches to buy!</p>
			<h6 class="card-text text-success">Free Delivery!</h6>
			<a class="nav-link active text-white bg-secondary mx-auto rounded" href="#"
				style="max-width: 18rem; font-size: large; font-weight: bold;">Buy now!</a>

		</div>
	</div>
</template>

<script>
export default {
	name: 'HomeImage'
}
</script>

<style scoped>
@media (min-width: 850px) {
	.onImage {
		padding: 6rem;
	}
}

@media (min-width: 1200px) {
	.onImage {
		padding: 12rem;
		font-size: 1.5rem;
	}

}
</style>