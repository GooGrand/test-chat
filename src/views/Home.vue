<template>
  <div class="home">
    <CreateChat />
  </div>
</template>

// <script>
import CreateChat from '@/components/CreateChat'

export default {
  name: 'Home',
  computed: {
  // mapGetters(['allChats', 'chatsCount']),
    allChats() {
      return this.$store.getters.allChats
    },
    chatsCount() {
      return this.$store.getters.chatsCount
    }
  },
  components: {
    CreateChat
  }
}
</script>
