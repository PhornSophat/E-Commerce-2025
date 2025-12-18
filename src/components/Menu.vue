<template>
  <div class="flex w-full justify-between items-center ">
    <div class="text-2xl ">
        {{ title }}
    </div>
    <div class="gap-x-4 flex ">
        <div>All</div>
        <div>Milks & Dairies</div>
        <div>Coffee & Tea</div>
        <div>Pet Foods</div>
        <div>Meat</div>
        <div>Vegetables</div>
        <div>Fruits</div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Menu',
    props: {
      title: String
    },
}
</script>

<style>

</style>