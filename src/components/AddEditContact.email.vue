<template>
  <div>
    <b-form
      class="mb-2 mr-sm-2 mb-sm-0"
      inline
      v-for="(email, $pindex) in emails"
      :key="'hello' + $pindex"
    >
      <b-form-select
        class="mb-2 mr-sm-2 mb-sm-0"
        v-model="email.type"
        :options="options"
        required
      ></b-form-select>

     
        
        <b-form-input
          class="mb-2 mr-sm-2 mb-sm-0"
          v-model="email.value"
          placeholder="Email"
        ></b-form-input>
      
      <b-button @click="addEmail" class="btn" variant="success">+</b-button>
    </b-form>
  </div>
</template>
<script>

export default {
  name: "AddEditContact.email",
  props: {
    emails: { type: Array, required: true }
  },
  
  methods: {
    addEmail() {
      this.emails.push({
        type: null,
        value: ""
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
