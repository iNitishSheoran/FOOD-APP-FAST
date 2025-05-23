import { useEffect, useState } from "react";


const useOnlineStatus = () => {

    const [onlineStatus] = useState();

    

    useEffect(() => {

        window.addEventListener("online", () => {
            
        })
    },[]);

    return onlineStatus;
}

export default useOnlineStatus;