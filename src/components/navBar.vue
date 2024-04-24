<template>
    <div class = "container">
        <el-row>
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="3">
            </el-col>
            <el-col :xs="8" :sm="12" :md="16" :lg="18" :xl="18">
                <span class="title">Welcome to gc website!</span>
            </el-col>
            <el-col class="nav" :xs="8" :sm="6" :md="4" :lg="3" :xl="3">
                <div class="desktop_menu hidden-xs-and-down">
                    <RouterLink to="/" class="nav-item">HOME</RouterLink>
                    <span style="margin-left: 5px; margin-right: 5px; color: #ffffff;">|</span>
                    <RouterLink to="/about" class="nav-item">ABOUT ME</RouterLink>
                </div>
                <div class="mobile_menu">
                    <el-dropdown @command="handleCommand">
                        <span class="dropBtn">
                            Menu
                            <el-icon color="#DBDBDB">
                                <CaretBottom />
                            </el-icon>
                        </span>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item command="goHome"><span class="dropdown_item">Home</span></el-dropdown-item>
                                <el-dropdown-item command="goAbout"><span class="dropdown_item">About Me</span></el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script setup>
    import { useRouter } from 'vue-router';

    const name = 'navBar';

    const router = useRouter();

    const handleCommand = (command) => {
        if (command === 'goHome') {
        router.push('/');
        } else if (command === 'goAbout') {
        router.push('/about');
        }
    };
</script>


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
    .dropBtn{
        color: #DBDBDB;
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
        background-color: #000000;
        border: 1px solid #DBDBDB;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        --el-dropdown-menuItem-hover-fill: #000000;
    }
    .dropdown_item{
        color:#DBDBDB;
        
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