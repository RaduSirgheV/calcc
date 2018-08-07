<template>
    <div class="container">
        <div class="content-block">
            <h3>Cele mai utilizate:</h3>
            <div class="content-block-row">
                <div class="block-row-item"><a href="#">TEST1</a></div>
                <div class="block-row-item"><a href="#">TEST2</a></div>
                <div class="block-row-item"><a href="#">TEST3</a></div>
                <div class="block-row-item"><a href="#">TEST4</a></div>
            </div>
            <div class="content-block-row">
                <div class="block-row-item"><a href="#">TEST1</a></div>
                <div class="block-row-item"><a href="#">TEST2</a></div>
                <div class="block-row-item"><a href="#">TEST3</a></div>
                <div class="block-row-item"><a href="#">TEST4</a></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style>
@import '../assets/style.css';
/*=====================================*/
h3 {
    font: 30px Andika;
    margin-bottom: 10px;
    color: rgb(94, 38, 6);
}
/*=====================================*/
.content-block {
    width: 75%;
    margin: 0 auto;
    padding: 55px 0 20px 0;
}
.content-block-row {
    display: flex;
    flex-direction: row;
}
.content-block-row + .content-block-row {
    margin-top: 20px;
}
.block-row-item {
    width: calc((100%-70px) / 3);
    background-color: burlywood;
    height: 220px;
    border: 4px solid black;
    border-radius: 5px;
    padding: 5px;
    font: 45px Arima Madurai;
    box-shadow: 5px 8px 6px #36353542;
}

.block-row-item + .block-row-item {
    margin-left: 35px;
}
</style>
