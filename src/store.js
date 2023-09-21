import { createStore } from 'redux';
import productReducer from './reducers/productsReducer';

const saveStateToLocalStorage = (state) => {
   try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('reduxState', serializedState);
   } catch (error) {
      // Обработка ошибок сохранения в localStorage
      console.error('Ошибка при сохранении состояния в localStorage:', error);
   }
};

const loadStateFromLocalStorage = () => {
   try {
      const serializedState = localStorage.getItem('reduxState');
      if (serializedState === null) {
         return undefined;
      }
      return JSON.parse(serializedState);
   } catch (error) {
      // Обработка ошибок загрузки из localStorage
      console.error('Ошибка при загрузке состояния из localStorage:', error);
      return undefined;
   }
};

const store = createStore(productReducer, loadStateFromLocalStorage());

store.subscribe(() => {
   const state = store.getState();
   saveStateToLocalStorage(state);
});

export default store;


