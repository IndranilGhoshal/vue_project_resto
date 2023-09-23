<template>
  <HeaderView />
  <img class="logo" src="../assets/resto-logo.png" />
  <h1>Update Restaurant</h1>
  <form class="update">
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
    <button type="button" v-on:click="updateRestaurant">Update Restaurant</button>
  </form>
</template>

<script>
import axios from "axios";
import HeaderView from "./Header.vue";
export default {
  name: "UpdateView",
  components: {
    HeaderView,
  },
  data() {
    return {
      restaurant: {
        name: "",
        address: "",
        contact: "",
      },
    };
  },
  methods: {
    async updateRestaurant() {
      let result = await axios.put(
        "http://localhost:3000/restaurant/" + this.$route.params.id,
        this.restaurant
      );
      if (result.status == 200) {
        this.$router.push({ name: "Home" });
      }
    },
  },
  async mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "Login" });
    }

    let result = await axios.get(
      "http://localhost:3000/restaurant/" + this.$route.params.id
    );

    this.restaurant = result.data;
  },
};
</script>
