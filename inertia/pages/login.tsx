import { Head, router } from '@inertiajs/react'
import { useState } from 'react'
import { Layout } from '~/components/Layout'

export default function Home({}) {
  const [values, setValues] = useState({
    email: 'test@example.com',
    password: 'password',
  })

  function handleSubmit(e) {
    e.preventDefault()
    router.post('/sessions', values)
  }
  return (
    <Layout>
      <Head title="Homepage" />
      login
      <div>
        <form className="grid gap-4" onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Email" defaultValue="test@example.com" />
          <input type="password" name="password" placeholder="Password" defaultValue="password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </Layout>
  )
}
