<script >
import axios from 'axios';
import { RouterLink } from 'vue-router';

function toggleAnswer(element) {
    let answer = element.querySelector(".answer");
    let allAnswers = document.querySelectorAll(".answer");

    // Đóng tất cả các câu trả lời trước khi mở câu trả lời mới
    allAnswers.forEach((item) => {
        if (item !== answer && item.classList.contains("show-answer")) {
            item.classList.remove("show-answer");
        }
    });

    answer.classList.toggle("show-answer"); // Thêm hoặc xoá class "show-answer" 
}
export default {
    name: 'products',
    data() {
        return {
            products: []
        };
    },
    mounted() {
        this.getProducts();
    },
    methods: {
        getProducts() {
            axios.get('http://localhost:3000/products').then(res => {
                console.log(res);
                this.products = res.data;
            });
        },
    },
    components: { RouterLink }
}

</script>
<template>
    <div class="fixed-top menu">
        <div class="container d-flex justify-content-between align-items-center ">
            <div>
                <p class="fs-3 text-danger my-2 fw-bold">VILLA</p>
            </div>
            <div class="d-flex">
                <a class="fw-bold text_menu" href="#">Home</a>
                <a class="mx-3 fw-bold text_menu" href="#">Properties</a>
                <a class="fw-bold text_menu" href="#">Property Details</a>
                <a class="mx-3 fw-bold text_menu" href="#">Contact Us</a>

            </div>
        </div>

    </div>

    <!-- slide -->
    <div id="carouselExampleDark" class="carousel carousel-dark slide ">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active m-auto " data-bs-interval="10000">
                <img src="https://templatemo.com/templates/templatemo_591_villa_agency/assets/images/banner-02.jpg"
                    class="d-block w-100">
                <div
                    class="carousel-caption d-none d-md-block text-start  d-flex align-items-center justify-content-center h-75">
                    <p class="p_slide bg-white p-1">Toronto, <b style="color: orangered;">Canada.</b></p>
                    <h1 class="text-white fw-bold h1_slide">Hurry! <br> Get the Best Villa for you</h1>
                </div>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
                <img src="https://templatemo.com/templates/templatemo_591_villa_agency/assets/images/banner-01.jpg"
                    class="d-block w-100">
                <div
                    class="carousel-caption d-none d-md-block text-start  d-flex align-items-center justify-content-center h-75">
                    <p class="p_slide bg-white p-1">Melbourne, <b style="color: orangered;">Australia.</b></p>
                    <h1 class="text-white fw-bold h1_slide">Be Quick! <br>Get the best villa in town</h1>
                </div>
            </div>
            <div class="carousel-item">
                <img src="https://templatemo.com/templates/templatemo_591_villa_agency/assets/images/banner-03.jpg"
                    class="d-block w-100">
                <div
                    class="carousel-caption d-none d-md-block text-start  d-flex align-items-center justify-content-center h-75">
                    <p class="p_slide bg-white p-1">Miami, <b style="color: orangered;">South Florida.</b></p>
                    <h1 class="text-white fw-bold h1_slide">Act Now! <br> Get the highest level penthouse</h1>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>

    <!-- content1 -->
    <div class="container content1 d-flex justify-content-center gap-5 my-5">
        <div class="content1_box1">

            <img style="border-radius: 10px;"
                src="https://templatemo.com/templates/templatemo_591_villa_agency/assets/images/featured.jpg" width="300px">
        </div>
        <div class="content1_box2">
            <p class="text-danger fw-bold" style="margin-bottom: 30px; ">FEATURED</p>
            <h1 class="fw-bold" style="margin-bottom: 32px;">Best Appartment <br> & Sea View</h1>
            <div class="content1_box2_answer">
                <div class="faq-item" onclick="toggleAnswer(this)">
                    <p>Best useful links ?</p>
                    <div class="answer">
                        <p style="width: 300px; border-left: 2px green solid;">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has the
                            industry's </p>
                    </div>
                </div>
                <div class="faq-item" onclick="toggleAnswer(this)">
                    <p>How does this work ?</p>
                    <div class="answer">
                        <p style="width: 300px;border-left: 2px green solid;">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has the
                            industry's </p>
                    </div>
                </div>
                <div class="faq-item" onclick="toggleAnswer(this)">
                    <p>Best useful links ?</p>
                    <div class="answer">
                        <p style="width: 300px; border-left: 2px green solid;">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has the
                            industry's </p>
                    </div>
                </div>
            </div>

        </div>
        <div class="content1_box3">
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

    <!-- banner2 -->
    <div class="banner2 text-center fw-bold">
        <div style="">
            <p style="color: red;">Video view</p>
        </div>
        <h1 class="text-white mb-2">Get Closer View & <br> Different Feeling</h1>
        <iframe style="border-radius: 10px;box-shadow: 0px 0px 45px 25px rgba(227,227,227,1);" width="560" height="315"
            src="https://www.youtube.com/embed/0f66NlZsByk?si=ExvC7WLKrb40Fqh_&amp;start=3" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
    </div>

    <div class="container content2 d-flex gap-3 justify-content-center  mb-5">
        <div style="border-radius: 10px; border: solid 1px orangered; background-color: #ffeee9;  margin-right: 80px;"
            class="d-flex gap-4 p-1 px-2">
            <h1 style="color: orangered;">34</h1>
            <h5>Buildings <br> Finished Now</h5>
        </div>
        <div style="border-radius: 10px; border: solid 1px orangered;background-color: #ffeee9; margin-right: 80px;"
            class="d-flex gap-4 p-1 px-2">
            <h1 style="color: orangered;">12</h1>
            <h5>Years <br> Experience</h5>
        </div>
        <div style="border-radius: 10px; border: solid 1px orangered;background-color: #ffeee9;"
            class="d-flex gap-4 p-1 px-2">
            <h1 style="color: orangered;">24</h1>
            <h5> Awwards <br> Won 2023</h5>
        </div>
    </div>

    <!-- content-product -->
    <div>
        <p style="color: orangered; text-align: center;">| PROPERTIES</p>
        <h2 class="text-center fw-bold" style="margin-bottom: 70px;">We Provide The Best <br> Property You Like</h2>
    </div>




    <!-- grid products -->
    <div class="container text-center">
        <div class="row row-cols-3 justify-content-center gap-5">
            <div v-for="(product, index) in products" :key="index" class="col col1_grid w-auto p-1">
                <img class="rounded mb-3" :src="product.image" alt="" width="250px">
                <div class="d-flex justify-content-between mb-1">
                    <div style="border-radius: 10px; border: black 1px solid; text-align: center; color: white; background-color: orangered; height: 29px;
                padding: 0 5px;
                margin-right: 10px;">
                        <p>Luxury villa</p>
                    </div>
                    <p class="text-xl fw-bold" style="color: orangered;">${{ product.price }}</p>

                </div>
                <p class="text-xxl fw-bold mb-3 text-start">{{ product.name }}</p>
                <div class="d-flex gap-3 fw-medium mb-1">
                    <p>Loại: {{ product.category }}</p>
                    <p>Thương hiệu: {{ product.brand }}</p>
                </div>
                <!-- <div class=" d-flex gap-3 fw-medium">
                    <p>Area: 450m2</p>
                    <p>Floor: 3</p>
                    <p>Parking: 8 spots</p>
                </div> -->
                <hr>
                <button class="btn mb-3" style="background-color: orangered"><RouterLink :to="{ path: '/detail/' + product.id + '' }"
                        class="text-decoration-none text-white">Schedule a visit</RouterLink></button>
            </div>
            <!-- <div class="col col1_grid w-auto p-1">
                <img class="rounded mb-3"
                    src="https://templatemo.com/templates/templatemo_591_villa_agency/assets/images/property-02.jpg" alt=""
                    width="auto">
                <div class="d-flex justify-content-between mb-1">
                    <div style="border-radius: 10px; border: black 1px solid; text-align: center; color: white; background-color: orangered; height: 29px;
                padding: 0 5px;
                margin-right: 10px;">
                        <p>Luxury villa</p>
                    </div>
                    <p class="text-xl fw-bold" style="color: orangered;">$1.180.000</p>

                </div>
                <p class="text-xxl fw-bold mb-3 text-start">54 Mid Street Florida, OR 27001</p>
                <div class="d-flex gap-3 fw-medium mb-1">
                    <p>Bedrooms: 6</p>
                    <p>Bathrooms: 5</p>
                </div>
                <div class=" d-flex gap-3 fw-medium">
                    <p>Area: 450m2</p>
                    <p>Floor: 3</p>
                    <p>Parking: 8 spots</p>
                </div>
                <hr>
                <button class="btn mb-3" style="background-color: orangered"><a href="#"
                        class="text-decoration-none text-white">Schedule a visit</a></button>
            </div>
            <div class="col col1_grid w-auto p-1">
                <img class="rounded mb-3"
                    src="https://templatemo.com/templates/templatemo_591_villa_agency/assets/images/property-03.jpg" alt=""
                    width="auto">
                <div class="d-flex justify-content-between mb-1">
                    <div style="border-radius: 10px; border: black 1px solid; text-align: center; color: white; background-color: orangered; height: 29px;
                padding: 0 5px;
                margin-right: 10px;">
                        <p>Luxury villa</p>
                    </div>
                    <p class="text-xl fw-bold" style="color: orangered;">$1.180.000</p>

                </div>
                <p class="text-xxl fw-bold mb-3 text-start">54 Mid Street Florida, OR 27001</p>
                <div class="d-flex gap-3 fw-medium mb-1">
                    <p>Bedrooms: 6</p>
                    <p>Bathrooms: 5</p>
                </div>
                <div class=" d-flex gap-3 fw-medium">
                    <p>Area: 450m2</p>
                    <p>Floor: 3</p>
                    <p>Parking: 8 spots</p>
                </div>
                <hr>
                <button class="btn mb-3" style="background-color: orangered"><a href="#"
                        class="text-decoration-none text-white">Schedule a visit</a></button>
            </div>
            <div class="col col1_grid w-auto p-1">
                <img class="rounded mb-3"
                    src="https://templatemo.com/templates/templatemo_591_villa_agency/assets/images/property-04.jpg" alt=""
                    width="auto">
                <div class="d-flex justify-content-between mb-1">
                    <div style="border-radius: 10px; border: black 1px solid; text-align: center; color: white; background-color: orangered; height: 29px;
                padding: 0 5px;
                margin-right: 10px;">
                        <p>Luxury villa</p>
                    </div>
                    <p class="text-xl fw-bold" style="color: orangered;">$1.180.000</p>

                </div>
                <p class="text-xxl fw-bold mb-3 text-start">54 Mid Street Florida, OR 27001</p>
                <div class="d-flex gap-3 fw-medium mb-1">
                    <p>Bedrooms: 6</p>
                    <p>Bathrooms: 5</p>
                </div>
                <div class=" d-flex gap-3 fw-medium">
                    <p>Area: 450m2</p>
                    <p>Floor: 3</p>
                    <p>Parking: 8 spots</p>
                </div>
                <hr>
                <button class="btn mb-3" style="background-color: orangered"><a href="#"
                        class="text-decoration-none text-white">Schedule a visit</a></button>
            </div>
            <div class="col col1_grid w-auto p-1">
                <img class="rounded mb-3"
                    src="https://templatemo.com/templates/templatemo_591_villa_agency/assets/images/property-05.jpg" alt=""
                    width="auto">
                <div class="d-flex justify-content-between mb-1">
                    <div style="border-radius: 10px; border: black 1px solid; text-align: center; color: white; background-color: orangered; height: 29px;
                padding: 0 5px;
                margin-right: 10px;">
                        <p>Luxury villa</p>
                    </div>
                    <p class="text-xl fw-bold" style="color: orangered;">$1.180.000</p>

                </div>
                <p class="text-xxl fw-bold mb-3 text-start">54 Mid Street Florida, OR 27001</p>
                <div class="d-flex gap-3 fw-medium mb-1">
                    <p>Bedrooms: 6</p>
                    <p>Bathrooms: 5</p>
                </div>
                <div class=" d-flex gap-3 fw-medium">
                    <p>Area: 450m2</p>
                    <p>Floor: 3</p>
                    <p>Parking: 8 spots</p>
                </div>
                <hr>
                <button class="btn mb-3" style="background-color: orangered"><a href="#"
                        class="text-decoration-none text-white">Schedule a visit</a></button>
            </div>
            <div class="col col1_grid w-auto p-1">
                <img class="rounded mb-3"
                    src="https://templatemo.com/templates/templatemo_591_villa_agency/assets/images/property-06.jpg" alt=""
                    width="auto">
                <div class="d-flex justify-content-between mb-1">
                    <div style="border-radius: 10px; border: black 1px solid; text-align: center; color: white; background-color: orangered; height: 29px;
                padding: 0 5px;
                margin-right: 10px;">
                        <p>Luxury villa</p>
                    </div>
                    <p class="text-xl fw-bold" style="color: orangered;">$1.180.000</p>

                </div>
                <p class="text-xxl fw-bold mb-3 text-start">54 Mid Street Florida, OR 27001</p>
                <div class="d-flex gap-3 fw-medium mb-1">
                    <p>Bedrooms: 6</p>
                    <p>Bathrooms: 5</p>
                </div>
                <div class=" d-flex gap-3 fw-medium">
                    <p>Area: 450m2</p>
                    <p>Floor: 3</p>
                    <p>Parking: 8 spots</p>
                </div>
                <hr>
                <button class="btn mb-3" style="background-color: orangered"><a href="#"
                        class="text-decoration-none text-white">Schedule a visit</a></button>
            </div> -->
        </div>
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

