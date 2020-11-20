import {RenderWords} from "./render.js"
import { RenderError } from "./renderError.js"

// Configuration object for Wordnik GET URLs
const Wordnik = {
    apiKey: "qexbnl8z23x2ptwjlymloyj6fd4zkcy7ddb6a2yjbrdiyttwk",
    hasDictionaryDef: "true",
    limit: "200",
    includeRelated: "false",
    useCanonical: "false",
    includeTags: "false",
}

// Using concatenation because tabbed string literals are formed with a newline. 
// Gets a random word.
let randomWordURL = 
    `http://api.wordnik.com/v4/words.json/randomWord?` +
    `hasDictionaryDef=${Wordnik.hasDictionaryDef}&` +
    `api_key=${Wordnik.apiKey}`

// Receives a word, and provides the definition
const getWordDefinitionURL = (word) => {
    
    let wordDefinitionURL = 
        `http://api.wordnik.com:80/v4/word.json/` +
        `${word}/definitions?` +
        `limit=${Wordnik.limit}&` +
        `includeRelated=${Wordnik.includeRelated}&` +
        `useCanonical=${Wordnik.useCanonical}&` +
        `includeTags=${Wordnik.includeTags}&` +
        `api_key=${Wordnik.apiKey}`

    return wordDefinitionURL
}

const getWordJSON = async () => {
    const wordObject = await fetch(randomWordURL)
    const wordJson = await wordObject.json()

    if (wordObject.status != 200) throw wordObject.status
    else return wordJson
}

const getDefinitionsJSON = async (wordJSON) => {
    const wordDefinition = await fetch(getWordDefinitionURL(wordJSON.word))
    const wordDefinitionJson = await wordDefinition.json()

    if (wordDefinition.status != 200) throw wordDefinition.status
    else return wordDefinitionJson
}


const getWord = (wordJSON) => {
    let word = wordJSON.word
    return word
}

const getDefinitions = (definitionJSON) => {
    let definitions = []
    
    for(let i=0; i<3 && i < definitionJSON.length; i++) {
        definitions.push(definitionJSON[i])
    }
    
    return definitions
}

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

const wordContainer = document.querySelector (".word-container")
const descriptionContainer = document.querySelector (".description-container")
const refresh = document.querySelector(".header-icon")

refresh.addEventListener("click", () => {
    wordContainer.innerHTML = ""
    descriptionContainer.innerHTML = ""
    main()
})




