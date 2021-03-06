ej.addCulture( "smj", {
	name: "smj",
	englishName: "Sami (Lule)",
	nativeName: "julevusámegiella",
	language: "smj",
	numberFormat: {
		",": " ",
		".": ",",
		percent: {
			",": " ",
			".": ","
		},
		currency: {
			pattern: ["-n $","n $"],
			",": ".",
			".": ",",
			symbol: "kr"
		}
	},
	calendars: {
		standard: {
			"/": "-",
			firstDay: 1,
			days: {
				names: ["ájllek","mánnodahka","dijstahka","gasskavahkko","duorastahka","bierjjedahka","lávvodahka"],
				namesAbbr: ["ájl","mán","dis","gas","duor","bier","láv"],
				namesShort: ["á","m","d","g","d","b","l"]
			},
			months: {
				names: ["ådåjakmánno","guovvamánno","sjnjuktjamánno","vuoratjismánno","moarmesmánno","biehtsemánno","sjnjilltjamánno","bårggemánno","ragátmánno","gålgådismánno","basádismánno","javllamánno",""],
				namesAbbr: ["ådåj","guov","snju","vuor","moar","bieh","snji","bårg","ragá","gålg","basá","javl",""]
			},
			monthsGenitive: {
				names: ["ådåjakmáno","guovvamáno","sjnjuktjamáno","vuoratjismáno","moarmesmáno","biehtsemáno","sjnjilltjamáno","bårggemáno","ragátmáno","gålgådismáno","basádismáno","javllamáno",""],
				namesAbbr: ["ådåj","guov","snju","vuor","moar","bieh","snji","bårg","ragá","gålg","basá","javl",""]
			},
			AM: null,
			PM: null,
			patterns: {
				d: "yyyy-MM-dd",
				D: "dddd, MMMM d'. b. 'yyyy",
				t: "HH:mm",
				T: "HH:mm:ss",
				f: "dddd, MMMM d'. b. 'yyyy HH:mm",
				F: "dddd, MMMM d'. b. 'yyyy HH:mm:ss",
				M: "MMMM d'. b.'"
			}
		}
	}
});
