// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");



//**************add new links dinamically **********
navToggle.addEventListener("click", function () {
  // linksContainer.classList.toggle("show-links");

  const linksHeight = links.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
  // console.log(linksContainer.getBoundingClientRect());
});




const navbar = document.getElementById('nav');
const topLink = document.querySelector(".top-link");


// ********** dynamic fixed navbar ************
window.addEventListener('scroll', function() {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;

    if(scrollHeight > navHeight){
        navbar.classList.add("fixed-nav");
    }else{
        navbar.classList.remove("fixed-nav");
    }
    // to display top-link at 500 
    if(scrollHeight > 500){
        topLink.classList.add("show-link");
    }else{
        topLink.classList.remove("show-link");
    }
});

//****** smooth scrolling function *******
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        // prevent default behavior of callback function
        event.preventDefault(); 

        // navigate to specific spot dinamically
        const id = event.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);

        //caculate the height by get rid of the navbar height
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains("fixed-nav");
        let position = element.offsetTop - navHeight;

        if(!fixedNav){
            position = position - navHeight;
        }
        //callate position for small screen
        if(navHeight > 82){
            position = position + containerHeight;
        }

        window.scrollTo({
            left: 0,
            top: position,
        });
        // to close the nav bar whem navigated to the spot
        linksContainer.style.height = 0;
    });    
});    
