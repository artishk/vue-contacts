<template>
  <div class="container">
    <b-container>
      <b-row align-h="between">
        <b-col cols="4"
          ><add-edit-contact-button-backhome @go-back="goBack" />
        </b-col>
        <b-col cols="4">
          <add-edit-contact-button-submit
            :form="form"
            @onSave="$emit('onSave', form)"
          />
        </b-col>
      </b-row>
    </b-container>

    <b-avatar class="mr-3 avatar" variant="primary"> </b-avatar>
    <b-form class="form-container">
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

      <b-form-group label=" Email Addresses:">
        <add-edit-contact-email :emails="form.email" />
      </b-form-group>

      <b-form-group label="Contact Numbers:" class="mb-2 mr-sm-2 mb-sm-0">
        <add-edit-contact-mobile :mobiles="form.mobile" />
      </b-form-group>
    </b-form>
  </div>
</template>
<script>
import AddEditContactEmail from "./AddEditContact.email.vue";
import AddEditContactMobile from "./AddEditContact.mobile.vue";
import AddEditContactButtonSubmit from "./AddEditContact.Button.Submit.vue";
import AddEditContactButtonBackhome from "./AddEditContact.Button.backhome.vue";
export default {
  name: "AddEditContact",
  components: {
    AddEditContactEmail,
    AddEditContactMobile,
    AddEditContactButtonSubmit,
    AddEditContactButtonBackhome
  },
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
    goBack() {
      this.$router.push({ name: "Home" });
    }
  }
};
</script>
<style>
.form-container {
  margin: auto;
  padding-top: 40px;
}
.avatar {
  position: relative;
  margin-top: 30px;
}
</style>
