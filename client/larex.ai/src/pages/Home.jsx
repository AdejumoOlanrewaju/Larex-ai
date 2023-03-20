import {Link} from "react-router-dom"
export default function Home(){
  return (
    <div className="home">
      <header className = "home-header">
        <div className = "home-header-text-container">
          <h1 className = "home-header-title">Create visually appealing and intriguing pictures with larex.ai</h1>
          <p className = "home-header-subtitle">Larex.ai uses openAi image generating model(dall-e) api to create amazing and visually appealing images based your prompts, click on the create button to generate yours.</p>
         <Link className = "home-header-cta" to = "/createPosts">Create</Link>
        </div>
        <div></div>
      </header>

      {/* <main className = "home-main">

      </main> */}
    </div>
  )
}