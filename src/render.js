const descriptionContainer = document.querySelector(".description-container")

const RenderWords = (word, definitions) => {
    const wordContainer = document.createElement("h2")
    wordContainer.classList.add("word-container")
    wordContainer.textContent = word
    descriptionContainer.appendChild(wordContainer)

    const horizontalRule = document.createElement("hr")
    descriptionContainer.appendChild(horizontalRule)
    
    definitions.forEach(def => {
        
        if(def.text == undefined) return
        // removes any formatting that comes with the text such as <xref> or <em>
        const formatRegex = new RegExp("<.*?>", "g") 
        let cleanText = def.text.replace(formatRegex, "")

        if(def.partOfSpeech == undefined) def.partOfSpeech = "unknown" 

        const definitionContainer = document.createElement("div")
        definitionContainer.classList.add("definition-container")

        const partOfSpeech = document.createElement("div")
        partOfSpeech.classList.add("part-of-speech")
        partOfSpeech.textContent = def.partOfSpeech

        const definition = document.createElement("div")
        definition.classList.add("definition")
        definition.textContent = cleanText

        definitionContainer.appendChild(partOfSpeech)
        definitionContainer.appendChild(definition)
        definitionContainer.appendChild(document.createElement("br"))

        descriptionContainer.appendChild(definitionContainer)
    })
}

export {
    RenderWords
}