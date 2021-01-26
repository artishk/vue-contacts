<template>
  <div class="container">
    <b-form>
      <b-form-group id="input-group-1" label="Name:" label-for="input-1">
        <b-form-input
          v-model="form.name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Company:" label-for="input-1">
        <b-form-input
          v-model="form.company"
          placeholder="Enter Company Name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Your email:">
        <b-form
          class="mb-2 mr-sm-2 mb-sm-0"
          inline
          v-for="(email, $pindex) in form.email"
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
            placeholder="username"
          ></b-form-input>
          <b-button @click="addEmail" class="btn" variant="success">+</b-button>
        </b-form>
      </b-form-group>

      <b-form-group label="Your Number:" class="mb-2 mr-sm-2 mb-sm-0">
        <b-form
          class="mb-2 mr-sm-2 mb-sm-0"
          v-for="(mobile, $index) in form.mobile"
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
          <b-button @click="addMobileNum" class="btn" variant="success"
            >+</b-button
          >
        </b-form>
      </b-form-group>
      <div>
        <b-button
          @click="goBack"
          class="mb-2 mr-sm-2 mb-sm-0 "
          type="submit"
          variant="primary"
          >Back</b-button
        >

        <b-button
          class="mb-2 mr-sm-2 mb-sm-0 "
          @click="$emit('onSave', form)"
          type="submit"
          variant="primary"
          >Submit</b-button
        >
      </div>
    </b-form>
  </div>
</template>
<script>
export default {
  props: {
    form: { type: Object, required: true }
  },
  data() {
    return {
      options: [
        { text: "select one", value: null },
        { text: "Home", value: "home" },
        { text: "Work", value: "work" }
      ]
    };
  },
  methods: {
    addMobileNum() {
      this.form.mobile.push({
        type: "",
        value: null
      });
    },
    addEmail() {
      this.form.email.push({
        type: "",
        value: null
      });
    },
    goBack() {
      this.$router.push({ name: "Home" });
    }
  }
};
</script>
