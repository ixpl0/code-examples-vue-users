<template lang="pug">
template(v-if="clonedUser")
  editable-field(v-model="clonedUser.name" :is-edit-mode="isEditMode")
  editable-field(v-model="clonedUser.phone" :is-edit-mode="isEditMode")
  .flex-right
    el-button(v-if="isEditMode" @click="updateUser") Save
    el-button(v-else @click="editUser") Edit
    el-button(@click="removeUser") Delete
</template>

<script>
import { ElButton, ElCol, ElRow } from 'element-plus';
import EditableField from '@/components/ui/editable-field.vue';
import validate from '@/services/input-validate';

export default {
  /* eslint-disable object-curly-newline */
  components: { EditableField, ElButton, ElRow, ElCol },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  emits: ['update', 'remove'],
  data() {
    return {
      clonedUser: null,
      isEditMode: false,
    };
  },
  mounted() {
    this.clonedUser = { ...this.user };
  },
  methods: {
    editUser() {
      this.isEditMode = true;
    },
    removeUser() {
      this.$emit('remove', this.clonedUser.id);
    },
    updateUser() {
      const isValid = validate([
        { fieldName: 'Имя', value: this.clonedUser.name, rule: 'notEmpty' },
        { fieldName: 'Телефон', value: this.clonedUser.phone, rule: 'phone' },
      ]);

      if (!isValid) {
        return;
      }

      this.isEditMode = false;
      this.$emit('update', this.clonedUser);
    },
  },
};
</script>

<style lang="stylus" scoped>
.el-row + .el-row
  margin-top 4px

.flex-right
  display flex
  justify-content flex-end

.el-col
  display flex !important
  align-items center
</style>
