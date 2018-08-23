<template>
  <div class="content">
   <div class="mask"></div>
     <div id="login">
         <div class="box">
            <div class="right">
                <div id="form">
                    <div class="item">
                       <i class="icon-user"></i>
                       <input placeholder="请输入用户名" type="text" />
                      </div>
                      <div class="item">
                        <i class="icon-pass"></i>
                        <input placeholder="请输入密码" type="text" />
                      </div>
                      <div>
                        <div class="forget">忘记密码?</div>
                      </div>
                      <div>
                        <button></button>
                      </div>
                </div>
            </div>
         </div>
     </div>
  </div>
</template>

<script>
    export default {
      data() {
        return {}
      }
    }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .content{
    width: 100%;
    min-height: 100vh;
    background: #f0eeee;
    &:before{
      content: "";
      display: inline-block;
      position: fixed;
      width: 180px;
      min-height: 100vh;
      top:0;
      left: 0;
      background: rgba(249,249,249,0.3);
    }
    &:after{
      content: "";
      display: inline-block;
      position: fixed;
      right:0;
      top:0;
      width: 130px;
      min-height: 100vh;
      background: rgba(249,249,249,0.5);
    }
  }
  .mask{
    &:before{
      content: "";
      display: inline-block;
      position: absolute;
      top:0;
      left: 180px;
      width: 0;
      height: 0;
      border-top: 800px solid rgba(249,249,249,0.3);
      border-right: 400px solid transparent;
      z-index: 500;
    }
    &:after{
      content: "";
      display: inline-block;
      position: absolute;
      right: 130px;
      width: 0;
      height: 0;
      border-bottom: 800px solid rgba(250,250,250,0.5);
      border-left: 400px solid transparent;
      z-index: 500;
    }
  }
#login{
  min-width: 1100px;
  min-height: 600px;
  display: inline-block;
  position: fixed;
  top:50%;
  left: 50%;
  transform: translate(-50%,-40%);

  .box{
    background: url("../../static/img/login.jpg") no-repeat center center;
    background-size:100% 100%;
    border-right:1px solid #999;
    overflow: hidden;
    position: relative;

    .right{
      width: 50%;
      min-height: 400px;
      background: #fff;
      float: right;
      transform:skewX(-15deg);
      position: relative;
      left:100px;
      border:1px solid #666;
      &:after{
        content: "";
        display: inline-block;
        clear: both;
      }
      #form{
        position: absolute;
        transform: translateY(-55%);
        top:50%;
        padding-left: 10px;
        z-index: 999;
        >div{
            margin:15px 0;
            &.item{
              border-bottom: 1px solid #ccc;
            }
           i{
             display: inline-block;
             transform: skewX(15deg);

             &.icon-user:before{
                 content: '\e70c';
                 font-size: 1.5em;
                 height: 25px;
                 line-height: 25px;
               }
             &.icon-pass:before{
                 content: '\e607';
                 font-size: 1.5em;
                 height: 25px;
                 line-height: 25px;
             }
           }
          input{
            border:none;
            height: 25px;
            line-height: 25px;
            transform: skewX(15deg);
          }
          button{
            padding: 0.5em 4em;
            background: #169bd5;
            color: #fff;
            border: none;
            &:after{
                content: '登录';
                display: block;
                transform: skewX(15deg);
              }
          }
          .forget{
            font-size: 12px;
            color: #ccc;
            transform: skewX(15deg);
            float: right;

          }
          &:after{
            content: '';
            display: block;
            clear: both;
          }
        }
      }
    }
  }
}
</style>
