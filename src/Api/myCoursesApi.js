    export const myCoursePromise=(email,accessToken)=>{
        return fetch(`http://localhost:3000/courses-find?email=${email}`,{
           headers:{
            authorization:`Bearer ${accessToken}`
           }
        })
        .then(res=>res.json())
    } 