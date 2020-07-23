<template>
  <div class="translate">
    <h2>Replace abbreviations in a given text</h2>

    <tc-textarea title="Original Message" :dark="dark" v-model="input" />

    <tc-textarea
      :dark="dark"
      :value="translated"
      :readonly="true"
      placeholder="Result will appear here"
      title="Translated"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import words, { Word } from '@/words';

@Component
export default class Translate extends Vue {
  @Prop() dark!: boolean;
  public input = '';

  public words: Word[] = words;

  get translated(): string {
    let input = this.input;
    console.log(encodeURI(this.input));
    this.words.forEach((w: Word) => {
      input = input
        .split(' ')
        .map(x => (x.toLowerCase() === w.short.toLowerCase() ? w.long : x))
        .join(' ');
      console.log('section', input);
      console.log('compared to', w.short);
      // input = input.split(` ${w.short} `).join(` ${w.long} `);
    });
    return input;
  }
}
</script>
<style lang="scss" scoped>
h2 {
  margin-bottom: 50px;
}
</style>
