<template>
  <nav>
    <router-link to="/" v-if="$route.fullPath !== '/'">Home</router-link>
    <router-link to="/login" v-if="$route.fullPath !== '/'">Login</router-link>
  </nav>
  <router-view />
</template>


