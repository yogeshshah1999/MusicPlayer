let play = document.getElementById('play')
let  audio = document.querySelector('audio')
let img = document.querySelector('img')
let artist = document.getElementById('artist')
let title = document.getElementById('title')
let previous = document.getElementById('prev')
let next = document.getElementById('next')

let songs = [
    {
    name:"barish",
    title:"Barisho Main",
    artist:"Disha Vyas"
},
    {
    name:"Beggin",
    title:"Beggin",
    artist:"Måneskin"
},
    {
    name:"its-you",
    title:"It's You",
    artist:"Ali Gatie"
},
    {
    name:"laila",
    title:"O'Meri Laila",
    artist:"Atif Aslam, Jyotica Tangri"
},
    {
    name:"o-sanam",
    title:"O Sanam",
    artist:"Lucky Ali"
},
    {
    name:"Unstoppable",
    title:"Unstoppable",
    artist:"Sia"
}

]

let isPlay=false;

let playMusic=()=>{
    isPlay = true
    audio.play();
    play.classList.replace('bi-play-fill','bi-pause-fill')
    img.classList.add("anime")
}

let pauseMusic =()=>{
    isPlay = false
    audio.pause();
    play.classList.replace('bi-pause-fill','bi-play-fill')
    img.classList.remove("anime")
}
play.addEventListener('click',()=>{
    if(isPlay){
        pauseMusic();

    }
    else{
        playMusic()
    }
})

let loadSong = (songs) => {
    title.innerText = songs.title
    artist.innerText = songs.artist
    audio.src = "music/" + songs.name + ".mp3"
    img.src ="images/"+ songs.name + ".jpg"
}

songIndex =0
let nextSong = ()=>{
    songIndex = (songIndex + 1 )% songs.length
    loadSong(songs[songIndex])
    playMusic();

}
let prevSong = ()=>{
    songIndex = (songIndex - 1 + songs.length)%songs.length
    loadSong(songs[songIndex])
    playMusic();

}

next.addEventListener('click', nextSong)
previous.addEventListener('click', prevSong)




