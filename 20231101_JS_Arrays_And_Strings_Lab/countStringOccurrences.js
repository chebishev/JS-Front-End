function solve (string, substring) {
    words = string.split(" ")
    counter = 0
    for (const word of words){
        if (word == substring) counter++
    }
    console.log(counter)
}
solve('This is a word and it also is a sentence',
'is'
)
solve('softuni is great place for learning new programming languages',
'softuni'
)