<template>
<router-view />
</template>

<script>
import { ElNotification } from 'element-plus';

export default {
  computed: {
    errors() {
      return this.$store.state.errors;
    },
  },
  watch: {
    async errors(newValue) {
      if (!newValue.length) {
        return;
      }

      // eslint-disable-next-line no-restricted-syntax
      for (const { title, message } of newValue) {
        ElNotification({ title, message, type: 'error' });

        // eslint-disable-next-line no-await-in-loop
        await this.$nextTick(); // фикс бага нотифаев Elements-Plus
      }

      this.$store.commit('clearErrors');
    },
  },
};
</script>

<style lang="stylus">
body
  margin 0
  font-family sans-serif
  background-color #f3f3f3

  .el-notification__content
    text-align left

  #app
    width 900px
    margin 0 auto
</style>
