const app = Vue.createApp({
  data() {
    return {
      count: 0,
    };
  },
  computed: {
    result() {
      if (this.count < 37) {
        return "Not there yet";
      } else if (this.count == 37) {
        return this.count;
      } else {
        return "Too much!";
      }
    },
  },
  watch: {
    result() {
      const that = this;
      setInterval(function () {
        that.count = 0;
      }, 5000);
    },
  },
  methods: {
    increment(number) {
      this.count = this.count + number;
    },
  },
});

app.mount("#assignment");
