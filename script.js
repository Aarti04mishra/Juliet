
var nav=document.querySelector("nav")
var logo=document.querySelector(".logo svg")
var lastScroll=0;
document.addEventListener("scroll",function(dets){
  
   var currentScroll=window.pageYOffset;
   console.log(currentScroll)
   if(currentScroll==0){
    nav.style.display="";
    nav.style.backgroundColor="transparent";
    nav.style.padding="3vw 2vw";
    logo.style.width="150px"
   }
   else if(currentScroll>lastScroll){
    nav.style.display="none"
    console.log("heloo")
   }
   else if(currentScroll<lastScroll){
    nav.style.display="";
    nav.style.backgroundColor="#F5F4F5";
    nav.style.padding="1vw 2vw";
    logo.style.width="90px"
  
   }

  lastScroll=currentScroll
})
var rose=document.querySelector(".hero-flower");
rose.addEventListener("mouseenter",function(){
    gsap.to(rose,{
        transform: `rotateY(180deg)`,
        repeat:1,
        yoyo:true,
        duration:1
    })
})
var text=document.querySelectorAll(".page1 h1")
text.forEach(function(elem){
    gsap.from(elem,{
        y:1000,
        duration:1,
        stagger:2
    })
})
// gsap.from(".crazy",{
//   scrollTrigger:{
//     scroller:"body",
//     trigger:".crazy",
//     markers:true,
//     start:"top 40%"
//   },
// })




var header=document.querySelectorAll(".header")
var container=document.querySelector(".container")
var liness=document.querySelector(".liness")

header.forEach(function(elem){
    ScrollTrigger.create({
        trigger: ".page6",
        start: "top 10%",
        // markers:true,
        end: "bottom bottom",
        onEnter: () => {
         document.body.style.backgroundColor = "#282829";
         elem.style.backgroundColor="black"
         elem.style.color="#F5F4F5";
         container.style.color="#F5F4F5";
         liness.style.borderTop=`1px solid #F5F4F5`;
         liness.style.borderRight=`1px solid #F5F4F5`
       },
        onLeaveBack: () => {
          document.body.style.backgroundColor = "#F5F4F5"; 
          elem.style.backgroundColor="#F5F4F5";
          elem.style.color="#282829";
          container.style.color="#282829";
          liness.style.borderTop=`1px solid #282829`;
          liness.style.borderRight=`1px solid #282829`
        }
      });
})


var tl4=gsap.timeline()
tl4.to(".scroller-div",{
  scrollTrigger:{
    scroller:"body",
    trigger:".scroller-div",
     start:"top 65%",
     end:"top 30%",
     scrub:1,
  },
  x:-2000,
  
});
tl4.to(".scrollingPage",{
  scrollTrigger:{
    scroller:"body",
    trigger:".page7",
    pin:".page7",
    start:"top top",
    end:"top -150%",
    scrub:.5,

  },
  x:"-100%"
})
var follow=document.querySelector(".follow");
follow.addEventListener("mouseenter",function(){
  gsap.to(".pic1",{
    x:"20%",
    y:"-100%"
  }),
  gsap.to(".pic2",{
    x:"-80%",
    y:"100%"
  }),
  gsap.to(".pic3",{
    x:"-30%",
    y:"-80%"
  }),
  gsap.to(".pic4",{
    x:"-40%",
    y:"120%"
  }),
  gsap.to(".pic5",{
    x:"100%",
    y:"-90%"
  }),
  gsap.to(".pic6",{
    y:"140%",
    x:"-80%"
  })
})
var arr=["bonjour","marhaba","Guten tag","ciao","what's up","hola","shalom"]
var masterTl=gsap.timeline({
  repeat:-1,
});
arr.forEach(function(word){
  let tl=gsap.timeline({repeat:1,yoyo:true});
  tl.to("#greet span",{duration:1,text:word,})
  masterTl.add(tl);
})