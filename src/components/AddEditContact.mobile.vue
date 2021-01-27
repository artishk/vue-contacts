<template>
  <div>
    <b-form
      class="mb-2 mr-sm-2 mb-sm-0"
      v-for="(mobile, $index) in mobiles"
      :key="$index"
      inline
    >
      <b-form-select
        class="mb-2 mr-sm-2 mb-sm-0"
        v-model="mobile.type"
        :options="options"
        required
      ></b-form-select>

      <b-form-input
        class="mb-2 mr-sm-2 mb-sm-0"
        v-model="mobile.value"
        placeholder="Enter number"
        required
      ></b-form-input>
      <b-button @click="addMobileNum" class="btn" variant="success">+</b-button>
    </b-form>
  </div>
</template>
<script>
export default {
  name: "AddEditContact.mobile",
  props: {
    mobiles: { type: Array, required: true }
  },
  methods: {
    addMobileNum() {
      this.mobiles.push({
        type: "",
        value: null
      });
    }
  },
  data() {
    return {
      options: [
        { text: "select one", value: null },
        { text: "Home", value: "home" },
        { text: "Work", value: "work" }
      ]
    };
  }
};
</script>
