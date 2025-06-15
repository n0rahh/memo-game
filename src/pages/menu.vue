<template>
  <v-container class="py-16 my-16">
    <v-row>
      <v-col
        cols="12"
        class="text-center"
      >
        <h1 class="text-h2 font-weight-bold">Welcome to Memory Game</h1>
      </v-col>
    </v-row>
    <v-row class="py-16">
      <v-col
        cols="12"
        class="d-flex flex-column align-center"
      >
        <v-btn
          class="ma-2"
          color="primary"
          height="56"
          width="300"
          @click="$router.push('/game')"
        >
          Start Game
        </v-btn>
        <v-btn
          class="ma-2"
          color="secondary"
          height="56"
          width="300"
          @click="$router.push('/settings')"
        >
          Settings
        </v-btn>
        <v-btn
          class="ma-2"
          color="error"
          height="56"
          width="300"
          @click="$router.push('/about')"
        >
          About
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
