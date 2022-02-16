// getElementsByTagName
const tagsName = document.getElementsByTagName("h3");

// getElementsByTagName আমাদের HTMl Collection return করে। তাই
// এটার মধ্যে দিয়ে আমরা loop চালাতে পারি।

for(let tag of tagsName){
    tag.style.backgroundColor = "blue";
    tag.style.padding = "10px";
    tag.style.color = "white";
}
// getElementById
const blogThree = document.getElementById("blogThree");
blogThree.style.color = "blue";
blogThree.innerText = "Block three is changed by blog three";

// querySelector() , querySelectorAll()

// 
const getId = document.getElementById("blogs-one");
console.log(getId.childNodes);
// 
// how to create an element 
// step: 1
const li = document.createElement("li");
// step:2-- add content
li.innerText = "menu-5";
// এখন element কে add করতে হলে, তার parents কে নিয়া আসতে হবে।
const parent = document.getElementById("parentUl");
// এখন parents এর মধ্যে element কে append করতে হবে।
parent.appendChild(li);
// 
const article = document.createElement("article");
article.classList.add("blog");
const h3 = document.createElement("h3");
h3.innerText = "this is blog-5";
const p = document.createElement("p");
p.innerText = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere harum rerum perspiciatis rem. Provident dolores itaque officiis, vel porro quaerat!"
article.appendChild(h3);
article.appendChild(p);
// 
const section = document.getElementById("section-1");
section.appendChild(article);

// getElementsByClassName()
const blogClass = document.getElementsByClassName("blog");
// সেইম স্টাইল যদি আমরা একাধিক element or tag মধ্যে দিতে চাই, তাইলে getElementsByClassName() use করবো।
//getElementsByClassName HTMl Collection return করে। তাই এটার মধ্যে দিয়ে আমরা loop চালাতে পারি।
for(let blog of blogClass){
    blog.style.border = "2px solid red";
    blog.style.padding = "10px";
    blog.style.borderRadius = "10px";
    blog.style.margin = "10px";
}
// remove child
// at first parent কে নিয়া আসতে হবে।
const childParent = document.getElementById("parentUl");
// children use করলে html collection আমরা পাবো , যেটা array like obejct... so index numer দিয়ে , যাকে remove করতে চায় অকে select করবো।
const third= childParent.children[2];
// remove child
childParent.removeChild(third);