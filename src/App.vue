<template>
  <v-app>
    <v-main class="pa-0">
      <router-view
        :key="$route.fullPath"
        v-slot="{ Component }"
      >
        <transition
          name="scroll-x-reverse-transition"
          mode="out-in"
        >
          <component
            v-if="Component"
            :is="Component"
          />
        </transition>
      </router-view>
    </v-main>
  </v-app>
</template>