const topics = [
    "Science",
    "History",
    "Geography", 
    "TV and Movies", 
    "Maths", 
    "General Knowledge", 
    "Sports", 
    "Astronomy",
    "Music",
    "Literature"];

function getRandom(){
    document.getElementById('1').innerText = topics[Math.floor(Math.random() * topics.length)];
}
