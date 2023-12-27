<script>
import axios from 'axios';

export default {
  name: 'Edit',
  data() {
    return {
      productID: '',
      model: {
        product: {
          name: '',
          img: '',
          description: '',
          price: 0,
          category: '',
          brand: ''
        }
      }
    }
  },
  mounted() {
    this.productID = this.$route.params.id;
    this.getProductData(this.productID);
  },
  methods: {
    getProductData(productID) {
      axios.get(`http://localhost:3000/products/${productID}`)
        .then(res => {
          this.model.product = res.data; // Update data with the received product
        })
        .catch(err => {
          console.error('Error fetching product data:', err);
        });
    },
    updateProduct() {
      axios.put(`http://localhost:3000/products/${this.productID}`, this.model.product)
        .then(res => {
          console.log(res.data);
          alert('Bạn đã cập nhật thành công');
        })
        .catch(err => {
          console.error('Error updating product:', err);
        });
    }
  }
}
</script>
<template>
  <div class="container mt-5">
    <h2>Cập nhật sản phẩm</h2>

    <div className="mb-3">
      <label className="form-label">Tên sản phẩm</label>
      <input type="text" className="form-control" v-model="model.product.name" placeholder="Nhập tên sản phẩm" required />
    </div>
    <div className="mb-3">
      <label className="form-label">Ảnh sản phẩm</label>
      <input type="text" className="form-control" v-model="model.product.img" placeholder="Nhập ảnh sản phẩm" required />
    </div>
    <div className="mb-3">
      <label className="form-label">Mô tả sản phẩm</label>
      <input type="text" className="form-control" v-model="model.product.description" placeholder="Nhập mô tả sản phẩm"
        required />
    </div>
    <div className="mb-3">
      <label className="form-label">Giá sản phẩm</label>
      <input type="number" className="form-control" v-model="model.product.price" required />
    </div>
    <div className="mb-3">
      <label className="form-label">Loại sản phẩm</label>
      <input type="text" className="form-control" v-model="model.product.category" placeholder="Loại sản phẩm" required />
    </div>
    <div className="mb-3">
      <label className="form-label" for="">Thương hiệu sản phẩm</label>
      <input type="text" className="form-control" v-model="model.product.brand" placeholder="Thương hiệu sản phẩm"
        required />
    </div>
    <button type="button" className="btn btn-primary" @click="updateProduct">Submit</button>
  </div>
</template>
<style scoped></style>