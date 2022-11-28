import { useEffect, useState } from "react"


const useSeller = email =>{
    const [isSeller, setIsSeller] = useState(false)

    useEffect(()=>{

        fetch(`https://book-reselling-server.vercel.app/allsellers/seller/${email}`)
        .then(res => res.json())
        .then(data => {
            
            setIsSeller(data.isSeller)
        })

    }, [email])
    return [isSeller]
}
export default useSeller;