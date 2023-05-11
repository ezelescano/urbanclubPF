import {useEffect} from "react"

const Success = () => {  
    useEffect(()=>{
        setTimeout(()=> {
            window.close();
        }, 1000)
    },[])

    return (
      <div>You are logged in</div>
    );
  };
  
  export default Success;