<template>
  <div class="content">
     <div class="item">
        <input type="checkbox"/>
        <span>全选</span>
     </div>
    <div class="item">
       <ul>
         <li>

         </li>
       </ul>
    </div>
    <div class="item">
      <a class="solid">打印</a>
      <a class="solid">导出</a>
      <a class="hollow">取消</a>
    </div>
  </div>
  <!--测试git提交 -->
</template>

<script>

    export default {
      data() {
        return {}
      }
    }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "../assets/css/main";
  .content{
     .item{
       >input[type = checkbox]{
          vertical-align: middle;
       }
       >span{
         vertical-align: middle;
       }
     }
  }
</style>
