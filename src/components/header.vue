<template>
    <div id="header">
      <a class="logo" href="/">员工绩效列表</a>
      <ul class="menu">
        <li><i class="icon-user"></i></li>
        <li><i class="icon-end"></i></li>
      </ul>
    </div>
</template>

<script>
    export default {}
</script>

<style scoped lang="less" rel="stylesheet/less">
    #header{
      position: fixed;
      height: 90px;
      padding: 0 40px;
      left: 0;
      right: 0;
      top: 0;
      border-bottom: 1px solid #707070;
      z-index: 110;
      background: #f7f7f7;
      >a.logo{
        font-size: 24px;
        line-height: 90px;
      }
      >ul.menu{
        line-height: 90px;
        float: right;
        li{
          display: inline-block;
          margin-left: 20px;
          .icon-user:before{
            content: '\e60e';
            font-size: 2em;
            color: #7a7a7a;
          }
          .icon-end:before{
            content: '\e605';
            font-size: 2em;
            color: #7a7a7a;
          }
        }
      }
    }
</style>
