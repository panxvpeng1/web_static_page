const glide = new Glide(".glide");
const captionsEl = document.querySelectorAll('.slide-caption');

glide.on(["mount.after","run.after"],()=>{
    const caption = captionsEl[glide.index];
    anime({
        targets:caption.children,
        opacity:[0,1],
        duration:400,
        easing:"linear",
        delay:anime.stagger(400,{start:300}),
        translateY:[anime.stagger([40,10]),0]
    });
});

glide.on("run.before",()=>{
    document.querySelectorAll(".slide-caption > *").forEach(el =>{
        el.style.opacity = 0;
    });
});

glide.mount();


const isotope = new Isotope(".cases",{
    layoutMode:"fitRows",
    itemSelector:".case-item"
})

const filterBtns = document.querySelector(".filter-btns");

filterBtns.addEventListener("click", e => {
    let {target} = e;
    const filterOption = target.getAttribute("data-filter");
    if(filterOption){
        document
            .querySelectorAll(".filter-btn.active")
            .forEach(btn=>btn.classList.remove("active"));
        target.classList.add("active");
        isotope.arrange({filter:filterOption});

    }
})

// 滑动悬浮header
const headerEl = document.querySelector("header");
window.addEventListener("scroll",()=>{
    var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    if(scrollTop>500){
        headerEl.classList.add('sticky')
        let burgershow = document.querySelector(".burger i");
        burgershow.style.color = "#000"
        
    }else{
        let burgershow = document.querySelector(".burger i");
        burgershow.style.color = "#fff"
        headerEl.classList.remove('sticky')
    };
})

let burgerShow = document.querySelector(".burger");
let nav = document.querySelector("nav");
let navIsShow = true;
burgerShow.addEventListener("click" ,()=>{
    if(navIsShow){
        nav.style.display = 'grid';
        navIsShow = false;
        console.log('2')
    }else{
        nav.style.display = 'none'
        navIsShow = true;
        console.log('3')
    }
})

//返回顶部按钮
const toTop = document.querySelector(".scrollToTop a");
window.addEventListener("scroll",()=>{
    var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    if(scrollTop>2000){
        toTop.style.display="flex"
    }else{
        toTop.style.display="none"
    }
})

//过度动过
const staggeringOptions = {
    delay:300,
    distance:"50px",
    duration:500,
    easing:"ease-in-out",
    origin:"bottom"
}

ScrollReveal().reveal(".feature",{...staggeringOptions,interval:200});
ScrollReveal().reveal(".service-item",{...staggeringOptions,interval:200});


ScrollReveal().reveal(".data-section",{
    beforeReveal:() => {
        anime({
            targets:".data-price .num",
            innerHTML:el => {
                return [0,el.innerHTML];
            },
            duration:2000,
            round:1,
            easing:"easeInExpo"
        });
    }
});

const dataSectionEl = document.querySelector(".data-section");
window.addEventListener("scroll",() => {
    const bottom = dataSectionEl.getBoundingClientRect().bottom;
    const top = dataSectionEl.getBoundingClientRect().top;
    if(bottom >= 0 && top <= window.innerHeight) {
        dataSectionEl.style.backgroundPositionY = (top-938)/6+'px';
    }
})


// a锚点
const scroll = new SmoothScroll('nav a[href*="#"],.scrollToTop a[href*="#"]',{
    header:"header",
    
})