var artists = ["Radiohead", "The Strokes", "The White Stripes","Arcade Fire", "The Beatles","Of Montreal", "Beck", "TV on the Radio", "Ghostface Killah", "M83"];
var albums = ["Amnesiac", "Is This It?", "White Blood Cells", "Funeral", "Sgt. Peppers Lonely Hearts Club Band", "Hissing Fauna, Are You the Destroyer","Colors","Seeds","Fishscale","Before the Dawn Heals Us"    ];
var songs = ["Pyramid Song", "Someday", "Fell in Love with a Girl", "Haiti", "Within You Without You", "Heimdalsgate Like a Promethian Curse","Up All Night", "Careful You", "9 Milli Bros.", "Teen Angst"  ];

var artistsOriginal = ["Radiohead", "The Strokes", "The White Stripes","Arcade Fire", "The Beatles","Of Montreal", "Beck", "TV on the Radio", "Ghostface Killah", "M83"];
var albumsOriginal = ["Amnesiac", "Is This It?", "White Blood Cells", "Funeral", "Sgt. Peppers Lonely Hearts Club Band", "Hissing Fauna, Are You the Destroyer","Colors","Seeds","Fishscale","Before the Dawn Heals Us"    ];
var songsOriginal = ["Pyramid Song", "Someday", "Fell in Love with a Girl", "Haiti", "Within You Without You", "Heimdalsgate Like a Promethian Curse","Up All Night", "Careful You", "9 Milli Bros.", "Teen Angst"  ];



var songPut = document.getElementById("song-input");
var albumPut = document.getElementById("album-input");
var artistPut = document.getElementById("artist-input");

var song = document.getElementById("song");
var artist = document.getElementById("artist");
var album = document.getElementById("album");

var button = document.getElementById("sendDB")
var sortButton = document.getElementById("sort-songs")
// still not sure if this is necessary



var songsAdded = [];
var albumsAdded = [];
var artistsAdded = [];

var test = "forward";

// -----------------
function refresh() {
    song.innerHTML = "";
    album.innerHTML = "";
    artist.innerHTML = "";



    for(p=0;p<songs.length;p++){

    song.innerHTML += `${songs[p]}<br>`;
    album.innerHTML += `${albums[p]}<br>`;
    artist.innerHTML += `${artists[p]}<br>`;
    console.log(songs[p])

}
}

function userSong(){
    newSong = document.getElementById("song-input").value
    // newSong = "a";
    return upperCase(newSong);

}

function userAlbum(){
    newAlbum =  document.getElementById("album-input").value;
    // newAlbum = "a"
    return upperCase(newAlbum)
}

function userArtist(){
    newArtist =  document.getElementById("artist-input").value;
    // newArtist = "a"
    return upperCase(newArtist)

}

function upperCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    return splitStr.join(' '); 
 }

function submit(){
    // still not sure about the songsAdded,albumsAdded,artistsAdded
    var newSong = userSong();
    songs.push(newSong);
    songsOriginal.push(newSong);



    var newAlbum = userAlbum();
    albums.unshift(newAlbum);
    albumsOriginal.push(newAlbum);


    var newArtist = userArtist();
    artists.push(newArtist);
    artistsOriginal.push(newArtist);

    refresh();
    // var d = new Date();
    // console.log(d.getTime());



    document.getElementById("song-input").value="";
    document.getElementById("artist-input").value="";
    document.getElementById("album-input").value="";
    sortItems();
    }

function returnClass(){
    console.log("1")
    if(songID.className === "horizontal"){
    songID.classList.remove("horizontal");
    artistID.classList.remove("horizontal");
    albumID.classList.remove("horizontal");
    songID.classList.toggle("songstyle");
    artistID.classList.toggle("artiststyle");
    albumID.classList.toggle("albumstyle");
    console.log("2")
}}

