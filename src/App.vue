<template>
  <div class="text-center">
    <q-item clickable v-ripple @click="navigateTo('/')">
      <q-item-section class="text-black title">Actividad</q-item-section>
    </q-item>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
  },
};
</script>

<style scoped>
.text-center {
  text-align: center; /* Centrar el texto horizontalmente */
  margin-top: 50px; /* Espacio superior para que se vea más centrado en la página */
}

.title {
  font-size: 24px; /* Tamaño de letra */
  font-weight: bold; /* Negrita */
  color: #333; /* Color del texto */
}
</style>
