import { createRouter, createWebHashHistory } from 'vue-router';
import Inicio from '../components/Inicio.vue'; // Verifica que este archivo exista
import Habitaciones from '../components/Habitaciones.vue'; // Verifica que este archivo exista
import Servicio from '../components/Servicios.vue'; // Verifica que este archivo exista
import Deportes from '../components/Deportes.vue'; // Verifica que este archivo exista
import Contactos from '../components/Contactos.vue'; // Verifica que este archivo exista

const routes = [
  { path: '/', component: Inicio },
  { path: '/habitaciones', component: Habitaciones },
  { path: '/servicios', component: Servicio },
  { path: '/deportes', component: Deportes },
  { path: '/contactos', component: Contactos }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
