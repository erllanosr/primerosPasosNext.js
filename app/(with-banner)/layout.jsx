export default function PostsLayout({children}) {
  return (
    <div>
      <marquee style={{background: '#444', color: 'white'}}> Erick Llanos </marquee>
      {/* <h1>Este es el Layout de los posts.</h1>
      <small>Home &bull; Posts</small>
      <Counter></Counter>
      <p>El Layout engloba todo</p>
      <p>Mientras el Layout se mantenga, ya sea en subcarpetas. Siempre estará disponible.</p> */}
      {children}
    </div>
  )
}
