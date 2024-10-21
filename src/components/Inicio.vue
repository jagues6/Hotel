<template>
  <div class="q-pa-md row items-center q-gutter-md justify-center">
    <div class="destination-header">
      <h2>¿A dónde vas?</h2>
    </div>

    <div class="button-container">
      <q-btn
        class="small-button"
        :label="selectedDestination || 'Seleccionar Destino'"
        @click="openDestinationDialog"
      />
      <q-btn
        class="small-button"
        :label="selectedDate || 'Seleccionar Fecha'"
        @click="openDateDialog"
      />
      <q-btn
        class="small-button"
        :label="selectedPeople !== null ? `Seleccionar Personas (${selectedPeople})` : 'Seleccionar Personas'"
        @click="openPeopleDialog"
      />
      <q-btn class="small-button" label="Buscar" @click="performSearch" />
    </div>

    <q-card class="my-cards" flat>
      <q-card-section class="card-content">
        <div class="text-section">
          <div class="text-h6">El Hotel Sueños Dorados</div>
          <div class="text-subtitle2">by John Doe</div>
          <div class="story">
            En una pequeña ciudad costera, el Hotel Sueños Dorados, construido por Don Fernando en los años 60, se convirtió en un refugio de felicidad. Con sus coloridas cerámicas y acogedoras habitaciones, el hotel contaba leyendas mágicas.
            <br /><br />
            Se decía que en las noches de luna llena, los huéspedes escuchaban risas y melodías antiguas. Una familia encontró una brújula dorada que los llevó a una aventura mágica en el mar, rodeados de criaturas fantásticas.
            <br /><br />
            Desde entonces, el hotel se llenó de risas y relatos de magia, recordando a todos que siempre hay un rincón donde los sueños pueden hacerse realidad.
          </div>
        </div>

        <q-img
          class="image-section"
          src="https://media.istockphoto.com/id/472899538/es/foto/la-entrada-del-centro-de-la-ciudad-de-cleveland-y-est%C3%A1-taxi.jpg?s=612x612&w=0&k=20&c=L9IOUVmEmgFFUYsQXUgSqNrsmsaTjIWkdQ96Ibb29As="
          style="border-radius: 12px;"
          @click="goToRooms"
        />
      </q-card-section>
    </q-card>

    <q-dialog v-model="destinationDialog">
      <q-card>
        <q-card-section>
          <div class="text-h6">Selecciona tu destino</div>
          <div v-for="destination in filteredDestinations" :key="destination">
            <q-btn @click="selectDestination(destination)" :label="destination" />
          </div>
        </q-card-section>
        <q-card-actions>
          <q-btn label="Cerrar" @click="closeDestinationDialog" />
        </q-card-actions>
      </q-card>
    </q-dialog>


    <q-dialog v-model="dateDialog">
      <q-card>
        <q-card-section>
          <div class="text-h6">Selecciona una fecha</div>
          <q-input v-model="selectedDate" type="date" />
        </q-card-section>
        <q-card-actions>
          <q-btn label="Aceptar" @click="closeDateDialog" />
          <q-btn label="Cancelar" @click="closeDateDialog" />
        </q-card-actions>
      </q-card>
    </q-dialog>


    <q-dialog v-model="peopleDialog">
      <q-card>
        <q-card-section>
          <div class="text-h6">Selecciona el número de personas (máx. 4)</div>
          <q-select
            v-model="selectedPeople"
            :options="peopleOptions"
            label="Número de Personas"
            hide-dropdown-icon
            @change="updatePeopleLabel"
          />
        </q-card-section>
        <q-card-actions>
          <q-btn label="Aceptar" @click="closePeopleDialog" />
          <q-btn label="Cancelar" @click="closePeopleDialog" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>


  <div class="special-text">
    <h3>Nuestras habitaciones especiales</h3>
  </div>


  <div class="card-container">
    <q-card class="my-card" @click="goToRooms">
      <q-img
        src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/29/6a/5d/black.jpg?w=700&h=-1&s=1"
      >
        <div class="absolute-bottom text-subtitle2 text-center">
          Suite de Lujo
        </div>
      </q-img>
    </q-card>

    <q-card class="my-card" @click="goToRooms">
      <q-img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPe3eKtKfq-TSYmXAvdxyK2yRwy9dyh4Mk4A&s"
      >
        <div class="absolute-bottom text-subtitle2 text-center">
          Habitación Familiar
        </div>
      </q-img>
    </q-card>

    <q-card class="my-card" @click="goToRooms">
      <q-img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj4nxjtSHvZEi3c715wxBtrfguaL2DpUP4Og&s"
      >
        <div class="absolute-bottom text-subtitle2 text-center">
          Habitación Doble
        </div>
      </q-img>
    </q-card>

    <q-card class="my-card" @click="goToRooms">
      <q-img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk7CD2RmvsGs0GYWAnLTlcgCyW9WSH2YRSqw&s"
      >
        <div class="absolute-bottom text-subtitle2 text-center">
          Habitación Sencilla
        </div>
      </q-img>
    </q-card>
  </div>


  <div class="servicios">
    <h3>Te mostramos nuestros espectaculares servicios</h3>
  </div>


  <div class="servi">
    <div class="carousel-container">
  <q-carousel
    swipeable
    animated
    v-model="slide"
    thumbnails
    infinite
  >
    <q-carousel-slide 
      :name="1" 
      img-src="https://isu.edu.mx/wp-content/uploads/2022/08/Cuantos-anos-se-requieren-para-estudiar-la-carrera-de-Chef.jpg"
      @click.native="goToService"
    /> 
    <q-carousel-slide 
      :name="2" 
      img-src="https://termosyeti.com/wp-content/uploads/2023/10/bebidas-alcoholicas.jpg"
      @click.native="goToService" 
    />
    <q-carousel-slide 
      :name="3" 
      img-src="https://img.hellofresh.com/w_3840,q_auto,f_auto,c_fill,fl_lossy/hellofresh_website/es/cms/SEO/recipes/albondigas-caseras-de-cerdo-con-salsa-barbacoa.jpeg"
      @click.native="goToService" 
    />
    <q-carousel-slide 
      :name="4" 
      img-src="https://www.komoder.es/images/blog/blog13.webp"
      @click.native="goToService" 
    />
  </q-carousel>
