function cursorEffect(){
    var page1Content=document.querySelector("#page1-content");
var cursor=document.querySelector("#cursor");

// page1Content.addEventListener("mousemove",function(details){
//     // give details abt your event
//     //console.log(details.y) //mouse position of y axis in number

//     cursor.style.left=details.x+"px"
//     cursor.style.top=details.y+"px"


// })

page1Content.addEventListener("mousemove",function(details){
    gsap.to(cursor,{
        x:details.x,
        y:details.y
    })
})

page1Content.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        scale:1,
        opacity:1
    })
})

page1Content.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        scale:0,
        opacity:0
    })
})
}

//to call cursoreffect function
cursorEffect()