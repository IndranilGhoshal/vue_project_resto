<template>
  <HeaderView />
  <img class="logo" src="../assets/resto-logo.png" />
  <h1>Add Restaurant</h1>
  <form class="add">
    <input type="text" v-model="restaurant.name" placeholder="Enter Name" name="name" />
    <input
      type="text"
      v-model="restaurant.address"
      placeholder="Enter Address"
      name="address"
    />
    <input
      type="text"
      v-model="restaurant.contact"
      placeholder="Enter Contact"
      name="contact"
    />
    <button type="button" v-on:click="addRestaurant">Add New Restauratnt</button>
  </form>
</template>

<script>
import HeaderView from "./Header.vue";
import axios from "axios";
export default {
  name: "AddView",
  data() {
    return {
      restaurant: {
        name: "",
        address: "",
        contact: "",
      },
    };
  },
  components: {
    HeaderView,
  },
  methods: {
    async addRestaurant() {
      let result = await axios.post("http://localhost:3000/restaurant", this.restaurant);
      console.log(result);
      this.$router.push({ name: "Home" });
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "Login" });
    }
  },
};
</script>
