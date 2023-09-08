let btn=document.querySelector('#new-quote');
let quote=document.querySelector('.quote')
let person=document.querySelector('.person')

const quotes=[
    {
        quote:`"A friend is someone who knows all about you and still loves you."`,
        person:`Elbert Hubbard`},
    {
        quote: `"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that."`,
        person: `Martin Luther`},
    {
        quote: `"Live as if you were to die tomorrow. Learn as if you were to live forever."`,
        person: `Mahatma Gandhi`},
    {
        quote: `"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."`,
        person: `Ralph Waldo Emerson`},
    {
        quote: `"It is better to be hated for what you are than to be loved for what you are not."`,
        person: `Andre Gide`},
    {
        quote: `"Success is not how high you have climbed, but how you make a positive difference to the world."`,
        person: `Roy T. Bennett`},
    {
        quote: `"We are what we pretend to be, so we must be careful about what we pretend to be."`,
        person: `Kurt Vonnegut`},
    {
        quote: `"Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine."`,
        person: `Roy T. Bennett`},
    {
        quote: `"Hope is the thing with feathers That perches in the soul And sings the tune without the words And never stops at all."`,
        person: `Emily Dickinson`},
    {
        quote: `" Success is when your signature changes to Autograph."`,
        person: `A.P.J. Abdul Kalam`},
];

btn.addEventListener('click',function(){
    let random=Math.floor(Math.random()*quotes.length);

    quote.innerText=quotes[random].quote;
    person.innerText=quotes[random].person
})