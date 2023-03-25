const fetchComments = async (id) => {
  // Que tarde 3 segundos en cargar los comentarios
  await new Promise(resolve => setTimeout(resolve, 3000))
  // throw new Error('Error al cargar los comentarios')
  // El no-store sirve para hacer un fetch de datos no estático
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, { cache: 'no-store' })
    .then(res => res.json())
}
export default async function Post({params }) {
  const { id } = params
  const comments = await fetchComments(id)
  return (
    <ul style={{ background: '#444', fontSize:'14px'}}>
      {comments.map(comment => (
        <li key={comment.id}>
          <h4>{comment.name}</h4>
          <small>{comment.body}</small>
        </li>
      ))}
    </ul>
  )
}