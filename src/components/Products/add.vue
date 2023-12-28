<script lang="ts">
const data = {
    name:0
}
</script>
<template>
    <div>
        <form >
            <label class="form-label" for="">Name:</label>
            <input class="form-control" type="text" v-model="name">
            <label class="form-label" for="">Image:</label>
            <input class="form-control" type="text">
            <label class="form-label">Desc:</label>
            <input class="form-control" type="text">
            <label class="form-label">Price:</label>
            <input class="form-control" type="text">
            <label  class="form-label" for="">Category:</label>
            <input class="form-control" type="text">
            <label  class="form-label" for="">Brand:</label>
            <input class="form-control" type="text">

        </form>
    </div>
</template>
<style scoped>

</style>