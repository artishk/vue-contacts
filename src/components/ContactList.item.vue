<template>
  <b-list-group-item
    button
    @click="$emit('show-contact', contact)"
    class="d-flex align-items-center itemcolor"
  >
    <b-avatar class="mr-3" :style="{ backgroundColor: getRandomColor }">{{
      getNameInititals
    }}</b-avatar>
    <span class="mr-auto textstyle">{{ contact.name }}</span>
  </b-list-group-item>
</template>
<script>
export default {
  props: {
    contact: {
      type: Object,
      required: true
    }
  },
  computed: {
    getNameInititals() {
      return this.contact.name
        .toUpperCase()
        .split(" ")
        .map(name => name[0])
        .join("");
    },
    getRandomColor() {
      return (
        "#" +
        Math.floor(Math.random() * 2 ** 24)
          .toString(16)
          .padStart(6, "0")
      );
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
</style>
