// let user=" MOHAMED SAMEH "
// console.log(user)
// console.log(user.charAt(2))
// console.log(user.charAt(5))
// console.log(user.length)
// console.log(user.trim().length)
// console.log(user.trim().length)
// console.log(user.replace("MOHAMED","ABDALLAH"))
// console.log(user.replace("MOHAMED","ABDALLAH").repeat(5))
// console.log(user.replace("MOHAMED","ABDALLAH").repeat(5).toLowerCase())
// console.log(user.startsWith("M"))
// console.log(user.trim().startsWith("M"))
// console.log(user.toLowerCase().replace("mohamed","abdallah"))
// // slice&substring
// console.log(user.slice(0,9))
// console.log(user.slice(9,15))
// console.log(user.slice(-14,-7))
// console.log(user.substring(10,15))
// console.log(user.substring(15,10))
// startTask
let task_1=" Welcome To Our Web "
console.log(task_1.trim().length)
console.log(task_1)
console.log(task_1.slice(-4).repeat(3).toUpperCase())
console.log(task_1.slice(-8,-5).toLowerCase())
console.log(task_1.slice(1,8),task_1.slice(-4,-1))


let task_2= 100
console.log(task_2.toString()[0])
console.log(task_2.toString().length)
// EndTask

// DOM
let btn=document.getElementById("btn")
let img=document.getElementById("img")
let info=document.getElementById("info")
console.log(info)

btn.onclick=function () {
    btn.style.padding=("20px")
    btn.style.background=("green")
    btn.style.color=("white")
    img.src='OIP (1).webp'
    info.textContent=("welcome in js")
    info.style.background=("red")
    info.style.color=("white")
    info.style.padding=("20px")
}

