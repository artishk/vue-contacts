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

      <b-input-group>
        <b-input-group-prepend is-text>
          <b-icon icon="envelope"></b-icon>
        </b-input-group-prepend>
        <b-form-input
          class="mb-2 mr-sm-2 mb-sm-0"
          v-model="email.value"
          placeholder="userID"
        ></b-form-input>
      </b-input-group>
      <b-button @click="addEmail" class="btn" variant="success">+</b-button>
    </b-form>
  </div>
</template>
<script>
import { BIcon, BIconEnvelope } from "bootstrap-vue";
export default {
  name: "AddEditContact.email",
  props: {
    emails: { type: Array, required: true }
  },
  components: {
    BIcon,
    BIconEnvelope
  },
  methods: {
    addEmail() {
      this.emails.push({
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
