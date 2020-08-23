<template>
  <div class="home">
    <h1>Welcome</h1>
    <p>
      Find out the meaning of my abbreviations
    </p>
    <tc-card :rounded="true" :dark="dark" title="Abbreviations">
      <tc-input
        placeholder="Find abbreviation"
        v-model="query"
        :dark="dark"
        icon="lens"
      />
      <tc-table :dark="dark">
        <tc-tr v-for="w in words" :key="w.short">
          <tc-td>{{ w.short }}</tc-td>
          <tc-td><i class="ti-arrow-right"/></tc-td>
          <tc-td>{{ w.long }}</tc-td>
          <template slot="expander" v-if="w.description">
            <p>{{ w.description }}</p>
          </template>
        </tc-tr>
      </tc-table>
    </tc-card>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

import words, { Word } from '@/words';

@Component
export default class Home extends Vue {
  @Prop() dark!: boolean;
  public query = '';

  get words(): Word[] {
    return words
      .filter(w =>
        Object.values(w)
          .join('')
          .toLowerCase()
          .includes(this.query.toLowerCase())
      )
      .sort((a: Word, b: Word) => a.short.localeCompare(b.short));
  }
}
</script>
<style lang="scss" scoped>
.tc-table,
.tl-grid {
  margin-top: 10px;
}
</style>
