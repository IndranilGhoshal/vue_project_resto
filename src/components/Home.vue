<template>
  <HeaderView />
  <h1>Hello {{ name }}, welcome on home page</h1>

  <table class="table table-hover">
    <thead>
      <tr>
        <td scope="col">ID</td>
        <td scope="col">Name</td>
        <td scope="col">Address</td>
        <td scope="col">Contact</td>
        <td scope="col">Actions</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in restaurants" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.address }}</td>
        <td>{{ item.contact }}</td>
        <td>
          <router-link :to="'/update/' + item.id">Edit</router-link>
          <button v-on:click="delResto(item.id)">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import HeaderView from "./Header.vue";
import axios from "axios";
export default {
  name: "HomeView",
  data() {
    return {
      name: "",
      restaurants: [],
    };
  },
  methods: {
    async delResto(id) {
      let result = await axios.delete("http://localhost:3000/restaurant/"+id);
       if (result.status == 200) {
        this.loadData()
      }
    },
    async loadData() {
      let user = localStorage.getItem("user-info");
      this.name = JSON.parse(user).name;
      if (!user) {
        this.$router.push({ name: "Login" });
      }
      let result = await axios.get("http://localhost:3000/restaurant");
      this.restaurants = result.data;
    },
  },
  components: {
    HeaderView,
  },
  mounted() {
    this.loadData()
  },
};
</script>
