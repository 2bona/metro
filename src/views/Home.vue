<template>
<div class="green lighten-5">
<div style=":; width:100%" class=" black">

  <v-container  dark class="grey--text px-5 text-center">
    <v-layout class="mt-6 mb-8">
      <v-flex xs5 class="d-flex justify-center align-center" sm5>
    <v-avatar max-width="290px" tile width="100%" height="auto"><v-img eager src="https://res.cloudinary.com/crushcontest-com/image/upload/c_fit,w_300/v1662797953/echologo_white_png_r9i1dx.png"></v-img></v-avatar>
      </v-flex>
      <v-flex xs2 class="d-flex justify-center align-center" sm2>
      <v-icon size color="white">mdi-arrow-projectile-multiple</v-icon>
      
      </v-flex>
      <v-flex xs5 class="d-flex justify-center align-center" sm5>
    <v-avatar class="mt-3" max-width="180px" tile width="100%" height="auto"><v-img eager contain src="https://res.cloudinary.com/crushcontest-com/image/upload/c_fit,w_300/v1662799583/AMF_LOGO1_ojob3n.png"></v-img></v-avatar>
      </v-flex>
    </v-layout>

  <p class="grey--text">Presents</p>
<div>

<div>
  <h1 class="jost white--text font-weight-regular green--text text--lighten-2 text-uppercase">Metro <span class="green--text text--lighten-5">Connect</span></h1>
  <p class="my-6 mb-12 green--text text--lighten-5 ">A Networking Event for Founders, Creatives and Yound CEO's in Abuja.</p>
   </div>
<div>

   <v-layout class="mt-12">
     <v-flex xs6 class="text-left"> 
       <p class="jost green--text text--lighten-5 font-weight-medium"><v-icon size="16" class="pb-1" color="green lighten-5">mdi-map-marker</v-icon> VENUE</p> </v-flex>
     <v-flex class="caption text-right grey--text" xs6>
        The Gem House, 5B Parakou St, Wuse 904101, Abuja.
        </v-flex>
   </v-layout>
   <v-layout class="mt-4">
     <v-flex xs6 class="text-left"> 
       <p class=" jost green--text text--lighten-5 font-weight-medium "><v-icon size="16" class="pb-1" color="green lighten-5">mdi-clock-outline</v-icon> DATE</p> </v-flex>
     <v-flex class="caption text-right grey--text " xs6>
        25th September,<br> 12:00pm - 7pm.
        </v-flex>
   </v-layout>
   <v-layout wrap class="mt-8">
     <v-flex xs12 class="my-4 text-left"> 
<v-btn @click="sheet = true" block x-large class="jost  text-capitalize font-weight-black" outlined  color="white lighten-1">sign up</v-btn>
</v-flex>
     <v-flex class="caption text-right  mb-12 grey--text text--lighten-3" xs12>
<v-btn block color="green lighten-5" x-large class="jost  text-capitalize  font-weight-black" >Get ticket</v-btn>        </v-flex>
   </v-layout>
   </div>
   </div>

   <div>
     </div>
  </v-container>
</div>
<!-- <svg  style="position:relative; top:-2px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000000" fill-opacity="1" d="M0,160L60,144C120,128,240,96,360,112C480,128,600,192,720,186.7C840,181,960,107,1080,74.7C1200,43,1320,53,1380,58.7L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg> -->
<v-card flat tile :class="i == 1?'black ':'green lighten-5'" v-for="(n,i) in sections" :key="i" style="height:; width:100%" class="">
 <!-- <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fafafa" fill-opacity="1" d="M0,0L48,42.7C96,85,192,171,288,202.7C384,235,480,213,576,208C672,203,768,213,864,181.3C960,149,1056,75,1152,42.7C1248,11,1344,21,1392,26.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg> -->
<!-- <svg v-if="i == 1" style="position:relative; top:-2px;"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fafafa" fill-opacity="1" d="M0,160L48,149.3C96,139,192,117,288,117.3C384,117,480,139,576,138.7C672,139,768,117,864,138.7C960,160,1056,224,1152,218.7C1248,213,1344,139,1392,101.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
      <svg v-if="i == 2" style="position:relative; top:-2px;"   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000000" fill-opacity="1" d="M0,160L60,144C120,128,240,96,360,112C480,128,600,192,720,186.7C840,181,960,107,1080,74.7C1200,43,1320,53,1380,58.7L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg> -->

    <v-container  class="">

<v-layout class="py-12" wrap>
  <v-flex style="" :class="i == 1 ?'order-2':''" class="pa-0" xs5 sm4>
<v-avatar :style="!(i == 0 || i == 2) ? '    box-shadow: 12px 16px #81c884': '    box-shadow: -12px 16px #232323'" tile height="100%" width="100%"><v-img eager :src="n.image"></v-img></v-avatar>
  </v-flex>
  <v-flex :class="i == 1 ?'order-1 pr-4':'pl-4'" class="" xs7 sm8>
    <h2 class="jost font-weight-medium " :class="i == 1?'grey--text text--lighten-3':'grey--text text--darken-4'" >{{n.name}}</h2>
    <p :class="i == 1?'grey--text text--lighten-0 ':'grey--text text--darken-2'"  class="py-8 ">{{n.desc}}</p>
      <v-layout wrap class="mt-0">
     <v-flex xs12 class="mb-2 text-left"> 
<v-btn block           @click="sheet = !sheet"
 large style="    font-size: 0.875rem !important;
    font-weight: 400;
    letter-spacing: 0.0178571429em !important;
    line-height: 1.25rem;" class=" text-capitalize jost font-weight-black"  outlined :dark="i==1" :color="i==1?'lighten-1': 'grey darken-4'">sign up</v-btn>
