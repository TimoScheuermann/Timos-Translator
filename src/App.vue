<template>
  <div id="timos-translator">
    <tc-header :title="$route.meta.title" :dark="isDark" />
    <tc-tabbar :dark="isDark">
      <tc-tabbar-item routeName="home" />
      <tc-tabbar-item routeName="translate" title="Translate" icon="exchange" />
      <tc-tabbar-item routeName="help" title="Help" icon="question-circle" />
    </tc-tabbar>
    <div content>
      <router-view :dark="isDark" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class App extends Vue {
  public isDark =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;

  mounted() {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', e => {
        this.isDark = e.matches;
      });
  }
}
</script>

<style lang="scss">
html {
  font-family: -apple-system, BlinkMacSystemFont, SF Pro Display, Segoe UI,
    Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji,
    Segoe UI Symbol;
  scroll-behavior: smooth;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
}

body {
  background: $background;
  color: $color;
  margin: 0;
  @media (prefers-color-scheme: dark) {
    background: #000;
    color: #fff;
  }
  min-height: 100vh;
}
a {
  text-decoration: none;
}
[content] {
  padding: calc(70px + env(safe-area-inset-bottom)) 5vw
    calc(70px + env(safe-area-inset-bottom));
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}
</style>
