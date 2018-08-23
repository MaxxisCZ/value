let pages = [
  'basic',
  'performance/list',
  'performance/details',
  'performance/product',
], compinents = [{
  meta : {
    requiresAuth : true,
    keepAlive:true
  },
  path : "/",
  component : resolve=>require(['../pages/basic' ], resolve)
}];

function init(page){
  compinents.push({
    meta : {
      requiresAuth : true,
      keepAlive:true
    },
    path : page,
    component : resolve=>require(['../pages/' + page], resolve)
  },{
    meta : {
      requiresAuth : true,
      keepAlive:true
    },
    path : page + '/*',
    component : resolve=>require(['../pages/' + page], resolve)
  })
}
for(let i in pages){
  init(pages[i]);
}

module.exports = compinents;
