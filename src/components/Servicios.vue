<template>
  <div class="q-pa-md" style="overflow-y: auto; height: auto;">
    <div class="q-gutter-md" style="display: flex; flex-direction: column; align-items: center; width: 100%;">

      <q-card class="my-card" flat bordered>
        <q-card-section horizontal>
          <q-card-section class="text-section">
            <p>{{ lorem1 }}</p>
            <div class="actions">
              <q-btn class="personas-button">Personas</q-btn>
              <q-btn class="reservar-button">Reservar</q-btn>
            </div>
          </q-card-section>
          <q-img
            class="col-6"
            src="https://isu.edu.mx/wp-content/uploads/2022/08/Cuantos-anos-se-requieren-para-estudiar-la-carrera-de-Chef.jpg"
            @click="goToService('chef')"
          />
        </q-card-section>
      </q-card>

      <q-card class="my-card" flat bordered>
        <q-card-section horizontal>
          <q-img
            class="col-6"
            src="https://termosyeti.com/wp-content/uploads/2023/10/bebidas-alcoholicas.jpg"
            @click="goToService('bebidas')"
          />
          <q-card-section class="text-section">
            <p>{{ lorem2 }}</p>
            <div class="actions">
              <q-btn class="personas-button">Personas</q-btn>
              <q-btn class="reservar-button">Reservar</q-btn>
            </div>
          </q-card-section>
        </q-card-section>
      </q-card>

      <q-card class="my-card" flat bordered>
        <q-card-section horizontal>
          <q-card-section class="text-section">
            <p>{{ lorem3 }}</p>
            <div class="actions">
              <q-btn class="personas-button">Personas</q-btn>
              <q-btn class="reservar-button">Reservar</q-btn>
            </div>
          </q-card-section>
          <q-img
            class="col-6"
            src="https://img.hellofresh.com/w_3840,q_auto,f_auto,c_fill,fl_lossy/hellofresh_website/es/cms/SEO/recipes/albondigas-caseras-de-cerdo-con-salsa-barbacoa.jpeg"
            @click="goToService('comida')"
          />
        </q-card-section>
      </q-card>

      <q-card class="my-card" flat bordered>
        <q-card-section horizontal>
          <q-img
            class="col-6"
            src="https://www.komoder.es/images/blog/blog13.webp"
            @click="goToService('spa')"
          />
          <q-card-section class="text-section">
            <p>{{ lorem4 }}</p>
            <div class="actions">
              <q-btn class="personas-button">Personas</q-btn>
              <q-btn class="reservar-button">Reservar</q-btn>
            </div>
          </q-card-section>
        </q-card-section>
      </q-card>
      <div class="contactos">
        <h6>Contactos <br> 3222343245 <br>nos ubicamos en <br> carrera 6#20-16</h6>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lorem1: "Nuestro chef profesional ofrece un servicio culinario excepcional. Disfruta de platillos preparados con los ingredientes más frescos y técnicas culinarias de alta calidad. Desde cenas privadas hasta eventos especiales, garantizamos una experiencia gastronómica inolvidable.",
      lorem2: "Ofrecemos una variedad de bebidas artesanales, desde cócteles únicos hasta vinos seleccionados cuidadosamente. Nuestro equipo de bartenders experimentados se asegura de que cada bebida esté hecha a la perfección, brindando una experiencia de sabor excepcional para cada ocasión.",
      lorem3: "En nuestro servicio de catering, proporcionamos una variedad de opciones de comida que se adaptan a todas las preferencias y dietas. Desde aperitivos hasta platos principales, cada bocado está diseñado para deleitar tus sentidos y hacer de tu evento un éxito.",
      lorem4: "Disfruta de una experiencia de spa única con nuestros servicios de relajación y bienestar. Desde masajes relajantes hasta tratamientos faciales rejuvenecedores, nuestro equipo profesional se dedica a cuidar de tu bienestar, proporcionándote el momento de calma que mereces.",
      peopleOptions: [1, 2, 3, 4],
    };
  },
  methods: {
    goToService(service) {
      if (service === 'chef') {
        this.$router.push('/servicio-chef');
      } else if (service === 'bebidas') {
        this.$router.push('/servicio-bebidas');
      } else if (service === 'comida') {
        this.$router.push('/servicio-comida');
      } else if (service === 'spa') {
        this.$router.push('/servicio-spa');
      }
    },
    reservar() {
      alert('Reserva realizada exitosamente.');
    },
  },
};
</script>

<style scoped>
.my-card {
  width: 95%;
  max-width: 900px;
  margin: 20px 0;
  height: auto;
  background-color: black;
}

.text-section {
  padding: 20px;
  font-size: 18px;
  font-family: 'Times New Roman', Times, serif;
  background-color: black;
  color: yellow;
}

.actions {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.personas-button,
.reservar-button {
  background-color: black;
  color: yellow;
  border: 2px solid white;
}

.personas-button:hover,
.reservar-button:hover {
  background-color: #333;
}

.q-pa-md {
  padding: 20px;
}

.col-6 {
  width: 50%;
}

@media (max-width: 768px) {
  .my-card {
    width: 100%;
  }
  .image-section {
    width: 100%;
    margin-top: 10px;
  }
}
.contactos {
  font-size: 3rem;
  color: #000000;
  font-family: 'Brush Script MT', cursive;
  text-align: center;
}
</style>
