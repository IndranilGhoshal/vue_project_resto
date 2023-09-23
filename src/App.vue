<template>
<router-view />
</template>

<script>
export default {
    name: 'App'
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
body{
    padding:0;
    margin:0
}
.logo {
    width: 100px
}
.update input,
.add input,
.login input,
.register input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid skyblue
}

.update button,
.add button,
.login button,
.register button {
    width: 324px;
    height: 40px;
    border: 1px solid skyblue;
    color: #fff;
    background-color: skyblue;
    cursor: pointer;
    margin-top: 10px;
}
</style>
