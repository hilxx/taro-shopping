export const routers = [
  {
    pagePath: 'pages/index/index',
    text: '首页',
    iconPath: './assets/images/nav/gaishuai.png',
    selectedIconPath: './assets/images/nav/gaishuai.png',
  }, {
    pagePath: 'pages/category/index',
    text: '分类',
    iconPath: './assets/images/nav/fenlei.png',
    selectedIconPath: './assets/images/nav/fenlei.png',
  }, {
    pagePath: 'pages/shopCard/index',
    text: '购物车',
    iconPath: './assets/images/nav/gouwuche.png',
    selectedIconPath: './assets/images/nav/gouwuche.png',
  }, {
    pagePath: 'pages/mine/index',
    text: '我的',
    iconPath: './assets/images/nav/wode.png',
    selectedIconPath: './assets/images/nav/wode.png',
  },
]

export default {
  pages: routers.map(route => route.pagePath),
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: "#6e6d6b",
    borderStyle: "white",
    backgroundColor: "#fff",
    list: routers
  },
}



