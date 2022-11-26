const triggers = document.querySelectorAll("a");
const highlights = document.createElement("span");
highlights.classList.add("highlight");
document.body.append(highlights);

function highlightLink (){
    // console.log(this.getBoundingClientRect());
    const linkCords = this.getBoundingClientRect()
    const cords = {
        width : linkCords.width,
        height : linkCords.height,
        top : linkCords.top + window.scrollY,
        left : linkCords.left + window.screenX
    }
    highlights.style.width = `${cords.width}px`;
    highlights.style.height = `${cords.height}px`;

    highlights.style.transform = `translate(${cords.left}px, ${cords.top}px)`;
}
triggers.forEach(a=>{
    a.addEventListener("mouseenter", highlightLink)
})