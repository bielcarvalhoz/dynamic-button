document.querySelector("#btn-save").addEventListener("click", (e) => {
    const button = e.currentTarget
    button.classList.add("loading-button--loading")

    setTimeout(() => {
        button.classList.remove("loading-button--loading")
    }, 1500)
})