<template>
    <div class="m-card">
        <img :src="image" class="m-card__image" alt="" />
        <div class="m-card__details">
            <div class="m-card__details-name">
                {{ name }}
                <span v-if="name && age">,</span>
                {{ age}}
            </div>
            <div class="m-card__status">
                <icon-base
                    className="m-card__status-height"
                    v-bind:text="height ? height + ' cm' : ''"
                    icon-name="height"
                >
                    <icon-height />
                </icon-base>

                <icon-base
                    className="m-card__status-weight"
                    v-bind:text="weight ? weight + ' kg' : ''"
                    icon-name="weight"
                >
                    <icon-height />
                </icon-base>
            </div>
        </div>
        <div class="m-card__skills"></div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import IconBase from './IconBase.vue';
import IconHeight from './icons/IconHeight.vue';

export default Vue.extend({
    name: 'card',
    components: {
        'icon-base': IconBase,
        'icon-height': IconHeight
    },
    props: {
        images: {
            type: Array
        },
        name: {
            type: String,
            default: 'Unknown'
        },
        age: {
            type: Number
        },
        height: {
            type: String
        },
        weight: {
            type: String
        }
    },
    data: () => ({
        imgIndex: 0
    }),
    methods: {
        slideNext: () => {
            // console.log(this.imgIndex);
        }
    }
});
</script>
