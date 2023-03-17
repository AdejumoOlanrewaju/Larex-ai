import React, {useState, useEffect} from "react"
import Card from "../components/Card.jsx"
import Form from "../components/Form.jsx"
import Loader from "../components/Loader.jsx"
export default function Community (){
  const [loading, setLoading] = useState(false)
  const [allPosts, setAllPosts] = useState(null)
  const [searchText, setSearchText] = useState("")
  const [searchedResults, setSearchedResults] = useState(null)
  const [searchTimeout, setSearchTimeout] = useState(null)

  const RenderCards = ({data, title}) => {
    if (data?.length > 0){
      return (
        data.map(posts => (
          <Card key = {posts._id}
                {...posts}/>
        ))
      )
    }
    return (
      <h2 className = "result-title">{title}</h2>
    )
  }

    useEffect(() => {
      const fetchPost = async() => {
        setLoading(true)

        try{
            const response = await fetch("https://larex-ai.onrender.com/api/v1/posts", {
              method : "GET",
              headers : {
                "Content-Type" : "application/json"
              },
            })

            if(response.ok){
              const result = await response.json()
              setAllPosts(result.data.reverse())
            }
        }catch(err){
            alert(err)

        }finally{
          setLoading(false) 
        }
      }

      fetchPost()
  }, [])

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout)
    setSearchText(e.target.value)
    setSearchTimeout(
      setTimeout(() => {
        const searchResults = allPosts.filter((item) => {
         return item.name.toLowerCase().includes(searchText.toLowerCase()) || item.prompt.toLowerCase().includes(searchText.toLowerCase())
        })
        console.log(searchResults)
           setSearchedResults(searchResults)
      }, 500)
    )

  }
  return (
    <section className="community-section">
      <div>
        <h1 className="section-head">The community showcase</h1>
        <p className = "section-text">Browse through a collection of imaginative and visually appealing images generated by Larex.Ai with the Dall-E Model</p>
      </div>

      <div className = "form-container">
         <Form
         labelName = "search posts"
         type = "text"
         name = "text"
         placeholder = "Search Posts"
         value = {searchText}
         handleChange = {handleSearchChange}/>
      </div>

      <div className = "search-results-container">
        {loading ?
        (
         <Loader/>
        ) : (
          <>
            {searchText && (
              <div>
                <h2 className = "show-result">Showing results for <span className = "result-span">{searchText}</span></h2>
              </div>
               )}
              <div className = "card-container">
                {
                  searchText ? 
                  (
                    <RenderCards
                    data = {searchedResults}
                    title = "No search found"/>
                  )
                  :
                  (<RenderCards
                    data = {allPosts}
                    title = "No post found"
                    />)
                }
              </div>
            
          </>
           )}
  
      </div>
    </section>
  )
}