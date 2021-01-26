<template>
  <div class="container">
    <b-form>
      <b-form-group id="input-group-1" label="Name:" label-for="input-1">
        <b-form-input id="input-1" v-model="form.name" required></b-form-input>
      </b-form-group>
  
      <b-form-group  v-for="(email, $index) in form.email" 
       :key="$index" id="input-group-2" >
        <div>
          <b-form inline>
            <b-form-select
            id="input-2"
            class="mb-2 mr-sm-2 mb-sm-0"
            v-model="email.type"
            :options="options"
            required
          ></b-form-select>
            <b-form-input
              id="inline-form-input-email"
              class="mb-2 mr-sm-2 mb-sm-0"
              v-model="email.value"
            ></b-form-input>
            
          </b-form>
        </div>
      </b-form-group>
  
    
      <b-form-group 
       v-for="(mobile, $index) in form.mobile" 
       :key="'hello'+$index"
       id="input-group-3" >
        <b-form inline>
         <b-form-select
            id="input-3"
        class="mb-2 mr-sm-2 mb-sm-0"
            v-model="mobile.type"
            :options="options"
            required
          ></b-form-select>
        
          <b-form-input
            id="input-4"
            class="mb-2 mr-sm-2 mb-sm-0"
            v-model="mobile.value"
            required
          >
          </b-form-input>
        </b-form>
      </b-form-group>
      
      <b-button
        @click="goBack"
        class="mb-2 mr-sm-2 mb-sm-0 btn"
        type="submit"
        variant="primary"
        >Back</b-button
      >
      <b-button
        @click="editContact"
        class="mb-2 mr-sm-2 mb-sm-0 btn"
        type="submit"
        variant="primary"
        >Edit</b-button
      >
      <b-button @click="delContact" type="submit" variant="danger"
        >Delete</b-button
      >
    </b-form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "ShowContact",
  data() {
    return {
      form: {},
       options: [{ text: "select one", value: null }, { text: "Home", value: "home" },{ text: "Work", value: "work" }],
    };
  },
  methods: {
    goBack() {
      this.$router.push({ name: "Home" });
    },
    delContact() {
      const name = this.form.name;
      axios
        .get("http://localhost:9190/deleteContactByName/" + name)
        .then((res) => {
          console.log(res);
          this.$router.push({ name: "Home" });
        })

        .catch((err) => console.log(err));
    },
    editContact() {
      const userId = this.$route.params.id;
      this.$router.push({
        name: "editContact",
        params: {
          id: userId,
        },
      });
    },
  },
  mounted() {
    const userId = this.$route.params.id;
    axios
      .get("http://localhost:9190/getContactsByID/" + userId)
      .then((res) => {
        
        this.form = res.data;
        console.log(this.form);
        
      })

      .catch((err) => console.log(err));
  },
};
</script>
<style >
.container{
  background-color: black;
  color:white;
}
</style>
