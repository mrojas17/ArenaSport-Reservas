"use strict";
const nombre = "Monica";
const edad = 26;
console.log(`Hola ${nombre} ${edad}`);
const song1 = {
    title: "By the way",
    artist: "Red Hot Chili Peppers",
    durantion: 100
};
const podcast1 = {
    title: "Cuentos de la cripta",
    host: "una calavera",
    episodes: 100
};
const audioBook1 = {
    title: "El principito",
    author: "Antoine de Saint-Exupéry",
    duration: 100
};
const playlist = {
    name: "My playlist",
    playlist: [song1, podcast1, audioBook1]
};
console.log(playlist);
