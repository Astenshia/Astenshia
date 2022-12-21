window.onload = function () {
    const nav = document.querySelector("nav");
    window.addEventListener("wheel", function (e) {
        // scroll down or up
        if(e.deltaY >= 0) {
            nav.classList.add("goingdown");
        } else {
            nav.classList.remove("goingdown");
        }

        // has scrolled down
        if(window.scrollY > 0) {
            nav.classList.add("scrollview");
        } else {
            nav.classList.remove("scrollview");
        }
    });
}