
import American from './Tags/American'
import English from './Tags/English'

const Home = () => {
  
  return (
    //should be 5 dif sections here and Posts should be conditionally rendered
    <div style={{display: "flex"}}>
      {/* <PostsList posts = {posts} /> */}
        <American />
        <English />

    </div>
  )
}

export default Home