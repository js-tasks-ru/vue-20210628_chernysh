import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupCover',
  props: {
    title: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  computed: {
    meetup_cover_style() {
      return this.image && '--bg-url: url(' + this.image + ')';
    },
  },
  template: `
    <div class="meetup-cover" :style=meetup_cover_style>
        <h1 class="meetup-cover__title">{{ title }}</h1>
    </div>`,
});
