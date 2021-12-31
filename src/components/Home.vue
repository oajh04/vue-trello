<template>
    <div>
        Home
        <div>
            <div v-if="loading"> loading </div>
            <div v-else>
                Api result : {{apiRes}}
            </div>
            <div v-if="error"><pre>{{error}}</pre></div>


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
import axios from 'axios'

export default {
    data() {
        return {
            loading: false,
            apiRes: '',
            error: ''
        }
    },
    created(){
        this.fetchData()
    },
    methods: {
        fetchData() {
            this.loading = true
            axios.get('http://localhost:3000/health')
            .then((res) => {
                this.apiRes = res.data
            })
            .catch((err) => {
                this.error = err.response.data
            })
            .finally(() => {
                this.loading = false
            })
        }
    }

}
</script>

<style>

</style>
