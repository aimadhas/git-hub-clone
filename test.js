// validate form
function valid(){
    let email = document.getElementById("name")
    let pass = document.getElementById("pass")
    let c = document.getElementById("one")
    if (email.value.length == 0 && pass.value.length == 0){
        c.style.display="block"
        c.style.cssText="display: flex; gap: 40px;"
        return false
    }
    if (email.value.length < 5 && pass.value.length < 6){
        c.style.display="block"
        c.style.cssText="display: flex; gap: 40px;"
        return false
    }
}
//close the windwo
let d = document.getElementById("marck")
let c = document.getElementById("one")
d.onclick = function(){
    c.style.display="none"

}