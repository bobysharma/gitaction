import { useCallback, useState } from "react";

const UseCallback=()=>{
    const[count,setCount]=useState(0);
    const addCount=useCallback(()=>{
        console.log("callback")
        setCount((prev)=>prev+1);
    },[])
    return(
        <>
        hello{count}
        <button onClick={addCount}>count</button>
        </>
    )
}
export default UseCallback;