<!-- <script setup lang="ts">
import { ref } from 'vue';

interface Product {
  name: string;
  price: number;
}

const data = ref<Product[]>([
  {
    name: "products 1",
    price: 200
  },
  {
    name: "products 2",
    price: 300
  }
]);

const newProduct: Product = {
  name: '',
  price: 0
};

const addItem = () => {
  if (newProduct.name && newProduct.price) {
    data.value.push({ ...newProduct });
    newProduct.name = '';
    newProduct.price = 0;
  }
};
const deleteItem = (index: number) => {
  data.value.splice(index, 1);
};
</script>
<template>
  <div>
    <div>
      <label for="productName">Tên sản phẩm:</label>
      <input class="form-control" type="text" id="productName" v-model="newProduct.name" />
    </div>
    <div>
      <label for="productPrice">Giá:</label>
      <input class="form-control" type="number" id="productPrice" v-model.number="newProduct.price" />
    </div>
    <button class="btn btn-primary" @click="addItem">Thêm</button>

    <table class="table table-bordered my-5">
      <thead>
        <th>name</th>
        <th>price</th>
        <th>Action</th>
      </thead>
      <tbody>
        <tr v-for="(item, index) in data" :key="index">
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
          <td>
            <button class="btn btn-danger" @click="deleteItem(index)">Xóa</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>



<style scoped>
/* CSS cho phần template */
</style> -->
