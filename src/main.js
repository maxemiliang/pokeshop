import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Add these after installing bootstrap.
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

createApp(App).use(router).mount('#app');
