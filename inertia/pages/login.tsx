import { Head } from '@inertiajs/react'
import { Layout } from '~/components/Layout'

export default function Home({}) {
  return (
    <Layout>
      <Head title="Homepage" />
      login
      <div>
        <form method="post" action="/sessions" className="grid gap-4">
          <input type="email" name="email" placeholder="Email" defaultValue="test@example.com" />
          <input type="password" name="password" placeholder="Password" defaultValue="password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </Layout>
  )
}
