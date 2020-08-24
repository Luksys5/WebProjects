<template>
    <div class="a-icon-base" v-bind:class="[className]">
        <svg
            class="a-icon-base__icon"
            xmlns="http://www.w3.org/2000/svg"
            :width="width"
            :height="height"
            :aria-labelledby="iconName"
            :viewBox="getViewBox()"
            :fill="iconColor"
            v-if="text"
        >
            <slot />
        </svg>
        <span class="a-icon-base__text">{{ text }}</span>
    </div>
</template>

<script>
export default Vue.extend({
    name: 'icon-base',
    props: {
        className: {
            type: String
        },
        iconName: {
            type: String,
            default: 'box'
        },
        width: {
            type: [Number, String],
            default: 24
        },
        height: {
            type: [Number, String],
            default: 24
        },
        iconColor: {
            type: String,
            default: 'currentColor'
        },
        text: {
            text: String
        }
    },
    methods: {
        getViewBox() {
            return `0 0 ${this.$props.width} ${this.$props.height}`;
        }
    }
});
</script>

<style scoped>
    svg {
        display: inline-block;
        vertical-align: baseline;
        margin-bottom: -2px;
    }
</style>
