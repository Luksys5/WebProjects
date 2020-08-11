<template>
  <div class="m-card">
    <img :src="image" class="m-card__image" />
    <div class="m-card__details">
        <div class="m-card__details-name">
            {{ name }} {{ age}}
        </div>
        <div className="m-card__details-status">
            <IconBase icon-name="height"><IconHeight /></IconBase>
        </div>
    </div>
    <div class="m-card__skills">

    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import IconBase from './IconBase.vue';
import IconHeight from './icons/IconHeight.vue';

@Component
export default class Card extends Vue {
    @Prop() private image!: string;

    @Prop() private name!: string;

    @Prop() private age!: string;
}
</script>
