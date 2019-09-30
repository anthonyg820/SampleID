
function setContentDimensions()
{
    let screenHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    let screenWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

	document.getElementById("sidebar").style.height = screenHeight + "px";
}

function toggleSidebar()
{
    let sidebar = document.getElementById("sidebar");

    if(sidebar.style.left == "0px")
        sidebar.style.left = "-200px";
    else{
        sidebar.style.left = "0px";
    }
}

function loadUser(userID)
{
    let badgeID = document.getElementById("badgeID");
    let badgeName = document.getElementById("badgeName");
    let badgeImg = document.getElementById("badgeImg");
    
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "Users.json");

    xhr.onload = function(){
        console.log(xhr.responseText);
        let response = JSON.parse(xhr.responseText);
        badgeID.innerHTML = response[userID-1]["id"];
        badgeName.innerHTML = response[userID-1]["name"];
        badgeImg.src = response[userID-1]["imgPath"];
    } 

    xhr.send();    
}