.p_slide {
    width: 20%;
    border: 1px solid white;
    text-align: center;

}

.h1_slide {
    font-size: 48px;
    width: 300px;
}

.content1 {
    margin-top: 80px;

}

.content1_box2 {
    border-bottom: red 2px solid;
}

.content1_box2 p {
    font-size: 16px;
    font-weight: 600;
    border-left: 2px solid red;
    padding-left: 7px;
}

.faq-item {
    cursor: pointer;
}

.answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;
    opacity: 0;
}

.show-answer {
    max-height: 200px;
    opacity: 1;
}

.content1_box2_answer {
    background-color: #e5e4e4;
    border-radius: 10px;
    padding-left: 2px;
    padding-top: 8px;
}

.faq-item {
    border-bottom: 1px white solid;
    margin-bottom: 4px;

}

.img_icon {
    margin-bottom: 35px;
    margin-right: 5px;
}

.content1_box3 {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    border: black solid 1px;
    border-radius: 10px;
    padding-left: 20px;
    padding-right: 20px;

}

.banner2 {
    background-image: url("https://templatemo.com/templates/templatemo_591_villa_agency/assets/images/video-bg.jpg");
    background-size: cover;
    height: 500px;
    margin-bottom: 20px;
    margin-top: 70px;
    margin-bottom: 70px;
}

.test_grid {
    display: grid;
    grid-template-columns: 23% 23% 23%;
}

.col1_grid {
    border: 1px solid black;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
}
</style>