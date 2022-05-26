//browser scripts

function loopThroughRows(tableBodyElement) {
    let ingredients = []
    for (let i = 1; i < tableBodyElement.childNodes.length; i++) {
        if (i % 2 === 0) {
            ingredients.push(createIngredient(tableBodyElement.childNodes[i]))
        }
    }
    return ingredients
}

function createIngredient(row) {
    return {
        name: getIngredientTitle(row),
        id: getIngredientId(row),
        image: getIngredientImage(row),
        url: getIngredientURL(row),
        description: getIngredientDescription(row),
        effects: loopThroughIngredientEffects(row.childNodes[5].childNodes[1]),
        value: getIngredientValue(row),
        weight: getIngredientWeight(row),
        harvestProbability: getIngredientHarvestProbability(row)
    }
}

function loopThroughIngredientEffects(orderedListNode) {
    let effectMetadata = []
    for (let i = 1; i < orderedListNode.childNodes.length; i++ ) {
        if (i % 2 !== 0) {
            effectMetadata.push(createMetadataEntry(orderedListNode, i))
        }
    }
    return effectMetadata
}

function createMetadataEntry(orderedListNode, iterator) {
    return {
        imageURL: getEffectImage(orderedListNode.childNodes[iterator]),
        effectURL: getEffectURL(orderedListNode.childNodes[iterator]),
        effectName: getEffectTitle(orderedListNode.childNodes[iterator])
    }
}

function getIngredientDescription(row) {
    return row.childNodes[3].textContent
}

function getIngredientId(row) {
    return row.childNodes[1].childNodes[1].childNodes[5].textContent
}

function getIngredientValue(row) {
    return row.childNodes[7].childNodes[0].textContent
}

function getIngredientWeight(row) {
    return row.childNodes[9].childNodes[0].textContent
}

function getIngredientHarvestProbability(row) {
    return row.childNodes[11].childNodes[0].textContent
}

function getEffectURL(effect) {
    return effect.childNodes[1].href
}

function getEffectTitle(effect) {
    return effect.childNodes[1].title.replace("Morrowind:", "")
}

function getEffectImage(effect) {
    return getImageSrcValue(effect.childNodes[0].childNodes[0])
}

function getIngredientTitle(row) {
    return row.childNodes[1].childNodes[1].childNodes[3].title.replace("Morrowind:", "")
}

function getIngredientURL(row) {
    return row.childNodes[1].childNodes[1].childNodes[3].href
}

function getIngredientImage(row) {
    return getImageSrcValue(row.childNodes[1].childNodes[1].childNodes[1].childNodes[0])
}

function getImageSrcValue(imageElement) {
    return imageElement.src
}
