const observer = new IntersectionObserver((enteries) => {
    enteries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('in-view')
        } else{
            entry.target.classList.remove('in-view')
        }
    });
}, {rootMargin: '0px',
    threshold: [0, 0.1, 1],
})

const tags = document.querySelectorAll('h2, div, p')

tags.array.forEach((tag) => {
    observer.observe(tag)
});