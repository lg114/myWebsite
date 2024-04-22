<template>
    <el-card class="container">
        <div class="card">
            testing
        </div>
    </el-card>
    <el-card class="container">
        <div class="card">
            testing
        </div>
    </el-card>
</template>

<style scoped>
    .container{
        max-width: 100%;
        max-height: 100%;
        margin: 10px;
        padding: 5px;
        --el-card-bg-color: none;
        --el-card-border-radius: 10px;
        --el-card-border-color:#303133;
        border: 3px solid ;
    }
    .card{
        color: #DBDBDB;
    }
    .container:hover{
        color: #FFFFFF;
    }
    .card:hover{

    }
    @media screen and (max-width: 1048px) {
        /* .card {
        width: 100%;
        } */
    }
</style>