const sliderPages = [
    {
        title: "Discover innovative ways to decorate",
        text: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
        desktopimg: '/assets/slider-desktop/desktop-image-hero-1.jpg',
        mobileimg: '/assets/slider-mobile/mobile-image-hero-1.jpg'
    },
    {
        title: 'We are available all across the globe',
        text: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
        desktopimg: '/assets/slider-desktop/desktop-image-hero-2.jpg',
        mobileimg: '/assets/slider-mobile/mobile-image-hero-2.jpg'
    },
    {
        title: 'Manufactured with the best materials',
        text: "  Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
        desktopimg: '/assets/slider-desktop/desktop-image-hero-3.jpg',
        mobileimg: '/assets/slider-mobile/mobile-image-hero-3.jpg'
    }
]

// Selectors
const sliderDesktopCtn = document.querySelector('.slider')
const sliderMobileCtn = document.querySelector('.slider-mobile')
const imagesDesktop = document.querySelectorAll('.slider img')
const btnLeft = document.querySelector('.arrow-left')
const btnRight = document.querySelector('.arrow-right')
const rightSectionDiv = document.querySelector('.top-section_right')
const rightSectionTitle = document.querySelector('#section-title')
const rightSectionText = document.querySelector('#section-text')
const textContentEl = document.querySelector('.top-section-content')
const hamburger = document.querySelector('.hamburger')
const close = document.querySelector('.close')
const nav = document.querySelector('nav')

let activeSlide = 0

sliderPages.forEach((page, idx) => {
    const imageDk = document.createElement('img')
    const imageMob = document.createElement('img')
    imageDk.classList.add('slider-img')
    imageMob.classList.add('slider-img')

    imageDk.src = page.desktopimg
    imageMob.src = page.mobileimg

    sliderDesktopCtn.appendChild(imageDk)
    sliderMobileCtn.appendChild(imageMob)
})

const changeSlide = () => {
    if (activeSlide > sliderPages.length-1) {
        activeSlide = 0
    } 
    if(activeSlide <0) {
        activeSlide = sliderPages.length-1
    }
    sliderDesktopCtn.style.transform = `translateX(-${activeSlide}00%)`
}

const changeTxt = (idx) => {
    rightSectionTitle.innerHTML = sliderPages[idx].title
    rightSectionText.innerHTML = sliderPages[idx].text
}

btnLeft.addEventListener('click', () => {
    activeSlide--
    changeSlide()
    changeTxt(activeSlide)
})

btnRight.addEventListener('click', () => {
    activeSlide++
    changeSlide()
    changeTxt(activeSlide)

})

hamburger.addEventListener('click', () => {
    nav.classList.add('show')
})

close.addEventListener('click', () => {
    nav.classList.remove('show')
    console.log("cloooosoe")
})


 