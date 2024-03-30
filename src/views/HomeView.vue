<script setup>

</script>

<template>
  <div class="container">
      <navbar/>
      <el-main class="main">
        <section>
          <div class="avatar">
            <img src="@/assets/images/avatar.png" alt="avatar">
            <div class="shadow"></div>
          </div>
          <div class="name">
            <h1>IM_GC</h1>
            <el-icon color="#409efc">
                            <Edit />
                            </el-icon>
          </div>          
        </section>
      </el-main>
  </div>
</template>


<style scoped>
  @import '@/assets/home.css';
</style>