class WebNavbar{
    constructor(webMenu, navList, navLinks) {
       this.webMenu = document.querySelector(webMenu);
       this.navList = document.querySelector(navList);
       this.navLinks = document.querySelectorAll(navLinks);
       this.activeClass = "active";

       this.handleClick = this.handleClick.bind(this);

    }

    animateLinks() {
        console.log(this.navLinks);
        this.navLinks.forEach((link, index) => {
            link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `navLinkFade 0.5s ease forwards ${
                index / 7 + 0.3
              }s`);
        });
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.webMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }
    
    addClickEvent(){
        this.webMenu.addEventListener("click", this.handleClick);
    }


    init() {
    if(this.webMenu){

        this.addClickEvent();
    }
    return this;
    }   
}
const webNavbar = new WebNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
    );
webNavbar.init();