</div>

  </div>
  <div class="deportes">
    <h3>Diviértete con nuestros entretenidos deportes</h3>
  </div>
  <div class="deporte">
    <q-card class="extre" @click="goToSports">
      <q-img
        src="https://blog.jeep.com.ec/hubfs/7%20deportes%20extremos%20para%20realizar%20outdoor%20despu%C3%A9s%20de%20la%20cuarentena-1.png"
      >
        <div class="absolute-bottom text-subtitle2 text-center">
          Suite de Lujo
        </div>
      </q-img>
    </q-card>

    <q-card class="extre" @click="goToSports">
      <q-img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz5SGV1QWq44UMDU2Rz_2X-hXP6Ei8Z7oTMg&s"
      >
        <div class="absolute-bottom text-subtitle2 text-center">
          Paracaidismo y salto base
        </div>
      </q-img>
    </q-card>

    <q-card class="extre" @click="goToSports">
      <q-img
        src="https://img.redbull.com/images/c_crop,x_0,y_0,h_2133,w_2844/c_fill,w_800,h_572/q_auto,f_auto/redbullcom/2022/4/20/onymf5vo9ungvzpg4ucm/stefan-dollinger-freerunning-atenas"
      >
        <div class="absolute-bottom text-subtitle2 text-center">
          freerunning
        </div>
      </q-img>
    </q-card>

    <q-card class="extre" @click="goToSports">
      <q-img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrdXLZyZ-S1vN9SRqNxx-JFiwLihHY-oqmDA&s"
      >
        <div class="absolute-bottom text-subtitle2 text-center">
          Snowboarding
        </div>
      </q-img>
    </q-card>
  </div>
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
export default {
  data() {
    return {
      destinationDialog: false,
      dateDialog: false,
      peopleDialog: false,
      selectedDestination: null,
      selectedDate: null,
      selectedPeople: null,
      peopleOptions: [1, 2, 3, 4],
      filteredDestinations: ['Playa', 'Montaña', 'Ciudad', 'Campo'],
      slide: 'first',
    };
  },
  methods: {
    openDestinationDialog() {
      this.destinationDialog = true;
    },
    closeDestinationDialog() {
      this.destinationDialog = false;
    },
    selectDestination(destination) {
      this.selectedDestination = destination;
      this.closeDestinationDialog();
    },
    openDateDialog() {
      this.dateDialog = true;
    },
    closeDateDialog() {
      this.dateDialog = false;
    },
    openPeopleDialog() {
      this.peopleDialog = true;
    },
    closePeopleDialog() {
      this.peopleDialog = false;
    },
    updatePeopleLabel() {
    },
    performSearch() {
    },
    goToRooms() {
      this.$router.push('/habitaciones'); 
    },
    goToService() {
      this.$router.push('/servicios'); 
    },
    goToSports() {
      this.$router.push('/deportes');
    },
    previousSlide() {

      this.slide = this.slide === 'first' ? 'fourth' : this.slide - 1;
    },
    nextSlide() {

      this.slide = this.slide === 'fourth' ? 'first' : this.slide + 1;
    },
  },
};
</script>

