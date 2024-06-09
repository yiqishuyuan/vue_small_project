<template>
    <div class="son1">
        msg:son1
        <GrandSon></GrandSon>
    </div>
</template>

<script>
import GrandSon from './GrandSon.vue'

export default {
    components: {
        GrandSon,
    }
}
</script>

<style scoped>
.son1 {
    width: 600px;
    height: 300px;
    border: 1px solid blue;
    margin: 0 auto;
}
</style>