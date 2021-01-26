<template>
  <div class="container">
    <b-button @click="$emit('add-New')" class="btn" variant="success"
      >+</b-button
    >
    <b-list-group style="max-width: 300px;">
      <contact-list-item
        :key="contact.ID"
        v-for="contact in contacts"
        :contact="contact"
        @show-contact="$emit('show-contact', contact)"
      />
    </b-list-group>
  </div>
</template>

<script>
import ContactListItem from "./ContactList.item.vue";
export default {
  name: "ContactList",
  components: {
    ContactListItem
  },
  props: {
    contacts: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.itemcolor {
  background: black;
}
.textstyle {
  color: white;
}
.btn {
  position: relative;
  border-radius: 100%;
  margin: 30px 0 auto auto;
  font-size: 95%;
}
</style>
