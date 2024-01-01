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
        // updateProduct() {
        //     axios.put(`http://localhost:3000/products/${this.productID}`, this.model.product)
        //         .then(res => {
        //             console.log(res.data);
        //             alert('Bạn đã cập nhật thành công');
        //         })
        //         .catch(err => {
        //             console.error('Error updating product:', err);
        //         });
        // }
    }
}
</script>
    
<template>
    <div class="fixed-top menu">
        <div class="container d-flex justify-content-between align-items-center ">
            <div>
                <p class="fs-3 text-danger my-2 fw-bold">VILLA</p>
            </div>
            <div class="d-flex">
                <a class="fw-bold text_menu" href="/home">Home</a>
                <a class="mx-3 fw-bold text_menu" href="#">Properties</a>
                <a class="fw-bold text_menu" href="#">Property Details</a>
                <a class="mx-3 fw-bold text_menu" href="/list">Admin</a>
                <a class="fw-bold text_menu" href="/cart"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                        fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                        <path
                            d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                    </svg></a>

            </div>
        </div>

    </div>

    <div class="banner">
        <div class="d-flex justify-content-center flex-row">
            <p class="text-white my-4">HOME / SINGLE PROPERTY</p>
        </div>
        <h1 class="text-white text-center mb-5">SINGLE PROPERTY</h1>
        <div class="d-flex justify-content-center flex-row">
            <marquee behavior="scroll" direction="left" style="color: red; width: 500px;text-align: center;">
                <h1>{{ model.product.name }}</h1>
            </marquee>
        </div>
    </div>


    <div class="container mt-5 d-flex justify-content-center gap-5">
        <img class="" :src="model.product.image" alt="" height="412px">
        <div class="content1_box3 w-25 h-50">
            <div class="align-self-center mt-3">
                <img class="img_icon"
                    src="https://templatemo.com/templates/templatemo_591_villa_agency/assets/images/info-icon-01.png"
                    alt="">
                <label>
                    <h3>250 m2</h3>
                    <p>Total Flat Space</p>
                </label>

            </div>

            <div>
                <img class="img_icon"
                    src="https://templatemo.com/templates/templatemo_591_villa_agency/assets/images/info-icon-02.png"
                    alt="">
                <label>
                    <h3>Contract Ready</h3>
                    <p>Contract Ready</p>
                </label>

            </div>

            <div>
                <img class="img_icon"
                    src="https://templatemo.com/templates/templatemo_591_villa_agency/assets/images/info-icon-03.png"
                    alt="">
                <label>
                    <h3>Payment</h3>
                    <p>Payment Process</p>
                </label>

            </div>

            <div>
                <img class="img_icon"
                    src="https://templatemo.com/templates/templatemo_591_villa_agency/assets/images/info-icon-04.png"
                    alt="">
                <label>
                    <h3>Safety</h3>
                    <p>24/7 Under Control</p>
                </label>
            </div>

        </div>
    </div>


    <div class="container" style="margin-left: 190px; margin-top: 50px;">
        <!-- category sản phẩm -->
        <div
            style="border: orangered 1px solid; border-radius: 5px; background-color: #fbd9cf; width: 100px; padding: 5px; margin-bottom: 20px;">
            <p style="margin: 0px; padding: 0px;text-align: center;font-weight: 600;">{{ model.product.category }}</p>
        </div>
        <!-- tên sản phẩm -->
        <div style="display: flex;margin-top: 50px;align-self: center;gap: 240px;">
            <p style=" font-weight: 700; font-size: 20px;">{{ model.product.name }}</p>

        </div>
    </div>
    <hr class="container">
    <!-- chi tiết sản phẩm -->
    <div class="container" style="margin-left: 190px; margin-top: 50px; width: 850px;">
        <p style="font-weight: 600;">Get the best villa agency HTML CSS Bootstrap Template for your company website.
            TemplateMo provides you the best free CSS templates in the world. Please tell your friends about it. Thank you.
            Cloud bread kogi bitters pitchfork shoreditch tumblr yr succulents single-origin coffee schlitz enamel pin you
            probably haven't heard of them ugh hella.
            When you look for free CSS templates, you can simply type TemplateMo in any search engine website. In addition,
            you can type TemplateMo Digital Marketing, TemplateMo Corporate Layouts, etc. Master cleanse +1 intelligentsia
            swag post-ironic, slow-carb chambray knausgaard PBR&B DSA poutine neutra cardigan hoodie pop-up.</p>
    </div>

    <div style="background-color: black; color: white;padding: 15px;margin-top: 40px;">
        <p class="container text-center">Copyright © 28/12/2023 Group TTS: LH.VH.MQ Design: LH</p>
    </div>
</template>

<style scoped>
.menu {
    backdrop-filter: blur(10px);

}

.text_menu {
    color: black;
    text-decoration: none;
}

.text_menu:hover {
    color: rgb(174, 26, 26);
    border-bottom: 1px red solid;
}

.banner {
    background-image: url("https://templatemo.com/templates/templatemo_591_villa_agency/assets/images/page-heading-bg.jpg");
    background-size: cover;
    height: 300px;
    margin-top: 60px;
}

.content1_box3 {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    border: black solid 1px;
    border-radius: 10px;
    padding-left: 20px;
    padding-right: 20px;

}

.img_icon {
    margin-bottom: 35px;
    margin-right: 5px;
}
</style>