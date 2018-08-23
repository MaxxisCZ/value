<template>
  <div class="content">
    <table class="list">
      <thead>
      <tr>
        <th>工号</th>
        <th>姓名</th>
        <th>商品编号</th>
        <th>绑定时间</th>
        <th>机柜</th>
        <th>老化开始时间</th>
        <th>老化结束时间</th>
        <th>备注</th>
        <th>是否合格</th>
      </tr>
      </thead>
      <tbody>
      <tr >
        <td>158347951</td>
        <td>18/04/30</td>
        <td>1</td>
        <td>18/05/20</td>
        <td>18/05/29</td>
        <td>商品状态良好</td>
        <td></td>
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

      }
    },
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "../../assets/css/main";
</style>
