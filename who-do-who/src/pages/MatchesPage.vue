<template>
    <div class="p-page p-matches-page">
        <template v-for="(user, index) in users">
            <card v-bind="user" :key="index" />
        </template>
        <rate />
    </div>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/Card.vue';
import Rate from '@/components/Rate.vue';

export default {
    name: 'MatchesPage',
    components: {
        Card,
        Rate
    },
    computed: {
        users() {
            return this.$store.state.users;
        }
    }
};
</script>
