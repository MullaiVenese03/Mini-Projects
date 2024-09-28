const containers = document.querySelector('.container')
const leftSlider = document.querySelector('.left-slider')
const rightSlider = document.querySelector('.right-slider')
const upbtn = document.querySelector('.up-button')
const downbtn = document.querySelector('.down-button')
const SliderLength = rightSlider.querySelectorAll('div').length

console.log(SliderLength);

let activeSliderIndex = 0

leftSlider.style.top = `-${(SliderLength - 1)*100}vh`

upbtn.addEventListener('click', ()=> changeSilde('up'))
downbtn.addEventListener('click', ()=> changeSilde('down'))

const changeSilde = (direction) => {
    const sliderHeight = containers.clientHeight
    if(direction === 'up'){
        activeSliderIndex++
        if(activeSliderIndex > SliderLength-1){
            activeSliderIndex = 0
        }
    } else if (direction === 'down') {
        activeSliderIndex--
        if(activeSliderIndex < 0) {
            activeSliderIndex = SliderLength-1
        }
    }


    rightSlider.style.transform = `translateY(-${activeSliderIndex * sliderHeight}px)`

    leftSlider.style.transform = `translateY(${activeSliderIndex * sliderHeight}px)`
}