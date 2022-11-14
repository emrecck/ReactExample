import React, { useRef } from "react";

const Graph = () => {

    const itemsRef = useRef([])

    return (
        <>
            {[1,2,3,4,5,6,7,8,9,10].map((item, index) => {
                return(
                    // multiple useRef using
                        <div key={index} ref={el=>itemsRef.current[index]=el} style={{width: `${(index+1)*100}px`, height: "20px", background: "purple"}}>
                            
                        </div>
                )
            })}
        </>
    )

}

export default Graph