<template>
    <button :style="{ backgroundColor: btnColor }"
        class="flex h-8 w-30 justify-center items-center gap-x-2 rounded-lg"
        >
        <span class="text-sm ">{{ btnText }}</span>
        <img src="@/assets/arrow.png" alt="" class="object-contain w-3">
    </button>
</template>

<script>

   export default{
     name : 'Button1',
     props: {
        btnColor: String,
        btnText: String,
     },
   }

</script>