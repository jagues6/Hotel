<!-- <template>
  <div>
    <h1>soy el componente APP.vue</h1>
    <h3> <router-link to="/compras">compras</router-link> </h3>
    <h3><router-link to="/ventas">ventas</router-link></h3>
    <h3><router-link to="/">login</router-link></h3>
    <router-view></router-view>
  </div>
</template> -->
<template>
  <div class="hotel-container">
    <header class="header">
      <div class="logo">Floresta</div>
      <nav class="menu">
        <ul>
          <li><a href="#">Habitaciones</a></li>
          <li><a href="#">Servicios</a></li>
          <li><a href="#">Deportes</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>
    </header>

    <section class="main-section">
      <div class="text-section">
        <h1>Vacaciones en la playa</h1>
        <h2>¡Apostamos a que le encanta la Costa!</h2>
        <p>
          Nuestro alojamiento en Ostende ofrece a todos los huéspedes un
          cálido y acogedor refugio, pero también una base perfecta para
          todas sus excursiones, ya sea de forma individual o en grupo.
        </p>
      </div>
      <div class="image-section">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY5PdLSekOzHOKgWsHY6TS2dKZVGHYl-CkGw&s" alt="Habitación de Hotel" class="imageninicio" />
      </div>
    </section>

    <!-- Sección de promociones e imágenes -->
    <section class="promotions">
      <div class="promo-item">
        <img src="promo1.jpg" alt="Promoción 1" />
        <p>¡Nuestras promociones!</p>
      </div>
      <div class="promo-item">
        <img src="promo2.jpg" alt="Promoción 2" />
        <p>¡Hay muchas cosas por hacer!</p>
      </div>
      <div class="booking">
        <p>Reserve aquí sus vacaciones en unos minutos.</p>
        <label for="checkin">Check-In</label>
        <input type="date" id="checkin" />
        <label for="checkout">Check-Out</label>
        <input type="date" id="checkout" />
        <button class="book-now">Reservar ahora</button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HotelPage',
};
</script>

<style scoped>
body {
    place-items: center;
    min-width: 320px;
    min-height: 100vh;
}

#app {
    text-align: center;
    width: none;
}
.hotel-container {
  font-family: Arial, sans-serif;
  background-color: #000000;
  height: 100vh; 
  display: flex;
  flex-direction: column;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #585757;
  padding: 20px;
}

.logo {
  font-size: 24px;
  font-weight: bold;
}

.menu ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.menu li {
  margin-right: 20px;
}

.menu a {
  text-decoration: none;
  color: #7e7d7d; 
}


.main-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: url('beach-background.jpg') no-repeat center center/cover;
  padding: 50px;
  color: white;
  flex-grow: 1; 
}


.promotions {
  padding: 20px;
}

.promo-item {
  margin: 10px 0; 
}

.booking {
  margin-top: 20px; 
}
.imageninicio{
  width: 100%;
}
</style>

