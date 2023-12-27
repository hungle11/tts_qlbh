<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';

const products = ref([]);


onMounted(async () => {
    try {
        const response = await axios.get('http://localhost:3000/products');
        products.value = response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});

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
                <td><img :src="product.img" alt="" width="300px"></td>
                <td>{{ product.description }}</td>
                <td> {{ product.price }}</td>
                <td>{{ product.category }}</td>
                <td>{{ product.brand }}</td>
                <td class="d-flex flex-row mb-3">
                    <button class="btn btn-danger mx-2">Delete</button>
                    <button class="btn btn-primary">Update</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>