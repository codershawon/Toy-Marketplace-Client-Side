import { useEffect } from "react"

const useTitle=title=>{
useEffect(()=>{
document.title=`${title}-SuperHero Toy Kingdom`
},[title])
}
export default useTitle