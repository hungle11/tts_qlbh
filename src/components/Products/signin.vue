<script>
import axios from 'axios';

export default {
    name: 'Signin',
    data() {
        return {
            model: {
                user: {
                    email: '',
                    password: ''
                }
            }
        }
    },
    methods: {
        signinProduct() {
            axios.post(`http://localhost:3000/login`, this.model.user)
                .then(res => {
                    console.log(res.data);
                    alert('Logged in successfully!');
                    // Lưu trữ token vào localStorage hoặc Vuex để sử dụng sau này
                    localStorage.setItem('token', res.data.token);
                    this.model.user = {
                        email: '',
                        password: ''
                    }
                })
                .catch(err => {
                    console.error('Error logging in:', err);
                    alert('Login failed!');
                });
            // .catch(function (error){
            //     if(error.response) {
            //         if(error.response == 422) {
            //             this.errorList = error.response.data.error;
            //         }
            //     } else if(error.request) {
            //         console.log(error.request);
            //     } else {
            //         console.log('Error', error.message);
            //     }
            // });
        }
    },
};
</script>
<template>
    <div class="container mt-5">
        <h2>Đăng nhập</h2>

        <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" v-model="model.user.email" placeholder="Nhập email" required />
        </div>
        <div className="mb-3">
            <label className="form-label">Mật khẩu</label>
            <input type="text" className="form-control" v-model="model.user.password" placeholder="Nhập password"
                required />
        </div>
        <button type="button" className="btn btn-primary" @click="signinProduct">Submit</button>
    </div>
</template>
<style scoped></style>