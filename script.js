gsap.to("#page2 h1",{
    transform:"translateX(-150%)",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        markers:false,
        start:"top 0%",
        end:"top -150%",
        scrub:3,
        pin:true,
}

})
