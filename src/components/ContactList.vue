<template>
  <div>
    <b-card class="card">
      <b-list-group :key="contact.ID" v-for="contact in contacts">
        <b-list-group-item button @click="$emit('show-contact', contact)">
          {{ contact.name }}
        </b-list-group-item>
      </b-list-group>
      <b-button @click="$emit('add-New')" class="btn" variant="primary"
        >+</b-button
      >
    </b-card>
  </div>
</template>
<script>
export default {
  name: "ContactList",
  props: ["contacts"],
};
</script>

<style scoped>
.card {
  width: 450px;
  margin: auto;
}
.btn {
  border-radius: 100%;
  margin: auto;
  font-size: 85%;
}
</style>
