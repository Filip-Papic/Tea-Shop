<script setup>
import { ref } from "vue";

const success = ref("hidden");
console.log(success.value);
</script>

<template>
  <div>
    <div class="main">
      <div class="contact">
        <h3>Contact</h3>
        <h4>Phone</h4>
        <p>555-555-5555</p>
        <h4>Email</h4>
        <p>
          <a href="">tea@shop.com</a>
        </p>
        <h4>Address</h4>
        <p>Nemanjina 32 Belgrade, Serbia</p>
      </div>
      <div class="hours">
        <h3>Hours</h3>
        <p>Monday - Friday: 9am - 5pm</p>
        <p>Saturday: 10am - 2pm</p>
        <p>Sunday: Closed</p>
      </div>
      <div class="location">
        <h3>Location</h3>
        <iframe
          src="https://maps.google.com/maps?q=Nemanjina%2032&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="600"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
    <div class="message">
      <h3>Send us a message</h3>
      <form>
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" rows="5"></textarea>
        </div>
        <button type="submit" @click.prevent="success = 'visible'">Send</button>
        <p class="success"><i>Your message has been sent!</i></p>
      </form>
    </div>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: row;
  gap: 5rem;
  justify-content: center;
  align-items: center;
  margin-left: -2rem;
  border-top: 1px solid #ddd;
  font-family: "Roboto", sans-serif;
}
.contact {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
}
.contact h3 {
  margin-bottom: 0rem;
}
.contact h4 {
  margin-top: 1rem;
  margin-bottom: 0rem;
}
.contact p {
  margin-top: 0rem;
}
.hours {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.hours h3 {
  margin-bottom: 0rem;
}
.hours p {
  margin-top: 0rem;
}
.location {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
}
.location h3 {
  margin-bottom: 0rem;
}
.location iframe {
  margin-top: 1rem;
}
.message {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
  border-top: 1px solid #ddd;
  font-family: "Roboto", sans-serif;
}
.message h3 {
    margin-top: 3rem;
  margin-bottom: 0rem;
}
.message form {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
}
.message form .form-group {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin-top: 1rem;
  width: 60vw;
}
.message form .form-group label {
  margin-bottom: 0.5rem;
}
.message form .form-group input {
  width: 100%;
  height: 2rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0.5rem;
}
.message form .form-group textarea {
  width: 100%;
  height: 10rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0.5rem;
}
.message form button {
  width: 10rem;
  height: 2rem;
  border: 1px solid rgb(0, 0, 0);
  border-radius: 4px;
  padding: 0.5rem;
  margin-top: 1rem;
  cursor: pointer;
  background-color: #fff;
}
.message form button:hover {
  background-color: #000;
  color: #fff;
}
.success {
  visibility: v-bind(success);
  margin-top: 1rem;
  color: #000;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
}

@media (max-width: 768px) {
  .main {
    flex-direction: column;
    gap: 2rem;
    margin-left: 0rem;
  }
  .contact {
    margin-top: 0rem;
  }
  .location {
    margin-top: 0rem;
  }

  .location iframe {
    width: 100%;
  }
}
</style>
