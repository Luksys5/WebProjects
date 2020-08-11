<template>
  <div class="p-matches-page">
      <template v-for="(user, index) in users">
          <Card :image="user.image" :name="user.name" :age="user.age" :key="index" />
      </template>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/Card.vue';

export default {
  name: 'MatchesPage',
  components: {
    Card,
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
  },
};
</script>
