<template>
    <div>
      <luxHeader></luxHeader>
      <luxMenu></luxMenu>
      <div id="body">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
</template>

<script>
   import luxHeader 	from '@/components/header';
   import luxMenu 	from '@/components/menu';
    export default {
       data(){
           return{

           }
       },
      components : {
        luxHeader,
        luxMenu
      },
    }
</script>

<style scoped lang="less" rel="stylesheet/less">
#body{
  padding-top: 90px;
  margin-left: 200px;
  min-height: 100vh;
  overflow: hidden;
  border-left: 1px solid #cccccc;
}
</style>
