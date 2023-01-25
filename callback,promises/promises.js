const  posts = [
    { title: 'Post One',body: 'This is post one',createdAt: Date.now()},
    {title: 'Post Two',body: 'This is post two',createdAt: Date.now()}
];

let intervalId =0;
function getposts() {
    clearInterval(intervalId)
    intervalId= setInterval (() => {
        let output = '';
        posts.forEach((post) => {
            output+= `<li>${post.title} -created ${Math.floor((Date.now()-post.createdAt)/1000)} seconds ago </li>`;
        })
        document.body.innerHTML = output;
    },1000)
}



function createpost(post) {
    setTimeout(() => {
        posts.push({...post, createdAt: Date.now()});
    },2000)
}
    


function create4thPost(post) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            posts.push({...post,createdAt: Date.now()});
            const error = false;
    
            if(!error) {
                resolve();
            } else {
                reject('Error: Something went wrong')
            }
        },4000)
        })

}



function deletePost() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
        if(posts.length>0) {
            resolve(posts.pop());
        } else {
            reject("Inside catch block Array is empty now")
        }
            
        },1000)
    })
}

create4thPost({title:'Post Four',body:'This is post four'}).then(getposts).then(createpost({title:'Post Three', body:'This is post three'})).then(deletePost).then(deletePost).then(deletePost).then(deletePost).then(deletePost).then(deletePost).catch((err) => console.log(err))






