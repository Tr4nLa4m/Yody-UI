<template>
  <div class="dialog dialog-notice">
    <div class="flex center h100p">
      <div class="dialog-container">
        <div class="dialog-close" @click="btnCloseModal">
          <div class="dialog-close-btn flex center">
            <div class="icon icon_24 icon_close"></div>
          </div>
        </div>
        <div class="dialog-header">
          <!-- <div class="title">Thông tin nhân viên</div> -->
        </div>

        <div class="dialog-body">
          <div class="dialog-main-content flex">
            <div class="dialog-icon">
              <div class="icon icon_48 icon_exclamation-error"></div>
            </div>
            <div class="dialog-message">
              <span v-for="(msg,index) in errMsg" :key="index" class="message">{{msg}}</span>
            </div>
          </div>
        </div>

        <div class="dialog-footer">
          <button
            id="btnCloseDialog"
            class="button-default primary"
            @click="btnCloseModal"
          >
            Đồng ý
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MModal",
  data() {
    return {};
  },
  props: {
    errMsg: {
      type: Array,
    },
    ErrorMode: {
      type: Number,
      default: 0, // 0 - lỗi , 1- cảnh báo
      required: true,
    },
  },
  methods: {
    btnCloseModal() {
      this.$emit("closeModal", false);
    },
  },
};
</script>


<style>
@import url(../../css/base/dialog.css);
</style>