</v-flex>
     <v-flex class="caption text-right mt-2 grey--text text--lighten-3" xs12>
<v-btn block class=" text-capitalize   jost font-weight-black" large style="    font-size: 0.875rem !important;
    font-weight: 400;
    letter-spacing: 0.0178571429em !important;
    line-height: 1.25rem;" dark>Get ticket</v-btn>        </v-flex>
   </v-layout>
  </v-flex>
</v-layout>

    </v-container>

</v-card>
<v-layout  wrap class=" green lighten-5 pb-3">
    <v-flex class="body-2 d-flex justify-center align-center pa-2" xs12 >
        <p onclick="window.location.href = 'https://edeyapp.com';"  class="caption text-capitalized text-center mb-0 font-weight-bold grey--text text--darken-3">Website Sponsored by  <span>
            <v-avatar width="100" height="auto" tile class="mb-1  mx-auto">
    <v-img eager src="https://res.cloudinary.com/payhospi/image/upload/v1643977448/clients/E_dey_app_19.5_by_20_1_ayherr.jpg"></v-img>
</v-avatar>
</span>
</p>
    </v-flex>
    <!-- <v-flex style="max-width:400px;width:100%"  xs12 class="justify-space-around mx-auto d-flex">
               <v-avatar onclick="window.location.href = 'https://play.google.com/store/apps/details?id=com.edeyapp.edey';"
               color="black" style="border-radius:50px" max-width="300" width="45%" height="auto" class="mb-1 pa-3">
    <v-img src="https://res.cloudinary.com/dnqw7x4bp/image/upload/v1590915293/app-store-google.png"></v-img>
</v-avatar>

               <v-avatar onclick="window.location.href = 'https://apps.apple.com/us/app/e-dey-app/id1533515887';"
               color="black" style="border-radius:50px" max-width="300" width="45%" height="auto" class="mb-1 pa-3">
    <v-img src="https://res.cloudinary.com/dnqw7x4bp/image/upload/v1590915293/app-store-apple.png"></v-img>
</v-avatar>

    </v-flex> -->
</v-layout>
    <v-bottom-sheet scrollable fullscreen v-model="sheet">
      <v-sheet dark style="overflow: scroll;"
        class="text-center pa-3"
      >
        <v-btn
          class="mt-6"
          text
          color="red"
          @click="sheet = !sheet"
        >
          close
        </v-btn>
      <v-form               @submit.prevent="submit()"
 ref="form">
        <h2 class="jost">Sign Up Form</h2>
        <p class="px-12 mb-5 caption grey--text">Kindly fill the form with valid information and submit.</p>
           <v-text-field
            :rules="stringRules"
            v-model="first_name"
           outlined validate-on-blur filled
            label="First name"
            required
          ></v-text-field>
           <v-text-field
            :rules="stringRules"
            v-model="last_name"
           outlined validate-on-blur filled
            label="Last name"
            required
          ></v-text-field>
           <v-text-field
            :rules="numberRules"
            v-model="phone"
           outlined validate-on-blur filled
            label="Phone Number"
            required
          ></v-text-field>
           <v-text-field
            :rules="emailRules"
            v-model="email"
           outlined validate-on-blur filled
            label="Email"
            required
          ></v-text-field>
           <v-text-field
            
            v-model="business_name"
           outlined validate-on-blur filled
            label="Business name (Optional)"
            required
          ></v-text-field>
            <v-select
          :items="items"
          filled outlined validate-on-blur
            
            v-model="business_category"
            label="Business category (Optional)"
        ></v-select>
          <v-btn :loading="loading" :color="'white'" @click="submit()" block x-large  class="jost py-9 grey--text text--darken-4 mb-12 text-capitalize font-weight-black">submit</v-btn>

      </v-form>
      </v-sheet>
    </v-bottom-sheet>
</div>
</template>

<script>
// @ is an alias to /src
import axios from "axios"
export default {
  name: 'Home',
    data: () => ({
      sheet: false,
      loading: false,
      first_name: '',
last_name: '',
email: '',
phone: '',
business_name: '',
items: ['Logistics', 'Food', 'Tech', 'Fashion', 'Services', 'Other'],
business_category: '',
   emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
                numberRules: [
        v => (v != null && v.length >= 10) || "Min 10 characters",
        v => !!v || "Phone number is required",
        v => /^[0-9]*$/.test(v) || "Number must be valid"
      ],
   stringRules: [
        v => !!v || 'This input is required',
        v => (v && v.length >= 2) || 'Input must be more than 2 characters',
      ],
      sections: [
        {
          name: "Food & Wine Tasting",
          image: "https://images.unsplash.com/photo-1558346489-19413928158b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          desc: "Taste amazing meals from top Abuja chefs for FREE, buy only what you like. ",
        },
        {
          name: "Networking",
          image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
          desc: "Connect with High Value Men and Women, share ideas and experiences and increase your social currency.",
        },
        {
          name: "Speed Dating",
          image: "https://images.unsplash.com/photo-1571771826307-98d0d0999028?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          desc: "Fun, Quick & Engaging way to meet people for the first time and have meaningful interaction.",
        }
      ]

    }),
    methods:{
      submit(){
        if(this.$refs.form.validate()){
          this.loading = true
          axios.post("/metro", {
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            phone: this.phone,
            business_name: this.business_name,
            business_category: this.business_category,
          }).then(()=>{
            this.sheet = false
          this.loading = false
            this.$router.push('/thankyou')
          }).catch(()=>{
          this.loading = false
            alert('error occured')
          })
        }else{
          alert('check the form for errors')
        }
      }
    }
}
</script>
