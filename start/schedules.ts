import db from '@adonisjs/lucid/services/db'
import cron from 'node-cron'

cron.schedule('* * * * *', async () => {
  const userCount = await db.query().from('users').count('id as total')
  console.log('running a task every minutes', userCount)
})
