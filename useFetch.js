import { useEffect, useRef, useState } from "react"

export const useFetch = (url) => {
    
    const isMounted = useRef(true);
    
    const [state, setState] = useState({data:null, loading:true, error:null});

    //Se va a lanzar solamente en la primera vez
    useEffect(() => {

        return ()=>{
            isMounted.current = false;
        }
    },[])


    useEffect(()=>{
        setState({data:null, loading:true, error:null});

        
        fetch(url)
        .then((response) => response.json())
        .then(data =>{
                    if(isMounted.current){
                        setState({
                            loading:false,
                            error:null,
                            data
                        });
                    }else{
                        console.log("El state no se cambió");
                    }
            })

    },[url])

    return state;
}
