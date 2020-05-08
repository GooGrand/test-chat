<template>
<div class="container">
<div class="row">
  <div id="app col s12">
   <h1>Chat room</h1>
   <div class="dialogs col s4">
     <div class="counter">Chats {{chatsCount}} </div>
      <ul>
        <DialogCard
          v-for="chat in allChats" 
          :key="chat.id"
          :chat="chat"
       
          />
      </ul>
      </div>
    </div>
    <div class="col s8">
   <router-view />
   </div>
  </div>
</div>
</template>

<script>
import DialogCard from '@/components/DialogCard'

export default {
  name: 'App',
  computed: {
    allChats() {
      return this.$store.getters.allChats
    },
    chatsCount() {
      return this.$store.getters.chatsCount
    }
  },
  
  components: {
     DialogCard
  }
}
</script>

<style>
@import "~materialize-css/dist/css/materialize.min.css";

.container {
  width: 980px;
  height: 720px;
}
.dialogs {
  height: 550px;
  overflow-y: auto;
}

</style>
