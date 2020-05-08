<template>
    <div class="cards">
        <router-link :to="'/dialog/' + chat.id">
        <div class="dialogView" tag="li">
            <div class="card-header col s12">
            <strong>{{chat.title}}</strong>

            <small>{{chat.created}}</small>
            </div>
            <p v-if="chat.parts[0]">{{chat.parts[chat.parts.length -1].text || ''}}</p>
            <p v-else></p>

        </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'dialogCard',
    props: {
        chat: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
.dialogView {
    width: 100%;
    height: 120px;
    border: 1px #E9EDF2 solid;
    background: #F3F6F8;
    color: #7D8790;
    overflow: hidden;
}
.card-header { 
    height: 30px;
}
small {
    float: right;
}

p {
    bottom: 0;
}
</style>