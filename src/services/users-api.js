// fake API service (placeholders)

const fakeUsersFromServer = [
  { id: 1, name: 'Ann', phone: '+19546570174' },
  { id: 2, name: 'Max', phone: '89546570122' },
  { id: 3, name: 'Alex', phone: '+3954-657-0444' },
  { id: 4, name: 'Helen', phone: '0999-215-56-73' },
  { id: 5, name: 'Michael', phone: '+313678989123' },
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
