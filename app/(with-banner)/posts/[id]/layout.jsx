import Link from "next/link"
const fetchSinglePost = (id) => {
  // El no-store sirve para hacer un fetch de datos no estático
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { cache: 'no-store' })
    .then(res => res.json())
}
export default async function Post({children, params}) {
  const {id} = params
  const post = await fetchSinglePost(id)
  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link href={`/posts/${id}/comments`}>Ver comentarios</Link>
      {children}
    </article>
  )
}