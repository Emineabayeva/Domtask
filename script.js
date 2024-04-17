const inp = document.getElementById("inp")
const add = document.getElementById("add")
const list = document.getElementById("list")
    add.addEventListener("click",(e) => {
        if(inp.value.trim()!==""){

        
        let newLi = document.createElement("li")
        newLi.innerHTML = inp.value
        list.appendChild(newLi)
        inp.value = " "
    
        let newButton1 = document.createElement("button")
        newButton1.innerHTML = "x"
        newLi.appendChild(newButton1)
        newButton1.addEventListener("click",(e) =>{
        e.target.parentElement.style.display="none";
        })
    } else{
        alert("bos daxil edilib")
    }
    })
