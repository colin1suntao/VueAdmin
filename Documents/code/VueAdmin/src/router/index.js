import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/common/Home';
import Readme from '@/components/pages/Readme';
import BaseTable from '@/components/pages/BaseTable';
import BaseForm from '@/components/pages/BaseForm';
import BaseCharts from '@/components/pages/BaseCharts';
import VueEditor from '@/components/pages/VueEditor';
import Markdown from '@/components/pages/Markdown';
import Upload from '@/components/pages/Upload';
import login from '@/components/pages/login';


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/home',
      component: Home,
      children:[
        {
          path: '/readme',
          component: Readme
        },
        {
          path: '/basetable',
          component: BaseTable
        },
        {
          path: '/baseform',
          component: BaseForm
        },
        {
          path: '/basecharts',
          component: BaseCharts
        },
        {
          path: '/vueeditor',
          component: VueEditor
        },
        {
          path: '/markdown',
          component: Markdown
        },
        {
          path: '/upload',
          component: Upload
        }
      ]
    },
    {
      path: '/login',
      component: login
    }
  ]
})
