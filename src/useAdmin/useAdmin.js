import { useEffect, useState } from "react"


const useAdmin = (email) =>{
    const [isAdmin , setIsAdmin] = useState(false)
    const [isAdminLoading, setIsAdminLaoding] = useState(true)
    useEffect(()=>{

        fetch(`http://localhost:5000/allusers/admin/${email}`)
        .then(res =>res.json())
        .then(data => {
            console.log(data)
            setIsAdmin(data.isAdmin)
            setIsAdminLaoding(false)
        })

    },[email])
    return [isAdmin, isAdminLoading]
}
export default useAdmin;