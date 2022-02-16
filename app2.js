function withFun(){
    const text = document.getElementById("text");
    text.innerText = "this is clicked";
}
document.getElementById("direct").addEventListener("click", function(){
    const text = document.getElementById("text");
    text.innerText = "this is clicked by direct"
})
document.getElementById("update").addEventListener('click', function(){
    const inputValue = document.getElementById("input-value");
    document.getElementById('text').innerText = inputValue.value;
    inputValue.value = "";
    
})
//-------------------------- comment part --------------------
document.getElementById("post-btn").addEventListener('click', function(){
    const commentBox = document.getElementById('comment-box');
    const p = document.createElement("p");
    p.innerText = commentBox.value;
    // 
    const commentContainer = document.getElementById("comment-container");
    commentContainer.appendChild(p);
    commentBox.value = "";
})