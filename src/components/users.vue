<template lang="pug">
el-card.users
  .users-grid
    .header Имя
    .header Телефон
    div

    users-table-row(
      v-for="user in users"
      :user="user"
      :key="user.id"
      @update="updateUser"
      @remove="removeUser"
    )

  el-divider

  .users-grid
    el-input(v-model="newUser.name" placeholder="Имя")
    el-input(v-model="newUser.phone" placeholder="Телефон")
    el-button(type="primary" @click="createUser") Добавить
</template>

<script setup>
// пример кода на Composition API script setup (остальные компоненты в обычном Options стиле)

/* eslint-disable no-unused-vars */
import { onMounted, ref } from 'vue';
import usersTableRow from '@/components/users/users-table-row.vue';
import usersApi from '@/services/users-api';
import validate from '@/services/input-validate';
/* eslint-disable object-curly-newline */
import { ElButton, ElCard, ElDivider, ElInput } from 'element-plus';

const emptyUser = { name: '', phone: '' };
const users = ref([]);
const newUser = ref({ ...emptyUser });

onMounted(async () => { // с реальным API на все асинхронные запросы нужны обработчики ошибок
  users.value = await usersApi.getUsers();
});

const createUser = async () => {
  const isValid = validate([
    { fieldName: 'Имя', value: newUser.value.name, rule: 'notEmpty' },
    { fieldName: 'Телефон', value: newUser.value.phone, rule: 'phone' },
  ]);

  if (!isValid) {
    return;
  }

  const createdUser = await usersApi.createUser(newUser.value);

  newUser.value = { ...emptyUser };
  users.value = [...users.value, createdUser];
};

const updateUser = (user) => usersApi.updateUser(user);

const removeUser = (userIdToRemove) => {
  users.value = users.value.filter(({ id }) => id !== userIdToRemove);

  usersApi.removeUser(userIdToRemove);
};
</script>

<style lang="stylus" scoped>
.users
  margin 20px

  .header
    font-weight bold
    margin-bottom 8px

  .users-grid
    display grid
    grid-template-columns 1fr 1fr auto
    gap 12px
</style>
