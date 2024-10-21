<template>
  <div class="q-pa-md" style="overflow-y: auto; height: auto;">
    <div class="q-gutter-md" style="display: flex; flex-direction: column; align-items: center; width: 100%;">
      
      <!-- Tarjeta de Servicio 1 -->
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

      <!-- Tarjeta de Servicio 2 -->
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

      <!-- Tarjeta de Servicio 3 -->
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

      <!-- Tarjeta de Servicio 4 -->
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
      <footer class="footer">
      <div class="footer-content">
        <div class="contact-info">
          <p>Email: contacto@hotel.com</p>
          <p>Teléfono: +57 1 2345678</p>
          <p>
            Dirección: Calle Falsa 123, San Gil 
            <a href="https://www.google.com/maps/place/Calle+Falsa+123,+San+Gil,+Santander/@6.5714846,-73.1341889,15z/data=!4m6!3m5!1s0x8e4a1cb34ebf89f7:0xa3ab7d2b490a2b94!8m2!3d6.5714846!4d-73.1341889!16s%2Fg%2F11gq_pnxtk?entry=ttu" target="_blank">
              <img src="https://img.icons8.com/ios-filled/50/ffffff/map-marker.png" alt="Mapa" />
            </a>
          </p>
        </div>
        <div class="social-media">
          <a href="https://www.facebook.com" target="_blank">
            <img src="https://img.icons8.com/ios-filled/50/ffffff/facebook-new.png" alt="Facebook" />
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <img src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png" alt="Instagram" />
          </a>
          <a href="https://www.twitter.com" target="_blank">
            <img src="https://img.icons8.com/ios-filled/50/ffffff/twitter-squared.png" alt="Twitter" />
          </a>
        </div>
      </div>
    </footer>
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
      peopleOptions: [1, 2, 3, 4], // Opciones para seleccionar el número de personas
    };
  },
  methods: {
    goToService(service) {
      // Redirigir a la ruta correspondiente según el servicio
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
      // Lógica para reservar
      alert('Reserva realizada exitosamente.');
    },
  },
};
</script>

<style scoped>
.my-card {
  width: 95%; /* Aumenta el tamaño de las tarjetas */
  max-width: 900px; /* Ajuste del límite máximo de las tarjetas */
  margin: 20px 0; /* Espacio vertical entre las tarjetas */
  height: auto; /* Ajusta la altura de las tarjetas según su contenido */
  background-color: black; /* Fondo negro para las tarjetas */
}

.text-section {
  padding: 20px; /* Espacio interno para el texto */
  font-size: 18px; /* Aumenta el tamaño de la letra */
  font-family: 'Times New Roman', Times, serif; /* Fuente elegante */
  background-color: black; /* Fondo negro detrás del texto */
  color: yellow; /* Color del texto en amarillo */
}

.actions {
  display: flex; /* Alinea los botones en fila */
  justify-content: space-between; /* Espacio entre los botones */
  margin-top: 10px; /* Espacio encima de los botones */
}

.personas-button,
.reservar-button {
  background-color: black; /* Fondo negro para los botones */
  color: yellow; /* Texto amarillo para los botones */
  border: 2px solid white; /* Borde blanco para los botones */
}

.personas-button:hover,
.reservar-button:hover {
  background-color: #333; /* Cambio de color al pasar el ratón */
}

.q-pa-md {
  padding: 20px; /* Espacio alrededor del contenido principal */
}

.col-6 {
  width: 50%;
}

@media (max-width: 768px) {
  .my-card {
    width: 100%; /* Ajusta el ancho de las tarjetas en pantallas pequeñas */
  }
  .image-section {
    width: 100%; /* Ajusta el ancho de la imagen en pantallas pequeñas */
    margin-top: 10px; /* Espacio entre el texto y la imagen */
  }
}
.contactos{
  font-size: 3rem; /* Tamaño del título */
  color: #000000; 
  font-family: 'Brush Script MT', cursive; /* Fuente elegante */
  text-align: center; /* Centrado */
}
.footer {
  width: 100%; /* Ocupa todo el ancho de la página */
  background-color: #000; /* Puedes cambiar el color si lo deseas */
  color: #ffffff;
  padding: 20px 0; /* Espacio arriba y abajo del contenido */
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.footer-content {
  width: 90%; /* Ajusta el contenido al 90% del ancho para dejar un margen */
  max-width: 1400px; /* Limita el ancho máximo */
  margin: 0 auto; /* Centra el contenido */
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap; /* Permite que el contenido se ajuste en pantallas pequeñas */
}

.contact-info, .social-media {
  margin: 10px 0; /* Espacio entre elementos */
}

.contact-info p {
  margin: 5px 0; /* Espacio entre las líneas de contacto */
}

.social-media a {
  margin: 0 10px; /* Espacio entre los íconos de redes sociales */
}

div.q-page-container.page-container{
  padding: 0;
}
footer.footer{
  padding: 0;
  width: 1902px;
  margin-top: 20px;
  margin-left: -20px;
  margin-bottom: -20px;
}
</style>
