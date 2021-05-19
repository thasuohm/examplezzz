<template>
    <button @click="clicked = !clicked ">TELEPORT</button>
    <!-- ใช้ v-if แทน disabled ก็ได้ -->
    <teleport to="#forTele" :disabled="clicked" >Teleport text</teleport>
</template>

<script>
export default {
    data() {
        return {
            clicked : false,
        }
    },
}
</script>