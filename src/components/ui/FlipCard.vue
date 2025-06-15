<template>
  <v-card
    :class="['flip-card-container', { flipped: props.flipped }]"
    :width="width"
    :height="height"
  >
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <slot name="front">
          <v-img
            :src="cardBackImage"
            :alt="altText"
            cover
            height="100%"
            width="100%"
          />
        </slot>
      </div>
      <div class="flip-card-back">
        <slot name="back">
          <v-img
            :src="frontImageSrc"
            :alt="altText"
            cover
            height="100%"
            width="100%"
          />
        </slot>
      </div>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import type { FlipCardProps } from '@/types/interfaces'

import cardBackImage from '@/assets/game/card-back.jpg'

const props = defineProps<FlipCardProps>()
</script>

<style scoped lang="scss">
.flip-card-container {
  background-color: transparent;
  perspective: 1000px;
  cursor: pointer;
  border-radius: 8px;
  overflow: hidden;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flip-card-container.flipped .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: inherit;
  box-sizing: border-box;
  padding: 8px;
}

.flip-card-front {
  background-color: $creamy-white;
  color: black;
}

.flip-card-back {
  background-color: $secondary;
  color: $primary;
  transform: rotateY(180deg);
}

.flip-card-front .v-img {
  border-radius: inherit;
}

.flip-card-back .v-card-text {
  font-size: 1.5rem;
}
</style>
