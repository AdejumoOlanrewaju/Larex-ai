import suprisePrompts from "../Supriseme"

export function getRandomPrompts(prompts){
  const randomIndex = Math.floor(Math.random() * suprisePrompts.length)
  const randomPrompts = suprisePrompts[randomIndex]
  if (randomPrompts === prompts){
    return getRandomPrompts(prompt)
  }
  return randomPrompts
}
