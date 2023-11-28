function solve(array){
    let numberOfSongs = array.shift();
    let printType = array.pop();
    class Song {
        constructor(type, name, time){
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }
    for (let element in array){
        let [type, name, time] = array[element].split('_');
        let newSong = new Song(type, name, time);
        if (printType === 'all') {
            console.log(newSong.name)
        }else{
            if (newSong.type === printType) {
                console.log(newSong.name)
            }
        }
    }
}
solve([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
    )
solve([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
    )
solve([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
    )