<template>
   <span>
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