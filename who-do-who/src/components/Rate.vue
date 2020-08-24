<template>
    <div class="m-rate">
        <template v-for="(rate, index) in ratings">
            <rating :key="index" :value="rate" />
        </template>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Rating from '@/components/Rating.vue';

export default Vue.extend({
    name: 'rate',
    data: () => ({
        ratings: [1, 2, 3, 4, 5]
    }),
    components: {
        rating: Rating
    }
});
</script>
