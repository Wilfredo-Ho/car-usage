export const menu = [{
    path: '/',
    name: 'home',
    title: '主页'
  },
  {
    path: '/monitor',
    name: 'monitor',
    title: '车辆监控',
    children: [{
        path: '/global',
        name: 'global',
        title: '全局监控'
      },
      {
        path: '/real',
        name: 'real',
        title: '实时监控'
      },
      {
        path: '/history',
        name: 'history',
        title: '历史监控'
      }
    ]
  },
  {
    path: '/car',
    name: 'car',
    title: '车辆管理',
    children: [{
        path: '/info',
        name: 'info',
        title: '车辆管理'
      },
      {
        path: '/terminal',
        name: 'terminal',
        title: '终端管理'
      }
    ]
  },
  /* {
    path: '/emission',
    name: 'emission',
    title: '排放管理',
    children: [{
        path: '/monitor',
        name: 'monitor',
        title: '排放监控'
      },
      {
        path: '/runtime',
        name: 'runtime',
        title: '运行统计'
      },
      {
        path: '/excessive',
        name: 'excessive',
        title: '排放超标'
      },
      {
        path: '/statistics',
        name: 'statistics',
        title: '运行统计'
      },
      {
        path: '/offline',
        name: 'offline',
        title: '离线统计'
      }
    ]
  },
  {
    path: '/alarm',
    name: 'alarm',
    title: '故障告警',
    children: [{
      path: '/query',
      name: 'query',
      title: '告警查询'
    }]
  },
  {
    path: '/manage',
    name: 'manage',
    title: '业务管理',
    children: [{
        path: '/envir',
        name: 'envir',
        title: '行政部门管理'
      },
      {
        path: '/supplier',
        name: 'supplier',
        title: '供应商管理'
      },
      {
        path: '/repairer',
        name: 'repairer',
        title: '大户管理'
      },
      {
        path: '/user',
        name: 'user',
        title: '账户权限与角色管理'
      },
      {
        path: '/bulletin',
        name: 'bulletin',
        title: '公告管理'
      }
    ]
  } */
];

const menus = [];

const unfold = (arr, p_obj) => {
  arr.map((item) => {
    if (item.children && item.children.length > 0) {
      return unfold(item.children, {
        path: item.path,
        name: item.name
      })
    } else {
      menus.push({
        path: p_obj ? (p_obj.path + item.path) : item.path,
        name: p_obj ? (p_obj.name + '_' + item.name) : item.name,
        title: item.title
      });
    }
    return false;
  });
}

unfold(menu);

export const flatMenu = menus;