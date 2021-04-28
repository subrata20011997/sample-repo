function displayComment(){
    let comment = document.getElementById('comment').value;
    console.log(comment)
    document.getElementById('display').innerHTML = comment;
}