function changeClass(){
    if(songID.className === "songstyle"){
        songID.classList.toggle("horizontal");
        artistID.classList.toggle("horizontal");
        albumID.classList.toggle("horizontal");
        songID.classList.remove("songstyle");
        artistID.classList.remove("artiststyle");
        albumID.classList.remove("albumstyle");
}}
function sortItems(){
    if (document.getElementById("a-z").checked){
        returnClass();
        songs = songs.sort(function (a, b) {
            if (a < b) return -1;
            else if (a > b) return 1;
            return 0;
          })
        artists = artists.sort(function (a, b) {
            if (a < b) return -1;
            else if (a > b) return 1;
            return 0;
    
        })
        albums = albums.sort(function (a, b) {
            if (a < b) return -1;
            else if (a > b) return 1;
            return 0;
        
        })
        console.log("songsAdded", songsAdded);
        refresh();

    };
    if(document.getElementById("z-a").checked){
        returnClass();
        songs = songs.sort(function (a, b) {
            if (a > b) return -1;
            else if (a < b) return 1;
            return 0;
    }
)
        albums = albums.sort(function (a, b) {
            if (a > b) return -1;
            else if (a < b) return 1;
            return 0;
}
)
        artists = artists.sort(function (a, b) {
            if (a > b) return -1;
            else if (a < b) return 1;
            return 0;
            
}

)
refresh();
console.log("songsAdded", songsAdded);
    }

    if(document.getElementById("old-to-new").checked){
        if(test !== "forward")
        returnClass();
        // console.log("bitchin")
        // for (i=0;i<songsAdded.length;i++){
        // songsOriginal.push(songsAdded[i]);
        // console.log("songsAdded", songsAdded);
        // console.log("songs", songs);
        // }

        //     songsAdded.splice(1,0)
        song.innerHTML = "";
        album.innerHTML = "";
        artist.innerHTML = "";
    
    
    
        for(i=0;i<songsOriginal.length;i++){
    
        song.innerHTML += `${songsOriginal[i]}<br>`;
        album.innerHTML += `${albumsOriginal[i]}<br>`;
        artist.innerHTML += `${artistsOriginal[i]}<br>`;
        console.log(songs[i])
    }
        // artists = artists.sort(function(a,b){
        //     return new Date(b.date) - new Date(a.date);
        //   });

        // albums = albums.sort(function(a,b){
        //     return new Date(b.date) - new Date(a.date);
        //   });
    // }

    // refresh();
    test = "forward"

}
    if(document.getElementById("new-to-old").checked){
        if(test !== "reverse"){
        returnClass();
        var reverseSongs = songsOriginal.reverse();
        var reverseAlbums = albumsOriginal.reverse();
        var reverseArtists = artistsOriginal.reverse();
        console.log(reverseSongs);
        console.log(reverseAlbums);
        console.log(reverseArtists)

        // song.innerHTML += `${reverseSongs[i]}<br>`;
        // album.innerHTML += `${reverseAlbums[i]}<br>`;
        // artist.innerHTML += `${reverseArtists[i]}<br>`;


        song.innerHTML = "";
        album.innerHTML = "";
        artist.innerHTML = "";

        for(j=0;j<reverseSongs.length;j++){
        song.innerHTML += `${reverseSongs[j]}<br>`;
        album.innerHTML += `${reverseAlbums[j]}<br>`;
        artist.innerHTML += `${reverseArtists[j]}<br>`;

        // songsOriginal.reverse();
        // albumsOriginal.reverse()
        // artistsOriginal.reverse();

        test = "reverse"
    }
    }
}
    if(document.getElementById("hor-a-z").checked){
        changeClass();
        // if(songID.className === "songstyle"){
        // songID.classList.toggle("horizontal");
        // artistID.classList.toggle("horizontal");
        // albumID.classList.toggle("horizontal");
        // songID.classList.remove("songstyle");
        // artistID.classList.remove("artiststyle");
        // albumID.classList.remove("albumstyle");
        // }


        console.log("it works")
        songs = songs.sort(function (a, b) {
            if (a < b) return -1;
            else if (a > b) return 1;
            return 0;
        })

        albums = albums.sort(function (a, b) {
            if (a < b) return -1;
            else if (a > b) return 1;
            return 0;
        })

        artists = artists.sort(function (a, b) {
            if (a < b) return -1;
            else if (a > b) return 1;
            return 0;
        })

        var commaSongs = songs.join(", ");
        var commaAlbums = albums.join(", ");
        var commaArtists = artists.join(", ");


        song.innerHTML = "";
        album.innerHTML = "";
        artist.innerHTML = "";
    
    
    


        song.innerHTML += `${commaSongs}`;
        album.innerHTML += `${commaAlbums}`;
        artist.innerHTML += `${commaArtists}`;

        

    
}
    if(document.getElementById("hor-z-a").checked){
        changeClass();

        songs = songs.sort(function (a,b) {
            if (a > b) return -1;
            else if (a < b) return 1;
            return 0;
    }
)
        albums = albums.sort(function (a, b) {
            if (a > b) return -1;
            else if (a < b) return 1;
            return 0;
}
)
        artists = artists.sort(function (a, b) {
            if (a > b) return -1;
            else if (a < b) return 1;
            return 0;
        })

        var commaSongs = songs.join(" >> ");
        var commaAlbums = albums.join(" >> ");
        var commaArtists = artists.join(" >> ");


        song.innerHTML = "";
        album.innerHTML = "";
        artist.innerHTML = "";
    
    
    


        song.innerHTML += `${commaSongs}`;
        album.innerHTML += `${commaAlbums}`;
        artist.innerHTML += `${commaArtist}`;
    }
    if(document.getElementById("hor-old-new").checked){
        changeClass();

        song.innerHTML = "";
        album.innerHTML = "";
        artist.innerHTML = "";

        var colonSongs = songsOriginal.join(" : ");
        var colonArtists = artistsOriginal.join(" : ");
        var colonAlbums = albumsOriginal.join(" : ");

        song.innerHTML += `${colonSongs}`;
        album.innerHTML += `${colonAlbums}`;
        artist.innerHTML += `${colonArtists}`;
        test = "forward"

    }
    if(document.getElementById("hor-new-old").checked){
console.log("here");
        // if (test !== "reverse"){
            changeClass()
        song.innerHTML = "";
        album.innerHTML = "";
        artist.innerHTML = "";

        var reversSongs = songsOriginal.reverse();
        var reversAlbums = albumsOriginal.reverse();
        var reversArtists = artistsOriginal.reverse();

            console.log(songsOriginal[0]);
            console.log(reversSongs[0]);
            console.log("matches")
        var reversSongs = reversSongs.join(" | ");
        var reversArtists = reversArtists.join(" | ");
        var reversAlbums = reversAlbums.join(" | ");
    
        song.innerHTML += `${reversSongs}`;
        album.innerHTML += `${reversAlbums}`;
        artist.innerHTML += `${reversArtists}`;
        test = "reverse"
        console.log(songsOriginal)

songsOriginal.reverse();
albumsOriginal.reverse();
artistsOriginal.reverse();
    // }

    };
};

button.addEventListener("click",submit);
window.addEventListener("load",refresh);
sortButton.addEventListener("click",sortItems);
