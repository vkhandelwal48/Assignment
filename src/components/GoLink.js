import React, { useEffect } from 'react';
import { useHistory,useParams } from 'react-router';
import { db } from './Firebase';

function GoLink(){
    const {code}=useParams();
    const history=useHistory();
    const [url,setUrl]=useState("")

    useEffect(()=>{
        let query=db.collections("urls").where("code","==",code)
        query.onSnapshot((data)=>{
            if(data.empty){
                return history.push("/");
            }
            let finalData=data.docs[0].data();
            setUrl(finalData.url);
        });
    },[])
    return <div>{url}</div>
}

export default GoLink;