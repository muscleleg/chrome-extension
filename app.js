chrome.storage.local.get(["github"]).then((result) => {
    if(!result.github){
        setUsername();
    }else{
        document.getElementById("jandi").src = `https://ghchart.rshah.org/${result.github}`;
    }
});
function setUsername(){
    const username = prompt("깃허브 ID:");
    if(!username) setUsername();
    chrome.storage.local.set({github:username});
    document.getElementById("jandi").src = `https://ghchart.rshah.org/${username}`;
}
document.getElementById('changeButton').addEventListener('click', function() {
    setUsername();
});