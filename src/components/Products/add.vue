<script lang="ts">
import axios from'axios'
export default {
     name:"add-product",
    data (){
        return{
           
            model:{
            product:{
                id:null,
                name:"",
                image:"",
                description:"",
                price:0,
                category:"",
                brand:""
            } 
        }
        }
    },
    
    methods: {
        addProduct(event){
            event.preventDefault();
            console.log(event)
            axios.post('http://localhost:3000/products',this.model.product)
            .then(res => {
                console.log(res.data)
                this.model.product={
                name:"",
                image:"",
                description:"",
                price:0,
                category:"",
                brand:""
            } 
            alert("Bạn đã thêm sản phẩm thành công")
            window.location.href="/"
            })
            
        },

}
}

</script>
<template>
    <div>
        <form @submit="addProduct" >
            <label class="form-label" for="">Name:</label>
            <input class="form-control" type="text" v-model="model.product.name" >
            <label class="form-label" for="">Image:</label>
            <input class="form-control" type="text" v-model="model.product.image">
            <label class="form-label">Desc:</label>
            <input class="form-control" type="text" v-model="model.product.description">
            <label class="form-label">Price:</label>
            <input class="form-control" type="text" v-model="model.product.price">
            <label  class="form-label" for="">Category:</label>
            <input class="form-control" type="text" v-model="model.product.category">
            <label  class="form-label" for="">Brand:</label>
            <input class="form-control" type="text" v-model="model.product.brand">
                <button  class="btn btn-primary">
                    Add
                </button>
        </form>
    </div>
</template>
<style scoped>

</style>