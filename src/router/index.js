import { createRouter, createWebHistory } from 'vue-router'
import { getAccessTokenPayload, isValidUser } from '../lib/cognitoHelpers'

const routes = [
  {
    path: '/',
    redirect: { name: 'Login' },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/dashboard',
    name: 'DashboardMain',
    meta: { requiresAuth: true },
    component: () => import('../views/dashboard/DashboardMain.vue'),
    redirect: { name: 'Dashboard' },
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: () => import('../views/dashboard/Dashboard.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/errors/NotFound.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const notAuthorized = () => {
  /* Notify.create({
    message: 'This user is not authorized to access this application',
    color: 'brand-red-te',
    icon: 'report_problem',
    position: 'top',
    timeout: 5000,
  }) */
  // return AuthStore.logout()
}

router.beforeEach(async (to, _from, next) => {
  window.scrollTo(0, 0)
  const accessTokenPayload = await getAccessTokenPayload()
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (accessTokenPayload) {
      if (!isValidUser(accessTokenPayload)) {
        // return notAuthorized()
        return next({ name: 'Login' })
      }
    } else {
      return next({ name: 'Login' })
    }
  }
  next()
})

export default router
