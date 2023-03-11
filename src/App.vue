<template>
  <main>
    <div class="container">
      <form @submit.prevent="getWeather">
        <input v-model="city" placeholder="Enter city name" />
      </form>
      <div v-if="weather" class="weather">
        <h2>{{ weather.name }}</h2>
        <p>{{ weather.weather[0].description }}</p>
        <p>{{ (weather.main.temp - 273.15).toFixed(2) }}&deg;C</p>
      </div>
    </div>
  </main>
</template>

<script>
import weatherApi from "./config/weatherApi";

export default {
  data() {
    return {
      city: "",
      weather: null,
      error: null,
    };
  },
  methods: {
    getWeather() {
      weatherApi
        .getWeather(this.city)
        .then((response) => {
          this.weather = response.data;
        })
        .catch((error) => {
          this.error = error.message;
        });
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap");

body {
  min-height: 100vh;
  background-color: #271c36;
  color: white;
  text-align: center;
  font-family: "Roboto", sans-serif;
}

input {
  font-family: inherit;
  width: 70vw;
  height: 35px;
  font-size: 17px;
  opacity: 0.9;
}
.container {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
}
.weather {
  background-color: #ffffff;
  opacity: 0.8;
  color: black;
  max-width: 150px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 50px;
}
</style>
