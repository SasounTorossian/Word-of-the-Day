const descriptionContainer = document.querySelector(".description-container")

// Renders a new word along with its definitions
const RenderWords = (word, definitions) => {
    // Create the word container to display the word
    const wordContainer = document.createElement("h2")
    wordContainer.classList.add("word-container")
    wordContainer.textContent = word
    descriptionContainer.appendChild(wordContainer)

    // Create a horizontal rule to separate word from information
    const horizontalRule = document.createElement("hr")
    descriptionContainer.appendChild(horizontalRule)
    
    // Iterate through each definition, creating dom element
    definitions.forEach((def, index) => {
        // If for some reason there is no text associated with definition, skip iteration
        if(def.text == undefined) return

        // removes any formatting that comes with the text such as <xref> or <em>
        const formatRegex = new RegExp("<.*?>", "g") 
        let cleanText = def.text.replace(formatRegex, "")

        // If part of speech (noun, verb, etc) is missing, use "unknown"
        if(def.partOfSpeech == undefined) def.partOfSpeech = "unknown" 

        // Create container to house all information
        const infoContainer = document.createElement("div")
        infoContainer.classList.add("info-container")
        // If not final info container, append line break after
        if(index != definitions.length - 1) infoContainer.classList.add("center-break")

        // Create container to house part of speech
        const partOfSpeechContainer = document.createElement("div")
        partOfSpeechContainer.classList.add("part-of-speech")
        partOfSpeechContainer.textContent = def.partOfSpeech

        // Create container to house definition
        const definitionContainer = document.createElement("div")
        definitionContainer.classList.add("definition")
        definitionContainer.textContent = cleanText

        // Append part of speech and definition to info container, then add break 
        infoContainer.appendChild(partOfSpeechContainer)
        infoContainer.appendChild(definitionContainer)
        infoContainer.appendChild(document.createElement("br"))

        // Append info container to high-level description container
        descriptionContainer.appendChild(infoContainer)
    })
}

export {
    RenderWords
}