// console.log("Person1: shows Ticket");
// console.log("Person2: shows Ticket");

// const preMovie = async () => {

//     const promiseWifeBringTickets = new Promise((resolve,reject) => {
//         setTimeout(() => resolve('ticket'),3000);
//     });

//     const getPopcorn = new Promise((resolve,reject) => resolve('popcorn'));
//     const addButter = new Promise((resolve,reject) => resolve(`butter`));
//     const  getColdDrinks = new Promise((resolve,reject) => resolve(`coldDrinks`));

//     let ticket = await promiseWifeBringTickets;
//     console.log(`wife: I have the ${ticket}`);
//     console.log('husband: we should go in');
//     console.log('wife: no I am hungry');

//     let popcorn = await getPopcorn;
//     console.log(`husband: I got some ${popcorn}`);
//     console.log('husband: we should go in');
//     console.log('wife: I need butter on my popcorn');

//     let butter = await addButter;
//     console.log(`husband: I got some ${butter} on my popcorn`);
//     console.log('husband: anything else');
//     console.log('wife: lets go we are getting late');
//     console.log('husband: thank you for the reminder');

//     let coldDrinks = await getColdDrinks;
//     console.log(`wife: wait a sec I need ${coldDrinks}`);
//     console.log('husband: here you go');
//     console.log('husband: Anythng else');
//     console.log('wife: we are getting late, lets go')

//     return ticket;
// }

// preMovie().then((m) => console.log(`Person3: shows ${m}`));

// console.log("Person4: shows Ticket");
// console.log("Person5: shows Ticket")


const  posts = [
    { title: 'Post One',body: 'This is post one',createdAt: Date.now()},
    {title: 'Post Two',body: 'This is post two',createdAt: Date.now()}
];

let intervalId =0;
function getposts() {
    return new Promise((res,rej) => {
        
    clearInterval(intervalId)
    intervalId= setInterval (() => {
        let output = '';
        posts.forEach((post) => {
            output+= `<li>${post.title} -created ${Math.floor((Date.now()-post.createdAt)/1000)} seconds ago </li>`;
        })
        document.body.innerHTML = output;
    },1000)
    })
}



function createpost(post) {
    return new Promise((res,rej) => {
        
    setTimeout(() => {
       res(posts.push({...post, createdAt: Date.now()}));
    },2000)
    })
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


async function fun() {
   try { const getpost = getposts();
    const createPost = createpost({ title: 'Post three', body: 'This is post four' });
    const fourPost = await create4thPost({title:'Post Four',body:'This is post four'});
    const delPost = await deletePost();
    const delPost1 = await deletePost();
    const delPost2 = await deletePost();
    const delPost3 = await deletePost();
    const delPost4 = await deletePost().catch((err) => console.log(err));
   } catch{
    (err) => console.log('Error: Something went wrong')}


}

fun();







