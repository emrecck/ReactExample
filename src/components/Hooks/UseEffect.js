import React, { useState } from "react";
import { useEffect } from "react";


// useEffect i kullanmanın üç farklı senaryosu mevcuttur. 
// 1. Sayfa ilk render edildiğinde çalışır.
//    Burada kullanım şu şekildedir;

function FirstScenerio(){

    useEffect(()=>{
        console.log("Ben bir defa sadece sayfa ilk render edildiğinde çalışırım.")
    },[])

    return(
        <>
        </>
    )
}

// 2. Sayfada tekrar render edilecek şeye bağlı olarak çalışır. 
// Nesne değiştiğinde useEffect çalışır. Aşağıdaki örnekte color değişkeni değiştiğinde useEffect çalışacaktır.
function SecondScenerio() {

    const [color, ToggleColor] = useState();

    useEffect(() => {
        console.log(color)
    }, [color])

    return (
        <>
            <div className={`w-full h-10`} style={{backgroundColor: color}}>
                <p className={`text-center text-${color === "blue" ? "yellow-500" : "blue-500"}`}> Rengim {color}</p>
            </div>

            <button type="button" onClick={() => {

                ToggleColor("blue")
            }}>Change div as blue</button>

            <button type="button" onClick={() => {

                ToggleColor("yellow")
            }}>Change div as yellow</button>
        </>
    );

}

// 3.Dom üzerinde bir şey değiştiğinde çalışır.
// Her değişimde çalışır.
const ThirdScenerio = () => {
    useEffect(()=>{
        console.log("Her dom güncellendğinde çalışırım.")
    })

    const [number, setNumber] = useState(0);

    function Increase() {
        setNumber(number+1)
    }
    function decrease() {
        setNumber(number-1)
    }
    return(
        <>
            <h1>The Number is {number}</h1>
            <button className="p-4 bg-slate-600 text-white shadow-lg" type="button" onClick={()=>{Increase()}}>Increse The Number</button>
            <br/>
            <button className="p-4 bg-slate-600 text-white shadow-lg" type="button" onClick={()=>{decrease()}}>Decrease The Number</button>
        </>
    )
}



export {FirstScenerio, SecondScenerio, ThirdScenerio}