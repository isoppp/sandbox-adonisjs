import { Head } from '@inertiajs/react'
import { Layout } from '~/components/Layout'

export default function Home() {
  return (
    <Layout>
      <Head title="Homepage" />

      <div className="container">
        <div className="title">Samples/Index</div>
      </div>
    </Layout>
  )
}
