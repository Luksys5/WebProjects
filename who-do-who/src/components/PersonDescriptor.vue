<template>
    <div class="m-person-desc">
        <div class="m-person-desc__header">
            <div>
                <icon-base
                    icon-name="weight"
                >
                    <icon-height />
                </icon-base>
                <!-- <icon-base
                    className="m-card__status-weight"
                    v-bind:text="weight ? weight + ' kg' : ''"
                    icon-name="weight"
                >
                    <icon-height />
                </icon-base>
            </div>
            <div>
                <icon-base
                    className="m-card__status-weight"
                    v-bind:text="weight ? weight + ' kg' : ''"
                    icon-name="weight"
                >
                    <icon-height />
                </icon-base>
                <icon-base
                    className="m-card__status-weight"
                    v-bind:text="weight ? weight + ' kg' : ''"
                    icon-name="weight"
                >
                    <icon-height />
                </icon-base> -->
            </div>
        </div>

        <div class="">

        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import IconBase from '@/components/IconBase.vue';
import IconHeight from '@/components/icons/IconHeight.vue';

export default Vue.extend({
    name: 'person-descriptor',
    props: {
        birthDate: {
            type: Date
        },
        skills: {
            type: Array
        },
        workplace: {
            type: String
        },
        degree: {
            type: String
        },
        movieGenre: {
            type: String
        },
        musicGenre: {
            type: String
        }
    },
    components: {
        'icon-base': IconBase,
        'icon-height': IconHeight
    }
});
</script>
