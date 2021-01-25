<template>
  <div class="home">
    <ContactsList
      :contacts="contacts"
      v-on:add-New="addNewAccount"
      v-on:show-contact="showContact"
      v-on:del-contact="delContact"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import ContactsList from "../components/ContactList.vue";

import axios from "axios";

export default {
  name: "Home",
  components: {
    ContactsList,
  },
  data() {
    return {
      contacts: [],
    };
  },
  methods: {
    addNewAccount() {
      this.$router.push({
        name: "AddNewContact",
      });
    },
    showContact(contact) {
      this.$router.push({
        name: "ShowContact",
        params: {
          id: contact.ID,
        },
      });
    },
    delContact(id) {
      this.contacts = this.contactss.filter((contact) => contact.ID !== id);
    },
  },
  mounted() {
    axios
      .get("http://localhost:9190/getAllContacts")
      .then((response) => {
        this.contacts = response.data;
      })
      .catch((err) => console.log(err));
  },
};
</script>
