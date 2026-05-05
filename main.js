// USING innterHTML
function checkage() {
    let age = document.getElementById("age").value;
    
    if (Number(age) >= 18) {
        document.getElementById("sagot").innerHTML = "Status: You are eligible to vote.";
    } else {
        document.getElementById("sagot").innerHTML = "Status: YOU'RE A MINOR !!";
    }
}