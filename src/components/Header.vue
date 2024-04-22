<template>
    <div class="menu">
        <div class="logo">
            <img src="../assets/logomlovibranca.png"/>
        </div>
        <div class="itens">
            <ul>
                <li>
                    <a href="">Item 1</a> 
                </li>
                <li>
                    <a href="">Item 2</a> 
                </li>
                <li>
                    <a href="">Item 3</a> 
                </li>
                <li>
                    <a href="">Item 4</a> 
                </li>
                <li>
                    <a href="">Item 5</a> 
                </li>
            </ul>
        </div>
        <div class="actions">
            <v-icon
            icon="mdi-bell-alert-outline"
            size="large"
            color="white"
          ></v-icon>
        </div>
    </div>
</template>

<style>
.menu{
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    background-color: #33265d;
    align-items: center
}
.logo img {
    width: 100px;
}
.itens ul {
    display: flex;
    justify-content: space-between;
    gap: 20px;
}
.itens ul li{
    list-style: none;
}
.itens ul li a{
    color: white;
    text-decoration: none;
}
</style>