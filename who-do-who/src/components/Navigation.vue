<template>
  <div class="m-navigation">
    <router-link to="/swiping">Swipes</router-link>
    <router-link to="/">Matches</router-link>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Navigation extends Vue {
}
</script>
