const demo = document.getElementById('demo');
const span = document.querySelector('span');
const btn = document.getElementById('btn');
console.log(span)


btn.addEventListener('click', function () {
    // setTimeout(() => {
// 
    // }, 1000)
    demo.removeChild(span);
    // demo.innerHTML = 'change text';
})



const config = {
    attributes: true,
    childList: true,
    subtree: true
}

const callback = (mutationsList, observer) => {
    // alert(123)
    console.log('mutationsList:' + mutationsList);
    console.log('observer:' + observer);
}

const observer = new MutationObserver(callback);
console.log(observer)
observer.observe(demo, config);

observer.disconnect();