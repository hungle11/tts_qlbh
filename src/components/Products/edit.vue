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
<div>
  <div class="bg-black text-white p-3 w-100">
    <h3 style="width: 1487px;">ADMIN</h3>
  </div>
  <div className="container-fluid">
    <div className="row">
      <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
        <div className="offcanvas-md offcanvas-end bg-body-tertiary" id="sidebarMenu" aria-labelledby="sidebarMenuLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="sidebarMenuLabel">Company name</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#sidebarMenu"
              aria-label="Close"></button>
          </div>
          <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
            <ul className="nav flex-column text-center">

              <li className="nav-item">
                <router-link to="/add">
                  <button class="btn btn-primary  my-3" style="width: 200px;"><svg
                      style="align-self: center; margin-right: 5px;" xmlns="http://www.w3.org/2000/svg" width="16"
                      height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path
                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                    </svg>Add Product</button>
                </router-link>
              </li>
              <li className="nav-item">
                <router-link to="/list">
                  <button class="btn btn-primary" style="width: 200px;align-self: center;">
                    <svg style="align-self: center; margin-right: 5px;" xmlns="http://www.w3.org/2000/svg" width="16"
                      height="16" fill="currentColor" class="bi bi-box" viewBox="0 0 16 16">
                      <path
                        d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" />
                    </svg>List Product</button>
                </router-link>
              </li>
              <li className="nav-item">
                <router-link to="/">

                  <button class="btn btn-primary my-3" style="width: 200px;"><svg
                      style="align-self: center; margin-right: 5px;" xmlns="http://www.w3.org/2000/svg" width="16"
                      height="16" fill="currentColor" class="bi bi-door-open" viewBox="0 0 16 16">
                      <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1" />
                      <path
                        d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117zM11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5M4 1.934V15h6V1.077z" />
                    </svg>Sign in</button>
                </router-link>
              </li>
              <li className="nav-item ">
                <router-link to="#">
                  <button class="btn btn-primary " style="width: 200px;"><svg
                      style="align-self: center; margin-right: 5px;" xmlns="http://www.w3.org/2000/svg" width="16"
                      height="16" fill="currentColor" class="bi bi-door-open" viewBox="0 0 16 16">
                      <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1" />
                      <path
                        d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117zM11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5M4 1.934V15h6V1.077z" />
                    </svg>Sign up</button>
                </router-link>
              </li>

            </ul>
          </div>
        </div>
      </div>

      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div
          className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Dashboard</h1>
          <div className="btn-toolbar mb-2 mb-md-0">
            <div className="btn-group me-2">
              <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
              <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
            </div>
            <button type="button"
              className="btn btn-sm btn-outline-secondary dropdown-toggle d-flex align-items-center gap-1">
              This week
            </button>
          </div>
        </div>
        <!-- Gọi component hiển thị -->
        <div class="container mt-5">
          <h2>Cập nhật sản phẩm</h2>

          <div className="mb-3">
            <label className="form-label">Tên sản phẩm</label>
            <input type="text" className="form-control w-auto" v-model="model.product.name"
              placeholder="Nhập tên sản phẩm" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Ảnh sản phẩm</label>
            <input type="text" className="form-control" v-model="model.product.img" placeholder="Nhập ảnh sản phẩm"
              required />
          </div>
          <div className="mb-3">
            <label className="form-label">Mô tả sản phẩm</label>
            <input type="text" className="form-control" v-model="model.product.description"
              placeholder="Nhập mô tả sản phẩm" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Giá sản phẩm</label>
            <input type="number" className="form-control" v-model="model.product.price" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Loại sản phẩm</label>
            <input type="text" className="form-control" v-model="model.product.category" placeholder="Loại sản phẩm"
              required />
          </div>
          <div className="mb-3">
            <label className="form-label" for="">Thương hiệu sản phẩm</label>
            <input type="text" className="form-control" v-model="model.product.brand" placeholder="Thương hiệu sản phẩm"
              required />
          </div>
          <button type="button" className="btn btn-primary" @click="updateProduct">Submit</button>
        </div>
      </main>
    </div>
  </div>
  </div>
</template>
<style scoped></style>