<style scoped>
.destination-header {
  text-align: center;
  margin-bottom: 20px;
}

.destination-header h2 {
  font-size: 2rem;
  color: #FFD700;
}

.button-container {
  display: flex;
  justify-content: center;
  align-items: center; 
  margin-bottom: 20px;
}

.small-button {
  margin: 0 10px;
  min-width: 140px;
  font-size: 1rem; 
}

.my-cards {
  width: 90%; 
  max-width: 1400px; 
  height: auto; 
  background-color: #000; 
  border: none; 
  margin: 0 auto; 
  border-radius: 12px; 
}

.my-card{
  width: 24%; 
  max-width: 1400px; 
  height: 300px; 
  background-color: #000; 
  border: none; 
  border-radius: 12px; 
  margin: 5px; 
  position: relative; 
  overflow: hidden; 
}
.q-img {
  width: 100%;
  height: 100%; 
  object-fit: cover; 
  border-radius: 12px; 
}
.extre img, .my-card img {
  width: 100%; 
  height: auto; 
  border-radius: 12px; 
}

.absolute-bottom {
  position: absolute; 
  bottom: 10px; 
  left: 0;
  right: 0;
  text-align: center; 
  color: #ffffff; 
  background-color: rgba(0, 0, 0, 0.5);
  padding: 5px; 
}


.card-content {
  display: flex; 
  align-items: stretch;
  padding-right: 10px; 
}

.text-section {
  flex: 1; 
  background-color: #000; 
  border-radius: 12px; 
  padding: 20px; 
  color: #FFD700; 
  overflow-y: auto; 
}

.story {
  font-family: 'Times New Roman', Times, serif; 
  color: #FFD700; 
  line-height: 2;
}

.image-section {
  width: 40%; 
  border-radius: 12px; 
}

.special-text {
  text-align: left;
  font-size: 1.5rem; 
  color: #FFD700; 
  margin: 20px 0; 
}

.card-container {
  display: flex; 
  justify-content: flex-start;
  flex-wrap: wrap; 
}

.servicios {
  color: #FFD700;
  text-align: center;
  margin-top: 40px;
}

.servi {
  width: 95%;
  margin: 0 auto; 
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel-container {
  position: relative;
  width: 100%;
}

.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5); 
  color: #FFD700; 
}

.nav-button.left {
  left: -40px; 
}

.nav-button.right {
  right: -40px; 
}

.custom-carousel {
  width: 100%;
}

.absolute-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}

.custom-caption {
  background: rgba(0, 0, 0, 0.5);
  padding: 10px 0;
  text-align: center;
  color: #FFD700;
}

.text-h2 {
  font-size: 1.5rem;
}

@media (max-width: 768px) {
  .my-card {
    width: 45%; 
  }
  .nav-button.left {
    left: -30px; 
  }
  .nav-button.right {
    right: -30px;
  }
}
h2 {
  font-size: 3rem;
  color: #FFD700; 
  font-family: 'Brush Script MT', cursive; 
  text-align: center; 
}

h3 {
  font-size: 3rem; 
  color: #FFD700; 
  font-family: 'Brush Script MT', cursive; 
  text-align: center; 
}
.extre{
  width: 24%;
  max-width: 1400px; 
  height: 300px; 
  background-color: #000;  
  border: none; 
  border-radius: 12px; 
  margin: 5px; 
  position: relative; 
  overflow: hidden; 
}
.deporte{
  display: flex; 
  justify-content: flex-start;
  flex-wrap: wrap; 
}
.contactos{
  font-size: 3rem; 
  color: #000000; 
  font-family: 'Brush Script MT', cursive; 
  text-align: center; 
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
