    export const myCoursePromise=(email)=>{
        return fetch(`http://localhost:3000/courses-find?email=${email}`,{
           
        })
        .then(res=>res.json())
    } 