/* fixed header start*/
(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (header&&window.pageYOffset > 50) {
            header.classList.add('hide');
        } else if (header){
            header.classList.remove('hide');
        }
    };
  }());
/* fixed header end*/
/* scrolling start */
  const scrolling = (upSelector) => {
    const upElem = document.querySelector(upSelector);

    let links = document.querySelectorAll('[href^="#"]'),
        speed = 0.6;
    
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            let widthTop = document.documentElement.scrollTop,
                hash = this.hash,
                toBlock = document.querySelector(hash).getBoundingClientRect().top,
                start = null;

            requestAnimationFrame(step);

            function step(time) {
                if (start === null) {
                    start = time;
                }

                let progress = time - start,
                    r = (toBlock < 0 ? Math.max(widthTop - progress/speed, widthTop + toBlock) : Math.min(widthTop + progress/speed, widthTop + toBlock));

                    document.documentElement.scrollTo(0, r);

                if (r != widthTop + toBlock) {
                    requestAnimationFrame(step);
                } else {
                    location.hash = hash;
                }
            }
        });
    });
};scrolling();
/* scrolling end */


const headerUl = document.querySelector('.header_ul');
const under = document.querySelector('.under_nav');
const contai = document.getElementById('cont');

const burger = (menuSelector, burgerSelector) => {
    const menuElem = document.querySelector(menuSelector),
          burgerElem = document.querySelector(burgerSelector);
          

    if(burgerElem.style.display == 'block'){
        under.append(headerUl);
    }else{
        contai.append(headerUl);
    }

    menuElem.style.display = 'none';

    burgerElem.addEventListener('click', () => {
        if (menuElem.style.display == "none") {
            burgerElem.classList.add('active');
            menuElem.style.display = 'block';
        } else {
            menuElem.style.display = 'none';
            burgerElem.classList.remove('active');
        }
    });
};
burger('.under_nav', '.menu__icon');

const more = document.querySelector('.more');
const portActive = document.getElementsByName('.port_active');
const moreWrap = document.querySelector('.more_wrap');
 
// more.addEventListener('click', () =>{
//   /*   portActive.forEach(item => {
//         item.style.display = 'block';
//         alert("port");
//     }); */
//     portActive.style.display = 'block';
//     moreWrap.style.display = 'none';
// });

