<template>
  <div>
    <b-form>
      <b-form-group id="input-group-1" label="Name:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your email:" label-for="input-2">
        <b-form inline>
          <b-form-select
            id="input-3"
            v-model="form.email1.option1"
            :options="options"
            required
          ></b-form-select>
          <div>
            <b-form inline>
              <label class="sr-only" for="inline-form-input-name">Name</label>
              <b-form-input
                id="inline-form-input-name"
                class="mb-2 mr-sm-2 mb-sm-0"
                placeholder="username"
                v-model="form.email1.username"
              ></b-form-input>

              <label class="sr-only" for="inline-form-input-username"
                >Username</label
              >
              <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
                <b-form-input
                  id="inline-form-input-username"
                  placeholder="domain name"
                  v-model="form.email1.domain"
                ></b-form-input>
              </b-input-group>
            </b-form>
          </div>
        </b-form>
      </b-form-group>

      <b-form-group id="input-group-3" label="Your Number:" label-for="input-3">
        <b-form inline>
          <b-form-select
            id="input-3"
            v-model="form.number.option"
            :options="options"
            required
          ></b-form-select>
          <b-form-input
            id="input-2"
            v-model="form.number.contactNumber"
            placeholder="Enter number"
            required
          >
          </b-form-input>
        </b-form>
      </b-form-group>

      <b-button @click="addContact" type="submit" variant="primary"
        >Submit</b-button
      >
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
export default {
  name: "AddNewContact",
  data() {
    return {
      form: {
        ID: uuidv4(),
        name: "",
        email1: {
          username: "",
          symbol: "@",
          domain: "",
          workemailString() {
            this.form.email1.username +
              this.form.email1.symbol +
              this.form.email1.domain;
          },
        },

        number: {
          contactNumber: "",
        },
      },
      options: [{ text: "select one", value: "office" }, "office", "Work"],
    };
  },
  methods: {
    addContact() {
      console.log(this.form);
      axios({
        method: "post",
        url: "http://localhost:9190/createNewContact",
        data: this.form,
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => {
          console.log(response);
          this.$router.push({ name: "Home" });
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
};
</script>
