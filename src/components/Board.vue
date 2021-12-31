<template>
    <div>
        Board
        <div v-if="loading">loading</div>
        <div v-else>
            bid: {{bid}}
            <div>
                <router-link :to="`/b/${bid}/c/2`">card-2</router-link>
                <router-link :to="`/b/${bid}/c/3`">card-3</router-link>
            </div>
        </div>
        <hr/>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data(){
        return {
            bid: 0,
            loading: false,
        }
    },
    created(){
        this.fetchData()
    },
    methods: {
        fetchData(){
            this.loading = true
            setTimeout(() =>{ 
                this.bid = this.$route.params.bid
                this.loading = false
                }, 1000)
        }
    }
}
</script>

<style>

</style>
