<template>
  <div class="container">
    <add-edit-contact :form="form" @onSave="saveForm" />
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import AddEditContact from "../components/AddEditContact.vue";
export default {
  name: "AddNewContact",
  components: {
    AddEditContact
  },
  data() {
    return {
      form: {
        ID: uuidv4(),
        name: "",
        company: "",
        email: [
          {
            type: "",
            value: ""
          }
        ],
        mobile: [
          {
            type: "",
            value: ""
          }
        ]
      }
    };
  },
  methods: {
    saveForm(formData) {
      axios({
        method: "post",
        url: "http://localhost:9190/createNewContact",
        data: formData,
        headers: { "Content-Type": "application/json" }
      })
        .then(response => {
          console.log(response);
          this.$router.push({ name: "Home" });
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
