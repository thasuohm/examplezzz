<template>
   <span>
       <h1 class="text-3xl"> Scope Slot</h1>
       <slot :scopeTest="scopeTest">  </slot>
   </span>
</template>

<script>
export default {
    data() {
        return {
            scopeTest : "DatainScope"
        }
    },
}
</script>