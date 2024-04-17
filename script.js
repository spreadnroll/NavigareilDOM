const html = document.documentElement

const body = html.children[1]

const ul = body.children[0]

const ulParent = ul.parentElement

console.log(ulParent)

const secondLi = ul.children[1]

console.log(secondLi)

const nextLiFromSecond = secondLi.nextElementSibling.innerText;

console.log(nextLiFromSecond)

const previousLiFromSecond = secondLi.previousElementSibling.innerText;

console.log(previousLiFromSecond)