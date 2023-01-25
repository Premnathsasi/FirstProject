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


function createpost(post, callback) {
    setTimeout(() => {
        posts.push({...post, createdAt: Date.now()});
        callback();
    },2000)
}

function create4thPost(post,callback) {
    setTimeout(() => {
        posts.push({...post,createdAt: Date.now()});
        callback();
    },5000)

}
getposts();
createpost({title:'Post Three', body:'This is post three'},getposts)
create4thPost({title:'Post Four',body:'This is post four'},getposts);