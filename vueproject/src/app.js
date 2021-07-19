// Vue package
import Vue from 'vue';
// Framevuerk main script
import Framevuerk from 'framevuerk/dist/framevuerk.js'
// Framevuerk main style
// Also you can include this via <link rel="stylesheet"> in your template
import 'framevuerk/dist/framevuerk.css'
// Activate
Vue.use(Framevuerk)
// Initializing App
new Vue({
    el: '#app'
})
