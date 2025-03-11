```ts
let rawString = `
  /** string goes here */
`

const regionRegex = /^## (?<nomeRegiao>.+$)\W+Quebradas:\s*(?<quebradas>.+)\W+(?<artistas>(?:(?!## ).*\n*)*)/gmiu

const cleanStr = (rawStr: string) => rawStr.trim()
const splitList = (listStr: string) => listStr.trim().split(/,\s*|\/\s*/)

const regions = rawString
  .matchAll(regionRegex)
  .toArray()
  .map(region => {
	  const {
	    nomeRegiao,
	    quebradas,
	    artistas: artistasStr,
	  } = region.groups ?? {}
	  
	  const artistaRegex = /### (?<name>.+)\W+(?<titles>.+)\W+(?<location>.+)\W+Siga ?-? ?(?<socials>.+)\W+(?<description>(?:[^#].*\n+)+)/gmu
	
	  const artistas = artistasStr
	  	.matchAll(artistaRegex)
	    .toArray()
	    .map(artista => {
	      const {
	      name, titles, location, socials, description,
	      } = artista.groups ?? {}
	
	      return {
	        name: cleanStr(name),
	        titles: splitList(titles),
	        location: cleanStr(location),
	        socials: cleanStr(socials),
	        description: cleanStr(description),
	      }
	    })
	  
	  return {
	    quebradas: splitList(quebradas),
	    name: cleanStr(nomeRegiao),
	    artistas,
	  }
	})
```