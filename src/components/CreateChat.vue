<template>
    <div class="create">
        <h1>Create new chat</h1>
        <form @submit.prevent="createChat">
          <input 
            type="text"
            id="title" 
            placeholder="The topic of chat"
            v-model="title" required>
          <input 
            type="text"
            id="author" 
            placeholder="Chat to..."
            v-model="author" required>
            <button class="btn" type="submit">Create new chat</button>
             </form>
    </div>
</template>

<script>
import { log } from 'util';
export default {
    name: 'CreateChat',
    data: () => ({
        id: '',
        title: '',
        author: '',
        created: '',
        parts: [{}]
    }),
    methods: {
        dateNow: function() {
                const today = new Date();
                const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                const dateTime = date +' '+ time;
                 return this.created = dateTime;
                },
        createChat() {

            const chat = {
                id: Date.now(),
                title: this.title,
                author: this.author,
                created: this.dateNow(),
                parts:[]
            }
            this.$store.dispatch('createNewChat', chat )
              this.title = ''
              this.author = ''
            this.$router.push(`/dialog/ ${chat.id}`)
        }
    }
}
</script>

<style scoped>

.create {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}
</style>