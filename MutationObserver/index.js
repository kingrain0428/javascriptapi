/**
 * 
 */

const demo = document.getElementById('demo');
const span = document.querySelector('span');
const btn = document.getElementById('btn');
console.log(span)


btn.addEventListener('click', function () {
    // setTimeout(() => {
// 
    // }, 1000)
    // demo.removeChild(span);
    span.innerHTML = 'change text';
})



const config = {
    attributes: true,
    childList: true,
    subtree: true
}

const callback = (mutationsList, observer) => {
    console.log(document.body.contains(span));
    alert()
    // alert(123)
    console.log('mutationsList:' + mutationsList);
    console.log('observer:' + observer);
}

const observer = new MutationObserver(callback);
console.log(observer)
observer.observe(demo, config);

// observer.disconnect();