<!-- <script lang="ts">
// import Vue from 'Vue'
</script>-->
<template>
    <body style="background-image: linear-gradient(90deg, #4faf87, #45ac99);  ">

        <div class="fixed-top menu">
            <div class="container d-flex justify-content-between align-items-center ">
                <div>
                    <p class="fs-3 text-danger my-2 fw-bold">VILLA</p>
                </div>
                <div class="d-flex">
                    <a class="fw-bold text_menu" href="./home">Home</a>
                    <a class="mx-3 fw-bold text_menu" href="#">Properties</a>
                    <a class="fw-bold text_menu" href="#">Property Details</a>
                    <a class="mx-3 fw-bold text_menu" href="#">Contact Us</a>
                    <a class="fw-bold text_menu" href="./cart"><svg xmlns="http://www.w3.org/2000/svg" width="25"
                            height="25" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                            <path
                                d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                        </svg></a>
                </div>
            </div>

        </div>


        <div id="dialog" class="dialog container">
            <div class="dialog-content " style=" padding: 35px; border-radius: 10px;">
                <!-- <span class="close" id="closeDialog" style="margin: -41px -27px 0 0px; position: relative;">&times;</span> -->
                <h1 style="margin-bottom: 20px;text-align: center;color: white;font-weight: 900; margin-top: 70px;"> Shoping
                    Cart</h1>
                <div style="display: flex;justify-content: space-between;margin-bottom: 20px;">
                    <p style="color: white;">Shoping Cart</p>
                    <p style="color: white;">items in the bag</p>
                </div>
                <div v-for="(item, index) in cartItems" :key="index"
                    style="display: flex;justify-content: space-between; background-color: white; padding: 15px; border-radius: 10px;margin-bottom: 15px;">
                    <div style="display: flex;">
                        <img style="margin-right: 20px; border-radius: 10px;" :src="item.image" alt="" width="150px"
                            height="120px">

                        <div>
                            <h3 style="margin-bottom: 20px;">{{ item.name }}</h3>
                            <h5 style="margin-bottom: 8px;">{{ item.category }}</h5>
                            <h5 class="visually-hidden" style="color: red;margin: 0px;">${{ item.price }}</h5>

                            <label style="color: red; font-weight: 700;font-size: 25px;">$<input type="number"
                                    :value="parseFloat(item.price)"
                                    style="color: red; background-color: white; margin: 0px;border: none;font-weight: 700;font-size: 25px;"
                                    @input="updatePrice(index, $event)"></label>
                        </div>
                    </div>



                    <div style="display: flex; gap: 10px;">
                        <div class="counter">
                            <input type="number" :value="parseFloat(item.quantity)"
                                style="color: white;width: 40px;margin: 48px 28px -3px 4px"
                                @input="updateQuantity(index, $event)">
                            <input class="visually-hidden" type="number" :value="item.quantity"
                                style="width: 40px;margin: 48px 28px -3px 4px">
                        </div>

                        <span class="close" style="margin: -6px -6px 0 0px; position: relative;cursor: pointer;"
                            @click="removeItem(index)">&times;</span>

                    </div>
                </div>



                <table style="width: 100%;margin-top: 20px;">

                    <!-- <input type="number" :value="totalPrice" readonly> -->

                    <tr>
                        <th style="background-image: linear-gradient(90deg, #4faf87, #45ac99);color: white;">Subtotal</th>
                        <th
                            style=" text-align: center;background-image: linear-gradient(90deg, #45ac99, #4faf87);color: white;">
                            VAT</th>
                        <th
                            style=" text-align: center;background-image: linear-gradient(90deg, #4faf87, #45ac99);color: white;">
                            Total</th>
                    </tr>
                    <tr>
                        <th style="background-image: linear-gradient(90deg, #4faf87, #45ac99);color: white;">${{ totalPrice
                        }}
                        </th>
                        <th
                            style=" text-align: center;background-image: linear-gradient(90deg, #45ac99, #4faf87);color: white;">
                            $0.00</th>
                        <th
                            style=" text-align: center;background-image: linear-gradient(90deg, #4faf87, #45ac99);color: white;">
                            ${{ totalPrice }}</th>
                    </tr>
                </table>
            </div>

        </div>




    </body>
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
</style> 


  
<script>
import { ref, onMounted } from 'vue';

export default {
    setup() {
        const cartItems = ref([]);
        const totalPrice = ref(0);

        onMounted(() => {
            const cart = localStorage.getItem('cart');
            if (cart) {
                cartItems.value = JSON.parse(cart);

                // Khởi tạo biến mới để tính và lưu tổng tiền
                totalPrice.value = cartItems.value.reduce((total, item) => {
                    const itemTotal = item.price * item.quantity;
                    // Cập nhật giá trị total trên mỗi item
                    item.total = itemTotal;
                    return total + itemTotal;
                }, 0);

                // Lưu tổng tiền vào Local Storage
                localStorage.setItem('totalPrice', totalPrice.value);
            }
        });

        const removeItem = (index) => {
            cartItems.value.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cartItems.value));
        };

        const updatePrice = (index, event) => {
            cartItems.value[index].price = parseFloat(event.target.value);
            localStorage.setItem('cart', JSON.stringify(cartItems.value));
        };

        const updateQuantity = (index, event) => {
            cartItems.value[index].quantity = parseFloat(event.target.value);
            // Cập nhật tổng tiền sau khi cập nhật số lượng
            localStorage.setItem('cart', JSON.stringify(cartItems.value));
        };

        return {
            cartItems,
            totalPrice,
            removeItem,
            updatePrice,
            updateQuantity,
        };
    },
};
</script>
  
  

  