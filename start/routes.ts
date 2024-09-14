/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const SamplesController = () => import('#controllers/samples_controller')
import router from '@adonisjs/core/services/router'
router.on('/').renderInertia('home', { version: 6 })
router.on('/sample1').renderInertia('sample1', { version: 7 })
router.on('/sample2').renderInertia('sample2', { version: 8 })
router.resource('/samples', SamplesController)
