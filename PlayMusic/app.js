const ListSong=['Memories.mp3','Laxed.mp3'];
const listSong=['./List/火红的萨日朗 Kalimba.mp3','火红的萨日朗.mp3']
const listSong2=[{
    title:'火红的萨日朗 Kalimba',
    URL:'./List/火红的萨日朗 Kalimba.mp3'
},
{
    title:'Memories',
    URL:'./List/Memories.mp3'
},
{
    title:'Laxed',
    URL:'./List/Laxed.mp3'
},
{
    title:'火红的萨日朗',
    URL:'./List/火红的萨日朗.mp3'
},
{
    title:'Cánh hồng phai',
    URL:'./List/ánh Hồng Phai - Chou (cover).mp3'
}
];
const songTitle=document.getElementById('title-player');
const progressBar=document.getElementById('progress');
const nextSong=document.getElementById('next');
const backSong=document.getElementById('back');
const buttonPlay=document.getElementById('play');
const button=document.querySelector('.button');
const buttonVolume=document.getElementById('volume');
const song=new Audio();
let currentSong=0;
window.onload=playSong;
function playSong(){
    song.src=listSong2[currentSong].URL;
    // song.src=auto;
    console.log(song.src);
    // songTitle.textContent=listSong[currentSong].replace('./List/'," ");
    songTitle.textContent=listSong2[currentSong].title;

    song.play();
}
function next(){
    currentSong++;
    if(currentSong>listSong2.length){
        currentSong=0
    }
    playSong();
}
function back(){
    currentSong--;
    if(currentSong<0){
        currentSong=listSong2.length;
    }
    playSong();
}
// button.addEventListener('click',()=>{
//     if(button.classList.contains('fa-play')){
//         button.classList.replace('fa-play','fa-pause');
//         song.play();
//     }else(button.classList.contains('fa-pause')){
//         button.classList.replace('fa-pause','fa-play');
//         song.pause();
//     }
// });
nextSong.addEventListener('click',next);
backSong.addEventListener('click',back);
song.addEventListener('ended',next);
buttonPlay.addEventListener('click',()=>{
    if(song.paused){
        song.play();
        buttonPlay.classList.replace('fa-pause','fa-play');
    }else{
        buttonPlay.classList.replace('fa-play','fa-pause');
        song.pause();
    }
})
buttonVolume.addEventListener('click',()=>{
    if(buttonVolume.classList.contains('fa-volume-up')){
        song.volume=0;
        buttonVolume.classList.replace('fa-volume-up','fa-volume-mute');
    }
    else {
        song.volume=1;
        buttonVolume.classList.replace('fa-volume-mute','fa-volume-up');
    }
})
song.addEventListener('timeupdate',()=>{
    let postiton=song.currentTime/song.duration;
    progressBar.style.width=postiton*100+'%';
})