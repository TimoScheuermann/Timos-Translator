<template>
  <div class="home">
    <tl-grid>
      <tc-card
        :rounded="true"
        :dark="dark"
        title="Welcome"
        subtitle="Find out the meaning of my abbreviations"
      />
      <tc-card :rounded="true" :dark="dark" title="Abbreviations">
        <tc-input
          placeholder="Find abbreviation"
          v-model="query"
          :dark="dark"
          icon="lens"
        />
        <tc-table :dark="dark">
          <tr v-for="w in words" :key="w.short" @click="show(w)">
            <td>{{ w.short }}</td>
            <td><i class="ti-arrow-right" /></td>
            <td>{{ w.long }}</td>
            <td><i class="ti-questionmark" /></td>
          </tr>
        </tc-table>
      </tc-card>
    </tl-grid>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

import { EventBus } from '@/eventBus';
import words, { Word } from '@/words';

@Component
export default class Home extends Vue {
  @Prop() dark!: boolean;
  public query = '';

  public show(w: Word) {
    EventBus.$emit('modal', w);
  }

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
