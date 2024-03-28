<template>
    <div class = "container">
        <el-row>
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="2">
            </el-col>
            <el-col :xs="8" :sm="12" :md="16" :lg="18" :xl="20">
                <span class="title">Welcome to my website!</span>
            </el-col>
            <el-col class=" nav hidden-md-and-down" :xs="8" :sm="6" :md="4" :lg="3" :xl="2">
                <RouterLink to="/" class="nav-item">Home</RouterLink>
                <span style="margin-left: 10px; margin-right: 10px; color: #ffffff;">|</span>
                <RouterLink to="/about" class="nav-item">About Me</RouterLink>
            </el-col>
        </el-row>
    </div>
</template>

<style scoped>
    .container {
        text-align: center;
        align-content: center;
        height: 5vh;
        background-color: black;
        text-transform: uppercase;
    }
    .title{
        font-size: 25px;
        color: #DBDBDB;
        letter-spacing: -1px;
        line-height: 1.5;
    }
    a{
        text-decoration: none;
        color: #DBDBDB;
        line-height: 2.5;
    }
    .nav-item {
    position: relative;
}
    .nav-item::after{
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background: #DBDBDB;
        transform: scaleX(0);
        transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
        transform-origin: right center;
    }
    .nav-item:hover::after{
        transform: scaleX(1);
        transform-origin: left center;
        transition-duration: 0.7s;
    }
    @media screen and (max-width: 770px){
        .title{
            display: none;
        }
    }
</style>