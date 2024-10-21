import { createApp } from 'vue';
import App from './App.vue';
import router from './routes/routes'; 
import { Quasar } from 'quasar';
import 'quasar/dist/quasar.css';
import iconSet from 'quasar/icon-set/material-icons';


const app = createApp(App);


app.use(Quasar, {
  plugins: {},
  iconSet: iconSet, 
});


app.use(router);


app.mount('#app');
