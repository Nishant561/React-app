const box = document.querySelector(".box2 h1")

gsap.to(box,{
    transform:"translateX(-150%)",
    scrollTrigger:{
        markers:true,
        scroller:'body',
        trigger:'.box2',
        start:'top 0%',
        end:'top -130%',
        scrub:2,
        pin:true,
    }
})