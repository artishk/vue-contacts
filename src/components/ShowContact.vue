<template>
  <div>
    <b-form>
      <b-form-group id="input-group-1" label="Name:" label-for="input-1">
        <b-form-input id="input-1" v-model="form.name" required></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your email:" label-for="input-2">
        <div>
          <b-form inline>
            <b-form-input
              id="inline-form-input-email"
              class="mb-2 mr-sm-2 mb-sm-0"
              v-model="form.email.work"
            ></b-form-input>
            <b-form-input
              id="inline-form-input-email"
              class="mb-2 mr-sm-2 mb-sm-0"
            ></b-form-input>
          </b-form>
        </div>
      </b-form-group>

      <b-form-group id="input-group-3" label="Your Number:" label-for="input-3">
        <b-form inline>
          <b-form-input
            id="input-2"
            class="mb-2 mr-sm-2 mb-sm-0"
            v-model="form.mobile.work"
            required
          >
          </b-form-input>
          <b-form-input
            id="input-2"
            class="mb-2 mr-sm-2 mb-sm-0"
            v-model="form.mobile.home"
            required
          >
          </b-form-input>
        </b-form>
      </b-form-group>
      <b-button
        @click="goBack"
        class="mb-2 mr-sm-2 mb-sm-0"
        type="submit"
        variant="primary"
        >Back</b-button
      >
      <b-button
        @click="$emit('edit-Contact', form.ID)"
        class="mb-2 mr-sm-2 mb-sm-0"
        type="submit"
        variant="primary"
        >Edit</b-button
      >
      <b-button @click="delContact" type="submit" variant="danger"
        >Delete</b-button
      >
    </b-form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "ShowContact",
  data() {
    return {
      form: {},
    };
  },
  methods: {
    goBack() {
      this.$router.push({ name: "Home" });
    },
    delContact() {
      const name = this.form.name;
      axios
        .get("http://localhost:9190/deleteContactByName/" + name)
        .then((res) => {
          console.log(res);
          this.$router.push({ name: "Home" });
        })

        .catch((err) => console.log(err));
    },
    editContact() {
      const userId = this.$route.params.id;
      this.$router.push({
        name: "editContact",
        params: {
          id: userId,
        },
      });
    },
  },
  mounted() {
    const userId = this.$route.params.id;
    axios
      .get("http://localhost:9190/getContactsByID/" + userId)
      .then((res) => {
        this.form = res.data;
        console.log(this.form);
      })

      .catch((err) => console.log(err));
  },
};
</script>
