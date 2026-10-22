import { useMemo, useState } from "react";

const UseMemo=()=>{
    const[count,setCount]=useState(0);
    const [count2,setCount2]=useState(0)
    const addCount1=useMemo(()=>{
        console.log("usememo1.........")
         return count*count

    },[count])
     const addCount2=useMemo(()=>{
        console.log("usemem2.........")
        return count2*count2

    },[count2])

    return(
        <>
        hello{count} square={addCount1}
        count2-{count2} s={addCount2}
        <button onClick={()=>setCount(prev=>prev+1)}>count</button>
         <button onClick={()=>setCount2(prev=>prev+1)}>count2</button>
        </>
    )
}
export default UseMemo;