<template>
  <div class="container">
    <add-edit-contact :form="form" @onSave="updateContact" />
  </div>
</template>

<script>
import AddEditContact from "../components/AddEditContact.vue";
import axios from "axios";
export default {
  name: "editContact",
  components: {
    AddEditContact
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
    updateContact(formdata) {
      const userId = this.$route.params.id;
      axios({
        method: "post",
        url: "http://localhost:9190/updateContactByID/" + userId,
        data: formdata,
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
}
</style>
