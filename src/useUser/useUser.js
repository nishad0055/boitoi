import {  useEffect, useState } from "react"



const useUser = email =>{
    
    const [isUser, setIsUser] = useState(false)
    useEffect(()=>{
        fetch(`https://book-reselling-server.vercel.app/allusers/user/${email}`)
        .then(res => res.json())
        .then(data =>{
            setIsUser(data.isUser)
        })
    },[email])

    return [isUser]
}
export default useUser;