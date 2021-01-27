<template>
  <div>
    <b-button
      @click="$emit('go-back')"
      class=" d-flex justify-content-start btn3 "
      type="submit"
      variant="primary"
    >
      <b-icon icon="arrow-left"></b-icon>
    </b-button>
  </div>
</template>
<script>
import { BIcon, BIconArrowLeft } from "bootstrap-vue";
export default {
  components: {
    BIcon,
    BIconArrowLeft
  }
};
</script>
<style>
.btn3 {
  border-radius: 100%;
  margin: 20px 600px auto 60px;
}
</style>
