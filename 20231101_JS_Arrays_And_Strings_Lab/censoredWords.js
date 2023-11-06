function solve(sentence, word){
    console.log(sentence.replace(new RegExp(word, 'g'), '*'.repeat(word.length)));
}
solve('A small sentence with some words', 'small')
solve('Find the hidden word', 'hidden')