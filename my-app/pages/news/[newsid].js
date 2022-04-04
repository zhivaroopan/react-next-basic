import { useRouter } from 'next/router'

function somethingimportant() {

  const router = useRouter()

  return (
    <h1>{router.query.newsid}</h1>
  )
}

export default somethingimportant