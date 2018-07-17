<template>
    <v-ons-navigator swipeable swipe-target-width="50px"
      :page-stack="pageStack"
      :pop-page="goBack"
      :options="options"
      :class="{ 'border-radius': borderRadius }"
    ></v-ons-navigator>
  <!-- <v-ons-navigator swipeable swipe-target-width="50px"
    :page-stack="pageStack"
    :pop-page="storePop"
    :options="options"
    @postpush="showPopTip"
    :class="{ 'border-radius': borderRadius }"
  ></v-ons-navigator> -->
</template>

<script>
import AppSplitter from './AppSplitter.vue';

export default {
  beforeCreate() {
    this.$store.commit('navigator/push', AppSplitter);
  },
  data() {
    return {
      shutUp: this.md,
      pageStack: []
    }
  },
  computed: {
    options() {
      return this.$store.state.navigator.options;
    },
    borderRadius() {
      return new URL(window.location).searchParams.get('borderradius') !== null;
    }
  },
  methods: {
    storePop() {
      this.$store.commit('navigator/pop');
    },
    showPopTip() {
      !this.shutUp && this.$ons.notification.toast({
        message: 'Try swipe-to-pop from left side!',
        buttonLabel: 'Shut up!',
        timeout: 2000
      }).then(i => this.shutUp = i === 0);
    },
    goBack() {
      this.$router.push({ name: this.$route.matched[this.$route.matched.length - 2].name });
    }
  },
  created() {
    const mapRouteStack = route => this.pageStack = route.matched.map(m => m.components.default);

    mapRouteStack(this.$route);

    this.$router.beforeEach((to, from, next) => mapRouteStack(to) && next());
  }
};
</script>
