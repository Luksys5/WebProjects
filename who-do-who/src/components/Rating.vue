<template>
    <div class="a-rating">
        <span>
            {{ value }}
        </span>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'rating',
    props: {
        value: {
            type: String
        }
    }
});
</script>
