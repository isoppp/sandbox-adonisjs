import type { SharedProps } from '@adonisjs/inertia/types'
import { Link, usePage } from '@inertiajs/react'
import type { FC, ReactNode } from 'react'
import { useEffect } from 'react'

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const sharedProps = usePage<SharedProps>().props

  useEffect(() => {
    if (sharedProps.flashMessage) {
      alert(sharedProps.flashMessage.message)
    }
  })
  return (
    <div>
      <header className="flex items-center gap-5">
        <Link href="/">Home</Link>
        <Link href="/sample1">Sample1</Link>
        <Link href="/sample2">Sample2</Link>
        <Link href="/samples">Samples/Index</Link>
        <Link href="/login">login</Link>
        <Link href="/logout">logout</Link>
        <Link href="/authenticated">authenticated</Link>
      </header>

      <div>{children}</div>
    </div>
  )
}
