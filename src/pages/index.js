import Head from 'next/head'
import { Inter } from 'next/font/google'
import TodoList from '@/components/Todo/TodoList'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Aplicatie Todo</title>
        <meta name="description" content="Aplicatie todo facută cu React Js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <div className='todo-app'>
        <TodoList />
      </div>
    </>
  )
}
