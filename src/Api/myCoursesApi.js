    export const myCoursePromise=(email,accessToken)=>{
        return fetch(`https://assignment-11-server-sigma-one.vercel.app/courses-find?email=${email}`,{
           headers:{
            authorization:`Bearer ${accessToken}`
           }
        })
        .then(res=>res.json())
    } 