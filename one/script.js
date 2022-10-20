const topics = [
    "Science",
    "Art",
    "History",
    "Geography", 
    "Movies and Cinema", 
    "Maths", 
    "General Knowledge", 
    "Sports", 
    "Astronomy",
    "Music",
    "Literature"];

function getRandom(){
    document.getElementById('1').innerText = topics[Math.floor(Math.random() * topics.length)];
}