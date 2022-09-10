<template>
  <v-app dark>


    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>
<style>
.v-btn--outlined {
    border: 1.9px solid currentColor!important;
}
.container {
    max-width: 544px!important;
}
.jost{
  font-family: 'Jost', sans-serif!important;

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
