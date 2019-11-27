<template>
  <v-window-item :value="value">
    <transition
      name="fade-transition"
      mode="out-in"
      @beforeLeave="beforeLeave"
      @enter="enter"
      @afterEnter="afterEnter"
    >
      <component
        :is="currentComponent"
        :parent-error-message="errorMessage"
        :parent-loading="laraLoading"
        :value="value"
        @change-title="changeTitle"
        @back="back"
      />
    </transition>
  </v-window-item>
</template>

<script>
import laraval from "@mixins/laraval";
import { EventBus } from "@services/event-bus";
import { CHECK_AUTH, LOGOUT } from "@store/action-types";
import OtpForm from "@components/auth/window-items/OtpForm";
import ErrorItem from "@components/auth/window-items/ErrorItem";
import CheckingLogin from "@components/auth/window-items/CheckingLogin";
import EmailNotVerified from "@components/auth/window-items/EmailNotVerified";
export default {
  mixins: [laraval],
  props: {
    value: {
      type: Number,
      default: null
    },
    step: {
      type: Number,
      default: null
    },
    parentLoading: Boolean
  },
  data: () => ({
    checkResultCode: 0
  }),
  computed: {
    currentComponent: function() {
      switch (this.checkResultCode) {
        case 0:
          return CheckingLogin;
        // break;
        case 1:
          return EmailNotVerified;
        // break;
        case 2:
          return OtpForm;
        // break;
        default:
          return ErrorItem;
        // break;
      }
    }
  },
  watch: {
    step: function() {
      this.checkStep();
    }
  },
  mounted() {
    this.checkStep();
  },
  methods: {
    // transicion
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);

      element.style.height = this.prevHeight;

      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = "auto";
    },
    // Otros
    checkStep() {
      if (this.step == this.value) {
        this.checkResultCode = 0;
        this.checkAuth();
      }
    },
    checkAuth: function() {
      this.laravalResquest(CHECK_AUTH, null, null, false)
        .then(() => {
          EventBus.$emit("logged-in");
        })
        .catch(error => {
          setTimeout(() => {
            this.checkResultCode = error.response.data.forbiddenCode;
          }, 300);
        });
    },
    changeTitle: function(title) {
      this.$emit("change-title", title);
    },
    back: function() {
      this.laraLoading = true;
      this.$store.dispatch(LOGOUT).finally(() => {
        this.checkResultCode = 0;
        this.laraLoading = false;
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.v-window-item {
  overflow: hidden;
}
</style>
