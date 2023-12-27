<script >
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
    name: 'products',
    data() {
        return {
            products: []
        }
    },
    mounted() {
        this.getProducts();
    },
    methods: {
        getProducts() {
            axios.get('http://localhost:3000/products').then(res => {
                console.log(res);
                this.products = res.data
            });
        },

        deleteProduct(productId) {
            if (confirm('Bạn có muốn xóa không?')) {
                axios.delete(`http://localhost:3000/products/${productId}`)
                    .then(res => {
                        // alert('Bạn đã xóa thành công');
                        this.getProducts();
                    })
                    .catch(function (error) {
                        if (error.response) {
                            if (error.response.status == 404) {
                                alert(error.response.data.message)
                            }
                        }
                    });
            }
        },
    },
}

</script>
    
<template>
    <table class="table table-bordered">
        <thead>
            <th>#</th>
            <th>Name</th>
            <th>image</th>
            <th>Description</th>
            <th>Price</th>
            <th>Category</th>
            <th>Brand</th>
            <th>Action</th>
        </thead>
        <tbody>
            <tr v-for="(product, index) in products" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ product.name }}</td>
                <td><img :src="product.img" alt="" width="250px"></td>
                <td>{{ product.description }}</td>
                <td> {{ product.price }}</td>
                <td>{{ product.category }}</td>
                <td>{{ product.brand }}</td>
                <td class="d-flex flex-row mb-3">
                    <button class="btn btn-danger mx-2" @click="deleteProduct(product.id)">Delete</button>
                    <RouterLink :to="{ path: '/products/' + product.id + '/edit' }"><button class="btn btn-primary">Update</button></RouterLink>
                    <button class="btn btn-warning">Add to cart</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>