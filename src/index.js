import { RenderWords } from "./render.js"
import { RenderError } from "./renderError.js"
import { config } from "./config/config.js"
import "./styles/style.scss"

// Using concatenation because tabbed string literals are formed with a newline. 
// Gets a random word json
let randomWordURL = 
    `http://api.wordnik.com/v4/words.json/randomWord?` +
    `hasDictionaryDef=${config.hasDictionaryDef}&` +
    `api_key=${config.apiKey}`


const getWordDefinitionURL = (word) => {
    let wordDefinitionURL = 
        `http://api.wordnik.com:80/v4/word.json/` +
        `${word}/definitions?` +
        `limit=${config.limit}&` +
        `includeRelated=${config.includeRelated}&` +
        `useCanonical=${config.useCanonical}&` +
        `includeTags=${config.includeTags}&` +
        `api_key=${config.apiKey}`

    return wordDefinitionURL
}


// Gets word json from Wordnik servers
const getWordJSON = async () => {
    const wordObject = await fetch(randomWordURL)
    const wordJson = await wordObject.json()

    if (wordObject.status != 200) throw wordObject.status
    else return wordJson
}

// Gets definitions json from Wordnik servers
const getDefinitionsJSON = async (wordJSON) => {
    const wordDefinition = await fetch(getWordDefinitionURL(wordJSON.word))
    const wordDefinitionJson = await wordDefinition.json()

    if (wordDefinition.status != 200) throw wordDefinition.status
    else return wordDefinitionJson
}

// Takes word json and returns word
const getWord = (wordJSON) => {
    let word = wordJSON.word
    return word
}

// Take definitions json array and outputs array of definitions
const getDefinitions = (definitionJSON) => {
    let definitions = []
    
    // Return all definitions or first 3 if larger than 3
    for(let i=0; i<3 && i < definitionJSON.length; i++) {
        definitions.push(definitionJSON[i])
    }
    
    return definitions
}

// Main function which executes all above elements
const main = async () => {
    try {
        let wordJSON = await getWordJSON()
        let definitionsJSON = await getDefinitionsJSON(wordJSON)
        let word = getWord(wordJSON)
        let definitions = getDefinitions(definitionsJSON)
        RenderWords(word, definitions)
    }
    catch(err) {
        RenderError(err)
    }
}

// Event listener to clear content and refresh with new word when book symbol pressed
const descriptionContainer = document.querySelector (".description-container")
const refresh = document.querySelector(".header-icon")

refresh.addEventListener("click", () => {
    descriptionContainer.innerHTML = ""
    main()
})




