<template>
  <div>
    <b-alert
      class="mt-3"
      :show="dismissCountDown"
      dismissible
      variant="warning"
      @dismissed="alertDismissed"
      @dismiss-count-down="countDownChanged"
    >
      <p>This alert will dismiss after {{ dismissCountDown }} seconds...</p>
      <b-progress variant="warning" :max="dismissSecs" :value="dismissCountDown" height="4px"></b-progress>
    </b-alert>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dismissSecs: 10,
      dismissCountDown: 10,
    };
  },
  methods: {
    alertDismissed() {
      console.log("chao chao");
      this.dismissCountDown = 0;
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },
  },
};
</script>