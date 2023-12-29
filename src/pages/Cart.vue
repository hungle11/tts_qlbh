<script lang="ts">
// import Vue from 'Vue'
</script>
<template>
    <body style="background-image: linear-gradient(90deg, #4faf87, #45ac99);  ">

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


        <div id="dialog" class="dialog container">
            <div class="dialog-content " style=" padding: 35px; border-radius: 10px;">
                <span class="close" id="closeDialog" style="margin: -41px -27px 0 0px; position: relative;">&times;</span>
                <h1 style="margin-bottom: 20px;text-align: center;color: white;font-weight: 900;"> Shoping Cart</h1>
                <div style="display: flex;justify-content: space-between;margin-bottom: 20px;">
                    <p style="color: white;">Shoping Cart</p>
                    <p style="color: white;">items in the bag</p>
                </div>
                <div
                    style="display: flex;justify-content: space-between; background-color: white; padding: 15px; border-radius: 10px;">
                    <div style="display: flex;">
                        <img style="margin-right: 20px;border-radius: 10px;"
                            src="https://templatemo.com/templates/templatemo_591_villa_agency/assets/images/property-03.jpg"
                            alt="" width="150px" height="120px">
                        <div>
                            <h3 style="margin-bottom: 20px;">Product Item number 1</h3>
                            <h5 style="margin-bottom: 20px;">Category</h5>
                            <h5 style="color: red;margin: 0px;">$5.99</h5>
                        </div>
                    </div>



                    <div style="display: flex; gap: 10px;">
                        <div class="counter">
                            <input type="number" value="0" style="width: 40px;margin: 48px 28px -3px 4px">
                        </div>
                        <span class="close"
                            style="margin: -6px -6px 0 0px; position: relative;cursor: pointer;">&times;</span>

                    </div>
                </div>



                <table style="width: 100%;margin-top: 20px;">
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
                        <th style="background-image: linear-gradient(90deg, #4faf87, #45ac99);color: white;">$5.99</th>
                        <th
                            style=" text-align: center;background-image: linear-gradient(90deg, #45ac99, #4faf87);color: white;">
                            $0.00</th>
                        <th
                            style=" text-align: center;background-image: linear-gradient(90deg, #4faf87, #45ac99);color: white;">
                            $5.99</th>
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