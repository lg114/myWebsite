<template>
  <div class="container">
      <navbar/>
      <el-main class="main">
        <el-row :gutter="10">
          <el-col :xs="24" :sm="22" :md="20" :lg="18" :xl="18">
            <el-scrollbar height="100%">
              <card/>
            </el-scrollbar>
          </el-col>
          <el-col :xs="24" :sm="2" :md="4" :lg="6" :xl="6" class="hidden-xs-and-down">
            <section class="gc">
              <div class="avatar">
                <img src="@/assets/images/avatar.png" alt="avatar">
                <div class="shadow"></div>
              </div>
              <div class="name">
                <h3>I M G C</h3>
              </div>          
            </section>
          </el-col>
        </el-row>

      </el-main>
  </div>
</template>

<style scoped>
  @import '@/assets/home.css';
</style>