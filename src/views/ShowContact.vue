<template>
  <div class="container">
    <b-container>
      <b-row align-h="between">
        <b-col cols="4"
          ><add-edit-contact-button-back @go-back="goBack"
        /></b-col>
        <b-col cols="4"
          ><b-button
            class="btn"
            @click="delContact"
            type="submit"
            variant="danger"
            >X</b-button
          ></b-col
        >
      </b-row>
    </b-container>
    <div></div>
    <b-avatar class="mr-3 avatar" variant="primary"> </b-avatar>
    <b-form class="form-container">
      <b-form-group label="Name:" label-for="input-1">
        <b-form-input v-model="form.name" required></b-form-input>
      </b-form-group>

      <b-form-group label=" Email Addresses:">
        <b-form-group v-for="(email, $index) in form.email" :key="$index">
          <div>
            <b-form inline>
              <b-form-select
                class="mb-2 mr-sm-2 mb-sm-0"
                v-model="email.type"
                :options="options"
                required
              ></b-form-select>
              

                <b-form-input
                  class="mb-2 mr-sm-2 mb-sm-0"
                  v-model="email.value"
                ></b-form-input>
             
            </b-form>
          </div>
        </b-form-group>
      </b-form-group>

      <b-form-group label=" Contact Addresses:">
        <b-form-group
          v-for="(mobile, $index) in form.mobile"
          :key="'hello' + $index"
        >
          <b-form inline>
            <b-form-select
              class="mb-2 mr-sm-2 mb-sm-0"
              v-model="mobile.type"
              :options="options"
              required
            ></b-form-select>

            <b-form-input
              class="mb-2 mr-sm-2 mb-sm-0"
              v-model="mobile.value"
              required
            >
            </b-form-input>
          </b-form>
        </b-form-group>
      </b-form-group>

      <b-button
        @click="editContact"
        class="mb-2 mr-sm-2 mb-sm-0 btn"
        type="submit"
        variant="primary"
      >
        <b-icon icon="pencil-square"></b-icon
      ></b-button>
    </b-form>
  </div>
</template>
<script>
import axios from "axios";
import { BIcon,  BIconPencilSquare } from "bootstrap-vue";
import AddEditContactButtonBack from "../components/AddEditContact.Button.backhome.vue";
import AddEditContactButtonSubmit from "../components/AddEditContact.Button.Submit.vue";
export default {
  name: "ShowContact",
  components: {
    AddEditContactButtonBack,
    AddEditContactButtonSubmit,
    BIcon,
    
    BIconPencilSquare
  },
  data() {
    return {
      form: {},
      options: [
        { text: "select one", value: null },
        { text: "Home", value: "home" },
        { text: "Work", value: "work" }
      ]
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
        .then(res => {
          console.log(res);
          this.$router.push({ name: "Home" });
        })

        .catch(err => console.log(err));
    },
    editContact() {
      const userId = this.$route.params.id;
      this.$router.push({
        name: "editContact",
        params: {
          id: userId
        }
      });
    }
  },
  mounted() {
    const userId = this.$route.params.id;
    axios
      .get("http://localhost:9190/getContactsByID/" + userId)
      .then(res => {
        this.form = res.data;
        console.log(this.form);
      })

      .catch(err => console.log(err));
  }
};
</script>
<style>
.container {
  background-color: black;
  color: white;
}
.form-container {
  margin: auto;
  padding-top: 40px;
}
.avatar {
  margin-top: 30px;
}
.btn {
  border-radius: 100%;
  margin-top: 20px;
}
</style>
