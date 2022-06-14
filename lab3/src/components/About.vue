<template>
	<section class="about">
		<div class="container" id="about">
			<div class="row">
				<div class="col-12 text-center mb-5">
					<h2>About Us</h2>
				</div>
			</div>
			<div class="row">
				<div class="col-xl-4 col-md-6 col-sm-12">
					<div class="itd-circle"><i class="icon-gift"></i></div>
					<div class="text-center">Buy and get a free gift</div>
					<div class="line"></div>
				</div>
				<div class="col-xl-4 col-md-6 col-sm-12">
					<div class="itd-circle"><i class="icon-clock"></i></div>
					<div class="text-center">Few clicks to get</div>
					<div class="line"></div>
				</div>
				<div class="col-xl-4 col-md-6 col-sm-12">
					<div class="itd-circle"><i class="icon-basket"></i></div>
					<div class="text-center">Easy to buy</div>
					<div class="line"></div>
				</div>
				<div class="col-xl-4 col-md-6 col-sm-12">
					<div class="itd-circle"><i class="icon-chat"></i></div>
					<div class="text-center">We'll answer your questions</div>
					<div class="line"></div>
				</div>
				<div class="col-xl-4 col-md-6 col-sm-12">
					<div class="itd-circle"><i class="icon-location"></i></div>
					<div class="text-center">Delivery around the world</div>
					<div class="line"></div>
				</div>
				<div class="col-xl-4 col-md-6 col-sm-12">
					<div class="itd-circle"><i class="icon-smile"></i></div>
					<div class="text-center">999 positive reviews</div>
					<div class="line"></div>
				</div>
				<div class="col-xl-4 col-md-6 col-sm-12">
					<div class="itd-circle"><i class="icon-dollar"></i></div>
					<div class="text-center">Low prices</div>
					<div class="line"></div>
				</div>
				<div class="col-xl-4 col-md-6 col-sm-12">
					<div class="itd-circle"><i class="icon-cc-paypal"></i></div>
					<div class="text-center">Any payment system</div>
					<div class="line"></div>
				</div>
				<div class="col-xl-4 col-md-6 col-sm-12">
					<div class="itd-circle"><i class="icon-users"></i></div>
					<div class="text-center">Big comunity</div>
					<div class="line"></div>
				</div>
			</div>
		</div>
	</section>
</template>

<script scxoped>
export default {
	name: 'AboutItem'
}
</script>

<style>
.about {
	background-color: #F5F2E7;
	padding: 100px;
}

.about i {
	font-size: 25px;
	color: #2C3333;
}

.itd-circle {
	margin: 0 auto 15px;
	width: 70px;
	height: 70px;
	border: 3px solid #2C3333;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
}

.line {
	width: 100px;
	height: 3px;
	background-color: #2666CF;
	margin: 15px auto 30px;
}
</style>