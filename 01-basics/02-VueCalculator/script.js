import { createApp } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение
const app = createApp({
  data() {
    return {
      one: 0,
      two: 0,
      operator: 'sum',
    }
  },
  computed: {
    result: function() {
      switch (this.operator) {
        case 'sum':
          return this.one + this.two
          break;
        case 'subtract':
          return this.one - this.two
          break;
        case 'multiply':
          return this.one * this.two
          break;
        case 'divide':
          return this.one / this.two
          break;
      }
    }
  }
}).mount('#app')
