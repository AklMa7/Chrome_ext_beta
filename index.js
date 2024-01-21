

let myLeads=[]

const inputBtn = document.getElementById("input-btn")
const showBtn = document.getElementById("show-btn")
const clearBtn = document.getElementById("clear-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-l")




function clearHistory() {
    localStorage.clear();
    location.reload();
}

clearBtn.addEventListener("click", function () {
    clearHistory()
    location.reload()
})




function showHistory(){
    let leadFromLocalStorage
    leadFromLocalStorage = localStorage.getItem("myLeads1")
    
    if ( myLeads === null) {
        myLeads=[]
    }else{
        leadFromLocalStorage = JSON.parse(leadFromLocalStorage)
        myLeads = leadFromLocalStorage
    }
    renderLeads()
}
showBtn.addEventListener("click", function(){
    showHistory()
   
})





inputBtn.addEventListener("click", function () {
    showHistory()
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads1", JSON.stringify(myLeads))
    // myLeads = JSON.parse(myLeads)
    renderLeads()
    
})


inputEl.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        showHistory()
        myLeads.push(inputEl.value)
        inputEl.value = ""
        localStorage.setItem("myLeads1", JSON.stringify(myLeads))
        // myLeads = JSON.parse(myLeads)
        renderLeads()
          
    }
}) 


function renderLeads() {
    
    let listItems = ''
    for ( let i = 0 ; i < myLeads.length ; i++) {
        listItems +=
        `
        <li>
            <a target='_blank' href='${myLeads[i]}'>
                ${myLeads[i]}
            </a>
        </li>
        `
        // const li = document.createElement("li")
        // li.textContent = myLeads[i]
        // ulEl.append(li)
    }
    ulEl.innerHTML = listItems

}

//renderLeads()


