import React, { useState } from 'react';

const ReadMore = ({children }) => {
    const [iseReadMore, setReadMore] = useState(true)

     const toggleReadMore = () =>{
        setReadMore(!iseReadMore)
     }
    return (
        
           <div>
             { iseReadMore?  children.slice(0,150): children }
            <button  className='btn btn-ghost' onClick={toggleReadMore} > {
                iseReadMore? '..Read More': 'Show less'
            } </button>
           </div>
        
    );
};

export default ReadMore;