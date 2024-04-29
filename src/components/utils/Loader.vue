<template>
    <div class="loading" v-show="isActive">
        <span class="loader"></span>
        <div class="background"></div>
    </div>
</template>
<script>
export default{
    data(){
        return{

        }
    },
    props:{
        isActive:Boolean
    }
}
</script>

<style>
.loader {
    z-index: 999999;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 48px;
    height: 48px;
    border: 5px solid #FFF;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    } 
.background {
    background: linear-gradient(91deg, #a3a3a3, #d2d2d2, #a3a3a3);
    background-size: 600% 600%;
    -webkit-animation: AnimationName 3s ease infinite;
    -moz-animation: AnimationName 3s ease infinite;
    animation: AnimationName 3s ease infinite;
    display: block;
    position: absolute;
    width: 100%;
    height: calc(100% -50px);
    background-color: #d9d9d9;
    top: 0;
    left: 0;
    z-index: 9;
    height: calc(100%);
}
@-webkit-keyframes AnimationName {
    0%{background-position:0% 51%}
    50%{background-position:100% 50%}
    100%{background-position:0% 51%}
}
@-moz-keyframes AnimationName {
    0%{background-position:0% 51%}
    50%{background-position:100% 50%}
    100%{background-position:0% 51%}
}
@keyframes AnimationName {
    0%{background-position:0% 51%}
    50%{background-position:100% 50%}
    100%{background-position:0% 51%}
}
</style>