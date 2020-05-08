<template>
    <div class="row">
        <form action="submit" @submit.prevent="sendMessage" >
            <div class="input-field col s10">
                <input type="text" 
                   id="text"
                   placeholder="Write a message..."
                   v-model="text"
                   :disabled=loading
                   required>
            </div>
            <button class="btn waves-effect waves-light" type="submit" :disabled=loading >
                <i class="material-icons">send</i>
            </button>
        </form> 
</div>
</template>

<script>


export default {
    name: 'createMessage',
    props: {
        chat: {
            type: Object
        }
    },
    data: () => ({
        text: '',
        author: '',
        created: '',
        loading: false
    }),
    methods: {
         dateNow: function() {
                const today = new Date();
                const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                const dateTime = date +' '+ time;
                 return this.created = dateTime;
                },
        sendMessage: function() {
            this.loading = true
            
            setTimeout(() => {
                this.$store.dispatch('createNewMessage', {
                        id: this.chat.id,
                        message: {
                            messageId: Date.now(),
                            text: this.text,
                            author: 'Alex',
                            created: this.dateNow()
                        }
                })
                this.text = ""
                this.loading = false
                }, 3000)
            
            
        }
    }
}
</script>

<style scoped>

</style>