import { LoginSchema, loginValidator } from '#validators/login'
import { vineResolver } from '@hookform/resolvers/vine'
import { Head, router } from '@inertiajs/react'
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { Layout } from '~/components/Layout'

export default function Home({}) {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    resolver: vineResolver(loginValidator),
    defaultValues: {
      email: 'test@example.com',
      password: 'password',
    },
  })

  const onSubmit = useCallback((data: LoginSchema) => {
    router.post('/sessions', data)
  }, [])
  return (
    <Layout>
      <Head title="Homepage" />
      login
      <div>
        <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
          <input type="email" placeholder="Email" {...register('email')} />
          {errors.email && <div className="text-red-600">{errors.email.message}</div>}
          <input type="password" placeholder="Password" {...register('password')} />
          {errors.password && <div className="text-red-600">{errors.password.message}</div>}
          <button type="submit">Login</button>
        </form>
      </div>
    </Layout>
  )
}
