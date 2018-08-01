<template>
    <div class="menu">
            <a href="#" class="logo"><img src="../assets/logo.png" alt="logo"></a>
        <div class="nav">
            <a href="#">Interior</a>
            <a href="#">Exterior</a>
            <a href="#">Acoperis</a>
            <div class="lang">
                <a href="#">RU</a>
                <a href="#">RO</a>
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
/* roboto-regular - cyrillic_latin */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: local('Roboto'), local('Roboto-Regular'),
       url('../assets/fonts/roboto-v18-cyrillic_latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('../assets/fonts/roboto-v18-cyrillic_latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* roboto-500 - cyrillic_latin */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  src: local('Roboto Medium'), local('Roboto-Medium'),
       url('../assets/fonts/roboto-v18-cyrillic_latin-500.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('../assets/fonts/roboto-v18-cyrillic_latin-500.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* ConcertOne-Regular */
 @font-face {
    font-family: ConcertOne-Regular;
    src: url('../assets/fonts/ConcertOne-Regular.ttf');
}
/*=====================================*/
.menu {
    max-width: 90%;
    min-width: 320px;
    margin: 0 auto;
    padding: 10px 0 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.logo {
    display: flex;
    justify-content: center;
    opacity: 0.9;
    display: block;
}
.logo img{
    max-width: 320px;
}
.logo:hover {
    opacity: 1;
}
.nav {
    display: flex;
    font-family: ConcertOne-Regular, sans-serif;
    font-size: 20px;
    font-weight: 600;
    text-transform: uppercase;
    box-sizing: border-box;
}
.nav a{
    display: block;
    color: #43434c;
    margin-top: 5px;
}
.nav a:hover {
    opacity: 0.8;
}

</style>
