var crsr = document.querySelector("#cursor")

document.addEventListener("mousemove",function(dets){    /* dets gives ---what is happening with the mouse as it moves**/
    
})


gsap.to("#nav",{
    backgroundColor:"#000",
    duration:1,
    height: "100px",
    scrollTrigger:{
        trigger:"#nav",
        scroller: "body",
        // markers: true
        start: "top -11%",
        scrub: 2
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        markers: true,
        start: "top -25%",
        end:"top -70%",
        scrub:2
    }
})