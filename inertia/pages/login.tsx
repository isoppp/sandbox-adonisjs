import { Head } from '@inertiajs/react'
import { useEffect, useState } from 'react'
import { Layout } from '~/components/Layout'


export default function Home({}) {
  const [csrf, setCSRF] = useState('')
  useEffect(() => {
    const el = document.querySelector<HTMLInputElement>('#csrf_for_inertia')
    el && setCSRF(el.value)
  }, [])

  return (
    <Layout>
      <Head title="Homepage" />
      login
      <div>
        <form method="post" action="/sessions" className="grid gap-4">
          <input type="hidden" name="_csrf" value={csrf} />
          <input type="email" name="email" placeholder="Email" defaultValue="test@example.com" />
          <input type="password" name="password" placeholder="Password" defaultValue="password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </Layout>
  )
}
