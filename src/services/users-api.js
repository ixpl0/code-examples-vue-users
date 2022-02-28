// имитирует сервис по работе с API (плейсхолдеры)

const fakeUsersFromServer = [
  { id: 1, name: 'Анна', phone: '+79546570174' },
  { id: 2, name: 'Максим', phone: '89546570122' },
  { id: 3, name: 'Татьяна', phone: '+7954-657-0444' },
  { id: 4, name: 'Андрей', phone: '8999-215-56-73' },
  { id: 5, name: 'Кирилл', phone: '+313678989123' },
];

const getUsers = () => Promise.resolve(fakeUsersFromServer);

const createUser = (user) => {
  const id = Math.round(Math.random() * 1000000000);

  return Promise.resolve({ ...user, id });
};

const updateUser = (user) => Promise.resolve(user);

const removeUser = (id) => Promise.resolve(id);

export default {
  getUsers,
  createUser,
  updateUser,
  removeUser,
};
