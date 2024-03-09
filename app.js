let area = document.getElementById('text');


function fun(){
    let s ="";
    s+=area.value;
    console.log(s);
    console.log(s.length);
    ans(s);
}
function ans(s){
    let charCount = s.length;
    let wordCount = 0;

    if (charCount > 0) { 
        let words = s.trim().split(/\s+/);
        wordCount = words.length;
    }
    
    document.querySelector(".c").innerHTML = `${wordCount} words and ${charCount} characters`;
}