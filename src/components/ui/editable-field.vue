<template lang="pug">
el-input(v-if="isEditMode" v-model="value" )
div(v-else) {{ modelValue }}
</template>

<script>
import { ElInput } from 'element-plus';

export default {
  components: { ElInput },
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    isEditMode: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(newValue) {
        this.$emit('update:modelValue', newValue);
      },
    },
  },
};
</script>

<style lang="stylus" scoped>
div
  display flex
  align-items center
</style>
