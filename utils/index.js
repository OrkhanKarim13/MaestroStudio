// find a document that is located inside of the collection
export const findById = (resources, id) => {
  if (!resources) return null
  return resources.find(r => r.id === id)
}

// update a collection by the given document (update-insert)
export const upsert = (resources, resource) => {
  const index = resources.findIndex((r) => r.id === resource.id);
  if (resource.id && index !== -1) {
    resources[index] = resource;
  } else {
    resources.push(resource);
  }
}

// add document to the collection
export const docToResource = (doc) => {
  if(typeof doc.data !== 'function') return doc
  return { ...doc.data(), id: doc.id }
}

export const createSlug = (title) => {
  return transliterate(title.toLowerCase())
    .replace('-', ' ')
    .replace(/[^\w\s]/gi, "")
    .split(" ")
    .join("-");
}

const transliterate = (text) => {
  return (
    text
      //russian alphabet
      .replace(/\u042A/g, "")
      .replace(/\u0451/g, "yo")
      .replace(/\u0439/g, "i")
      .replace(/\u0446/g, "ts")
      .replace(/\u0443/g, "u")
      .replace(/\u043A/g, "k")
      .replace(/\u0435/g, "e")
      .replace(/\u043D/g, "n")
      .replace(/\u0433/g, "g")
      .replace(/\u0448/g, "sh")
      .replace(/\u0449/g, "sch")
      .replace(/\u0437/g, "z")
      .replace(/\u0445/g, "h")
      .replace(/\u044A/g, "'")
      .replace(/\u0410/g, "a")
      .replace(/\u0444/g, "f")
      .replace(/\u044B/g, "i")
      .replace(/\u0432/g, "v")
      .replace(/\u0430/g, "a")
      .replace(/\u043F/g, "p")
      .replace(/\u0440/g, "r")
      .replace(/\u043E/g, "o")
      .replace(/\u043B/g, "l")
      .replace(/\u0434/g, "d")
      .replace(/\u0436/g, "zh")
      .replace(/\u044D/g, "e")
      .replace(/\u042C/g, "'")
      .replace(/\u044F/g, "ya")
      .replace(/\u0447/g, "ch")
      .replace(/\u0441/g, "s")
      .replace(/\u043C/g, "m")
      .replace(/\u0438/g, "i")
      .replace(/\u0442/g, "t")
      .replace(/\u044C/g, "'")
      .replace(/\u0431/g, "b")
      .replace(/\u044E/g, "yu")
      //azerbaijani alphabet
      .replaceAll("ç", "c")
      .replaceAll("ə", "e")
      .replaceAll("ğ", "g")
      .replaceAll("ı", "i")
      .replaceAll("ö", "o")
      .replaceAll("ş", "s")
      .replaceAll("ü", "u")
  );
}