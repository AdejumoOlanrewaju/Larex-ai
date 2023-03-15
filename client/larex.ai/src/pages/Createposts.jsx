import React, {useState} from "react"
import {useNavigate} from "react-router-dom"
import Loader from "../components/Loader"
import Form   from "../components/Form"
import { getRandomPrompts } from "../utils/getRandomPrompt"
import preview from "../assets/preview-svg.svg"
export default function Createposts (){
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name : "",
    prompt : "",
    photo : ""
  })
  const [generatingImg, setGeneratingImg] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleChange(e){
   setForm({...form, [e.target.name] : e.target.value})
  }

  function handleSupriseMe(){
      const randomPrompt = getRandomPrompts()
      setForm({...form, prompt : randomPrompt})
  }

  async function generateImg (){
      if(form.prompt){
        try{
            setGeneratingImg(true)
            const response = await fetch("http://localhost:8080/api/v1/larexai", {
              method : "POST",
              headers : {
                "Content-Type" : "application/json"
              },
              body : JSON.stringify({prompt : form.prompt})
            })

            const data = await response.json()
            setForm({...form, photo : `data:image/jpeg;base64, ${data.photo}`})
        }catch(err){
          alert(err)
        }finally{
          setGeneratingImg(false)

        }
      }else{
        alert("Please Enter a prompt")
      }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if(form.prompt && form.photo){
      setLoading(true)

      try{
          const response = await fetch("http://localhost:8080/api/v1/posts", {
            method : "POST",
            headers : {
              "Content-Type" : "application/json"
            },
            body : JSON.stringify(form)
          })

          await response.json()
          if(response.ok){
            navigate('/')
          }
          console.log(form)
          console.log(response)
      }catch(error){
        alert(error)

      }finally{
        setLoading(false)
      }
    }else{
      alert("please enter a prompt and generate an image")
    }
  }
  return (
    <section className = "post-section">
      <div>
      <h1 className="section-head">Create</h1>
        <p className = "section-text">Create imaginative and visually appealing images generated by Larex AI with the Dall-E Model</p>
      </div>

      <form className = "create-post-form" >
          <div className = "form-container">
             <Form
               LabelName = "Your name"
               type = "text"
               name = "name"
               placeholder = "John Doe"
               value = {form.name}
               handleChange = {handleChange}

             />

              <Form
               LabelName = "Prompt"
               type = "text"
               name = "prompt"
               placeholder = "Portrait of a Siamese cat wearing a robe."
               value = {form.prompt}
               handleChange = {handleChange}
               isSupriseMe
               handleSupriseMe = {handleSupriseMe}
               
             />

            <div className = "img-generated-container">
                {form.photo ? (
                  <img src = {form.photo}
                       alt = {form.prompt}
                       className = "img-generated"
                  />
                ) : (
                  <img
                    src = {preview}
                    alt = "preview"
                    className = "preview"/>
                )}
                {generatingImg && (
              <div className = "loading-img">
                <Loader/>
              </div>
             )}
            </div>
          </div>

          <div className = "submit-btn-container">
             <button
               type = "button"
               className = "submit-btn"
               onClick = {generateImg}
             >{generatingImg ? "Generating..." : "Generate"}</button>
          </div>

          <div className = "share-container">
            <p className = "share-text">Once you have generated the image, you can share it with others if you like.</p>
            <button type = "submit"
                      onClick = {handleSubmit} 
                    className = "share-btn">{
                      loading ? "Sharing" : "Share with the community"
                    }</button>
          </div>
      </form>
    </section>
  )
}