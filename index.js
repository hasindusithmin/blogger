
const myfn = () => {
    document.querySelector('#header').className = "w3-text-blue"
    setTimeout(() => {
        document.querySelector('#header').className = ""
    }, 2500)
}