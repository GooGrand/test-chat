<template>
    <div class="dialog ">
        <!-- <div class="btn-floating btn-large waves-effect waves-light blue"> 
            <router-link to="/">
                <i class="material-icons">add</i> 
            </router-link>
        </div> -->
        <Loader v-if="loading" />
        <div v-else class="dialog-window">
            <div v-if="chat.parts[0]">
                <Message 
                v-for="part in chat.parts"
                :part="part"
                :chat="chat"
                :key="part.id"
                />
            </div>
            <p v-else>There is no messages yet</p>
            </div>
        <div class="dialog-form">
        <CreateMessage 
        :chat="chat"
        />
        </div>
    </div>
</template>

<script>
import Message from '@/components/Message'
import CreateMessage from '@/components/CreateMessage'
import Loader from '@/components/Loader'

export default {
    name: 'Dialog',
    props: {
        loading: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        chat() {
            return this.$store.getters.chatById(+this.$route.params.id)
        }
    },
    components: {
        Message, CreateMessage, Loader
    },
    created() {
    this.$router.beforeEach((to, from, next) => {
      this.loading = true;
      setTimeout(next, 1000);
    });

    this.$router.afterEach((to, from) => {
      this.loading = false;
    })
    }
}
</script>
<style scoped>
.dialog {
    position: relative;
    height: 550px;
    border: 1px black solid;
}
.dialog-window {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 80px;
    padding: 1rem;
    overflow-y: auto;

}
.dialog-form {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 1rem;
    height: 80px;
    background: #cfd8dc;

}
</style>