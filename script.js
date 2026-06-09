const overlay = document.getElementById('overlay');
const music = document.getElementById('music');

const songs = ['novaprod.mp3','music.mp3','loveme.mp3'];

let current = 0;

function playSong(index){
  music.src = songs[index];
  music.volume = 0.5;
  music.play();
}

music.addEventListener('ended', ()=>{
  current = (current + 1) % songs.length;
  playSong(current);
});

overlay.onclick = ()=>{
  overlay.style.display = 'none';
  playSong(current);
}

async function loadDiscord(){

const userId = "1500997547794366556";

const res = await fetch(
`https://api.lanyard.rest/v1/users/${userId}`
);

const json = await res.json();

const data = json.data;

document.querySelector(".name").innerText =
data.discord_user.display_name;

document.querySelector(".user").innerText =
"@" + data.discord_user.username;

document.querySelector(".pfp").src =
`https://cdn.discordapp.com/avatars/${userId}/${data.discord_user.avatar}.png?size=512`;

document.querySelector(".bio").innerHTML =
data.activities[0]?.state || "No Bio";

const game =
data.activities.find(a => a.type === 0);

if(game){

document.querySelector(".activityTitle").innerText =
game.name;

document.querySelector(".activityDesc").innerText =
game.state || "";

}

}

loadDiscord();

setInterval(loadDiscord, 15000);
