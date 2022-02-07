import { createStore } from 'redux';

const store = createStore(() => {
  return {
    id: 3,
    name: 'Renan',
    email: 'renanvz@outlook.com'
  }
});

export default store;