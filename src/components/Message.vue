<template>
    <div class="wrap" >
        
        <div  class="message" :class="{'owner': isOwner}">
            <small>
                <strong>{{part.author}}</strong>
            </small>
            <p>{{part.text}}</p>
            <small>{{part.created}}</small>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Message',
    props: {
        part: {
            type: Object
        },
        chat: {
            type: Object,
            required: true
        },
        loading: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        isOwner(part) {
            if(part.author != "Mario") {
                return true
            } else {
                return false
            }
        }
        //Не удалось реализовать механику изменения класса в зависимости от сообщения. В идеале эти данные должны
        // приходить с сервера.
    }
    
}
</script>
.<style scoped>
.wrap {
    display: flex;
    flex-direction: column;

}

.message {
    padding: 1rem;
    width: 60%;
    margin: 0 1rem;
    box-shadow: 0 1px 0 0 rgba(50, 50, 50, 0.3);
    border-radius: 4px;
    background: #F6F7F9;
    position: relative;
    margin-bottom: 1rem;
}
.message p {
        margin-bottom: 0;
    }

.owner {
    background: #E9F5F4;
    color: #000000;
    align-self: flex-end;
}


</style>