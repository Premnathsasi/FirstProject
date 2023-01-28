console.log("Person1: shows Ticket");
console.log("Person2: shows Ticket");

const preMovie = async () => {

    const promiseWifeBringTickets = new Promise((resolve,reject) => {
        setTimeout(() => resolve('ticket'),3000);
    });

    const getPopcorn = new Promise((resolve,reject) => resolve('popcorn'));
    const addButter = new Promise((resolve,reject) => resolve(`butter`));
    const  getColdDrinks = new Promise((resolve,reject) => resolve(`coldDrinks`));

    let ticket = await promiseWifeBringTickets;
    console.log(`wife: I have the ${ticket}`);
    console.log('husband: we should go in');
    console.log('wife: no I am hungry');

    let popcorn = await getPopcorn;
    console.log(`husband: I got some ${popcorn}`);
    console.log('husband: we should go in');
    console.log('wife: I need butter on my popcorn');

    let butter = await addButter;
    console.log(`husband: I got some ${butter} on my popcorn`);
    console.log('husband: anything else');
    console.log('wife: lets go we are getting late');
    console.log('husband: thank you for the reminder');

    let coldDrinks = await getColdDrinks;
    console.log(`wife: wait a sec I need ${coldDrinks}`);
    console.log('husband: here you go');
    console.log('husband: Anythng else');
    console.log('wife: we are getting late, lets go')

    return ticket;
}

preMovie().then((m) => console.log(`Person3: shows ${m}`));

console.log("Person4: shows Ticket");
console.log("Person5: shows Ticket")




