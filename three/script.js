const topics = [
    "Science",
    "History",
    "Geography", 
    "TV & Movies", 
    "Maths", 
    "General Knowledge", 
    "Sports", 
    "Astronomy",
    "Music",
    "Literature"];

function getRandom(){
    let selected = [];
    while(selected.length<=2)
    {
        const newTopic = topics[Math.floor(Math.random() * topics.length)];
        if(!selected.includes(newTopic))
        {
            selected.push(newTopic);
        }
    }
    document.getElementById('1').innerText = selected[0];
    document.getElementById('2').innerText = selected[1];
    document.getElementById('3').innerText = selected[2];
}
