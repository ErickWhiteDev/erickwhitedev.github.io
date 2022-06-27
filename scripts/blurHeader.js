document.onscroll = () => {
    document.querySelector(".intro").style.filter = `blur(${window.scrollY / 75}px)`;
};
