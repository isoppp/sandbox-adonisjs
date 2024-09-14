import { Link } from '@inertiajs/react'
import { FC, ReactNode } from 'react'

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <header className="flex items-center gap-5">
        <Link href="/">Home</Link>
        <Link href="/sample1">Sample1</Link>
        <Link href="/sample2">Sample2</Link>
        <Link href="/samples">Samples/Index</Link>
      </header>

      <div>{children}</div>
    </div>
  )
}
