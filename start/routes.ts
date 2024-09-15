/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const SamplesController = () => import('#controllers/samples_controller')
const SessionController = () => import('#controllers/session_controller')
import router from '@adonisjs/core/services/router'

import { middleware } from '#start/kernel'
router.on('/').renderInertia('home', { version: 6 })
router.on('/sample1').renderInertia('sample1', { version: 7 })
router.on('/sample2').renderInertia('sample2', { version: 8 })

// w/controller
router.resource('/samples', SamplesController)

// auth
router.resource('/sessions', SessionController).only(['store'])
router
  .get('/login', async ({ inertia, response }) => {
    return inertia.render('login')
  })
  .use(middleware.guest())
router
  .get('/authenticated', async ({ inertia }) => {
    return inertia.render('authenticated')
  })
  .use(middleware.auth())
router
  .get('logout', async ({ auth, response }) => {
    await auth.use('web').logout()
    return response.redirect('/login')
  })
  .use(middleware.auth())
