<template>
  <div>
    <v-form
      id="OTPForm"
      ref="OTPForm"
      v-model="valid"
      autocomplete="off"
      @submit.prevent="loginOTP"
    >
      <v-card-text>
        <v-text-field
          v-model="otp"
          v-mask="otpMask"
          :disabled="laraLoading"
          label="Código de verificación"
          name="OTP"
          prepend-icon="mdi-numeric"
          type="text"
          :rules="laraRules.OTP"
          required
        />
        <v-row>
          <v-spacer />
          <v-btn
            text
            small
            color="primary"
            :disabled="btnSendDisabled"
            :loading="sendingOTP"
            @click="resendOTP"
          >
            Reenviar código
          </v-btn>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-btn
          color="primary"
          text
          :loading="parentLoading"
          :disabled="laraLoading"
          @click="$emit('back')"
        >
          <v-icon left>mdi-arrow-left</v-icon>
          atras
        </v-btn>
        <v-spacer />
        <v-btn
          color="primary"
          type="submit"
          :disabled="btnOtpDisabled"
          :loading="checkingOTP"
        >
          Ingresar
        </v-btn>
      </v-card-actions>
    </v-form>
  </div>
</template>

<script>
import { VERIFY_OTP, RESEND_OTP } from "@js/store/action-types";
import laraval from "@mixins/laraval";
import { mask } from "vue-the-mask";
import { EventBus } from "@services/event-bus";
export default {
  directives: {
    mask
  },
  mixins: [laraval],
  props: {
    parentErrorMessage: {
      type: String,
      default: null
    },
    parentLoading: Boolean
  },
  data: () => ({
    otpMask: "######",
    otp: null,
    valid: false,
    sendingOTP: false,
    checkingOTP: false
  }),
  computed: {
    btnSendDisabled() {
      return (
        this.parentLoading ||
        (this.laraLoading == true && this.sendingOTP == false)
      );
    },
    btnOtpDisabled() {
      return (
        this.parentLoading ||
        (this.laraLoading == true && this.checkingOTP == false)
      );
    }
  },
  mounted() {
    this.$emit("change-title", "Código de seguridad");
  },
  methods: {
    loginOTP() {
      this.checkingOTP = true;
      this.laravalResquest(VERIFY_OTP, this.otp, "OTPForm", false)
        .then(() => {
          EventBus.$emit("logged-in");
        })
        .catch(() => {})
        .finally(() => {
          this.checkingOTP = false;
        });
    },
    resendOTP() {
      this.sendingOTP = true;
      this.laravalResquest(RESEND_OTP, this.otp)
        .then(() => {})
        .catch(() => {})
        .finally(() => {
          this.sendingOTP = false;
        });
    }
  }
};
</script>
