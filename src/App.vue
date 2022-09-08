<template>
  <v-app dark>


    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>
<style>
.v-btn--outlined {
    border: 2px solid currentColor!important;
}
</style>
<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
