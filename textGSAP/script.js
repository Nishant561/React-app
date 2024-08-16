document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');
    const spans = container.querySelectorAll('span');

    gsap.from('.a', {
        y: 150,
        
        duration: 1,
        
        stagger: 0.3
    });
    gsap.from('.b', {
        y: 150,
        
        duration: 1,
        
        stagger: -0.3
    });
});