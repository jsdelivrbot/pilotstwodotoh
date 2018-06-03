import Vue from 'vue'
import Router from 'vue-router'
import Editor from '@/components/Editor'
import Pilot from '@/components/Pilot'
import Ship from '@/components/Ship'
import Layout from '@/components/Layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/edit',
      name: 'Editor',
      component: Editor,
      children: [
        {
          path: "",
          name: "Pilot", 
          component: Pilot
        },
        {
          path: "pilot",
          name: "Pilot", 
          component: Pilot
        },
        {
          path: "ship",
          name: "Ship", 
          component: Ship
        },
        {
          path: "layout",
          name: 'Layout',
          component: Layout
        }
      ]
    }
  ]
})
