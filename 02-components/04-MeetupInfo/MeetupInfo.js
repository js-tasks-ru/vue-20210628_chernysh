import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupInfo',
  props: {
    organizer: {
      type: String,
    },
    place: {
      type: String,
    },
    date: {
      type: Number,
    }
  },
  computed: {
    date_formating() {
      return new Date(this.date).toLocaleString(navigator.language, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    },
    format_date() {
      let date = new Date(this.date),
          year = date.getFullYear(),
          month = date.getMonth() + 1,
          day = date.getDate();
      if (day < 10) day = '0' + day;
      if (month < 10) month = '0' + month;
      return year + '-' + month + '-' + day;
    },
  },
  template: `
    <ul class="meetup-info">
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-user.svg" />
        {{ organizer }}
      </li>
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-map.svg" />
        {{ place }}
      </li>
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-cal-lg.svg" />
        <time :datetime="format_date">{{ date_formating }}</time>
      </li>
    </ul>`,
});
