<template>
  <q-page class="q-pa-md">
    <h1 class="text-center">Los mejores deportes extremos</h1>
    <div class="q-gutter-md row justify-center">
      <div v-for="room in rooms" :key="room.id" class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
        <q-card class="my-card" flat bordered>
          <q-img :src="room.image" class="card-image" />

          <q-card-section>
            <div class="row no-wrap items-center">
              <div class="col text-h6 ellipsis title-italic">
                {{ room.name }}
              </div>
            </div>

            <custom-rating v-model="room.rating" :max-stars="5" />
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-subtitle1">
              ${{ room.price }}・{{ room.type }}
            </div>
            <div class="text-caption text-grey">
              {{ room.description }}
            </div>
          </q-card-section>

          <q-separator />

          <q-card-actions>
            <q-btn flat color="purple" label="Reservar" />
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
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
</template>


<script>
import { ref } from 'vue';
const CustomRating = {
  props: {
    modelValue: {
      type: Number,
      required: true,
    },
    maxStars: {
      type: Number,
      default: 5,
    },
  },
  emits: ['update:modelValue'],
  methods: {
    getStarImage(star) {
      return star <= this.modelValue
        ? 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Star_Full.png' 
        : 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Star_Empty.png'; 
    },
    updateRating(star) {
      this.$emit('update:modelValue', star);
    },
  },
  template: `
    <div>
      <img
        v-for="star in maxStars"
        :key="star"
        :src="getStarImage(star)"
        @click="updateRating(star)"
        class="star"
        style="width: 24px; cursor: pointer;"
      />
    </div>
  `,
};
    const rooms = ref([
      { id: 1, name: 'Paracaidismo y salto base', image: 'https://www.intercountries.com.ar/wp-content/uploads/2020/05/Tere.jpg', price: 300, type: 'Aventura', description: 'Salta desde un avión y experimenta la adrenalina de caer en picada.', rating: 5 },
      { id: 2, name: 'Snowboarding', image: 'https://blog.nols.edu/hubfs/Molly_Hagbrand_TVB-11.jpg', price: 150, type: 'Deporte', description: 'Desafía tus límites en impresionantes acantilados.', rating: 4 },
      { id: 3, name: 'Freerunning', image: 'https://img.redbull.com/images/c_crop,x_0,y_0,h_2133,w_2844/c_fill,w_800,h_572/q_auto,f_auto/redbullcom/2022/4/20/onymf5vo9ungvzpg4ucm/stefan-dollinger-freerunning-atenas', price: 100, type: 'Aventura', description: 'Atrapa la ola perfecta en las mejores playas.', rating: 4 },
      { id: 4, name: 'Bungee Jumping', image: 'https://blog.jeep.com.ec/hubfs/7%20deportes%20extremos%20para%20realizar%20outdoor%20despu%C3%A9s%20de%20la%20cuarentena-1.png', price: 250, type: 'Aventura', description: 'Salta al vacío desde un puente y siente la adrenalina.', rating: 5 },
      { id: 5, name: 'Rafting', image: 'https://media.traveler.es/photos/622a11b662d4f113d6eb070c/16:9/w_2560%2Cc_limit/raf.jpg', price: 200, type: 'Deporte', description: 'Navega ríos tumultuosos en equipo y disfruta la aventura.', rating: 4 },
      { id: 6, name: 'Kitesurf', image: 'https://res.cloudinary.com/manawa/image/upload/f_auto,c_limit,w_1920,q_auto/articles/62409/Kite', price: 180, type: 'Aventura', description: 'Conquista el agua y el viento en esta emocionante actividad.', rating: 5 },
      { id: 7, name: 'Esquí', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnIRB8ZaJ-KtJPQKk5kYSm0L4JPT1ZSUtwdg&s', price: 220, type: 'Deporte', description: 'Deslízate por las montañas cubiertas de nieve.', rating: 4 },
      { id: 8, name: 'Mountain Bike', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQJ3d23DbZUQnGCUunWaSpR4Zne2jFacme5w&s', price: 120, type: 'Aventura', description: 'Recorre senderos desafiantes en bicicleta de montaña.', rating: 4 },
      { id: 9, name: 'Esnórquel', image: 'https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_image__small/public/temas/snorkel_p.jpg', price: 90, type: 'Deporte', description: 'Explora el fondo del mar con equipos de esnórquel.', rating: 4 },
      { id: 10, name: 'Canyoning', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9PVcuX1M1JLiFlS1g-jY_i6_WLGwyNbF4pw&s', price: 160, type: 'Aventura', description: 'Desciende por cañones con agua y rocas.', rating: 5 },
      { id: 11, name: 'Ski Surf', image: 'https://i.ytimg.com/vi/JMczFubQExg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCNZLXKr507ZGyGuPwXBQIsYFNpAg', price: 140, type: 'Aventura', description: 'Una combinación de esquí y surf en el mar.', rating: 4 },
      { id: 12, name: 'Slackline', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfIcd50COqnMMLIvPpaNopK2_q01j5CTJVtg&s', price: 60, type: 'Deporte', description: 'Equilibrio en una cuerda suspendida entre dos puntos.', rating: 3 },
      { id: 13, name: 'Motocross', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjtpOykvTke_G2dB6qMQZin0hxi2pSdWmaUQ&s', price: 300, type: 'Aventura', description: 'Desafía la gravedad en terrenos difíciles con tu moto.', rating: 5 },
      { id: 14, name: 'Parkour', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyRo3k3xdYx8SUz9CbY9KrdM0lxsV8VLVMmA&s', price: 80, type: 'Deporte', description: 'Salta y corre por la ciudad superando obstáculos.', rating: 4 },
    ]);

    return {
      rooms,
    };

</script>

<style scoped>
.my-card {
  background-color: #333; 
  color: white; 
  height: 420px; 
}

.card-image {
  height: 200px; 
  object-fit: cover;
}

.star {
  width: 24px; 
  cursor: pointer; 
}

.q-page {
  overflow-y: auto; 
  min-height: 100vh;
}

.title-italic {
  font-family: 'Times New Roman', Times, serif;
}
.text-center{
  position: relative; 
  z-index: 2; 
  font-size: 2.5rem; 
  color: #FFD700; 
  font-family: 'Brush Script MT', cursive;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4); 
  transition: transform 0.3s ease; 
  text-align: center; 
  animation: bounceTitle 2s ease infinite; 
}
.q-page {

  min-height: 100vh;
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
  width: 102.2%;
  margin-top: 20px;
  margin-left: -20px;
  margin-bottom: -20px;
}
</style>
