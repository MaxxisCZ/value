<template>
   <div id="left">
     <ul>
       <li>
         <router-link :to="{path:'/basic'}">员工基本信息</router-link>
       </li>
       <li  >
           <a @click = "show = !show" :class="show ? 'icon-up active' : 'icon-down'" href="javascript:;" >员工绩效列表</a>
           <ul v-show="show" >
             <li>
               <a href="javascript:;" @click="next">绩效列表列表</a>
             </li>
           </ul>
       </li>
     </ul>
   </div>
</template>

<script>
    export default {
      data(){
        return{
           show : false,
        }
      },
      methods : {
         next(){
          this.$router.push({path:'/performance/list'});
        }
      }
    }
</script>

<style scoped lang="less" rel="stylesheet/less">
#left{
  position: fixed;
  z-index: 100;
  width: 200px;
  top: 90px;
  bottom: 0;
  left: 0;
  background: #f7f7f7;
  >ul{
    a{
      cursor: pointer ;
    }
    .active{
      color: #c6c6c6;
    }
    >li{
      line-height: 75px;
        >a{
          padding-left: 40px;
          font-size: 18px;
          color: #707070;
          border-bottom: 1px solid #cccccc;
          line-height: 75px;
          display: block;
          &.icon-up:after{
            content: '\e685';
            font-size: 1.5em;
            color: #707070;
            position: relative;
            left:10px;
            top: 2px;
          }
          &.icon-down:after{
            content: '\e600';
            font-size: 1.5em;
            color: #707070;
            position: relative;
            left:10px;
            top: 2px;
          }
        }
      >ul{
        >li{
          >a{
            margin-left: 80px;
            font-size: 14px;
            color: #707070;
          }
        }
      }
    }
  }
}
</style>
