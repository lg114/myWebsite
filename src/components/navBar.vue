<template>
    <div class = "container">
        <el-row>
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="3">
            </el-col>
            <el-col :xs="8" :sm="12" :md="16" :lg="18" :xl="18">
                <span class="title">Welcome to gc website!</span>
            </el-col>
            <el-col class="nav" :xs="8" :sm="6" :md="4" :lg="3" :xl="3">
                <div class="desktop_menu">
                    <RouterLink to="/" class="nav-item">Home</RouterLink>
                    <span style="margin-left: 10px; margin-right: 10px; color: #ffffff;">|</span>
                    <RouterLink to="/about" class="nav-item">About Me</RouterLink>
                </div>
                <div class="mobile_menu">
                    <el-dropdown>
                        <span class="dropBtn">
                            <el-icon color="#DBDBDB">
                                <CaretBottom />
                            </el-icon>
                        </span>
                        <template #dropdown>
                                <el-dropdown-item>Home</el-dropdown-item>
                                <el-dropdown-item>About Me</el-dropdown-item>
                        </template>
                    </el-dropdown>
                </div>
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
        font-size: 20px;
        color: #DBDBDB;
        letter-spacing: -1px;
        line-height: 2;
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
    .el-dropdown-menu{
        --el-dropdown-menu-box-shadow: black;
        --el-color-primary-light-9: black;
    }
    @media screen and (min-width: 771px){
        .mobile_menu{
            display: none;

        }
        
    }
    @media screen and (max-width: 770px){
        .title{
            display: none;
        }
        .desktop_menu{
            display: none;
        }
        .mobile_menu{
            text-align: center;
        }
    }
</style>