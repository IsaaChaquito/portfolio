
let scrollY
window.addEventListener('scroll', function() {
  scrollY = window.pageYOffset;
  console.log(scrollY);
})

let title = document.getElementById('genesis')
// console.log(title.children[2].innerHTML)
// let elements = title.children.map(element => {
//   console.log(element.innerHTML)
// });

let elements = document.querySelectorAll("#genesis *");
for (let element of elements) {
  console.log(element);
}
