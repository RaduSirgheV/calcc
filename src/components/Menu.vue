<template>
    <div class="menu">
        <div class="top-bar"></div>
        <div class="container">
            <div class="logo">
                <a href="#"><span>Construct</span> <span><i class="fas fa-home"></i></span> <span>Calc</span></a>
            </div>
            <div class="nav">
                <ul class="navigation">
                    <li><a href="#">Interior <i class="fas fa-sort-down"></i></a></li>
                    <li><a href="#">Exterior <i class="fas fa-sort-down"></i></a></li>
                    <li><a href="#">Acoperis <i class="fas fa-sort-down"></i></a></li>
                    <li><a href="#">Adaugator</a></li>
                    <li><a href="#">Contacte</a></li>
                </ul>
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
/* arima-madurai-regular - latin */
@font-face {
  font-family: 'Arima Madurai';
  font-style: normal;
  font-weight: 400;
  src: url('../assets/fonts/arima/arima-madurai-v3-latin-regular.eot'); /* IE9 Compat Modes */
  src: local('Arima Madurai'), local('ArimaMadurai-Regular'),
       url('../assets/fonts/arima/arima-madurai-v3-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../assets/fonts/arima/arima-madurai-v3-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('../assets/fonts/arima/arima-madurai-v3-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('../assets/fonts/arima/arima-madurai-v3-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../assets/fonts/arima/arima-madurai-v3-latin-regular.svg#ArimaMadurai') format('svg'); /* Legacy iOS */
}
/* arima-madurai-500 - latin */
@font-face {
  font-family: 'Arima Madurai';
  font-style: normal;
  font-weight: 500;
  src: url('../assets/fonts/arima/arima-madurai-v3-latin-500.eot'); /* IE9 Compat Modes */
  src: local('Arima Madurai Medium'), local('ArimaMadurai-Medium'),
       url('../assets/fonts/arima/arima-madurai-v3-latin-500.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../assets/fonts/arima/arima-madurai-v3-latin-500.woff2') format('woff2'), /* Super Modern Browsers */
       url('../assets/fonts/arima/arima-madurai-v3-latin-500.woff') format('woff'), /* Modern Browsers */
       url('../assets/fonts/arima/arima-madurai-v3-latin-500.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../assets/fonts/arima/arima-madurai-v3-latin-500.svg#ArimaMadurai') format('svg'); /* Legacy iOS */
}
/* arima-madurai-700 - latin */
@font-face {
  font-family: 'Arima Madurai';
  font-style: normal;
  font-weight: 700;
  src: url('../assets/fonts/arima/arima-madurai-v3-latin-700.eot'); /* IE9 Compat Modes */
  src: local('Arima Madurai Bold'), local('ArimaMadurai-Bold'),
       url('../assets/fonts/arima/arima-madurai-v3-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../assets/fonts/arima/arima-madurai-v3-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
       url('../assets/fonts/arima/arima-madurai-v3-latin-700.woff') format('woff'), /* Modern Browsers */
       url('../assets/fonts/arima/arima-madurai-v3-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../assets/fonts/arima/arima-madurai-v3-latin-700.svg#ArimaMadurai') format('svg'); /* Legacy iOS */
}
/* arima-madurai-800 - latin */
@font-face {
  font-family: 'Arima Madurai';
  font-style: normal;
  font-weight: 800;
  src: url('../assets/fonts/arima/arima-madurai-v3-latin-800.eot'); /* IE9 Compat Modes */
  src: local('Arima Madurai ExtraBold'), local('ArimaMadurai-ExtraBold'),
       url('../assets/fonts/arima/arima-madurai-v3-latin-800.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../assets/fonts/arima/arima-madurai-v3-latin-800.woff2') format('woff2'), /* Super Modern Browsers */
       url('../assets/fonts/arima/arima-madurai-v3-latin-800.woff') format('woff'), /* Modern Browsers */
       url('../assets/fonts/arima/arima-madurai-v3-latin-800.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../assets/fonts/arima/arima-madurai-v3-latin-800.svg#ArimaMadurai') format('svg'); /* Legacy iOS */
}
/* arima-madurai-900 - latin */
@font-face {
  font-family: 'Arima Madurai';
  font-style: normal;
  font-weight: 900;
  src: url('../assets/fonts/arima/arima-madurai-v3-latin-900.eot'); /* IE9 Compat Modes */
  src: local('Arima Madurai Black'), local('ArimaMadurai-Black'),
       url('../assets/fonts/arima/arima-madurai-v3-latin-900.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../assets/fonts/arima/arima-madurai-v3-latin-900.woff2') format('woff2'), /* Super Modern Browsers */
       url('../assets/fonts/arima/arima-madurai-v3-latin-900.woff') format('woff'), /* Modern Browsers */
       url('../assets/fonts/arima/arima-madurai-v3-latin-900.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../assets/fonts/arima/arima-madurai-v3-latin-900.svg#ArimaMadurai') format('svg'); /* Legacy iOS */
}
/* andika-regular - latin */
@font-face {
  font-family: 'Andika';
  font-style: normal;
  font-weight: 400;
  src: url('../assets/fonts/andika/andika-v9-latin-regular.eot'); /* IE9 Compat Modes */
  src: local('Andika Regular'), local('Andika-Regular'),
       url('../assets/fonts/andika/andika-v9-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../assets/fonts/andika/andika-v9-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('../assets/fonts/andika/andika-v9-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('../assets/fonts/andika/andika-v9-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../assets/fonts/andika/andika-v9-latin-regular.svg#Andika') format('svg'); /* Legacy iOS */
}
/*MENU=====================================*/
.container {
    width: 75%;
    margin: 0 auto;
}
.top-bar {
    background-color: rgb(117, 207, 0);
    width: 100%;
    height: 6px;
}
.logo {
    display: flex;
    align-items: center;
    flex-direction: column;
    font: 45px Arima Madurai;
    font-weight: 900;
    margin-top: 30px;
}
.logo span:first-child{
    color: rgb(100, 41, 7);
}
.logo span i{
    color: rgb(116, 55, 19);
}
.logo span:last-child{
    color: rgba(100, 41, 7, 0.719);
}
/*NAV=====================================*/
.nav {
    margin-top: 10px;
    display: flex;
    justify-content: center;
}
.navigation {
    display: flex;
    flex-direction: row;
}
.navigation li{
    margin-left: 80px;
}
.navigation li:first-child {
    margin-left: 0;
}
.navigation a {
    font: 20px Andika;
    color: rgba(100, 41, 7, 0.9);
    display: flex;
    align-items: center
}
.navigation a i {
    padding: 0 0 6px 5px;
}
.navigation li a:hover {
    text-shadow: 5px grey;
    border-bottom: 2px solid rgba(100, 41, 7, 0.8);
}
</style>
