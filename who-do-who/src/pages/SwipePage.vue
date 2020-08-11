<template>
  <div class="p-swipe-page">
      <template v-for="(user, index) in users">
          <Card :image="user.image" :name="user.name" :age="user.age" :key="index" />
          YEEEP
      </template>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/Card.vue';

export default {
  name: 'SwipePage',
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

<style>
.p-swipe-page {
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
}
</style>
