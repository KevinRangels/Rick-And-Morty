<script setup lang="ts">
  import { watchEffect } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import useCharacter from '../composables/useCharacter'

  const route = useRoute()
  const router = useRouter()

  const {id} = route.params as {id: string}
  const {hasError, errorMessage, character, isLoading} = useCharacter(id)

  watchEffect(() => {
    if (!isLoading.value && hasError.value) {
      router.replace('/characters')
    }
  })
    
</script>

<template>
  <h1 v-if="isLoading">
    Loading
  </h1>
  <h1 v-else-if="hasError">
    {{ errorMessage }}
  </h1>
  <div v-else-if="character">
    <h1>{{ character.name }}</h1>
    <div class="character-container">
      <img
        :src="character.image"
        :alt="character.name"
      >
      <ul>
        <li>Status: {{ character.status }}</li>
        <li>Species: {{ character.species }}</li>
        <li>Origin: {{ character.origin.name }}</li>
        <li>Location: {{ character.location.name }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.character-container {
  display: flex;
  flex-direction: row;
}
img {
  width: 150px;
  border-radius: 5px;
}
</style>