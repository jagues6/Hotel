<template>
  <div class="q-pa-md">
    <q-layout view="hHh Lpr lff" container class="shadow-2 full-height">
      <q-header elevated :class="$q.dark.isActive ? 'bg-primary' : 'bg-black'">
        <q-toolbar class="toolbar-custom">
          <q-btn flat @click="toggleDrawer" round dense>
            <img
              src="https://banner2.cleanpng.com/20190826/keu/transparent-interface-and-web-icon-menu-button-of-three-horizo-5d63c2541bed33.4910190815668189001144.jpg"
              alt="menu"
              class="menu-icon"
            />
          </q-btn>
          <q-space />
          <q-btn
            flat
            @click="navigateTo('/')"
            class="titulo-btn"
            style="text-align: center; padding: 0; height: 100%;"
          >
            <h1 class="titulo-texto">Hotel Sueños Dorados</h1>
          </q-btn>
          <q-space />
          <q-btn flat @click="openLoginDialog" round dense class="login-button">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1177/1177568.png"
              alt="login"
              class="login-icon"
            />
          </q-btn>
        </q-toolbar>
      </q-header>

      <q-drawer v-model="drawer" show-if-above :width="200" :breakpoint="500" class="bg-black">
        <q-scroll-area class="fit">
          <q-list padding class="menu-list">
            <q-item clickable v-ripple @click="navigateTo('/')">
              <q-item-section class="text-yellow">Inicio</q-item-section>
            </q-item>
            <q-item clickable v-ripple @click="navigateTo('/habitaciones')">
              <q-item-section class="text-yellow">Habitaciones</q-item-section>
            </q-item>
            <q-item clickable v-ripple @click="navigateTo('/servicios')">
              <q-item-section class="text-yellow">Servicios</q-item-section>
            </q-item>
            <q-item clickable v-ripple @click="navigateTo('/deportes')">
              <q-item-section class="text-yellow">Deportes</q-item-section>
            </q-item>
            <q-item clickable v-ripple @click="navigateTo('/contactos')">
              <q-item-section class="text-yellow">Contactos</q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
      </q-drawer>

      <div class="background-movement"></div>

      <q-page-container ref="pageContainer" class="page-container">
        <router-view />
        
        <div v-if="showContact.value" class="contact-footer">
          <p>Contacto: contacto@hotelsuenosdorados.com</p>
          <p>Hotel Sueños Dorados</p>
        </div>
      </q-page-container>

      <q-dialog v-model="loginDialog">
        <q-card class="login-card">
          <q-card-section class="q-pt-none">
            <div class="text-h6 text-center">Iniciar Sesión</div>
            <q-input
              filled
              v-model="login.email"
              label="Correo Electrónico"
              type="email"
              class="q-mt-md"
              dense
              autofocus
            />
            <q-input
              filled
              v-model="login.password"
              label="Contraseña"
              type="password"
              class="q-mt-md"
              dense
            />
          </q-card-section>
          <q-card-actions align="right">
            <q-btn flat label="Cancelar" color="negative" @click="closeLoginDialog" />
            <q-btn flat label="Ingresar" color="primary" @click="submitLogin" />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </q-layout>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2';

export default {
  setup() {
    const router = useRouter();
    const drawer = ref(false);
    const loginDialog = ref(false);
    const showContact = ref(false);
    const login = ref({
      email: '',
      password: '',
    });

    const toggleDrawer = () => {
      drawer.value = !drawer.value;
    };

    const navigateTo = (route) => {
      router.push(route);
      drawer.value = false; // Cierra el menú al navegar
    };

    const openLoginDialog = () => {
      loginDialog.value = true;
    };

    const closeLoginDialog = () => {
      loginDialog.value = false;
      login.value.email = '';
      login.value.password = '';
    };

    const submitLogin = () => {
      if (!login.value.email || !login.value.password) {
        Swal.fire({
          title: "¡Por favor completa todos los campos!",
          icon: "warning",
          confirmButtonText: "OK"
        });
        return;
      }

      // Aquí podrías agregar lógica de autenticación real
      alert(`Bienvenido, ${login.value.email}`);
      closeLoginDialog();
    };

    const checkScroll = () => {
      const pageContainer = document.querySelector('.page-container');

      if (pageContainer.scrollHeight - pageContainer.scrollTop <= pageContainer.clientHeight + 10) {
        showContact.value = true;
      } else {
        showContact.value = false;
      }
    };

    onMounted(() => {
      const pageContainer = document.querySelector('.page-container');
      pageContainer.addEventListener('scroll', checkScroll);
    });

    onBeforeUnmount(() => {
      const pageContainer = document.querySelector('.page-container');
      pageContainer.removeEventListener('scroll', checkScroll);
    });

    return {
      drawer,
      loginDialog,
      login,
      showContact,
      toggleDrawer,
      navigateTo,
      openLoginDialog,
      closeLoginDialog,
      submitLogin,
    };
  },
};
</script>

<style scoped>
.q-pa-md {
  padding: 0;
  height: 100vh;
  position: relative;
  overflow: hidden;
}

.shadow-2 {
  box-shadow: none;
}

.full-height {
  height: 100vh;
}

.toolbar-custom {
  justify-content: space-between;
  align-items: center;
}

.menu-icon {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid #FFD700;
  padding: 4px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.menu-icon:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.titulo-btn {
  width: 100%;
  text-align: center;
  padding: 0;
  height: 100%;
}

.titulo-texto {
  position: relative;
  z-index: 2;
  font-size: 3rem;
  color: #FFD700;
  font-family: 'Brush Script MT', cursive;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease;
  text-align: center;
  animation: bounceTitle 2s ease infinite;
  cursor: pointer;
}

@keyframes bounceTitle {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

.titulo-texto:hover {
  transform: scale(1.1);
}

.background-movement {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(270deg, #7200a2, #9a0000, #001c80);
  background-size: 600% 600%;
  animation: backgroundMovement 10s ease infinite;
  z-index: -1;
}

@keyframes backgroundMovement {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.page-container {
  padding: 20px;
  z-index: 1;
}

.login-card {
  width: 400px;
  border-radius: 10px;
}

.login-icon {
  width: 25px;
  height: 25px;
}

.menu-list .text-yellow {
  color: #FFD700;
}

.contact-footer {
  background-color: rgba(0, 0, 0, 0.8);
  color: #FFD700;
  padding: 15px;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  transition: opacity 0.3s ease;
}
</style>
