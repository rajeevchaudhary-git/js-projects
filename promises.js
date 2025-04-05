 function  apicalling(){
    const response1 = new Promise((resolve, reject) => {
       const api = fetch('https://jsonplaceholder.typicode.com/posts');
       if(api) {
        // console.log('API is working');
        resolve(api);
       }
       else {
        reject('Error fetching data');
       }
    },
);
response1.then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data[0].title);
}).catch((err)=>{
    console.error
})
response1.finally(()=>{
    console.log('API call completed');
})
}

// apicalling();

const apicalling2ForPromiseUnderstanding = () => {
    const response = new Promise((resolve,reject)=>{
        let shouldResolve = true;
        if(!shouldResolve){
            reject('Promise is rejected');
        }
        else{
            resolve(fetch('https://jsonplaceholder.typicode.com/posts'));
        }
    });
    response.then((response)=>{
        return response.json();
    }
    ).then((data)=>{
        console.log(data[0].title);
    }).catch((err)=>{
        console.error(err);
    })
    .finally(()=>{
        console.log('API call completed');
    })
}

apicalling2ForPromiseUnderstanding();