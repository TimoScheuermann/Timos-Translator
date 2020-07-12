<template>
  <div class="translate">
    <h2>Replace abbreviations in a given text</h2>

    <tc-textarea
      title="Original Message"
      :cols="400"
      :dark="dark"
      v-model="input"
    />

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
import TCTextarea from '@/components/TC-Textarea.vue';
import words, { Word } from '@/words';

@Component({
  components: {
    'tc-textarea': TCTextarea
  }
})
export default class Translate extends Vue {
  @Prop() dark!: boolean;
  public input = '';

  public words: Word[] = words;

  get translated(): string {
    let input = this.input;
    this.words.forEach((w: Word) => {
      input = input
        .split(' ')
        .map(x => (x.toLowerCase() === w.short.toLowerCase() ? w.long : x))
        .join(' ');
      // input = input.split(` ${w.short} `).join(` ${w.long} `);
    });
    return input;
  }
}
</script>

<style lang="scss" scoped>
.tc-textarea {
  margin-top: 50px;
}
</style>
