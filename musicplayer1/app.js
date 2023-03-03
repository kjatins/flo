console.log("Welcome to Lofi");

//initialize the variables
let songIndex = 0;
let music = document.getElementById("audio");
let backimg = document.querySelector(".back");
let progressbar = document.getElementById("progressbar");
let back = document.getElementById("pre");
let playbtn = document.getElementById("play");
let next = document.getElementById("next");
let disk = document.querySelector(".disk");
let songname = document.querySelector(".song-name");
let artistname = document.querySelector(".artist-name");
let currentTime = document.querySelector(".current-time");
let songDuration = document.querySelector(".song-duration");
let musicplayer = document.querySelector(".masterplayer");

//songitems;


//play/pause click:
playbtn.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        playbtn.classList.remove('masterplay');
        playbtn.classList.add('pause');
        disk.classList.add('play');
    }
    else {
        music.pause();
        playbtn.classList.remove('pause');
        playbtn.classList.add('masterplay');
        disk.classList.remove('play');
    }
})

back.addEventListener('click', () => {
    if (index <= 0) {
        index = 0;;
    }
    else {
        index -= 1;
    }
    music.src = `songs/music/${index + 1}.mp3`;
    songname.innerHTML = songs[index].name;
    artistname.innerHTML = songs[index].artist;
    disk.style.backgroundImage = `url('${songs[index].cover}')`;
    backimg.style.backgroundImage = `url('${songs[index].cover}')`;
    music.currentTime = 0;
    music.play();
    playbtn.click();
})

next.addEventListener('click', () => {
    if (index >= 14) {
        index = 0;
    }
    else {
        index += 1;
    }
    music.src = `songs/music/${index + 1}.mp3`;
    songname.innerHTML = songs[index].name;
    artistname.innerHTML = songs[index].artist;
    disk.style.backgroundImage = `url('${songs[index].cover}')`;
    backimg.style.backgroundImage = `url('${songs[index].cover}')`;
    music.currentTime = 0;
    music.play();
    playbtn.click();
})

///
const allPlays = ()=>{
    Array.from(document.getElementsByClassName('cardplay')).forEach((element)=>{
        element.classList.remove('pause');
        element.classList.add('plistbtn');
    })
}

Array.from(document.getElementsByClassName('cardplay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        allPlays();
        musicplayer.style.display = "contents";
        index = parseInt(e.target.id);
        e.target.classList.remove('plistbtn');
        e.target.classList.add('pause');
        music.src = `songs/music/${index + 1}.mp3`;
        songname.innerHTML = songs[index].name;
        artistname.innerHTML = songs[index].artist;
        disk.style.backgroundImage = `url('${songs[index].cover}')`;
        backimg.style.backgroundImage = `url('${songs[index].cover}')`;
        music.currentTime = 0;
        music.play();
        playbtn.click(true)
    })
})

Array.from(document.getElementsByClassName('playbtn')).forEach((element) => {
    element.addEventListener('click', (e) => {
        allPlays();
        musicplayer.style.display = "flex";
        index = parseInt(e.target.id);
        music.src = `songs/music/${index + 1}.mp3`;
        songname.innerHTML = songs[index].name;
        artistname.innerHTML = songs[index].artist;
        disk.style.backgroundImage = `url('${songs[index].cover}')`;
        backimg.style.backgroundImage = `url('${songs[index].cover}')`;
        music.currentTime = 0;
        music.play();
        playbtn.click(true)
    })
})


//listen to event
music.addEventListener('timeupdate', () => {
    currentTime.innerHTML = '00:00';
    setTimeout(() => {
        progressbar.max = music.duration;
        songDuration.innerHTML = formatTime(music.duration);

    }, 100);


    const formatTime = (time) => {
        let min = Math.floor(time / 60);
        if (min < 10) {
            min = `0${min}`;
        }
        let sec = Math.floor(time % 60);
        if (sec < 10) {
            sec = `0${sec}`;
        }
        return `${min} :${sec}`;
    }

    //progress bar running
    setInterval(() => {
        progressbar.value = parseInt(music.currentTime);
        currentTime.innerHTML = formatTime(music.currentTime);
        if (Math.floor(music.currentTime) == Math.floor(progressbar.max)) {
            next.click();
        }
    }, 100)
})
progressbar.addEventListener('change', () => {
    music.currentTime = progressbar.value;
})





// function funcall() {
//     let albumlofi = songs.filter(b => b.album == 'lofi');
//     let list = "<table border='1|1'>"
//     console.table(albumlofi)
//     setTimeout(() => {
//         list += '<thead>'
//         list += '<tr>';
//         list += '<td>'+"Title"+'</td>';
//         list += '<td>'+"Artist"+'</td>';
//         list += '<td>'+"cover"+'</td>';
//         list += '</tr>';
//         list += '</thead>';
//         for (var i = 0; i < albumlofi.length; i++) {
//             list += '<tr>';
//             list += '<td>'+albumlofi[i].name+'</td>';
//             list += '<td>'+albumlofi[i].artist+'</td>';
//             list += '<td>'+albumlofi[i].cover+'</td>';
//             list += '</tr>';
//         }
         
//         document.getElementById('lofipl').innerHTML = list;
//     },500);
// }
// funcall();