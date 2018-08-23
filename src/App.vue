<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style lang="less" rel="stylesheet/less">
  @import "assets/css/var";
  html {
    font-size: 100px;
    body {
      @font-face {font-family: "iconfont";
        src: url('./assets/font/iconfont.eot?t=1525341468298'); /* IE9*/
        src: url('./assets/font/iconfont.eot?t=1525341468298#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('./assets/font/iconfont.ttf?t=1525341468298') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
        url('./assets/font/iconfont.svg?t=1525341468298#iconfont') format('svg'); /* iOS 4.1- */
      }
      margin: 0;
      padding: 0;
      color: #333;
      background: #FFF;
      font-size: .15rem;
      line-height: 1.74;
      font-family: "Helvetica Neue", Helvetica, "Microsoft YaHei", "微软雅黑", "Microsoft JhengHei", "宋体", SimSun, Tahoma, Arial;
      * {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0); /*-webkit-appearance:none; -moz-appearance:none; appearance:none;*/
        -webkit-text-size-adjust: none;
        -moz-text-size-adjust: none;
        -webkit-touch-callout: none;
        -webkit-overflow-scrolling: touch;
        outline: none;
        margin: 0;
        padding: 0;
        box-sizing:border-box;
      }
      a {
        text-decoration: none;
        color: #000;
      }
      a, button, input[type='button'], input[type='reset'], input[type='submit'] {
        cursor: pointer;
      }
      a, p, label, div, h1, h2, h3, h4, h5, h6, i, table, tr, td, th, span, b, ul, li, ol, img, canvas {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
      article, aside, dialog, footer, header, section, footer, nav, figure, menu {
        display: block
      }
      img {
        vertical-align: middle;
        border: none;
      }
      s {
        display: inline-block;
        width: 0;
        vertical-align: bottom;
        overflow: hidden;
        padding-left: 1em;
        &.s1 {
          padding-left: .5em;
        }
        &.s2 {
          padding-left: 1em;
        }
        &.s3 {
          padding-left: 1.5em;
        }
        &.s4 {
          padding-left: 2em;
        }
        &.s5 {
          padding-left: 2.5em;
        }
      }

      .icon, *[class^='icon-'] {
        font-family: "iconfont" !important;
        font-size: inherit;
        font-style: normal;
        -webkit-text-stroke-width: 0.2px;
        vertical-align: middle;
      }

    }
  }
  ul, li {
    margin: 0;
    padding: 0;
    list-style: none;

  }
  a {
    text-decoration: none;
    color: #333;
  }
</style>
