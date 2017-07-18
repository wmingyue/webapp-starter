const routes = [
    {
        path: '/',
        name: 'home',
        component(resolve) {
            require.ensure(['../components/home/introduction.vue'], () => {
                resolve(require('../components/home/introduction.vue'));
            });
        }
    },
    {
        path: '/home/introduction',
        name: 'introduction',
        component(resolve) {
            require.ensure(['../components/home/introduction.vue'], () => {
                resolve(require('../components/home/introduction.vue'));
            });
        }
    },
    {
        path: '/template',
        name: 'templateIndex',
        component(resolve) {
            require.ensure(['../components/template/index.vue'], () => {
                resolve(require('../components/template/index.vue'));
            });
        }
    },
    {
        path: '/controller',
        name: 'controller',
        component(resolve) {
            require.ensure(['../components/controller/index.vue'], () => {
                resolve(require('../components/controller/index.vue'));
            });
        },
        children: [
            {
                path: 'list',
                name: 'controllerList',
                component(resolve) {
                    require.ensure(['../components/controller/list.vue'], () => {
                        resolve(require('../components/controller/list.vue'));
                    });
                },
                meta: { requireAuth: true }
            }
        ]
    }
];
export default routes;
