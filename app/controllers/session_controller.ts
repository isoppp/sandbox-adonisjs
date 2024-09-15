import type { HttpContext } from '@adonisjs/core/http'

import User from '#models/user'

export default class SessionController {
  async store({ request, auth, response, session }: HttpContext) {
    try {
      /**
       * Step 1: Get credentials from the request body
       */
      const { email, password } = request.only(['email', 'password'])

      /**
       * Step 2: Verify credentials
       */
      const user = await User.verifyCredentials(email, password)

      /**
       * Step 3: Login user
       */
      await auth.use('web').login(user)
    } catch (e) {
      session.flash('flashMessage', {
        type: 'error',
        message: 'Failed to login. Please check your credentials and try again.',
      })
      throw e
    }

    /**
     * Step 4: Send them to a protected route
     */
    response.redirect('/authenticated')
  }
}
