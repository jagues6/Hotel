<template>
  <q-page class="q-pa-md">
    <h1 class="text-center ">Habitaciones</h1>
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
  <div class="contactos" >
    <h6>Contactos <br> 3222343245 <br>nos ubicamos en <br> carrera 6#20-16</h6>
  </div>
</template>

<script>
export default {
  name: 'Habitaciones',
  components: {
    CustomRating: {
      props: {
        modelValue: Number,
        maxStars: {
          type: Number,
          default: 5,
        },
      },
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
    },
  },
  data() {
    return {
      rooms: [
        { id: 1, name: 'Suite de Lujo', image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/29/6a/5d/black.jpg?w=700&h=-1&s=1', price: 120, type: 'Doble', description: 'Habitación elegante con vistas al mar.', rating: 4 },
        { id: 2, name: 'Habitación Familiar', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPe3eKtKfq-TSYmXAvdxyK2yRwy9dyh4Mk4A&s', price: 250, type: 'Suite', description: 'Suite lujosa con jacuzzi y balcón.', rating: 5 },
        { id: 3, name: 'Habitación Doble', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj4nxjtSHvZEi3c715wxBtrfguaL2DpUP4Og&s', price: 150, type: 'Familiar', description: 'Ideal para familias con niños.', rating: 4 },
        { id: 4, name: 'Habitación Sencilla', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk7CD2RmvsGs0GYWAnLTlcgCyW9WSH2YRSqw&s', price: 100, type: 'Individual', description: 'Habitación cómoda para una persona.', rating: 3 },
        { id: 5, name: 'Habitación con Balcón', image: 'https://lafransa.com/wp-content/uploads/2020/11/LF6_0940.jpg', price: 160, type: 'Doble', description: 'Habitación con balcón privado.', rating: 4 },
        { id: 6, name: 'Habitación Ejecutiva', image: 'https://media.cdn.puntobiz.com.ar/062014/1617244826668.webp?cw=984&ch=553&extw=jpg', price: 180, type: 'Doble', description: 'Perfecta para viajes de negocios.', rating: 4 },
        { id: 7, name: 'Habitación con Vista al Jardín', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuLBIeMx70MQG0qni-rkMuJ-fOUAGMRGzXhh1IqEfPr9WUZ921wX8kJwrMO6JUHwPhhDc&usqp=CAU', price: 140, type: 'Doble', description: 'Habitación tranquila con vista al jardín.', rating: 4 },
        { id: 8, name: 'Habitación con Cama King', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWY-TWOiD0_VWhfL7V1v-CcYD1H0KeWBjsZgaYieoFzqJs5Ns6tQGd87q5G5-kJjtum6Q&usqp=CAU', price: 175, type: 'Doble', description: 'Habitación espaciosa con cama king size.', rating: 5 },
        { id: 9, name: 'Habitación Superior', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdb59mZD1kJrI2Zj7WfX3SrlgkDR1gnUwMwiCMJigl-X0nIen-KkbGZV5ipEsgKk1mvWc&usqp=CAU', price: 130, type: 'Doble', description: 'Habitación mejorada con comodidades adicionales.', rating: 4 },
        { id: 10, name: 'Habitación con Cocina', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwJCRRi71X4ZipHnAPLZleq6i_oeCINF0f0aCjMx6z7LC6oEQcdwxOg7XGPJmfJIRRnQ0&usqp=CAU', price: 190, type: 'Familiar', description: 'Habitación con cocina equipada.', rating: 4 },
        { id: 11, name: 'Habitación Temática', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTemPMub7cIxLS3SqTPo2_kOE527Xm6m7WTfMpcPpBUocSqKdHA37FCSsdy6eTnbD6wUYY&usqp=CAU', price: 210, type: 'Doble', description: 'Habitación decorada con un tema especial.', rating: 5 },
        { id: 12, name: 'Habitación Adaptada', image: 'https://media-cdn.tripadvisor.com/media/photo-s/19/89/f8/b8/suite-maya.jpg', price: 130, type: 'Individual', description: 'Habitación adaptada para personas con movilidad reducida.', rating: 4 },
        { id: 13, name: 'Habitación Familiar con Vista', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJDUmyzZ5CHOGPqDo4rbn9oDId4AK46rOcNTngLZ0W2GShl00mTX8r2Erpad513Of4sfc&usqp=CAU', price: 150, type: 'Familiar', description: 'Habitación familiar con vista al mar.', rating: 4 },
        { id: 14, name: 'Habitación de Lujo', image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/aa/6a/1a/20170623-175821-largejpg.jpg?w=1200&h=-1&s=1', price: 250, type: 'Suite', description: 'Habitación de lujo con servicios exclusivos.', rating: 5 },
        { id: 15, name: 'Habitación para Mascotas', image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/aa/19/66/habitacion-y-jacuzzi.jpg?w=500&h=400&s=1', price: 160, type: 'Doble', description: 'Habitación amigable para tus mascotas.', rating: 4 },
      ],
    };
  },
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
.contactos{
  font-size: 3rem; 
  color: #000000; 
  font-family: 'Brush Script MT', cursive; 
  text-align: center; 
}
</style>
