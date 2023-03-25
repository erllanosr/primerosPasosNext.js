import { LikeButton } from "./LikeButton"
import Link from "next/link"

const fetchPosts = () => {
  // El no-store sirve para hacer un fetch de datos no estático
  return fetch('https://jsonplaceholder.typicode.com/posts', {cache: 'no-store'})
    .then(res => res.json())
}
export async function ListOfPosts() {
  const posts = await fetchPosts()

  const handleClick = () => {
    alert('Click')
  }

  return (
    posts.slice(0, 5).map(posts => (
      // Enlace a páginas internas
      <article key={posts.id}>
        <Link href='/posts/[id]' as={`/posts/${posts.id}`}>
        <h2 style={{color: '#09f'}}>{posts.title}</h2>
        </Link>
        <p>{posts.body}</p>
        <LikeButton id={posts.id}></LikeButton>
      </article>
    ))
  )
}