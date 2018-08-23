<template>
  <div class="content">
    <div class="item">
        <span>工号：</span>{{workNumber}}
    </div>
    <div class="item">
        <span>姓名：</span>{{name}}
    </div>
    <table class="list">
      <thead>
      <tr>
        <th>商品编号</th>
        <th>绑定时间</th>
        <th>状态</th>
      </tr>
      </thead>
      <tbody>
      <tr >
        <td>158347951</td>
        <td>18/04/30</td>
        <td>合格</td>
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
    export default {
      data(){
        return{
           workNumber : 0,
           name : '',
        }
      },
      activated(){
        this.workNumber = this.$route.query.number;
        this.name = this.$route.query.name;
      },
    }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "../../assets/css/main";
</style>
