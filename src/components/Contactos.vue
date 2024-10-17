<template>
    <div class="contact-card">
      <h2>Contáctanos</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Nombre Completo</label>
          <input type="text" id="name" v-model="formData.name" required />
        </div>
  
        <div class="form-group">
          <label for="email">Correo Electrónico</label>
          <input type="email" id="email" v-model="formData.email" required />
        </div>
  
        <div class="form-group">
          <label for="phone">Teléfono</label>
          <input type="tel" id="phone" v-model="formData.phone" required />
        </div>
  
        <div class="form-group">
          <label for="subject">Asunto</label>
          <input type="text" id="subject" v-model="formData.subject" required />
        </div>
  
        <div class="form-group">
          <label for="message">Mensaje</label>
          <textarea id="message" v-model="formData.message" rows="4" required></textarea>
        </div>
  
        <button type="submit" class="submit-button">Enviar</button>
      </form>
  
      <div class="map-container">
        <h3>Encuéntranos en esta ubicación</h3>
        <iframe
          width="100%"
          height="250"
          frameborder="0"
          style="border:0"
          :src="googleMapsUrl"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Contactos',
    data() {
      return {
        formData: {
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        },
        googleMapsUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094725!2d144.95373531531853!3d-37.816279179751984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f4f9e7b1%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sau!4v1604296168881!5m2!1sen!2sau',
      };
    },
    methods: {
      submitForm() {
        console.log('Datos del formulario:', this.formData);
      },
    },
  };
  </script>
  
  <style scoped>
  .contact-card {
    max-width: 500px;
    margin: 20px auto;
    padding: 15px;
    background-color: #000;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
    border-radius: 8px;
    font-family: 'Georgia', serif;
    color: #fff;
  }
  
  h2, h3 {
    text-align: center;
    margin-bottom: 15px;
    color: #FFD700; /* Color amarillo */
  }
  
  .form-group {
    margin-bottom: 12px;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    color: #FFD700; /* Color amarillo */
  }
  
  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
    background-color: #333;
    color: #fff;
  }
  
  .submit-button {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #FFD700;
    color: black;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .submit-button:hover {
    background-color: #e6c200;
  }
  
  .map-container {
    margin-top: 15px;
    text-align: center;
  }
  
  .map-container h3 {
    margin-bottom: 10px;
  }
  </style>
  