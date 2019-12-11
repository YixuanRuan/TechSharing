<template>
  <v-app>
    <NavBar />
    <div class="mx-auto" >
      <v-btn to="paperDisplay">看pdf</v-btn>
    </div>
    <div class="mx-auto">
      热门内容麻烦爸爸加一下
    </div>
  </v-app>
</template>

<script>
import NavBar from "../components/NavBar";

export default {
  name: "home",
  components: {
    NavBar
  }
};
</script>
