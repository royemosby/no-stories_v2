//does not account for words prefixed with special characters such as params
const minorWords = ["and", "as", "but", "for", "if", "nor", "or", "so", "yet", "a", "an", "the", "as", "at", "by", "for", "in", "of", "off", "on", "per", "to", "up", "via"];
const ignoredWords = ["FWSY"];

export function toTitleCase(text: string):string {
  const words = text.split(" ");
  return words.map(word => {
    if(minorWords.includes(word)){
      return word.toLowerCase()
    }
    if(ignoredWords.includes(word)){
      return word;
    }
    return word.toLowerCase().charAt(0).toUpperCase() + word.toLowerCase().slice(1)
  }).join(" ")
}
