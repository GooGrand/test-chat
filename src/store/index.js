import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)



export default new Vuex.Store({
  state: {
    chats: JSON.parse(localStorage.getItem('chats') || "[]")
    //  chatStorage: { 
  //       chats: {},
  //       chatsList: [],
  //       parts: {}
  //     }
  },
  mutations: {
    createNewChat(state, newChat) {
      state.chats.push(newChat)
      localStorage.setItem('chats',JSON.stringify(state.chats))

      // console.log(сhat);
      // const idForList = chat.id
      // console.log(idForList);
      // 
      // state.chatStorage.chats[idForList] = сhat
      // state.chatStorage.chatsList.push(idForList)
      // localStorage.setItem('chatStorage',JSON.stringify(state.chatStorage))
      // 
      // Почувствовал себя тупым. не смог реализовать второй тип store, при котором
      // nested objects имели бы более простую доступность
      // Ради времени реализовал первый вариант
    },
    createNewMessage(state, {id, message}) {
      const chats = state.chats.concat()
      const idx = chats.findIndex(t => t.id === id)
      const chat = chats[idx]
      console.log(message);
      console.log(idx);
      
      chat.parts.push(message)

      chats[idx] = {...chat}

      state.chats = chats
      localStorage.setItem('chats',JSON.stringify(state.chats))
    }
    
  },
  actions: {
    createNewChat({commit}, chat) {
      commit('createNewChat', chat)
    },
    createNewMessage({commit}, message) {
      commit('createNewMessage', message)
    }
  },
  getters: {
    allChats(state) {
      return state.chats
    },
    chatsCount(state, getters) {
      return getters.allChats.length
    },
    chatById: s => id => s.chats.find(t => t.id === id)
    
    
  }
})
