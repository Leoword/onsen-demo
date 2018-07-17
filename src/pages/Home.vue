<template>
  <v-ons-page>
    <p class="intro">
      This is a kitchen sink example that shows off the Vue bindings for Onsen UI.<br><br>
    </p>

    <v-ons-card v-for="page of pages" :key="page.label"
      @click="push(page.name, page.label)"
    >
      <div class="title">{{ page.label }}</div>
      <div class="content">{{ page.desc }}</div>
    </v-ons-card>
  </v-ons-page>
</template>

<script>
export default {
  data () {
    return {
      pages: [
        {
          name: 'pullhook',
          label: 'Pull Hook',
          desc: 'Simple "pull to refresh" functionality to update data.'
        },
        {
          name: 'dialogs',
          label: 'Dialogs',
          desc: 'Components and utility methods to display many types of dialogs.'
        },
        {
          name: 'buttons',
          label: 'Buttons',
          desc: 'Different styles for buttons, floating action buttons and speed dials.'
        },
        {
          name: 'carousel',
          label: 'Carousel',
          desc: 'Customizable carousel that can be optionally fullscreen.'
        },
        {
          name: 'infiniteScroll',
          label: 'Infinite Scroll',
          desc: 'Two types of infinite lists: "Load More" and "Lazy Repeat".'
        },
        {
          name: 'progress',
          label: 'Progress',
          desc: 'Linear progress, circular progress and spinners.'
        }
      ]
    };
  },

  methods: {
    push(name, key) {
      // this.$store.commit('navigator/push', {
      //   extends: page,
      //   data() {
      //     return {
      //       toolbarInfo: {
      //         backLabel: 'Home',
      //         title: key
      //       }
      //     }
      //   }
      // });
      this.$router.push(`/${name}?title=${key}&&backLabel=Home`);

    }
  }
};
</script>

<style>
.intro {
  text-align: left;
  padding: 0 22px;
  margin-top: 20px;
  font-size: 14px;
  line-height: 1.4;
  color: rgba(0, 0, 0, .54);
}

ons-card {
  cursor: pointer;
  color: #333;
}

.card__title, .card--material__title {
  font-size: 20px;
}
</style>
