const nombre: string = "Monica";
const edad: number = 26;

console.log(`Hola ${nombre} ${edad}`);

interface ITrack {
    title: string,
}

interface ISong extends ITrack {
    artist: string,
    durantion: number
}

interface IPodcast extends ITrack  {
    host: string,
    episodes: number
}

interface IAudiobook extends ITrack {
    author: string,
    duration: number
}

interface IPlaylist {
    name: string,
    playlist: ITrack[]
}

const song1 : ISong = {
    title: "By the way",
    artist: "Red Hot Chili Peppers",
    durantion: 100
}

const podcast1 : IPodcast = {
    title: "Cuentos de la cripta",
    host: "una calavera",
    episodes: 100
}

const audioBook1 : IAudiobook = {
    title: "El principito",
    author: "Antoine de Saint-Exupéry",
    duration: 100
}

const playlist: IPlaylist = {
    name: "My playlist",
    playlist: [song1, podcast1, audioBook1]
}
 console.log(playlist)