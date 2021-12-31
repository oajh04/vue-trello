<template>
    <div>
        Home
        <div>
            <div v-if="loading"> loading </div>
            <div v-else>
                <div v-for="b in boards" v-bind:key="b.id">
                    {{b}}
                </div>
            </div>


            <ul>
                <li>
                    <router-link to="/b/1">board-1</router-link>
                </li>
                <li>
                    <router-link to="/b/2">board-2</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { board } from '../api'

export default {
    data() {
        return {
            loading: false,
            boards: [],
        }
    },
    created(){
        this.fetchData()
    },
    methods: {
        fetchData() {
            this.loading = true
            board.fetch()
                .then((res) => this.boards = res)
                .finally(() => this.loadin = false)
        }
    }

}
</script>

<style>

</style>
