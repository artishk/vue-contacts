<template>
  <div class="d-flex flex-row-reverse">
    <b-button
      class="btn1 d-flex justify-content-end"
      @click="$emit('onSave', form)"
      type="submit"
      variant="primary"
      >✔</b-button
    >
  </div>
</template>
<script>
export default {
  name: "AddEditContact.Button.Submit",
  props: {
    form: { type: Object, required: true }
  }
};
</script>
<style>
.btn1 {
  border-radius: 100%;
  margin: 20px 60px auto 600px;
  font-size: 95%;
}
</style>
