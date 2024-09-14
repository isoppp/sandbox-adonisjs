import { Head, Link } from '@inertiajs/react'

import { Layout } from '~/components/layout'

export default function Home(props: { version: number }) {
  return (
    <Layout>
      <Head title="Homepage" />

      <div className="container">
        <div className="title">Sample1 {props.version} x Inertia x React</div>

        <Link href="/sample2">Go to Sample2</Link>

        <span>
          Learn more about AdonisJS and Inertia.js by visiting the{' '}
          <a href="https://docs.adonisjs.com/guides/inertia">AdonisJS documentation</a>.
        </span>
      </div>
    </Layout>
  )
}
