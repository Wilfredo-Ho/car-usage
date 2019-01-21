export const menu = [
    {
        path: '/',
        name: 'home',
        title: '主页'
    },
    {
        path: '/form',
        name: 'form',
        title: '表单功能',
        children: [
            {
                path: '/basic',
                name: 'basic',
                title: '基础表单'
            },
            {
                path: '/complex',
                name: 'complex',
                title: '综合表单'
            },
            {
              path: '/validate',
              name: 'validate',
              title: '表单验证'
            },
            {
              path: '/step',
              name: 'step',
              title: '分步表单'
            }
        ]
    },
    {
        path: '/list',
        name: 'list',
        title: '列表功能',
        children: [{
            path: '/regular',
            name: 'regular',
            title: '普通列表'
          },
          {
            path: '/rich',
            name: 'rich',
            title: '富文本列表'
          },
          {
            path: '/card',
            name: 'card',
            title: '卡片'
          }
        ]
    },
    {
        path: '/page',
        name: 'page',
        title: '页面管理',
        children: [{
            path: '/basic',
            name: 'basic',
            title: '基础页'
          },
          {
            path: '/404',
            name: '404',
            title: '404页'
          },
          {
            path: '/500',
            name: '500',
            title: '500页'
          }
        ]
    },
    {
        path: '/system',
        name: 'system',
        title: '系统管理',
        children: [
            {
              path: '/envir',
              name: 'envir',
              title: '企业管理'
            }, {
              path: '/data',
              name: 'data',
              title: '数据管理'
            }, {
              path: '/user',
              name: 'user',
              title: '人员管理'
            }, {
                path: '/bulletin',
                name: 'bulletin',
                title: '公告',
            }
        ]
    },
];

const menus = [];

const unfold = (arr, p_obj) => {
    arr.map((item) => {
        if(item.children && item.children.length > 0) {
            return unfold(item.children, { path: item.path, name: item.name })
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