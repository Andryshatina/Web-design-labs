//import Vue from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import the Commerce object
import Commerce from '@chec/commerce.js';
console.log(process.env.VUE_APP_CHEC_PUBLIC_KEY)

// Create a new Commerce instance
const commerce = (typeof process.env.VUE_APP_CHEC_PUBLIC_KEY !== 'undefined')
	? new Commerce(process.env.VUE_APP_CHEC_PUBLIC_KEY)
	: null;

//console.log(commerce.products.list().then(products => products))

// Vue.mixin({
// 	beforeCreate() {
// 		this.$commerce = commerce
// 	}
// });

const app = createApp(App).use(router)

app.config.globalProperties.$commerce = commerce
app.mount('#app')
//console.log(this.$commerce)
