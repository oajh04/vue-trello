import * as api from '../api'

const actions = {
    LOGIN({commit}, {email, password}) {
        return api.auth.login(email, password)
                .then(({accessToken}) => commit('LOGIN', accessToken))
    },
    ADD_BOARD(_, {title}) {
        return api.board.create(title).then((data) => data.item)
    },
    FETCH_BOARDS ({commit}) {
        return api.board.fetch().then(data => {
            commit('SET_BOARDS', data.list)
        })
    },
    FETCH_BOARD ({commit} , {id}) {
        return api.board.fetch(id)
                .then((data) => commit('SET_BOARD', data.item))
    },
    ADD_CARD(ctx, {title, listId, pos}) {
        return api.card.created(title, listId, pos)
        .then(() => ctx.dispatch('FETCH_BOARD', {id: ctx.state.board.id}))
    },
    FETCH_CARD(ctx, {id}){
        return api.card.fetch(id)
        .then((data) => ctx.commit('SET_CARD', data.item))
    },
    UPDATE_CARD(ctx, {id, title, description, pos, listId}){
        return api.card.update(id, {title, description, pos, listId})
        .then(() => ctx.commit('FETCH_BOARD', {id: ctx.state.board.id}))
    }
}

export default actions

//ctx = context