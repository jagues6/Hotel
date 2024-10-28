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
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter(); // Obtener el router
    const lorem1 = ref("Nuestro chef profesional ofrece un servicio culinario excepcional. Disfruta de platillos preparados con los ingredientes más frescos y técnicas culinarias de alta calidad. Desde cenas privadas hasta eventos especiales, garantizamos una experiencia gastronómica inolvidable.");
    const lorem2 = ref("Ofrecemos una variedad de bebidas artesanales, desde cócteles únicos hasta vinos seleccionados cuidadosamente. Nuestro equipo de bartenders experimentados se asegura de que cada bebida esté hecha a la perfección, brindando una experiencia de sabor excepcional para cada ocasión.");
    const lorem3 = ref("En nuestro servicio de catering, proporcionamos una variedad de opciones de comida que se adaptan a todas las preferencias y dietas. Desde aperitivos hasta platos principales, cada bocado está diseñado para deleitar tus sentidos y hacer de tu evento un éxito.");
    const lorem4 = ref("Disfruta de una experiencia de spa única con nuestros servicios de relajación y bienestar. Desde masajes relajantes hasta tratamientos faciales rejuvenecedores, nuestro equipo profesional se dedica a cuidar de tu bienestar, proporcionándote el momento de calma que mereces.");
    const peopleOptions = ref([1, 2, 3, 4]); 

    const goToService = (service) => {

      if (service === 'chef') {
        router.push('/servicio-chef');
      } else if (service === 'bebidas') {
        router.push('/servicio-bebidas');
      } else if (service === 'comida') {
        router.push('/servicio-comida');
      } else if (service === 'spa') {
        router.push('/servicio-spa');
      }
    };

    const reservar = () => {
      // Lógica para reservar
      alert('Reserva realizada exitosamente.');
    };

    return {
      lorem1,
      lorem2,
      lorem3,
      lorem4,
      peopleOptions,
      goToService,
      reservar,
    };
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
.contactos{
  font-size: 3rem;
  color: #000000; 
  font-family: 'Brush Script MT', cursive; 
  text-align: center;
}
.footer {
  width: 100%; 
  background-color: #000; 
  color: #ffffff;
  padding: 20px 0; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.footer-content {
  width: 90%; 
  max-width: 1400px; 
  margin: 0 auto; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap; 
}

.contact-info, .social-media {
  margin: 10px 0; 
}

.contact-info p {
  margin: 5px 0; 
}

.social-media a {
  margin: 0 10px; 
}

div.q-page-container.page-container{
  padding: 0;
}
footer.footer{
  padding: 0;
  width: 120% ;
  margin-top: 20px;
  margin-left: -20px;
  margin-bottom: -20px;
}

</style>
