<template>
  <div id="timos-translator">
    <tl-modal :value="modalOpened">
      <tc-modal
        slot="modal"
        v-model="modalOpened"
        :title="modalWord.short"
        :subtitle="modalWord.long"
        :dark="isDark"
      >
        {{ modalWord.description }}
      </tc-modal>
      <tc-navbar :dark="isDark">
        <b slot="logo">Timo's Translator</b>
      </tc-navbar>

      <tc-tabbar :dark="isDark">
        <tc-tabbar-item routeName="home" />
        <tc-tabbar-item
          routeName="translate"
          title="Translate"
          icon="exchange"
        />
        <tc-tabbar-item routeName="help" title="Help" icon="question-circle" />
      </tc-tabbar>
      <div class="views">
        <div content>
          <router-view :dark="isDark" />
        </div>
      </div>
    </tl-modal>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import { EventBus } from '@/eventBus';
import { Word } from './words';

@Component
export default class App extends Vue {
  public modalOpened = false;
  public modalWord: Word = { short: '', long: '', description: '' };

  public isDark =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;

  mounted() {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', e => {
        this.isDark = e.matches;
        this.$forceUpdate();
      });

    EventBus.$on('modal', (w: Word) => {
      this.modalWord = w;
      this.modalOpened = true;
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
  margin: 0;
  transition: 0s;
}
.views,
body {
  background: $background;
  color: $color;
  @media (prefers-color-scheme: dark) {
    background: $background_dark;
    color: $color_dark;
  }
}
.views {
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
