var crsr = document.querySelector("#cursor")
var crsrblur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){    /* dets gives ---what is happening with the mouse as it moves**/
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y +"px"
    crsrblur.style.left = dets.x- 150 +"px"    /*the blur part's centre should be alligned with mouse pointer so 150 subtract*/ 
    crsrblur.style.top = dets.y- 150 +"px"

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
