<template>
  <v-container class="py-16 d-flex flex-column align-center">
    <v-row>
      <v-col
        cols="12"
        class="text-center"
      >
        <h1>Game Page</h1>
        <p>Click on the cards to flip them!</p>
      </v-col>
    </v-row>
    <v-row class="mt-8">
      <v-col
        cols="12"
        class="game-board"
      >
        <v-row class="game-grid">
          <v-col
            v-for="(card, index) in cards"
            :key="index"
            class="game-card-wrapper"
          >
            <FlipCard
              :front-image-src="card.url"
              :value="card.value"
              :width="150"
              :alt-text="`Card ${index + 1}`"
              :height="200"
              :flipped="card.flipped"
              @click="flipCard(card)"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { GameCard } from '@/types/interfaces'

import FlipCard from '@/components/ui/FlipCard.vue'

import cardCat1 from '@/assets/game/cards/cat-1.jpg'
import cardCat2 from '@/assets/game/cards/cat-2.jpg'
import cardCat3 from '@/assets/game/cards/cat-3.jpg'
import cardCat4 from '@/assets/game/cards/cat-4.jpg'
import cardCat5 from '@/assets/game/cards/cat-5.jpg'
import cardCat6 from '@/assets/game/cards/cat-6.jpg'

const cards = ref<GameCard[]>([
  { value: 'cat-1', flipped: false, url: cardCat1 },
  { value: 'cat-2', flipped: false, url: cardCat2 },
  { value: 'cat-3', flipped: false, url: cardCat3 },
  { value: 'cat-4', flipped: false, url: cardCat4 },
  { value: 'cat-5', flipped: false, url: cardCat5 },
  { value: 'cat-6', flipped: false, url: cardCat6 },
  { value: 'cat-1', flipped: false, url: cardCat1 },
  { value: 'cat-2', flipped: false, url: cardCat2 },
  { value: 'cat-3', flipped: false, url: cardCat3 },
  { value: 'cat-4', flipped: false, url: cardCat4 },
  { value: 'cat-5', flipped: false, url: cardCat5 },
  { value: 'cat-6', flipped: false, url: cardCat6 },
])

const shuffledCards = (): GameCard[] => {
  return [...cards.value].sort(() => Math.random() - 0.5)
}

const flipCard = (card: GameCard) => {
  card.flipped = !card.flipped
}

onMounted(() => {
  cards.value = shuffledCards()
})
</script>

<style scoped lang="scss">
.game-board {
  width: 100%;
  max-width: 800px;
  margin: auto;
}

.game-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(150px, 4fr));
  gap: 20px;
  justify-content: center;
}

.game-card-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
}
</style>
