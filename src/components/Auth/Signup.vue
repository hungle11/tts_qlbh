<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data(){
      

    }
})
</script>>
export default {
    
}
</script>
<template>
    <div>
         <form  >
            <h5>Sign Up</h5>
            <label class="form-label" for="">Name:</label>
            <input class="form-control" type="text" v-model="model.product.name" >
            <label class="form-label" for="">Email:</label>
            <input class="form-control" type="text" v-model="model.product.image">
            <label class="form-label">Password:</label>
            <input class="form-control" type="text" v-model="model.product.description">
            <label class="form-label">Confirm Password:</label>
            <input class="form-control" type="text" v-model="model.product.price">
            
                <button  class="btn btn-primary">
                    Add
                </button>
        </form>
    </div>
</template>