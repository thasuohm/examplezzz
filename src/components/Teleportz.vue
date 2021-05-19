<template>
    <button @click="clicked = !clicked " class= 'border border-black bg-black text-white'>TELEPORT</button>
    <!-- ใช้ v-if แทน disabled ก็ได้ -->
    <teleport to="#forTele" :disabled="clicked" ><h1 class= "text-3xl">Teleport text</h1></teleport>
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