let saveel = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increament()
{
    count = count + 1
    countEl.innerText = count
    
}

function save()
{
    let countStr = count + " - "
    saveel.textContent += countStr
    countEl.textContent = 0
    count = 0
}
