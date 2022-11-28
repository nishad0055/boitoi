import { useEffect, useState } from "react"


const useAdmin = (email) =>{
    const [isAdmin , setIsAdmin] = useState(false)
    const [isAdminLoading, setIsAdminLaoding] = useState(true)
    useEffect(()=>{

        fetch(`https://book-reselling-server.vercel.app/allusers/admin/${email}`)
        .then(res =>res.json())
        .then(data => {
           
            setIsAdmin(data.isAdmin)
            setIsAdminLaoding(false)
        })

    },[email])
    return [isAdmin, isAdminLoading]
}
export default useAdmin;