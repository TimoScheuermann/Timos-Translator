<template>
  <div class="help">
    <tc-card
      :dark="dark"
      title="You dont know what I mean?"
      subtitle="Send me a message via telegram"
    >
      <tc-button
        name="Message me"
        variant="filled"
        href="tg://resolve?domain=timo_scheuermann"
      />
    </tc-card>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
@Component
export default class Help extends Vue {
  @Prop() dark!: boolean;
}
</script>

<style lang="scss" scoped></style>
