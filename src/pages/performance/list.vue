<template>
    <div class="content">
      <ul class="query">
        <li  >
          <input v-model="form.startTime" placeholder="请选择开始时间" @click.stop="click1"  />
          <input v-model="form.endTime" placeholder="请选择结束时间" @click.stop="click2" >
          <div class="calendar1" v-show="show1"  >
             <lux-calendar  v-on:choseDay="clickDay1" ></lux-calendar>
          </div>
        </li>
        <li>
          <button  type="search" >查询</button>
        </li>
        <li>
          <input type="text" placeholder="请填写商品编号">
        </li>
        <li>
          <button  type="search" @click="searchProduct">搜索编号</button>
        </li>
        <li>
          <input type="text" placeholder="请填写员工工号">
        </li>
        <li>
          <button  type="search"  @click="searchNumber">搜索工号</button>
        </li>
      </ul>
      <ul class="query">

      </ul>
      <table class="list">
        <thead>
        <tr >
          <th>工号</th>
          <th>姓名</th>
          <th>商品</th>
          <th>产量(只)</th>
          <th>开始生产时间</th>
          <th>结束生产时间</th>
          <th>良品数(只)</th>
          <th>不良数(只)</th>
          <th>不良率(%)</th>
          <th>详情</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="v in tableList">
          <td>{{v.workNumber}}</td>
          <td>{{v.name}}</td>
          <td>{{v.product}}</td>
          <td>{{v.total}}</td>
          <td>{{v.startTime}}</td>
          <td>{{v.endTime}}</td>
          <td>{{v.good}}</td>
          <td>{{v.bad}}</td>
          <td>{{Number(v.bad/v.total).toFixed(2)*100+'%'}}</td>
          <td><router-link :to="{path:'/performance/details',query:{number:v.workNumber,name:v.name}}">点击查看详情</router-link></td>
        </tr>
        </tbody>
      </table>
      <div class="item">
        <a class="solid">导出</a>
        <a class="hollow">取消</a>
      </div>
    </div>
</template>

<script>
   import luxCalendar from '@/vue-calendar-component/index';
    export default {
      data(){
        return{
          show1 : false,
          num : 0,
          form : {
            startTime : '',
            endTime : '',
          },
          tableList : [{
               workNumber : 'rb10401',
               name : '巴林',
               product : 'iphoneX',
               total : 5000,
               good :  4800,
               bad : 200,
               startTime : 7.1,
               endTime : 7.31,
          },{
            workNumber : 'rb10402',
            name : '菲娜',
            product : 'iphoneX',
            total : 6000,
            good :  5500,
            bad : 500,
            startTime : 7.1,
            endTime : 7.30,
          },{
            workNumber : 'rb10403',
            name : '路飞',
            product : 'iphoneX',
            total : 5500,
            good :  4900,
            bad : 600,
            startTime : 7.1,
            endTime : 7.24,
          },{
            workNumber : 'rb10404',
            name : '乔治',
            product : 'iphoneX',
            total : 4000,
            good :  3800,
            bad : 200,
            startTime : 7.2,
            endTime : 7.20,
          }]
        }
      },
      methods : {
        searchProduct(){
           this.$router.push({path:'/performance/product'})
        },
        searchNumber(){
           this.$router.push({path:'/performance/details'})
        },
        transformTime(d){
          return (Date.parse(new Date(d)))/1000
        },
        clickDay1(data) {
          console.log(data); //选中某天
          if(this.num == 1){
              this.form.startTime = data;
              this.show1 = false;
            }else if(this.num == 2){
              this.form.endTime = data;
              this.show1 = false;
            }
          console.log(this.transformTime(data));
        },
        click1(){
          this.show1 = !this.show1;
          this.num = 1;
        },
        click2(){
          this.show1 = !this.show1;
          this.num = 2;
        },
        so(){
          this.show1 = false;
        }
      },
      mounted: function () {
        this.globalClick(this.so);
      },
      components : {
        luxCalendar
      }
    }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "../../assets/css/main";


  .content{
    ul.query{
      li{
        position: relative;
        .calendar1{
          position: absolute;
          left:0;
          top:30px;
        }
      }


    }
  }
</style>
