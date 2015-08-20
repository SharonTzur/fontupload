//region General

ejs = false;

//region JSON

var completeFontCatJSON = {
        "Serif"      : {
            "fonts": [{
                "family"  : "Adamina",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Adamina:400",
            }, {
                "family"  : "Alegreya",
                "variants": ["400", "700", "900"],
                "italic"  : true,
                "str"     : "Alegreya:400,700,900,400i,700i,900i"
            }, {
                "family"  : "Alegreya SC",
                "variants": ["400", "700", "900"],
                "italic"  : true,
                "str"     : "Alegreya+SC:400,700,900,400i,700i,900i"
            }, {"family": "Alice", "variants": ["400"], "italic": false, "str": "Alice:400"}, {
                "family"  : "Alike",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Alike:400"
            }, {
                "family"  : "Alike Angular",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Alike+Angular:400"
            }, {
                "family"  : "Almendra",
                "variants": ["400", "700"],
                "italic"  : true,
                "str"     : "Almendra:400,700,400i,700i"
            }, {
                "family"  : "Almendra SC",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Almendra+SC:400"
            }, {
                "family"  : "Amethysta",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Amethysta:400"
            }, {
                "family"  : "Andada",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Andada:400"
            }, {
                "family"  : "Antic Didone",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Antic+Didone:400"
            }, {
                "family"  : "Antic Slab",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Antic+Slab:400"
            }, {
                "family"  : "Arapey",
                "variants": ["400"],
                "italic"  : true,
                "str"     : "Arapey:400,400i"
            }, {
                "family"  : "Arbutus Slab",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Arbutus+Slab:400"
            }, {
                "family"  : "Artifika",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Artifika:400"
            }, {
                "family"  : "Arvo",
                "variants": ["400", "700"],
                "italic"  : true,
                "str"     : "Arvo:400,700,400i,700i"
            }, {
                "family"  : "Average",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Average:400"
            }, {
                "family"  : "Balthazar",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Balthazar:400"
            }, {
                "family"  : "Belgrano",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Belgrano:400"
            }, {
                "family"  : "Bentham",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Bentham:400"
            }, {
                "family"  : "Bitter",
                "variants": ["400", "700"],
                "italic"  : false,
                "str"     : "Bitter:400,700"
            }, {
                "family"  : "Brawler",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Brawler:400"
            }, {
                "family"  : "Bree Serif",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Bree+Serif:400"
            }, {
                "family"  : "Buenard",
                "variants": ["400", "700"],
                "italic"  : false,
                "str"     : "Buenard:400,700"
            }, {
                "family"  : "Cambo",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Cambo:400"
            }, {
                "family"  : "Cantata One",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Cantata+One:400"
            }, {
                "family"  : "Cardo",
                "variants": ["400", "700"],
                "italic"  : false,
                "str"     : "Cardo:400,700"
            }, {
                "family"  : "Caudex",
                "variants": ["400", "700"],
                "italic"  : true,
                "str"     : "Caudex:400,700,400i,700i"
            }, {
                "family"  : "Cinzel",
                "variants": ["400", "700", "900"],
                "italic"  : false,
                "str"     : "Cinzel:400,700,900"
            }, {
                "family"  : "Copse",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Copse:400"
            }, {
                "family"  : "Coustard",
                "variants": ["400", "900"],
                "italic"  : false,
                "str"     : "Coustard:400,900"
            }, {
                "family"  : "Crete Round",
                "variants": ["400"],
                "italic"  : true,
                "str"     : "Crete+Round:400,400i"
            }, {
                "family"  : "Crimson Text",
                "variants": ["400", "600", "700"],
                "italic"  : true,
                "str"     : "Crimson+Text:400,600,700,400i,600i,700i"
            }, {
                "family"  : "Cutive",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Cutive:400"
            }, {
                "family"  : "Della Respira",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Della+Respira:400"
            }, {
                "family"  : "Domine",
                "variants": ["400", "700"],
                "italic"  : false,
                "str"     : "Domine:400,700"
            }, {
                "family"  : "Donegal One",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Donegal+One:400"
            }, {
                "family"  : "Droid Serif",
                "variants": ["400", "700"],
                "italic"  : true,
                "str"     : "Droid+Serif:400,700,400i,700i"
            }, {
                "family"  : "EB Garamond",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "EB+Garamond:400"
            }, {
                "family"  : "Enriqueta",
                "variants": ["400", "700"],
                "italic"  : false,
                "str"     : "Enriqueta:400,700"
            }, {
                "family"  : "Esteban",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Esteban:400"
            }, {
                "family"  : "Fanwood Text",
                "variants": ["400"],
                "italic"  : true,
                "str"     : "Fanwood+Text:400,400i"
            }, {
                "family"  : "Fauna One",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Fauna+One:400"
            }, {
                "family"  : "Fenix",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Fenix:400"
            }, {
                "family"  : "Fjord One",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Fjord+One:400"
            }, {
                "family"  : "GFS Didot",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "GFS+Didot:400"
            }, {
                "family"  : "Gabriela",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Gabriela:400"
            }, {
                "family"  : "Gentium Basic",
                "variants": ["400", "700"],
                "italic"  : true,
                "str"     : "Gentium+Basic:400,700,400i,700i"
            }, {
                "family"  : "Gentium Book Basic",
                "variants": ["400", "700"],
                "italic"  : true,
                "str"     : "Gentium+Book Basic:400,700,400i,700i"
            }, {
                "family"  : "Gilda Display",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Gilda+Display:400"
            }, {
                "family"  : "Glegoo",
                "variants": ["400", "700"],
                "italic"  : false,
                "str"     : "Glegoo:400,700"
            }, {
                "family"  : "Goudy Bookletter 1911",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Goudy+Bookletter 1911:400"
            }, {
                "family"  : "Habibi",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Habibi:400"
            }, {
                "family"  : "Halant",
                "variants": ["300", "400", "500", "600", "700"],
                "italic"  : false,
                "str"     : "Halant:300,400,500,600,700"
            }, {
                "family"  : "Headland One",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Headland+One:400"
            }, {
                "family"  : "Holtwood One SC",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Holtwood+One SC:400"
            }, {
                "family"  : "IM Fell DW Pica",
                "variants": ["400"],
                "italic"  : true,
                "str"     : "IM+Fell DW Pica:400,400i"
            }, {
                "family"  : "IM Fell DW Pica SC",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "IM+Fell DW Pica SC:400"
            }, {
                "family"  : "IM Fell Double Pica",
                "variants": ["400"],
                "italic"  : true,
                "str"     : "IM+Fell Double Pica:400,400i"
            }, {
                "family"  : "IM Fell Double Pica SC",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "IM+Fell Double Pica SC:400"
            }, {
                "family"  : "IM Fell English",
                "variants": ["400"],
                "italic"  : true,
                "str"     : "IM+Fell English:400,400i"
            }, {
                "family"  : "IM Fell English SC",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "IM+Fell English SC:400"
            }, {
                "family"  : "IM Fell French Canon",
                "variants": ["400"],
                "italic"  : true,
                "str"     : "IM+Fell French Canon:400,400i"
            }, {
                "family"  : "IM Fell French Canon SC",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "IM+Fell French Canon SC:400"
            }, {
                "family"  : "IM Fell Great Primer",
                "variants": ["400"],
                "italic"  : true,
                "str"     : "IM+Fell Great Primer:400,400i"
            }, {
                "family"  : "IM Fell Great Primer SC",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "IM+Fell Great Primer SC:400"
            }, {
                "family"  : "Inika",
                "variants": ["400", "700"],
                "italic"  : false,
                "str"     : "Inika:400,700"
            }, {
                "family"  : "Italiana",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Italiana:400"
            }, {
                "family"  : "Jacques Francois",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Jacques+Francois:400"
            }, {
                "family"  : "Josefin Slab",
                "variants": ["100", "300", "400", "600", "700"],
                "italic"  : true,
                "str"     : "Josefin+Slab:100,300,400,600,700,100i,300i,400i,600i,700i"
            }, {
                "family"  : "Judson",
                "variants": ["400", "700"],
                "italic"  : false,
                "str"     : "Judson:400,700"
            }, {
                "family"  : "Junge",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Junge:400"
            }, {
                "family"  : "Kameron",
                "variants": ["400", "700"],
                "italic"  : false,
                "str"     : "Kameron:400,700"
            }, {
                "family"  : "Karma",
                "variants": ["300", "400", "500", "600", "700"],
                "italic"  : false,
                "str"     : "Karma:300,400,500,600,700"
            }, {
                "family"  : "Kotta One",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Kotta+One:400"
            }, {
                "family"  : "Kreon",
                "variants": ["300", "400", "700"],
                "italic"  : false,
                "str"     : "Kreon:300,400,700"
            }, {
                "family"  : "Laila",
                "variants": ["300", "400", "500", "600", "700"],
                "italic"  : false,
                "str"     : "Laila:300,400,500,600,700"
            }, {
                "family"  : "Ledger",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Ledger:400"
            }, {
                "family"  : "Libre Baskerville",
                "variants": ["400", "700"],
                "italic"  : false,
                "str"     : "Libre+Baskerville:400,700"
            }, {
                "family"  : "Linden Hill",
                "variants": ["400"],
                "italic"  : true,
                "str"     : "Linden+Hill:400,400i"
            }, {
                "family"  : "Lora",
                "variants": ["400", "700"],
                "italic"  : true,
                "str"     : "Lora:400,700,400i,700i"
            }, {
                "family"  : "Lusitana",
                "variants": ["400", "700"],
                "italic"  : false,
                "str"     : "Lusitana:400,700"
            }, {
                "family"  : "Lustria",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Lustria:400"
            }, {
                "family"  : "Marcellus",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Marcellus:400"
            }, {
                "family"  : "Marcellus SC",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Marcellus+SC:400"
            }, {
                "family"  : "Marko One",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Marko+One:400"
            }, {
                "family"  : "Mate",
                "variants": ["400"],
                "italic"  : true,
                "str"     : "Mate:400,400i"
            }, {
                "family"  : "Mate SC",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Mate+SC:400"
            }, {
                "family"  : "Merriweather",
                "variants": ["300", "400", "700", "900"],
                "italic"  : true,
                "str"     : "Merriweather:300,400,700,900,300i,400i,700i,900i"
            }, {
                "family"  : "Montaga",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Montaga:400"
            }, {
                "family"  : "Neuton",
                "variants": ["200", "300", "400", "700", "800"],
                "italic"  : false,
                "str"     : "Neuton:200,300,400,700,800"
            }, {
                "family"  : "Noticia Text",
                "variants": ["400", "700"],
                "italic"  : true,
                "str"     : "Noticia+Text:400,700,400i,700i"
            }, {
                "family"  : "Noto Serif",
                "variants": ["400", "700"],
                "italic"  : true,
                "str"     : "Noto+Serif:400,700,400i,700i"
            }, {
                "family"  : "Old Standard TT",
                "variants": ["400", "700"],
                "italic"  : false,
                "str"     : "Old+Standard TT:400,700"
            }, {
                "family"  : "Oranienbaum",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Oranienbaum:400"
            }, {"family": "Ovo", "variants": ["400"], "italic": false, "str": "Ovo:400"}, {
                "family"  : "PT Serif",
                "variants": ["400", "700"],
                "italic"  : true,
                "str"     : "PT+Serif:400,700,400i,700i"
            }, {
                "family"  : "PT Serif Caption",
                "variants": ["400"],
                "italic"  : true,
                "str"     : "PT+Serif Caption:400,400i"
            }, {
                "family"  : "Petrona",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Petrona:400"
            }, {
                "family"  : "Playfair Display",
                "variants": ["400", "700", "900"],
                "italic"  : true,
                "str"     : "Playfair+Display:400,700,900,400i,700i,900i"
            }, {
                "family"  : "Playfair Display SC",
                "variants": ["400", "700", "900"],
                "italic"  : true,
                "str"     : "Playfair+Display SC:400,700,900,400i,700i,900i"
            }, {
                "family"  : "Podkova",
                "variants": ["400", "700"],
                "italic"  : false,
                "str"     : "Podkova:400,700"
            }, {
                "family"  : "Poly",
                "variants": ["400"],
                "italic"  : true,
                "str"     : "Poly:400,400i"
            }, {
                "family"  : "Port Lligat Slab",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Port+Lligat Slab:400"
            }, {
                "family"  : "Prata",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Prata:400"
            }, {
                "family"  : "Prociono",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Prociono:400"
            }, {
                "family"  : "Quando",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Quando:400"
            }, {
                "family"  : "Quattrocento",
                "variants": ["400", "700"],
                "italic"  : false,
                "str"     : "Quattrocento:400,700"
            }, {
                "family"  : "Radley",
                "variants": ["400"],
                "italic"  : true,
                "str"     : "Radley:400,400i"
            }, {
                "family"  : "Roboto Slab",
                "variants": ["100", "300", "400", "700"],
                "italic"  : false,
                "str"     : "Roboto+Slab:100,300,400,700"
            }, {
                "family"  : "Rokkitt",
                "variants": ["400", "700"],
                "italic"  : false,
                "str"     : "Rokkitt:400,700"
            }, {
                "family"  : "Rosarivo",
                "variants": ["400"],
                "italic"  : true,
                "str"     : "Rosarivo:400,400i"
            }, {
                "family"  : "Rozha One",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Rozha+One:400"
            }, {
                "family"  : "Rufina",
                "variants": ["400", "700"],
                "italic"  : false,
                "str"     : "Rufina:400,700"
            }, {
                "family"  : "Sanchez",
                "variants": ["400"],
                "italic"  : true,
                "str"     : "Sanchez:400,400i"
            }, {
                "family"  : "Slabo 13px",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Slabo+13px:400"
            }, {
                "family"  : "Slabo 27px",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Slabo+27px:400"
            }, {
                "family"  : "Sorts Mill Goudy",
                "variants": ["400"],
                "italic"  : true,
                "str"     : "Sorts+Mill Goudy:400,400i"
            }, {
                "family"  : "Source Serif Pro",
                "variants": ["400", "600", "700"],
                "italic"  : false,
                "str"     : "Source+Serif Pro:400,600,700"
            }, {
                "family"  : "Stoke",
                "variants": ["300", "400"],
                "italic"  : false,
                "str"     : "Stoke:300,400"
            }, {
                "family"  : "Tienne",
                "variants": ["400", "700", "900"],
                "italic"  : false,
                "str"     : "Tienne:400,700,900"
            }, {
                "family"  : "Tinos",
                "variants": ["400", "700"],
                "italic"  : true,
                "str"     : "Tinos:400,700,400i,700i"
            }, {
                "family"  : "Trocchi",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Trocchi:400"
            }, {
                "family"  : "Trykker",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Trykker:400"
            }, {"family": "Ultra", "variants": ["400"], "italic": false, "str": "Ultra:400"}, {
                "family"  : "Unna",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Unna:400"
            }, {
                "family"  : "Vesper Libre",
                "variants": ["400", "500", "700", "900"],
                "italic"  : false,
                "str"     : "Vesper+Libre:400,500,700,900"
            }, {
                "family"  : "Vidaloka",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Vidaloka:400"
            }, {
                "family"  : "Volkhov",
                "variants": ["400", "700"],
                "italic"  : true,
                "str"     : "Volkhov:400,700,400i,700i"
            }, {
                "family"  : "Vollkorn",
                "variants": ["400", "700"],
                "italic"  : true,
                "str"     : "Vollkorn:400,700,400i,700i"
            }]
        },
        "SansSerif"  : {
            "fonts": [{
                "family"  : "ABeeZee",
                "variants": ["400"],
                "italic"  : true,
                "str"     : "ABeeZee:400,400i"
            }, {
                "family"  : "Abel",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Abel:400"
            }, {
                "family"  : "Aclonica",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Aclonica:400"
            }, {
                "family"  : "Acme",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Acme:400"
            }, {
                "family"  : "Actor",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Actor:400"
            }, {
                "family"  : "Advent Pro",
                "variants": ["100", "200", "300", "400", "500", "600", "700"],
                "italic"  : false,
                "str"     : "Advent+Pro:100,200,300,400,500,600,700"
            }, {
                "family"  : "Aldrich",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Aldrich:400"
            }, {
                "family"  : "Alef",
                "variants": ["400", "700"],
                "italic"  : false,
                "str"     : "Alef:400,700"
            }, {
                "family"  : "Alegreya Sans",
                "variants": ["100", "300", "400", "500", "700", "800", "900"],
                "italic"  : true,
                "str"     : "Alegreya+Sans:100,300,400,500,700,800,900,100i,300i,400i,500i,700i,800i,900i"
            }, {
                "family"  : "Alegreya Sans SC",
                "variants": ["100", "300", "400", "500", "700", "800", "900"],
                "italic"  : true,
                "str"     : "Alegreya+Sans SC:100,300,400,500,700,800,900,100i,300i,400i,500i,700i,800i,900i"
            }, {
                "family"  : "Allerta",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Allerta:400"
            }, {
                "family"  : "Allerta Stencil",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Allerta+Stencil:400"
            }, {
                "family"  : "Amaranth",
                "variants": ["400", "700"],
                "italic"  : true,
                "str"     : "Amaranth:400,700,400i,700i"
            }, {
                "family"  : "Anaheim",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Anaheim:400"
            }, {
                "family"  : "Andika",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Andika:400"
            }, {
                "family"  : "Antic",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Antic:400"
            }, {
                "family"  : "Anton",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Anton:400"
            }, {
                "family"  : "Archivo Black",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Archivo+Black:400"
            }, {
                "family"  : "Archivo Narrow",
                "variants": ["400", "700"],
                "italic"  : true,
                "str"     : "Archivo+Narrow:400,700,400i,700i"
            }, {
                "family"  : "Arimo",
                "variants": ["400", "700"],
                "italic"  : true,
                "str"     : "Arimo:400,700,400i,700i"
            }, {
                "family"  : "Armata",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Armata:400"
            }, {
                "family"  : "Asap",
                "variants": ["400", "700"],
                "italic"  : true,
                "str"     : "Asap:400,700,400i,700i"
            }, {
                "family"  : "Asul",
                "variants": ["400", "700"],
                "italic"  : false,
                "str"     : "Asul:400,700"
            }, {
                "family"  : "Average Sans",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Average+Sans:400"
            }, {
                "family"  : "Basic",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Basic:400"
            }, {
                "family"  : "Belleza",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Belleza:400"
            }, {
                "family"  : "BenchNine",
                "variants": ["300", "400", "700"],
                "italic"  : false,
                "str"     : "BenchNine:300,400,700"
            }, {
                "family"  : "Bubbler One",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Bubbler+One:400"
            }, {
                "family"  : "Cabin",
                "variants": ["400", "500", "600", "700"],
                "italic"  : true,
                "str"     : "Cabin:400,500,600,700,400i,500i,600i,700i"
            }, {
                "family"  : "Cabin Condensed",
                "variants": ["400", "500", "600", "700"],
                "italic"  : false,
                "str"     : "Cabin+Condensed:400,500,600,700"
            }, {
                "family"  : "Cagliostro",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Cagliostro:400"
            }, {
                "family"  : "Candal",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Candal:400"
            }, {
                "family"  : "Cantarell",
                "variants": ["400", "700"],
                "italic"  : true,
                "str"     : "Cantarell:400,700,400i,700i"
            }, {
                "family"  : "Cantora One",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Cantora+One:400"
            }, {
                "family"  : "Capriola",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Capriola:400"
            }, {
                "family"  : "Carme",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Carme:400"
            }, {
                "family"  : "Carrois Gothic",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Carrois+Gothic:400"
            }, {
                "family"  : "Carrois Gothic SC",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Carrois+Gothic SC:400"
            }, {
                "family"  : "Chau Philomene One",
                "variants": ["400"],
                "italic"  : true,
                "str"     : "Chau+Philomene One:400,400i"
            }, {
                "family"  : "Chivo",
                "variants": ["400", "900"],
                "italic"  : true,
                "str"     : "Chivo:400,900,400i,900i"
            }, {
                "family"  : "Convergence",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Convergence:400"
            }, {
                "family"  : "Cuprum",
                "variants": ["400", "700"],
                "italic"  : true,
                "str"     : "Cuprum:400,700,400i,700i"
            }, {
                "family"  : "Days One",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Days+One:400"
            }, {
                "family"  : "Denk One",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Denk+One:400"
            }, {
                "family"  : "Didact Gothic",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Didact+Gothic:400"
            }, {
                "family"  : "Doppio One",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Doppio+One:400"
            }, {
                "family"  : "Dorsa",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Dorsa:400"
            }, {
                "family"  : "Dosis",
                "variants": ["200", "300", "400", "500", "600", "700", "800"],
                "italic"  : false,
                "str"     : "Dosis:200,300,400,500,600,700,800"
            }, {
                "family"  : "Droid Sans",
                "variants": ["400", "700"],
                "italic"  : false,
                "str"     : "Droid+Sans:400,700"
            }, {
                "family"  : "Duru Sans",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Duru+Sans:400"
            }, {
                "family"  : "Economica",
                "variants": ["400", "700"],
                "italic"  : true,
                "str"     : "Economica:400,700,400i,700i"
            }, {
                "family"  : "Ek Mukta",
                "variants": ["200", "300", "400", "500", "600", "700", "800"],
                "italic"  : false,
                "str"     : "Ek+Mukta:200,300,400,500,600,700,800"
            }, {
                "family"  : "Electrolize",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Electrolize:400"
            }, {
                "family"  : "Englebert",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Englebert:400"
            }, {
                "family"  : "Exo",
                "variants": ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
                "italic"  : true,
                "str"     : "Exo:100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i"
            }, {
                "family"  : "Exo 2",
                "variants": ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
                "italic"  : true,
                "str"     : "Exo+2:100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i"
            }, {
                "family"  : "Federo",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Federo:400"
            }, {
                "family"  : "Fira Sans",
                "variants": ["300", "400", "500", "700"],
                "italic"  : true,
                "str"     : "Fira+Sans:300,400,500,700,300i,400i,500i,700i"
            }, {
                "family"  : "Fjalla One",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Fjalla+One:400"
            }, {
                "family"  : "Francois One",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Francois+One:400"
            }, {
                "family"  : "Fresca",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Fresca:400"
            }, {
                "family"  : "GFS Neohellenic",
                "variants": ["400", "700"],
                "italic"  : true,
                "str"     : "GFS+Neohellenic:400,700,400i,700i"
            }, {
                "family"  : "Gafata",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Gafata:400"
            }, {
                "family"  : "Galdeano",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Galdeano:400"
            }, {
                "family"  : "Geo",
                "variants": ["400"],
                "italic"  : true,
                "str"     : "Geo:400,400i"
            }, {
                "family"  : "Gudea",
                "variants": ["400", "700"],
                "italic"  : false,
                "str"     : "Gudea:400,700"
            }, {
                "family"  : "Hammersmith One",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Hammersmith+One:400"
            }, {
                "family"  : "Hind",
                "variants": ["300", "400", "500", "600", "700"],
                "italic"  : false,
                "str"     : "Hind:300,400,500,600,700"
            }, {
                "family"  : "Homenaje",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Homenaje:400"
            }, {
                "family"  : "Imprima",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Imprima:400"
            }, {
                "family"  : "Inder",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Inder:400"
            }, {
                "family"  : "Istok Web",
                "variants": ["400", "700"],
                "italic"  : true,
                "str"     : "Istok+Web:400,700,400i,700i"
            }, {
                "family"  : "Jockey One",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Jockey+One:400"
            }, {
                "family"  : "Josefin Sans",
                "variants": ["100", "300", "400", "600", "700"],
                "italic"  : true,
                "str"     : "Josefin+Sans:100,300,400,600,700,100i,300i,400i,600i,700i"
            }, {
                "family"  : "Julius Sans One",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Julius+Sans One:400"
            }, {
                "family"  : "Jura",
                "variants": ["300", "400", "500", "600"],
                "italic"  : false,
                "str"     : "Jura:300,400,500,600"
            }, {
                "family"  : "Karla",
                "variants": ["400", "700"],
                "italic"  : true,
                "str"     : "Karla:400,700,400i,700i"
            }, {
                "family"  : "Khand",
                "variants": ["300", "400", "500", "600", "700"],
                "italic"  : false,
                "str"     : "Khand:300,400,500,600,700"
            }, {
                "family"  : "Kite One",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Kite+One:400"
            }, {
                "family"  : "Krona One",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Krona+One:400"
            }, {
                "family"  : "Lato",
                "variants": ["100", "300", "400", "700", "900"],
                "italic"  : true,
                "str"     : "Lato:100,300,400,700,900,100i,300i,400i,700i,900i"
            }, {
                "family"  : "Lekton",
                "variants": ["400", "700"],
                "italic"  : false,
                "str"     : "Lekton:400,700"
            }, {
                "family"  : "Magra",
                "variants": ["400", "700"],
                "italic"  : false,
                "str"     : "Magra:400,700"
            }, {
                "family"  : "Mako",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Mako:400"
            }, {
                "family"  : "Marmelad",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Marmelad:400"
            }, {
                "family"  : "Marvel",
                "variants": ["400", "700"],
                "italic"  : true,
                "str"     : "Marvel:400,700,400i,700i"
            }, {
                "family"  : "Maven Pro",
                "variants": ["400", "500", "700", "900"],
                "italic"  : false,
                "str"     : "Maven+Pro:400,500,700,900"
            }, {
                "family"  : "Merriweather Sans",
                "variants": ["300", "400", "700", "800"],
                "italic"  : true,
                "str"     : "Merriweather+Sans:300,400,700,800,300i,400i,700i,800i"
            }, {
                "family"  : "Metrophobic",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Metrophobic:400"
            }, {
                "family"  : "Michroma",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Michroma:400"
            }, {
                "family"  : "Molengo",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Molengo:400"
            }, {
                "family"  : "Monda",
                "variants": ["400", "700"],
                "italic"  : false,
                "str"     : "Monda:400,700"
            }, {
                "family"  : "Montserrat",
                "variants": ["400", "700"],
                "italic"  : false,
                "str"     : "Montserrat:400,700"
            }, {
                "family"  : "Montserrat Alternates",
                "variants": ["400", "700"],
                "italic"  : false,
                "str"     : "Montserrat+Alternates:400,700"
            }, {
                "family"  : "Montserrat Subrayada",
                "variants": ["400", "700"],
                "italic"  : false,
                "str"     : "Montserrat+Subrayada:400,700"
            }, {
                "family"  : "Mouse Memoirs",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Mouse+Memoirs:400"
            }, {
                "family"  : "Muli",
                "variants": ["300", "400"],
                "italic"  : true,
                "str"     : "Muli:300,400,300i,400i"
            }, {
                "family"  : "News Cycle",
                "variants": ["400", "700"],
                "italic"  : false,
                "str"     : "News+Cycle:400,700"
            }, {
                "family"  : "Nobile",
                "variants": ["400", "700"],
                "italic"  : true,
                "str"     : "Nobile:400,700,400i,700i"
            }, {
                "family"  : "Noto Sans",
                "variants": ["400", "700"],
                "italic"  : true,
                "str"     : "Noto+Sans:400,700,400i,700i"
            }, {
                "family"  : "Numans",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Numans:400"
            }, {
                "family"  : "Nunito",
                "variants": ["300", "400", "700"],
                "italic"  : false,
                "str"     : "Nunito:300,400,700"
            }, {
                "family"  : "Open Sans",
                "variants": ["300", "400", "600", "700", "800"],
                "italic"  : true,
                "str"     : "Open+Sans:300,400,600,700,800,300i,400i,600i,700i,800i"
            }, {
                "family"  : "Open Sans Condensed",
                "variants": ["300", "700"],
                "italic"  : false,
                "str"     : "Open+Sans Condensed:300,700"
            }, {
                "family"  : "Orbitron",
                "variants": ["400", "500", "700", "900"],
                "italic"  : false,
                "str"     : "Orbitron:400,500,700,900"
            }, {
                "family"  : "Orienta",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Orienta:400"
            }, {
                "family"  : "Oswald",
                "variants": ["300", "400", "700"],
                "italic"  : false,
                "str"     : "Oswald:300,400,700"
            }, {
                "family"  : "Oxygen",
                "variants": ["300", "400", "700"],
                "italic"  : false,
                "str"     : "Oxygen:300,400,700"
            }, {
                "family"  : "PT Sans",
                "variants": ["400", "700"],
                "italic"  : true,
                "str"     : "PT+Sans:400,700,400i,700i"
            }, {
                "family"  : "PT Sans Caption",
                "variants": ["400", "700"],
                "italic"  : false,
                "str"     : "PT+Sans Caption:400,700"
            }, {
                "family"  : "PT Sans Narrow",
                "variants": ["400", "700"],
                "italic"  : false,
                "str"     : "PT+Sans Narrow:400,700"
            }, {
                "family"  : "Pathway Gothic One",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Pathway+Gothic One:400"
            }, {
                "family"  : "Paytone One",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Paytone+One:400"
            }, {
                "family"  : "Philosopher",
                "variants": ["400", "700"],
                "italic"  : true,
                "str"     : "Philosopher:400,700,400i,700i"
            }, {
                "family"  : "Play",
                "variants": ["400", "700"],
                "italic"  : false,
                "str"     : "Play:400,700"
            }, {
                "family"  : "Pontano Sans",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Pontano+Sans:400"
            }, {
                "family"  : "Port Lligat Sans",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Port+Lligat Sans:400"
            }, {
                "family"  : "Puritan",
                "variants": ["400", "700"],
                "italic"  : true,
                "str"     : "Puritan:400,700,400i,700i"
            }, {
                "family"  : "Quantico",
                "variants": ["400", "700"],
                "italic"  : true,
                "str"     : "Quantico:400,700,400i,700i"
            }, {
                "family"  : "Quattrocento Sans",
                "variants": ["400", "700"],
                "italic"  : true,
                "str"     : "Quattrocento+Sans:400,700,400i,700i"
            }, {
                "family"  : "Questrial",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Questrial:400"
            }, {
                "family"  : "Quicksand",
                "variants": ["300", "400", "700"],
                "italic"  : false,
                "str"     : "Quicksand:300,400,700"
            }, {
                "family"  : "Rajdhani",
                "variants": ["300", "400", "500", "600", "700"],
                "italic"  : false,
                "str"     : "Rajdhani:300,400,500,600,700"
            }, {
                "family"  : "Raleway",
                "variants": ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
                "italic"  : false,
                "str"     : "Raleway:100,200,300,400,500,600,700,800,900"
            }, {
                "family"  : "Rambla",
                "variants": ["400", "700"],
                "italic"  : true,
                "str"     : "Rambla:400,700,400i,700i"
            }, {
                "family"  : "Rationale",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Rationale:400"
            }, {
                "family"  : "Roboto",
                "variants": ["100", "300", "400", "500", "700", "900"],
                "italic"  : true,
                "str"     : "Roboto:100,300,400,500,700,900,100i,300i,400i,500i,700i,900i"
            }, {
                "family"  : "Roboto Condensed",
                "variants": ["300", "400", "700"],
                "italic"  : true,
                "str"     : "Roboto+Condensed:300,400,700,300i,400i,700i"
            }, {
                "family"  : "Ropa Sans",
                "variants": ["400"],
                "italic"  : true,
                "str"     : "Ropa+Sans:400,400i"
            }, {
                "family"  : "Rosario",
                "variants": ["400", "700"],
                "italic"  : true,
                "str"     : "Rosario:400,700,400i,700i"
            }, {
                "family"  : "Rubik Mono One",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Rubik+Mono One:400"
            }, {
                "family"  : "Rubik One",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Rubik+One:400"
            }, {
                "family"  : "Ruda",
                "variants": ["400", "700", "900"],
                "italic"  : false,
                "str"     : "Ruda:400,700,900"
            }, {
                "family"  : "Ruluko",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Ruluko:400"
            }, {
                "family"  : "Rum Raisin",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Rum+Raisin:400"
            }, {
                "family"  : "Russo One",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Russo+One:400"
            }, {
                "family"  : "Sarpanch",
                "variants": ["400", "500", "600", "700", "800", "900"],
                "italic"  : false,
                "str"     : "Sarpanch:400,500,600,700,800,900"
            }, {
                "family"  : "Scada",
                "variants": ["400", "700"],
                "italic"  : true,
                "str"     : "Scada:400,700,400i,700i"
            }, {
                "family"  : "Seymour One",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Seymour+One:400"
            }, {
                "family"  : "Shanti",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Shanti:400"
            }, {
                "family"  : "Share Tech",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Share+Tech:400"
            }, {
                "family"  : "Signika",
                "variants": ["300", "400", "600", "700"],
                "italic"  : false,
                "str"     : "Signika:300,400,600,700"
            }, {
                "family"  : "Signika Negative",
                "variants": ["300", "400", "600", "700"],
                "italic"  : false,
                "str"     : "Signika+Negative:300,400,600,700"
            }, {
                "family"  : "Sintony",
                "variants": ["400", "700"],
                "italic"  : false,
                "str"     : "Sintony:400,700"
            }, {
                "family"  : "Six Caps",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Six+Caps:400"
            }, {
                "family"  : "Snippet",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Snippet:400"
            }, {
                "family"  : "Source Sans Pro",
                "variants": ["200", "300", "400", "600", "700", "900"],
                "italic"  : true,
                "str"     : "Source+Sans Pro:200,300,400,600,700,900,200i,300i,400i,600i,700i,900i"
            }, {
                "family"  : "Spinnaker",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Spinnaker:400"
            }, {
                "family"  : "Strait",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Strait:400"
            }, {
                "family"  : "Syncopate",
                "variants": ["400", "700"],
                "italic"  : false,
                "str"     : "Syncopate:400,700"
            }, {
                "family"  : "Tauri",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Tauri:400"
            }, {
                "family"  : "Teko",
                "variants": ["300", "400", "500", "600", "700"],
                "italic"  : false,
                "str"     : "Teko:300,400,500,600,700"
            }, {
                "family"  : "Telex",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Telex:400"
            }, {
                "family"  : "Tenor Sans",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Tenor+Sans:400"
            }, {
                "family"  : "Text Me One",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Text+Me One:400"
            }, {
                "family"  : "Titillium Web",
                "variants": ["200", "300", "400", "600", "700", "900"],
                "italic"  : false,
                "str"     : "Titillium+Web:200,300,400,600,700,900"
            }, {
                "family"  : "Ubuntu",
                "variants": ["300", "400", "500", "700"],
                "italic"  : true,
                "str"     : "Ubuntu:300,400,500,700,300i,400i,500i,700i"
            }, {
                "family"  : "Ubuntu Condensed",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Ubuntu+Condensed:400"
            }, {
                "family"  : "Varela",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Varela:400"
            }, {
                "family"  : "Varela Round",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Varela+Round:400"
            }, {
                "family"  : "Viga",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Viga:400"
            }, {
                "family"  : "Voltaire",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Voltaire:400"
            }, {
                "family"  : "Wendy One",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Wendy+One:400"
            }, {
                "family"  : "Wire One",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Wire+One:400"
            }, {
                "family"  : "Yanone Kaffeesatz",
                "variants": ["200", "300", "400", "700"],
                "italic"  : false,
                "str"     : "Yanone+Kaffeesatz:200,300,400,700"
            }]
        },
        "Handwriting": {
            "fonts": [{
                "family"  : "Aguafina Script",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Aguafina+Script:400"
            }, {
                "family"  : "Aladin",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Aladin:400"
            }, {
                "family"  : "Alex Brush",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Alex+Brush:400"
            }, {
                "family"  : "Allura",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Allura:400"
            }, {
                "family"  : "Amatic SC",
                "variants": ["400", "700"],
                "italic"  : false,
                "str"     : "Amatic+SC:400,700"
            }, {
                "family"  : "Annie Use Your Telescope",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Annie+Use Your Telescope:400"
            }, {
                "family"  : "Architects Daughter",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Architects+Daughter:400"
            }, {
                "family"  : "Arizonia",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Arizonia:400"
            }, {
                "family"  : "Bad Script",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Bad+Script:400"
            }, {
                "family"  : "Berkshire Swash",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Berkshire+Swash:400"
            }, {
                "family"  : "Bilbo",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Bilbo:400"
            }, {
                "family"  : "Bilbo Swash Caps",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Bilbo+Swash Caps:400"
            }, {
                "family"  : "Bonbon",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Bonbon:400"
            }, {
                "family"  : "Butterfly Kids",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Butterfly+Kids:400"
            }, {
                "family"  : "Calligraffitti",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Calligraffitti:400"
            }, {
                "family"  : "Cedarville Cursive",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Cedarville+Cursive:400"
            }, {
                "family"  : "Clicker Script",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Clicker+Script:400"
            }, {
                "family"  : "Coming Soon",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Coming+Soon:400"
            }, {
                "family"  : "Condiment",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Condiment:400"
            }, {
                "family"  : "Cookie",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Cookie:400"
            }, {
                "family"  : "Courgette",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Courgette:400"
            }, {
                "family"  : "Covered By Your Grace",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Covered+By Your Grace:400"
            }, {
                "family"  : "Crafty Girls",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Crafty+Girls:400"
            }, {
                "family"  : "Damion",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Damion:400"
            }, {
                "family"  : "Dancing Script",
                "variants": ["400", "700"],
                "italic"  : false,
                "str"     : "Dancing+Script:400,700"
            }, {
                "family"  : "Dawning of a New Day",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Dawning+of a New Day:400"
            }, {
                "family"  : "Delius",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Delius:400"
            }, {
                "family"  : "Delius Swash Caps",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Delius+Swash Caps:400"
            }, {
                "family"  : "Delius Unicase",
                "variants": ["400", "700"],
                "italic"  : false,
                "str"     : "Delius+Unicase:400,700"
            }, {
                "family"  : "Devonshire",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Devonshire:400"
            }, {
                "family"  : "Dr Sugiyama",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Dr+Sugiyama:400"
            }, {
                "family"  : "Eagle Lake",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Eagle+Lake:400"
            }, {
                "family"  : "Engagement",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Engagement:400"
            }, {
                "family"  : "Euphoria Script",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Euphoria+Script:400"
            }, {
                "family"  : "Felipa",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Felipa:400"
            }, {
                "family"  : "Fondamento",
                "variants": ["400"],
                "italic"  : true,
                "str"     : "Fondamento:400,400i"
            }, {
                "family"  : "Give You Glory",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Give+You Glory:400"
            }, {
                "family"  : "Gloria Hallelujah",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Gloria+Hallelujah:400"
            }, {
                "family"  : "Gochi Hand",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Gochi+Hand:400"
            }, {
                "family"  : "Grand Hotel",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Grand+Hotel:400"
            }, {
                "family"  : "Great Vibes",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Great+Vibes:400"
            }, {
                "family"  : "Handlee",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Handlee:400"
            }, {
                "family"  : "Herr Von Muellerhoff",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Herr+Von Muellerhoff:400"
            }, {
                "family"  : "Homemade Apple",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Homemade+Apple:400"
            }, {
                "family"  : "Indie Flower",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Indie+Flower:400"
            }, {
                "family"  : "Italianno",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Italianno:400"
            }, {
                "family"  : "Jim Nightshade",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Jim+Nightshade:400"
            }, {
                "family"  : "Julee",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Julee:400"
            }, {
                "family"  : "Just Another Hand",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Just+Another Hand:400"
            }, {
                "family"  : "Just Me Again Down Here",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Just+Me Again Down Here:400"
            }, {
                "family"  : "Kalam",
                "variants": ["300", "400", "700"],
                "italic"  : false,
                "str"     : "Kalam:300,400,700"
            }, {
                "family"  : "Kaushan Script",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Kaushan+Script:400"
            }, {
                "family"  : "Kristi",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Kristi:400"
            }, {
                "family"  : "La Belle Aurore",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "La+Belle Aurore:400"
            }, {
                "family"  : "League Script",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "League+Script:400"
            }, {
                "family"  : "Leckerli One",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Leckerli+One:400"
            }, {
                "family"  : "Loved by the King",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Loved+by the King:400"
            }, {
                "family"  : "Lovers Quarrel",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Lovers+Quarrel:400"
            }, {
                "family"  : "Marck Script",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Marck+Script:400"
            }, {
                "family"  : "Meddon",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Meddon:400"
            }, {
                "family"  : "Meie Script",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Meie+Script:400"
            }, {
                "family"  : "Merienda",
                "variants": ["400", "700"],
                "italic"  : false,
                "str"     : "Merienda:400,700"
            }, {
                "family"  : "Merienda One",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Merienda+One:400"
            }, {
                "family"  : "Miss Fajardose",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Miss+Fajardose:400"
            },
                /*                    {
                 "family": "Molle",
                 "variants": ["400"],
                 "italic": true,
                 "str": "Molle:400,400i"
                 },*/
                {
                    "family"  : "Monsieur La Doulaise",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Monsieur+La Doulaise:400"
                }, {
                    "family"  : "Montez",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Montez:400"
                }, {
                    "family"  : "Mr Bedfort",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Mr+Bedfort:400"
                }, {
                    "family"  : "Mr Dafoe",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Mr+Dafoe:400"
                }, {
                    "family"  : "Mr De Haviland",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Mr+De Haviland:400"
                }, {
                    "family"  : "Mrs Saint Delafield",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Mrs+Saint Delafield:400"
                }, {
                    "family"  : "Mrs Sheppards",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Mrs+Sheppards:400"
                }, {
                    "family"  : "Neucha",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Neucha:400"
                }, {
                    "family"  : "Niconne",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Niconne:400"
                }, {
                    "family"  : "Norican",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Norican:400"
                }, {
                    "family"  : "Nothing You Could Do",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Nothing+You Could Do:400"
                }, {
                    "family"  : "Over the Rainbow",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Over+the Rainbow:400"
                }, {
                    "family"  : "Pacifico",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Pacifico:400"
                }, {
                    "family"  : "Parisienne",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Parisienne:400"
                }, {
                    "family"  : "Patrick Hand",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Patrick+Hand:400"
                }, {
                    "family"  : "Patrick Hand SC",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Patrick+Hand SC:400"
                }, {
                    "family"  : "Permanent Marker",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Permanent+Marker:400"
                }, {
                    "family"  : "Petit Formal Script",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Petit+Formal Script:400"
                }, {
                    "family"  : "Pinyon Script",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Pinyon+Script:400"
                }, {
                    "family"  : "Princess Sofia",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Princess+Sofia:400"
                }, {
                    "family"  : "Quintessential",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Quintessential:400"
                }, {
                    "family"  : "Qwigley",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Qwigley:400"
                }, {
                    "family"  : "Rancho",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Rancho:400"
                }, {
                    "family"  : "Redressed",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Redressed:400"
                }, {
                    "family"  : "Reenie Beanie",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Reenie+Beanie:400"
                }, {
                    "family"  : "Rochester",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Rochester:400"
                }, {
                    "family"  : "Rock Salt",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Rock+Salt:400"
                }, {
                    "family"  : "Romanesco",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Romanesco:400"
                }, {
                    "family"  : "Rouge Script",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Rouge+Script:400"
                }, {
                    "family"  : "Ruge Boogie",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Ruge+Boogie:400"
                }, {
                    "family"  : "Ruthie",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Ruthie:400"
                }, {
                    "family"  : "Sacramento",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Sacramento:400"
                }, {
                    "family"  : "Satisfy",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Satisfy:400"
                }, {
                    "family"  : "Schoolbell",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Schoolbell:400"
                }, {
                    "family"  : "Shadows Into Light",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Shadows+Into Light:400"
                }, {
                    "family"  : "Shadows Into Light Two",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Shadows+Into Light Two:400"
                }, {
                    "family"  : "Short Stack",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Short+Stack:400"
                }, {
                    "family"  : "Sofia",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Sofia:400"
                }, {
                    "family"  : "Stalemate",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Stalemate:400"
                }, {
                    "family"  : "Sue Ellen Francisco",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Sue+Ellen Francisco:400"
                }, {
                    "family"  : "Sunshiney",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Sunshiney:400"
                }, {
                    "family"  : "Swanky and Moo Moo",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Swanky+and Moo Moo:400"
                }, {
                    "family"  : "Tangerine",
                    "variants": ["400", "700"],
                    "italic"  : false,
                    "str"     : "Tangerine:400,700"
                }, {
                    "family"  : "The Girl Next Door",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "The+Girl Next Door:400"
                }, {
                    "family"  : "Vibur",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Vibur:400"
                }, {
                    "family"  : "Waiting for the Sunrise",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Waiting+for the Sunrise:400"
                }, {
                    "family"  : "Walter Turncoat",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Walter+Turncoat:400"
                }, {
                    "family"  : "Yellowtail",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Yellowtail:400"
                }, {
                    "family"  : "Yesteryear",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Yesteryear:400"
                }, {"family": "Zeyada", "variants": ["400"], "italic": false, "str": "Zeyada:400"}]
        },
        "Display"    : {
            "fonts": [{
                "family"  : "Abril Fatface",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Abril+Fatface:400"
            }, {
                "family"  : "Akronim",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Akronim:400"
            }, {
                "family"  : "Alfa Slab One",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Alfa+Slab One:400"
            }, {
                "family"  : "Allan",
                "variants": ["400", "700"],
                "italic"  : false,
                "str"     : "Allan:400,700"
            }, {
                "family"  : "Almendra Display",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Almendra+Display:400"
            }, {
                "family"  : "Amarante",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Amarante:400"
            }, {
                "family"  : "Arbutus",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Arbutus:400"
            }, {
                "family"  : "Asset",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Asset:400"
            }, {
                "family"  : "Astloch",
                "variants": ["400", "700"],
                "italic"  : false,
                "str"     : "Astloch:400,700"
            }, {
                "family"  : "Atomic Age",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Atomic+Age:400"
            }, {
                "family"  : "Aubrey",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Aubrey:400"
            }, {
                "family"  : "Audiowide",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Audiowide:400"
            }, {
                "family"  : "Autour One",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Autour+One:400"
            }, {
                "family"  : "Averia Gruesa Libre",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Averia+Gruesa Libre:400"
            }, {
                "family"  : "Averia Libre",
                "variants": ["300", "400", "700"],
                "italic"  : true,
                "str"     : "Averia+Libre:300,400,700,300i,400i,700i"
            }, {
                "family"  : "Averia Sans Libre",
                "variants": ["300", "400", "700"],
                "italic"  : true,
                "str"     : "Averia+Sans Libre:300,400,700,300i,400i,700i"
            }, {
                "family"  : "Averia Serif Libre",
                "variants": ["300", "400", "700"],
                "italic"  : true,
                "str"     : "Averia+Serif Libre:300,400,700,300i,400i,700i"
            }, {
                "family"  : "Bangers",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Bangers:400"
            }, {
                "family"  : "Baumans",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Baumans:400"
            }, {
                "family"  : "Bevan",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Bevan:400"
            }, {
                "family"  : "Bigelow Rules",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Bigelow+Rules:400"
            }, {
                "family"  : "Bigshot One",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Bigshot+One:400"
            }, {
                "family"  : "Black Ops One",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Black+Ops One:400"
            }, {
                "family"  : "Boogaloo",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Boogaloo:400"
            }, {
                "family"  : "Bowlby One",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Bowlby+One:400"
            }, {
                "family"  : "Bowlby One SC",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Bowlby+One SC:400"
            }, {
                "family"  : "Bubblegum Sans",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Bubblegum+Sans:400"
            },
                /*
                 {
                 "family": "Buda",
                 "variants": ["300"],
                 "italic": false,
                 "str": "Buda:300"
                 },
                 */
                {
                    "family"  : "Butcherman",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Butcherman:400"
                }, {
                    "family"  : "Cabin Sketch",
                    "variants": ["400", "700"],
                    "italic"  : false,
                    "str"     : "Cabin+Sketch:400,700"
                }, {
                    "family"  : "Caesar Dressing",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Caesar+Dressing:400"
                }, {
                    "family"  : "Carter One",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Carter+One:400"
                }, {
                    "family"  : "Ceviche One",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Ceviche+One:400"
                }, {
                    "family"  : "Changa One",
                    "variants": ["400"],
                    "italic"  : true,
                    "str"     : "Changa+One:400,400i"
                }, {
                    "family"  : "Chango",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Chango:400"
                }, {
                    "family"  : "Chela One",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Chela+One:400"
                }, {
                    "family"  : "Chelsea Market",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Chelsea+Market:400"
                }, {
                    "family"  : "Cherry Cream Soda",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Cherry+Cream Soda:400"
                }, {
                    "family"  : "Cherry Swash",
                    "variants": ["400", "700"],
                    "italic"  : false,
                    "str"     : "Cherry+Swash:400,700"
                }, {
                    "family"  : "Chewy",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Chewy:400"
                }, {
                    "family"  : "Chicle",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Chicle:400"
                }, {
                    "family"  : "Cinzel Decorative",
                    "variants": ["400", "700", "900"],
                    "italic"  : false,
                    "str"     : "Cinzel+Decorative:400,700,900"
                }, {
                    "family"  : "Coda",
                    "variants": ["400", "800"],
                    "italic"  : false,
                    "str"     : "Coda:400,800"
                }, {
                    "family"  : "Codystar",
                    "variants": ["300", "400"],
                    "italic"  : false,
                    "str"     : "Codystar:300,400"
                }, {
                    "family"  : "Combo",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Combo:400"
                }, {
                    "family"  : "Comfortaa",
                    "variants": ["300", "400", "700"],
                    "italic"  : false,
                    "str"     : "Comfortaa:300,400,700"
                }, {
                    "family"  : "Concert One",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Concert+One:400"
                }, {
                    "family"  : "Contrail One",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Contrail+One:400"
                }, {
                    "family"  : "Corben",
                    "variants": ["400", "700"],
                    "italic"  : false,
                    "str"     : "Corben:400,700"
                }, {
                    "family"  : "Creepster",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Creepster:400"
                }, {
                    "family"  : "Croissant One",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Croissant+One:400"
                }, {
                    "family"  : "Crushed",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Crushed:400"
                }, {
                    "family"  : "Diplomata",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Diplomata:400"
                }, {
                    "family"  : "Diplomata SC",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Diplomata+SC:400"
                }, {
                    "family"  : "Dynalight",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Dynalight:400"
                }, {
                    "family"  : "Eater",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Eater:400"
                }, {
                    "family"  : "Elsie",
                    "variants": ["400", "900"],
                    "italic"  : false,
                    "str"     : "Elsie:400,900"
                }, {
                    "family"  : "Elsie Swash Caps",
                    "variants": ["400", "900"],
                    "italic"  : false,
                    "str"     : "Elsie+Swash Caps:400,900"
                }, {
                    "family"  : "Emblema One",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Emblema+One:400"
                }, {
                    "family"  : "Emilys Candy",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Emilys+Candy:400"
                }, {
                    "family"  : "Erica One",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Erica+One:400"
                }, {
                    "family"  : "Ewert",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Ewert:400"
                }, {
                    "family"  : "Expletus Sans",
                    "variants": ["400", "500", "600", "700"],
                    "italic"  : true,
                    "str"     : "Expletus+Sans:400,500,600,700,400i,500i,600i,700i"
                }, {
                    "family"  : "Fascinate",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Fascinate:400"
                }, {
                    "family"  : "Fascinate Inline",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Fascinate+Inline:400"
                }, {
                    "family"  : "Faster One",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Faster+One:400"
                }, {
                    "family"  : "Federant",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Federant:400"
                }, {
                    "family"  : "Finger Paint",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Finger+Paint:400"
                }, {
                    "family"  : "Flamenco",
                    "variants": ["300", "400"],
                    "italic"  : false,
                    "str"     : "Flamenco:300,400"
                }, {
                    "family"  : "Flavors",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Flavors:400"
                }, {
                    "family"  : "Fontdiner Swanky",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Fontdiner+Swanky:400"
                }, {
                    "family"  : "Forum",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Forum:400"
                }, {
                    "family"  : "Freckle Face",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Freckle+Face:400"
                }, {
                    "family"  : "Fredericka the Great",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Fredericka+the Great:400"
                }, {
                    "family"  : "Fredoka One",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Fredoka+One:400"
                }, {
                    "family"  : "Frijole",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Frijole:400"
                }, {
                    "family"  : "Fruktur",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Fruktur:400"
                }, {
                    "family"  : "Fugaz One",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Fugaz+One:400"
                }, {
                    "family"  : "Galindo",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Galindo:400"
                }, {
                    "family"  : "Geostar",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Geostar:400"
                }, {
                    "family"  : "Geostar Fill",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Geostar+Fill:400"
                }, {
                    "family"  : "Germania One",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Germania+One:400"
                }, {
                    "family"  : "Glass Antiqua",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Glass+Antiqua:400"
                }, {
                    "family"  : "Goblin One",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Goblin+One:400"
                }, {
                    "family"  : "Gorditas",
                    "variants": ["400", "700"],
                    "italic"  : false,
                    "str"     : "Gorditas:400,700"
                }, {
                    "family"  : "Graduate",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Graduate:400"
                }, {
                    "family"  : "Gravitas One",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Gravitas+One:400"
                }, {
                    "family"  : "Griffy",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Griffy:400"
                }, {
                    "family"  : "Gruppo",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Gruppo:400"
                }, {
                    "family"  : "Hanalei",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Hanalei:400"
                }, {
                    "family"  : "Hanalei Fill",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Hanalei+Fill:400"
                }, {
                    "family"  : "Happy Monkey",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Happy+Monkey:400"
                }, {
                    "family"  : "Henny Penny",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Henny+Penny:400"
                }, {
                    "family"  : "Iceberg",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Iceberg:400"
                }, {
                    "family"  : "Iceland",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Iceland:400"
                }, {
                    "family"  : "Irish Grover",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Irish+Grover:400"
                }, {
                    "family"  : "Jacques Francois Shadow",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Jacques+Francois Shadow:400"
                }, {
                    "family"  : "Jolly Lodger",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Jolly+Lodger:400"
                }, {
                    "family"  : "Joti One",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Joti+One:400"
                }, {
                    "family"  : "Kavoon",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Kavoon:400"
                },
                /*
                 {
                 "family"  : "Kdam Thmor",
                 "variants": ["400"],
                 "italic"  : false,
                 "str"     : "Kdam+Thmor:400"
                 },
                 */
                {
                    "family"  : "Keania One",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Keania+One:400"
                }, {
                    "family"  : "Kelly Slab",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Kelly+Slab:400"
                }, {
                    "family"  : "Kenia",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Kenia:400"
                },
                /*
                 {
                 "family"  : "Khmer",
                 "variants": ["400"],
                 "italic"  : false,
                 "str"     : "Khmer:400"
                 },
                 */
                {
                    "family"  : "Knewave",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Knewave:400"
                },
                /*
                 {
                 "family"  : "Koulen",
                 "variants": ["400"],
                 "italic"  : false,
                 "str"     : "Koulen:400"
                 },
                 */
                {
                    "family"  : "Kranky",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Kranky:400"
                }, {
                    "family"  : "Lancelot",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Lancelot:400"
                }, {
                    "family"  : "Lemon",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Lemon:400"
                }, {
                    "family"  : "Life Savers",
                    "variants": ["400", "700"],
                    "italic"  : false,
                    "str"     : "Life+Savers:400,700"
                }, {
                    "family"  : "Lilita One",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Lilita+One:400"
                }, {
                    "family"  : "Lily Script One",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Lily+Script One:400"
                }, {
                    "family"  : "Limelight",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Limelight:400"
                }, {
                    "family"  : "Lobster",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Lobster:400"
                }, {
                    "family"  : "Lobster Two",
                    "variants": ["400", "700"],
                    "italic"  : true,
                    "str"     : "Lobster+Two:400,700,400i,700i"
                }, {
                    "family"  : "Londrina Outline",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Londrina+Outline:400"
                }, {
                    "family"  : "Londrina Shadow",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Londrina+Shadow:400"
                }, {
                    "family"  : "Londrina Sketch",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Londrina+Sketch:400"
                }, {
                    "family"  : "Londrina Solid",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Londrina+Solid:400"
                }, {
                    "family"  : "Love Ya Like A Sister",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Love+Ya Like A Sister:400"
                }, {
                    "family"  : "Luckiest Guy",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Luckiest+Guy:400"
                }, {
                    "family"  : "Macondo",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Macondo:400"
                }, {
                    "family"  : "Macondo Swash Caps",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Macondo+Swash Caps:400"
                }, {
                    "family"  : "Maiden Orange",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Maiden+Orange:400"
                }, {
                    "family"  : "Margarine",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Margarine:400"
                }, {
                    "family"  : "McLaren",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "McLaren:400"
                }, {
                    "family"  : "MedievalSharp",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "MedievalSharp:400"
                }, {
                    "family"  : "Medula One",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Medula+One:400"
                }, {
                    "family"  : "Megrim",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Megrim:400"
                },
                /*
                 {
                 "family"  : "Metal",
                 "variants": ["400"],
                 "italic"  : false,
                 "str"     : "Metal:400"
                 }, {
                 "family"  : "Metal Mania",
                 "variants": ["400"],
                 "italic"  : false,
                 "str"     : "Metal+Mania:400"
                 },
                 */
                {
                    "family"  : "Metamorphous",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Metamorphous:400"
                }, {
                    "family"  : "Milonga",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Milonga:400"
                }, {
                    "family"  : "Miltonian",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Miltonian:400"
                }, {
                    "family"  : "Miltonian Tattoo",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Miltonian+Tattoo:400"
                }, {
                    "family"  : "Miniver",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Miniver:400"
                }, {
                    "family"  : "Modern Antiqua",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Modern+Antiqua:400"
                }, {
                    "family"  : "Monofett",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Monofett:400"
                }, {
                    "family"  : "Monoton",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Monoton:400"
                },
                /*                {
                 "family"  : "Moul",
                 "variants": ["400"],
                 "italic"  : false,
                 "str"     : "Moul:400"
                 }, {
                 "family"  : "Moulpali",
                 "variants": ["400"],
                 "italic"  : false,
                 "str"     : "Moulpali:400"
                 },*/
                {
                    "family"  : "Mountains of Christmas",
                    "variants": ["400", "700"],
                    "italic"  : false,
                    "str"     : "Mountains+of Christmas:400,700"
                }, {
                    "family"  : "Mystery Quest",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Mystery+Quest:400"
                }, {
                    "family"  : "New Rocker",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "New+Rocker:400"
                }, {
                    "family"  : "Nixie One",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Nixie+One:400"
                }, {
                    "family"  : "Nosifer",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Nosifer:400"
                }, {
                    "family"  : "Nova Cut",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Nova+Cut:400"
                }, {
                    "family"  : "Nova Flat",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Nova+Flat:400"
                }, {
                    "family"  : "Nova Oval",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Nova+Oval:400"
                }, {
                    "family"  : "Nova Round",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Nova+Round:400"
                }, {
                    "family"  : "Nova Script",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Nova+Script:400"
                }, {
                    "family"  : "Nova Slim",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Nova+Slim:400"
                }, {
                    "family"  : "Nova Square",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Nova+Square:400"
                },
                /*                {
                 "family"  : "Odor Mean Chey",
                 "variants": ["400"],
                 "italic"  : false,
                 "str"     : "Odor+Mean Chey:400"
                 },*/
                {
                    "family"  : "Offside",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Offside:400"
                }, {
                    "family"  : "Oldenburg",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Oldenburg:400"
                }, {
                    "family"  : "Oleo Script",
                    "variants": ["400", "700"],
                    "italic"  : false,
                    "str"     : "Oleo+Script:400,700"
                }, {
                    "family"  : "Oleo Script Swash Caps",
                    "variants": ["400", "700"],
                    "italic"  : false,
                    "str"     : "Oleo+Script Swash Caps:400,700"
                }, {
                    "family"  : "Oregano",
                    "variants": ["400"],
                    "italic"  : true,
                    "str"     : "Oregano:400,400i"
                }, {
                    "family"  : "Original Surfer",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Original+Surfer:400"
                }, {
                    "family"  : "Overlock",
                    "variants": ["400", "700", "900"],
                    "italic"  : true,
                    "str"     : "Overlock:400,700,900,400i,700i,900i"
                }, {
                    "family"  : "Overlock SC",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Overlock+SC:400"
                }, {
                    "family"  : "Paprika",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Paprika:400"
                }, {
                    "family"  : "Passero One",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Passero+One:400"
                }, {
                    "family"  : "Passion One",
                    "variants": ["400", "700", "900"],
                    "italic"  : false,
                    "str"     : "Passion+One:400,700,900"
                }, {
                    "family"  : "Patua One",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Patua+One:400"
                }, {
                    "family"  : "Peralta",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Peralta:400"
                }, {
                    "family"  : "Piedra",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Piedra:400"
                }, {
                    "family"  : "Pirata One",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Pirata+One:400"
                }, {
                    "family"  : "Plaster",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Plaster:400"
                }, {
                    "family"  : "Playball",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Playball:400"
                }, {
                    "family"  : "Poiret One",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Poiret+One:400"
                }, {
                    "family"  : "Poller One",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Poller+One:400"
                }, {
                    "family"  : "Pompiere",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Pompiere:400"
                },
                /*
                 {
                 "family"  : "Preahvihear",
                 "variants": ["400"],
                 "italic"  : false,
                 "str"     : "Preahvihear:400"
                 },
                 */
                {
                    "family"  : "Press Start 2P",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Press+Start 2P:400"
                }, {
                    "family"  : "Prosto One",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Prosto+One:400"
                }, {
                    "family"  : "Purple Purse",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Purple+Purse:400"
                }, {
                    "family"  : "Racing Sans One",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Racing+Sans One:400"
                }, {
                    "family"  : "Raleway Dots",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Raleway+Dots:400"
                }, {
                    "family"  : "Rammetto One",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Rammetto+One:400"
                }, {
                    "family"  : "Ranchers",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Ranchers:400"
                }, {
                    "family"  : "Revalia",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Revalia:400"
                }, {
                    "family"  : "Ribeye",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Ribeye:400"
                }, {
                    "family"  : "Ribeye Marrow",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Ribeye+Marrow:400"
                }, {
                    "family"  : "Righteous",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Righteous:400"
                }, {
                    "family"  : "Risque",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Risque:400"
                }, {
                    "family"  : "Ruslan Display",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Ruslan+Display:400"
                }, {
                    "family"  : "Rye",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Rye:400"
                }, {
                    "family"  : "Sail",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Sail:400"
                }, {
                    "family"  : "Salsa",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Salsa:400"
                }, {
                    "family"  : "Sancreek",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Sancreek:400"
                }, {
                    "family"  : "Sansita One",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Sansita+One:400"
                }, {
                    "family"  : "Sarina",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Sarina:400"
                }, {
                    "family"  : "Seaweed Script",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Seaweed+Script:400"
                }, {
                    "family"  : "Sevillana",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Sevillana:400"
                }, {
                    "family"  : "Share",
                    "variants": ["400", "700"],
                    "italic"  : true,
                    "str"     : "Share:400,700,400i,700i"
                }, {
                    "family"  : "Shojumaru",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Shojumaru:400"
                },
                /*
                 {
                 "family"  : "Siemreap",
                 "variants": ["400"],
                 "italic"  : false,
                 "str"     : "Siemreap:400"
                 },
                 */
                {
                    "family"  : "Sigmar One",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Sigmar+One:400"
                }, {
                    "family"  : "Simonetta",
                    "variants": ["400", "900"],
                    "italic"  : true,
                    "str"     : "Simonetta:400,900,400i,900i"
                }, {
                    "family"  : "Sirin Stencil",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Sirin+Stencil:400"
                }, {
                    "family"  : "Skranji",
                    "variants": ["400", "700"],
                    "italic"  : false,
                    "str"     : "Skranji:400,700"
                }, {
                    "family"  : "Slackey",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Slackey:400"
                }, {
                    "family"  : "Smokum",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Smokum:400"
                }, {
                    "family"  : "Smythe",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Smythe:400"
                }, {
                    "family"  : "Sniglet",
                    "variants": ["400", "800"],
                    "italic"  : false,
                    "str"     : "Sniglet:400,800"
                }, {
                    "family"  : "Snowburst One",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Snowburst+One:400"
                }, {
                    "family"  : "Sofadi One",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Sofadi+One:400"
                }, {
                    "family"  : "Sonsie One",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Sonsie+One:400"
                }, {
                    "family"  : "Special Elite",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Special+Elite:400"
                }, {
                    "family"  : "Spicy Rice",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Spicy+Rice:400"
                }, {
                    "family"  : "Spirax",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Spirax:400"
                }, {
                    "family"  : "Squada One",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Squada+One:400"
                }, {
                    "family"  : "Stalinist One",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Stalinist+One:400"
                }, {
                    "family"  : "Stardos Stencil",
                    "variants": ["400", "700"],
                    "italic"  : false,
                    "str"     : "Stardos+Stencil:400,700"
                }, {
                    "family"  : "Stint Ultra Condensed",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Stint+Ultra Condensed:400"
                }, {
                    "family"  : "Stint Ultra Expanded",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Stint+Ultra Expanded:400"
                }, {
                    "family"  : "Supermercado One",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Supermercado+One:400"
                },
                {
                    "family"  : "Titan One",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Titan+One:400"
                }, {
                    "family"  : "Trade Winds",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Trade+Winds:400"
                }, {
                    "family"  : "Trochut",
                    "variants": ["400", "700"],
                    "italic"  : false,
                    "str"     : "Trochut:400,700"
                }, {
                    "family"  : "Tulpen One",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Tulpen+One:400"
                }, {
                    "family"  : "Uncial Antiqua",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Uncial+Antiqua:400"
                }, {
                    "family"  : "Underdog",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Underdog:400"
                }, {
                    "family"  : "Unica One",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Unica+One:400"
                }, {
                    "family"  : "UnifrakturMaguntia",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "UnifrakturMaguntia:400"
                }, {
                    "family"  : "Unkempt",
                    "variants": ["400", "700"],
                    "italic"  : false,
                    "str"     : "Unkempt:400,700"
                }, {
                    "family"  : "Unlock",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Unlock:400"
                }, {
                    "family"  : "Vampiro One",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Vampiro+One:400"
                }, {
                    "family"  : "Vast Shadow",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Vast+Shadow:400"
                }, {
                    "family"  : "Voces",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Voces:400"
                }, {
                    "family"  : "Wallpoet",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Wallpoet:400"
                }, {
                    "family"  : "Warnes",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Warnes:400"
                }, {
                    "family"  : "Wellfleet",
                    "variants": ["400"],
                    "italic"  : false,
                    "str"     : "Wellfleet:400"
                }, {"family": "Yeseva One", "variants": ["400"], "italic": false, "str": "Yeseva+One:400"}]
        },
        "Monospace"  : {
            "fonts": [{
                "family"  : "Anonymous Pro",
                "variants": ["400", "700"],
                "italic"  : true,
                "str"     : "Anonymous+Pro:400,700,400i,700i"
            }, {
                "family"  : "Cousine",
                "variants": ["400", "700"],
                "italic"  : true,
                "str"     : "Cousine:400,700,400i,700i"
            }, {
                "family"  : "Cutive Mono",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Cutive+Mono:400"
            }, {
                "family"  : "Droid Sans Mono",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Droid+Sans Mono:400"
            }, {
                "family"  : "Fira Mono",
                "variants": ["400", "700"],
                "italic"  : false,
                "str"     : "Fira+Mono:400,700"
            }, {
                "family"  : "Inconsolata",
                "variants": ["400", "700"],
                "italic"  : false,
                "str"     : "Inconsolata:400,700"
            }, {
                "family"  : "Nova Mono",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Nova+Mono:400"
            }, {
                "family"  : "Oxygen Mono",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Oxygen+Mono:400"
            }, {
                "family"  : "PT Mono",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "PT+Mono:400"
            }, {
                "family"  : "Share Tech Mono",
                "variants": ["400"],
                "italic"  : false,
                "str"     : "Share+Tech Mono:400"
            }, {
                "family"  : "Source Code Pro",
                "variants": ["200", "300", "400", "500", "600", "700", "900"],
                "italic"  : false,
                "str"     : "Source+Code Pro:200,300,400,500,600,700,900"
            }, {
                "family"  : "Ubuntu Mono",
                "variants": ["400", "700"],
                "italic"  : true,
                "str"     : "Ubuntu+Mono:400,700,400i,700i"
            }, {"family": "VT323", "variants": ["400"], "italic": false, "str": "VT323:400"}]
        }
    }
    ,
    allVariants         = [
        {
            "name"     : "Adamina Normal 400",
            "weight"   : "400",
            "str"      : "Adamina:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Alegreya Normal 400",
            "weight"   : "400",
            "str"      : "Alegreya:400",
            "thickness": 3,
            "italic"   : false
        }, {
            "name"     : "Alegreya Bold 700",
            "weight"   : "700",
            "str"      : "Alegreya:700",
            "thickness": 5,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Alegreya Black 900",
            "weight"   : "900",
            "str"      : "Alegreya:900",
            "thickness": 7,
            "italic"   : false
        }, {
            "name"  : "Alegreya Normal 400 italic",
            "weight": "400",
            "str"   : "Alegreya:400i",
            "slant" : 3,
            "width" : 5,
            "italic": true
        }, {
            "name"  : "Alegreya Bold 700 italic",
            "weight": "700",
            "str"   : "Alegreya:700i",
            "italic": true
        }, {
            "name"  : "Alegreya Black 900 italic",
            "weight": "900",
            "str"   : "Alegreya:900i",
            "slant" : 2,
            "italic": true
        }, {
            "name"     : "Alegreya SC Normal 400",
            "weight"   : "400",
            "str"      : "Alegreya+SC:400",
            "thickness": 3,
            "italic"   : false
        }, {
            "name"     : "Alegreya SC Bold 700",
            "weight"   : "700",
            "str"      : "Alegreya+SC:700",
            "thickness": 5,
            "slant"    : 0,
            "italic"   : false
        }, {
            "name"     : "Alegreya SC Black 900",
            "weight"   : "900",
            "str"      : "Alegreya+SC:900",
            "thickness": 7,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"  : "Alegreya SC Normal 400 italic",
            "weight": "400",
            "str"   : "Alegreya+SC:400i",
            "slant" : 3,
            "italic": true
        }, {
            "name"  : "Alegreya SC Bold 700 italic",
            "weight": "700",
            "str"   : "Alegreya+SC:700i",
            "slant" : 2,
            "italic": true
        }, {
            "name"  : "Alegreya SC Black 900 italic",
            "weight": "900",
            "str"   : "Alegreya+SC:900i",
            "italic": true
        }, {
            "name"     : "Alice Normal 400",
            "weight"   : "400",
            "str"      : "Alice:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Alike Normal 400",
            "weight"   : "400",
            "str"      : "Alike:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Alike Angular Normal 400",
            "weight"   : "400",
            "str"      : "Alike+Angular:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Almendra Normal 400",
            "weight"   : "400",
            "str"      : "Almendra:400",
            "thickness": 3,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Almendra Bold 700",
            "weight"   : "700",
            "str"      : "Almendra:700",
            "thickness": 6,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"  : "Almendra Normal 400 italic",
            "weight": "400",
            "str"   : "Almendra:400i",
            "italic": true
        }, {
            "name"  : "Almendra Bold 700 italic",
            "weight": "700",
            "str"   : "Almendra:700i",
            "slant" : 4,
            "italic": true
        }, {
            "name"     : "Almendra SC Normal 400",
            "weight"   : "400",
            "str"      : "Almendra+SC:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Amethysta Normal 400",
            "weight"   : "400",
            "str"      : "Amethysta:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Andada Normal 400",
            "weight"   : "400",
            "str"      : "Andada:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Antic Didone Normal 400",
            "weight"   : "400",
            "str"      : "Antic+Didone:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Antic Slab Normal 400",
            "weight"   : "400",
            "str"      : "Antic+Slab:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Arapey Normal 400",
            "weight"   : "400",
            "str"      : "Arapey:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"  : "Arapey Normal 400 italic",
            "weight": "400",
            "str"   : "Arapey:400i",
            "slant" : 4,
            "italic": true
        }, {
            "name"     : "Arbutus Slab Normal 400",
            "weight"   : "400",
            "str"      : "Arbutus+Slab:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Artifika Normal 400",
            "weight"   : "400",
            "str"      : "Artifika:400",
            "thickness": 5,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Arvo Normal 400",
            "weight"   : "400",
            "str"      : "Arvo:400",
            "thickness": 4,
            "slant"    : 0,
            "italic"   : false
        }, {
            "name"     : "Arvo Bold 700",
            "weight"   : "700",
            "str"      : "Arvo:700",
            "thickness": 6,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"  : "Arvo Normal 400 italic",
            "weight": "400",
            "str"   : "Arvo:400i",
            "slant" : 4,
            "italic": true
        }, {
            "name"  : "Arvo Bold 700 italic",
            "weight": "700",
            "str"   : "Arvo:700i",
            "slant" : 3,
            "italic": true
        }, {
            "name"     : "Average Normal 400",
            "weight"   : "400",
            "str"      : "Average:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Balthazar Normal 400",
            "weight"   : "400",
            "str"      : "Balthazar:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Belgrano Normal 400",
            "weight"   : "400",
            "str"      : "Belgrano:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Bentham Normal 400",
            "weight"   : "400",
            "str"      : "Bentham:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Bitter Normal 400",
            "weight"   : "400",
            "str"      : "Bitter:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        },
        {
            "name"     : "Bitter Bold 700",
            "weight"   : "700",
            "str"      : "Bitter:700",
            "thickness": 6,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Brawler Normal 400",
            "weight"   : "400",
            "str"      : "Brawler:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Bree Serif Normal 400",
            "weight"   : "400",
            "str"      : "Bree+Serif:400",
            "thickness": 5,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Buenard Normal 400",
            "weight"   : "400",
            "str"      : "Buenard:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Buenard Bold 700",
            "weight"   : "700",
            "str"      : "Buenard:700",
            "thickness": 5,
            "italic"   : false
        }, {
            "name"     : "Cambo Normal 400",
            "weight"   : "400",
            "str"      : "Cambo:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Cantata One Normal 400",
            "weight"   : "400",
            "str"      : "Cantata+One:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Cardo Normal 400",
            "weight"   : "400",
            "str"      : "Cardo:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Cardo Bold 700",
            "weight"   : "700",
            "str"      : "Cardo:700",
            "thickness": 5,
            "italic"   : false
        }, {
            "name"  : "Caudex Normal 400",
            "weight": "400",
            "str"   : "Caudex:400",
            "slant" : 0,
            "italic": false
        }, {
            "name"     : "Caudex Bold 700",
            "weight"   : "700",
            "str"      : "Caudex:700",
            "thickness": 4,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"  : "Caudex Normal 400 italic",
            "weight": "400",
            "str"   : "Caudex:400i",
            "slant" : 4,
            "italic": true
        }, {
            "name"  : "Caudex Bold 700 italic",
            "weight": "700",
            "str"   : "Caudex:700i",
            "italic": true
        }, {
            "name"     : "Cinzel Normal 400",
            "weight"   : "400",
            "str"      : "Cinzel:400",
            "thickness": 3,
            "italic"   : false
        }, {
            "name"     : "Cinzel Bold 700",
            "weight"   : "700",
            "str"      : "Cinzel:700",
            "thickness": 6,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Cinzel Black 900",
            "weight"   : "900",
            "str"      : "Cinzel:900",
            "thickness": 8,
            "italic"   : false
        }, {
            "name"     : "Copse Normal 400",
            "weight"   : "400",
            "str"      : "Copse:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Coustard Normal 400",
            "weight"   : "400",
            "str"      : "Coustard:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Coustard Black 900",
            "weight"   : "900",
            "str"      : "Coustard:900",
            "thickness": 8,
            "italic"   : false
        }, {
            "name"     : "Crete Round Normal 400",
            "weight"   : "400",
            "str"      : "Crete+Round:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"  : "Crete Round Normal 400 italic",
            "weight": "400",
            "str"   : "Crete+Round:400i",
            "slant" : 3,
            "italic": true
        }, {
            "name"     : "Crimson Text Normal 400",
            "weight"   : "400",
            "str"      : "Crimson+Text:400",
            "thickness": 4,
            "italic"   : false
        }, {
            "name"  : "Crimson Text Semi-Bold 600",
            "weight": "600",
            "str"   : "Crimson+Text:600",
            "slant" : 0,
            "width" : 6,
            "italic": false
        }, {
            "name"     : "Crimson Text Bold 700",
            "weight"   : "700",
            "str"      : "Crimson+Text:700",
            "thickness": 5,
            "italic"   : false
        }, {
            "name"     : "Crimson Text Normal 400 italic",
            "weight"   : "400",
            "str"      : "Crimson+Text:400i",
            "thickness": 3,
            "slant"    : 3,
            "width"    : 5,
            "italic"   : true
        }, {
            "name"  : "Crimson Text Semi-Bold 600 italic",
            "weight": "600",
            "str"   : "Crimson+Text:600i",
            "italic": true
        }, {
            "name"  : "Crimson Text Bold 700 italic",
            "weight": "700",
            "str"   : "Crimson+Text:700i",
            "slant" : 4,
            "italic": true
        }, {
            "name"     : "Cutive Normal 400",
            "weight"   : "400",
            "str"      : "Cutive:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Della Respira Normal 400",
            "weight"   : "400",
            "str"      : "Della+Respira:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Domine Normal 400",
            "weight"   : "400",
            "str"      : "Domine:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Domine Bold 700",
            "weight"   : "700",
            "str"      : "Domine:700",
            "thickness": 6,
            "italic"   : false
        }, {
            "name"     : "Donegal One Normal 400",
            "weight"   : "400",
            "str"      : "Donegal+One:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Droid Serif Normal 400",
            "weight"   : "400",
            "str"      : "Droid+Serif:400",
            "thickness": 4,
            "slant"    : 0,
            "italic"   : false
        }, {
            "name"     : "Droid Serif Bold 700",
            "weight"   : "700",
            "str"      : "Droid+Serif:700",
            "thickness": 5,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"  : "Droid Serif Normal 400 italic",
            "weight": "400",
            "str"   : "Droid+Serif:400i",
            "slant" : 3,
            "width" : 6,
            "italic": true
        }, {
            "name"  : "Droid Serif Bold 700 italic",
            "weight": "700",
            "str"   : "Droid+Serif:700i",
            "slant" : 4,
            "italic": true
        }, {
            "name"     : "EB Garamond Normal 400",
            "weight"   : "400",
            "str"      : "EB+Garamond:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Enriqueta Normal 400",
            "weight"   : "400",
            "str"      : "Enriqueta:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Enriqueta Bold 700",
            "weight"   : "700",
            "str"      : "Enriqueta:700",
            "thickness": 5,
            "italic"   : false
        }, {
            "name"     : "Esteban Normal 400",
            "weight"   : "400",
            "str"      : "Esteban:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Fanwood Text Normal 400",
            "weight"   : "400",
            "str"      : "Fanwood+Text:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"  : "Fanwood Text Normal 400 italic",
            "weight": "400",
            "str"   : "Fanwood+Text:400i",
            "slant" : 3,
            "italic": true
        }, {
            "name"     : "Fauna One Normal 400",
            "weight"   : "400",
            "str"      : "Fauna+One:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Fenix Normal 400",
            "weight"   : "400",
            "str"      : "Fenix:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Fjord One Normal 400",
            "weight"   : "400",
            "str"      : "Fjord+One:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"  : "GFS Didot Normal 400",
            "weight": "400",
            "str"   : "GFS+Didot:400",
            "italic": false
        }, {
            "name"     : "Gabriela Normal 400",
            "weight"   : "400",
            "str"      : "Gabriela:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Gentium Basic Normal 400",
            "weight"   : "400",
            "str"      : "Gentium+Basic:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Gentium Basic Bold 700",
            "weight"   : "700",
            "str"      : "Gentium+Basic:700",
            "thickness": 5,
            "italic"   : false
        }, {
            "name"  : "Gentium Basic Normal 400 italic",
            "weight": "400",
            "str"   : "Gentium+Basic:400i",
            "slant" : 2,
            "width" : 5,
            "italic": true
        }, {
            "name"  : "Gentium Basic Bold 700 italic",
            "weight": "700",
            "str"   : "Gentium+Basic:700i",
            "italic": true
        }, {
            "name"     : "Gentium Book Basic Normal 400",
            "weight"   : "400",
            "str"      : "Gentium+Book+Basic:400",
            "thickness": 4,
            "slant"    : 0,
            "italic"   : false
        }, {
            "name"     : "Gentium Book Basic Bold 700",
            "weight"   : "700",
            "str"      : "Gentium+Book+Basic:700",
            "thickness": 5,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"  : "Gentium Book Basic Normal 400 italic",
            "weight": "400",
            "str"   : "Gentium+Book+Basic:400i",
            "slant" : 2,
            "width" : 5,
            "italic": true
        }, {
            "name"  : "Gentium Book Basic Bold 700 italic",
            "weight": "700",
            "str"   : "Gentium+Book+Basic:700i",
            "slant" : 3,
            "italic": true
        }, {
            "name"     : "Gilda Display Normal 400",
            "weight"   : "400",
            "str"      : "Gilda+Display:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Glegoo Normal 400",
            "weight"   : "400",
            "str"      : "Glegoo:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Glegoo Bold 700",
            "weight"   : "700",
            "str"      : "Glegoo:700",
            "thickness": 6,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Goudy Bookletter 1911 Normal 400",
            "weight"   : "400",
            "str"      : "Goudy+Bookletter+1911:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Habibi Normal 400",
            "weight"   : "400",
            "str"      : "Habibi:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Halant Light 300",
            "weight"   : "300",
            "str"      : "Halant:300",
            "thickness": 2,
            "italic"   : false
        }, {
            "name"     : "Halant Normal 400",
            "weight"   : "400",
            "str"      : "Halant:400",
            "thickness": 3,
            "italic"   : false
        }, {
            "name"     : "Halant Medium 500",
            "weight"   : "500",
            "str"      : "Halant:500",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Halant Semi-Bold 600",
            "weight"   : "600",
            "str"      : "Halant:600",
            "thickness": 5,
            "italic"   : false
        }, {
            "name"     : "Halant Bold 700",
            "weight"   : "700",
            "str"      : "Halant:700",
            "thickness": 6,
            "italic"   : false
        },
        {
            "name"     : "Headland One Normal 400",
            "weight"   : "400",
            "str"      : "Headland+One:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Holtwood One SC Normal 400",
            "weight"   : "400",
            "str"      : "Holtwood+One+SC:400",
            "thickness": 8,
            "slant"    : 0,
            "width"    : 8,
            "italic"   : false
        }, {
            "name"     : "IM Fell DW Pica Normal 400",
            "weight"   : "400",
            "str"      : "IM+Fell+DW+Pica:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "IM Fell DW Pica Normal 400 italic",
            "weight"   : "400",
            "str"      : "IM+Fell+DW+Pica:400i",
            "thickness": 3,
            "slant"    : 6,
            "italic"   : true
        }, {
            "name"     : "IM Fell DW Pica SC Normal 400",
            "weight"   : "400",
            "str"      : "IM+Fell+DW+Pica+SC:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "IM Fell Double Pica Normal 400",
            "weight"   : "400",
            "str"      : "IM+Fell+Double+Pica:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"  : "IM Fell Double Pica Normal 400 italic",
            "weight": "400",
            "str"   : "IM+Fell+Double+Pica:400i",
            "slant" : 5,
            "italic": true
        }, {
            "name"     : "IM Fell Double Pica SC Normal 400",
            "weight"   : "400",
            "str"      : "IM+Fell+Double+Pica+SC:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "IM Fell English Normal 400",
            "weight"   : "400",
            "str"      : "IM+Fell+English:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"  : "IM Fell English Normal 400 italic",
            "weight": "400",
            "str"   : "IM+Fell+English:400i",
            "slant" : 5,
            "width" : 5,
            "italic": true
        }, {
            "name"     : "IM Fell English SC Normal 400",
            "weight"   : "400",
            "str"      : "IM+Fell+English+SC:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "IM Fell French Canon Normal 400",
            "weight"   : "400",
            "str"      : "IM+Fell+French+Canon:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"  : "IM Fell French Canon Normal 400 italic",
            "weight": "400",
            "str"   : "IM+Fell+French+Canon:400i",
            "slant" : 6,
            "width" : 5,
            "italic": true
        }, {
            "name"     : "IM Fell French Canon SC Normal 400",
            "weight"   : "400",
            "str"      : "IM+Fell+French+Canon+SC:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "IM Fell Great Primer Normal 400",
            "weight"   : "400",
            "str"      : "IM+Fell+Great+Primer:400",
            "thickness": 4,
            "slant"    : 1,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"  : "IM Fell Great Primer Normal 400 italic",
            "weight": "400",
            "str"   : "IM+Fell+Great+Primer:400i",
            "slant" : 5,
            "italic": true
        }, {
            "name"     : "IM Fell Great Primer SC Normal 400",
            "weight"   : "400",
            "str"      : "IM+Fell+Great+Primer+SC:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Inika Normal 400",
            "weight"   : "400",
            "str"      : "Inika:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Inika Bold 700",
            "weight"   : "700",
            "str"      : "Inika:700",
            "thickness": 5,
            "italic"   : false
        }, {
            "name"     : "Italiana Normal 400",
            "weight"   : "400",
            "str"      : "Italiana:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Jacques Francois Normal 400",
            "weight"   : "400",
            "str"      : "Jacques+Francois:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"  : "Josefin Slab Thin 100",
            "weight": "100",
            "str"   : "Josefin+Slab:100",
            "italic": false
        }, {
            "name"     : "Josefin Slab Light 300",
            "weight"   : "300",
            "str"      : "Josefin+Slab:300",
            "thickness": 0,
            "italic"   : false
        }, {
            "name"     : "Josefin Slab Normal 400",
            "weight"   : "400",
            "str"      : "Josefin+Slab:400",
            "thickness": 2,
            "slant"    : 0,
            "italic"   : false
        }, {
            "name"  : "Josefin Slab Semi-Bold 600",
            "weight": "600",
            "str"   : "Josefin+Slab:600",
            "italic": false
        }, {
            "name"     : "Josefin Slab Bold 700",
            "weight"   : "700",
            "str"      : "Josefin+Slab:700",
            "thickness": 3,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"  : "Josefin Slab Thin 100 italic",
            "weight": "100",
            "str"   : "Josefin+Slab:100i",
            "italic": true
        }, {
            "name"  : "Josefin Slab Light 300 italic",
            "weight": "300",
            "str"   : "Josefin+Slab:300i",
            "slant" : 3,
            "italic": true
        }, {
            "name"  : "Josefin Slab Normal 400 italic",
            "weight": "400",
            "str"   : "Josefin+Slab:400i",
            "italic": true
        }, {
            "name"  : "Josefin Slab Semi-Bold 600 italic",
            "weight": "600",
            "str"   : "Josefin+Slab:600i",
            "slant" : 2,
            "italic": true
        }, {
            "name"  : "Josefin Slab Bold 700 italic",
            "weight": "700",
            "str"   : "Josefin+Slab:700i",
            "italic": true
        }, {
            "name"     : "Judson Normal 400",
            "weight"   : "400",
            "str"      : "Judson:400",
            "thickness": 4,
            "slant"    : 0,
            "italic"   : false
        }, {
            "name"     : "Judson Bold 700",
            "weight"   : "700",
            "str"      : "Judson:700",
            "thickness": 5,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Junge Normal 400",
            "weight"   : "400",
            "str"      : "Junge:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Kameron Normal 400",
            "weight"   : "400",
            "str"      : "Kameron:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Kameron Bold 700",
            "weight"   : "700",
            "str"      : "Kameron:700",
            "thickness": 6,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Karma Light 300",
            "weight"   : "300",
            "str"      : "Karma:300",
            "thickness": 2,
            "italic"   : false
        }, {
            "name"     : "Karma Normal 400",
            "weight"   : "400",
            "str"      : "Karma:400",
            "thickness": 3,
            "italic"   : false
        }, {
            "name"     : "Karma Medium 500",
            "weight"   : "500",
            "str"      : "Karma:500",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Karma Semi-Bold 600",
            "weight"   : "600",
            "str"      : "Karma:600",
            "thickness": 5,
            "italic"   : false
        }, {
            "name"     : "Karma Bold 700",
            "weight"   : "700",
            "str"      : "Karma:700",
            "thickness": 6,
            "italic"   : false
        }, {
            "name"     : "Kotta One Normal 400",
            "weight"   : "400",
            "str"      : "Kotta+One:400",
            "thickness": 3,
            "slant"    : 2,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Kreon Light 300",
            "weight"   : "300",
            "str"      : "Kreon:300",
            "thickness": 3,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Kreon Normal 400",
            "weight"   : "400",
            "str"      : "Kreon:400",
            "thickness": 4,
            "slant"    : 0,
            "italic"   : false
        }, {
            "name"     : "Kreon Bold 700",
            "weight"   : "700",
            "str"      : "Kreon:700",
            "thickness": 5,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Laila Light 300",
            "weight"   : "300",
            "str"      : "Laila:300",
            "thickness": 2,
            "italic"   : false
        }, {
            "name"     : "Laila Normal 400",
            "weight"   : "400",
            "str"      : "Laila:400",
            "thickness": 3,
            "italic"   : false
        }, {
            "name"     : "Laila Medium 500",
            "weight"   : "500",
            "str"      : "Laila:500",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Laila Semi-Bold 600",
            "weight"   : "600",
            "str"      : "Laila:600",
            "thickness": 5,
            "italic"   : false
        }, {
            "name"     : "Laila Bold 700",
            "weight"   : "700",
            "str"      : "Laila:700",
            "thickness": 6,
            "italic"   : false
        }, {
            "name"     : "Ledger Normal 400",
            "weight"   : "400",
            "str"      : "Ledger:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Libre Baskerville Normal 400",
            "weight"   : "400",
            "str"      : "Libre+Baskerville:400",
            "thickness": 3,
            "slant"    : 0,
            "italic"   : false
        }, {
            "name"     : "Libre Baskerville Bold 700",
            "weight"   : "700",
            "str"      : "Libre+Baskerville:700",
            "thickness": 6,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Linden Hill Normal 400",
            "weight"   : "400",
            "str"      : "Linden+Hill:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"  : "Linden Hill Normal 400 italic",
            "weight": "400",
            "str"   : "Linden+Hill:400i",
            "slant" : 1,
            "width" : 4,
            "italic": true
        }, {
            "name"     : "Lora Normal 400",
            "weight"   : "400",
            "str"      : "Lora:400",
            "thickness": 3,
            "slant"    : 0,
            "italic"   : false
        }, {
            "name"     : "Lora Bold 700",
            "weight"   : "700",
            "str"      : "Lora:700",
            "thickness": 5,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"  : "Lora Normal 400 italic",
            "weight": "400",
            "str"   : "Lora:400i",
            "slant" : 1,
            "italic": true
        }, {
            "name"  : "Lora Bold 700 italic",
            "weight": "700",
            "str"   : "Lora:700i",
            "slant" : 2,
            "italic": true
        }, {
            "name"     : "Lusitana Normal 400",
            "weight"   : "400",
            "str"      : "Lusitana:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Lusitana Bold 700",
            "weight"   : "700",
            "str"      : "Lusitana:700",
            "thickness": 5,
            "italic"   : false
        }, {
            "name"     : "Lustria Normal 400",
            "weight"   : "400",
            "str"      : "Lustria:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Marcellus Normal 400",
            "weight"   : "400",
            "str"      : "Marcellus:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Marcellus SC Normal 400",
            "weight"   : "400",
            "str"      : "Marcellus+SC:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Marko One Normal 400",
            "weight"   : "400",
            "str"      : "Marko+One:400",
            "thickness": 5,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Mate Normal 400",
            "weight"   : "400",
            "str"      : "Mate:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"  : "Mate Normal 400 italic",
            "weight": "400",
            "str"   : "Mate:400i",
            "slant" : 3,
            "width" : 5,
            "italic": true
        }, {
            "name"     : "Mate SC Normal 400",
            "weight"   : "400",
            "str"      : "Mate+SC:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Merriweather Light 300",
            "weight"   : "300",
            "str"      : "Merriweather:300",
            "thickness": 3,
            "italic"   : false
        }, {
            "name"     : "Merriweather Normal 400",
            "weight"   : "400",
            "str"      : "Merriweather:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Merriweather Bold 700",
            "weight"   : "700",
            "str"      : "Merriweather:700",
            "thickness": 5,
            "italic"   : false
        }, {
            "name"     : "Merriweather Black 900",
            "weight"   : "900",
            "str"      : "Merriweather:900",
            "thickness": 6,
            "italic"   : false
        }, {
            "name"     : "Merriweather Light 300 italic",
            "weight"   : "300",
            "str"      : "Merriweather:300i",
            "thickness": 2,
            "italic"   : true
        }, {
            "name"  : "Merriweather Normal 400 italic",
            "weight": "400",
            "str"   : "Merriweather:400i",
            "slant" : 4,
            "width" : 6,
            "italic": true
        }, {
            "name"  : "Merriweather Bold 700 italic",
            "weight": "700",
            "str"   : "Merriweather:700i",
            "italic": true
        }, {
            "name"     : "Merriweather Black 900 italic",
            "weight"   : "900",
            "str"      : "Merriweather:900i",
            "thickness": 8,
            "italic"   : true
        }, {
            "name"     : "Montaga Normal 400",
            "weight"   : "400",
            "str"      : "Montaga:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Neuton Extra-Light 200",
            "weight"   : "200",
            "str"      : "Neuton:200",
            "thickness": 3,
            "italic"   : false
        }, {
            "name"  : "Neuton Light 300",
            "weight": "300",
            "str"   : "Neuton:300",
            "italic": false
        }, {
            "name"     : "Neuton Normal 400",
            "weight"   : "400",
            "str"      : "Neuton:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Neuton Bold 700",
            "weight"   : "700",
            "str"      : "Neuton:700",
            "thickness": 6,
            "italic"   : false
        }, {
            "name"     : "Neuton Extra-Bold 800",
            "weight"   : "800",
            "str"      : "Neuton:800",
            "thickness": 7,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Noticia Text Normal 400",
            "weight"   : "400",
            "str"      : "Noticia+Text:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Noticia Text Bold 700",
            "weight"   : "700",
            "str"      : "Noticia+Text:700",
            "thickness": 5,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"  : "Noticia Text Normal 400 italic",
            "weight": "400",
            "str"   : "Noticia+Text:400i",
            "slant" : 2,
            "italic": true
        }, {
            "name"  : "Noticia Text Bold 700 italic",
            "weight": "700",
            "str"   : "Noticia+Text:700i",
            "italic": true
        }, {
            "name"     : "Noto Serif Normal 400",
            "weight"   : "400",
            "str"      : "Noto+Serif:400",
            "thickness": 3,
            "slant"    : 0,
            "italic"   : false
        }, {
            "name"     : "Noto Serif Bold 700",
            "weight"   : "700",
            "str"      : "Noto+Serif:700",
            "thickness": 6,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"  : "Noto Serif Normal 400 italic",
            "weight": "400",
            "str"   : "Noto+Serif:400i",
            "slant" : 4,
            "italic": true
        }, {
            "name"  : "Noto Serif Bold 700 italic",
            "weight": "700",
            "str"   : "Noto+Serif:700i",
            "italic": true
        }, {
            "name"     : "Old Standard TT Normal 400",
            "weight"   : "400",
            "str"      : "Old+Standard+TT:400",
            "thickness": 4,
            "slant"    : 0,
            "italic"   : false
        }, {
            "name"     : "Old Standard TT Bold 700",
            "weight"   : "700",
            "str"      : "Old+Standard+TT:700",
            "thickness": 5,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Oranienbaum Normal 400",
            "weight"   : "400",
            "str"      : "Oranienbaum:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Ovo Normal 400",
            "weight"   : "400",
            "str"      : "Ovo:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "PT Serif Normal 400",
            "weight"   : "400",
            "str"      : "PT+Serif:400",
            "thickness": 4,
            "slant"    : 0,
            "italic"   : false
        }, {
            "name"     : "PT Serif Bold 700",
            "weight"   : "700",
            "str"      : "PT+Serif:700",
            "thickness": 5,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"  : "PT Serif Normal 400 italic",
            "weight": "400",
            "str"   : "PT+Serif:400i",
            "slant" : 3,
            "italic": true
        }, {
            "name"  : "PT Serif Bold 700 italic",
            "weight": "700",
            "str"   : "PT+Serif:700i",
            "italic": true
        }, {
            "name"     : "PT Serif Caption Normal 400",
            "weight"   : "400",
            "str"      : "PT+Serif+Caption:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"  : "PT Serif Caption Normal 400 italic",
            "weight": "400",
            "str"   : "PT+Serif+Caption:400i",
            "slant" : 3,
            "width" : 6,
            "italic": true
        }, {
            "name"     : "Petrona Normal 400",
            "weight"   : "400",
            "str"      : "Petrona:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Playfair Display Normal 400",
            "weight"   : "400",
            "str"      : "Playfair+Display:400",
            "thickness": 3,
            "italic"   : false
        }, {
            "name"     : "Playfair Display Bold 700",
            "weight"   : "700",
            "str"      : "Playfair+Display:700",
            "thickness": 5,
            "slant"    : 0,
            "italic"   : false
        }, {
            "name"     : "Playfair Display Black 900",
            "weight"   : "900",
            "str"      : "Playfair+Display:900",
            "thickness": 6,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"  : "Playfair Display Normal 400 italic",
            "weight": "400",
            "str"   : "Playfair+Display:400i",
            "italic": true
        }, {
            "name"  : "Playfair Display Bold 700 italic",
            "weight": "700",
            "str"   : "Playfair+Display:700i",
            "slant" : 5,
            "italic": true
        }, {
            "name"  : "Playfair Display Black 900 italic",
            "weight": "900",
            "str"   : "Playfair+Display:900i",
            "italic": true
        }, {
            "name"     : "Playfair Display SC Normal 400",
            "weight"   : "400",
            "str"      : "Playfair+Display+SC:400",
            "thickness": 3,
            "italic"   : false
        }, {
            "name"     : "Playfair Display SC Bold 700",
            "weight"   : "700",
            "str"      : "Playfair+Display+SC:700",
            "thickness": 6,
            "slant"    : 0,
            "italic"   : false
        }, {
            "name"     : "Playfair Display SC Black 900",
            "weight"   : "900",
            "str"      : "Playfair+Display+SC:900",
            "thickness": 8,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"  : "Playfair Display SC Normal 400 italic",
            "weight": "400",
            "str"   : "Playfair+Display+SC:400i",
            "italic": true
        }, {
            "name"  : "Playfair Display SC Bold 700 italic",
            "weight": "700",
            "str"   : "Playfair+Display+SC:700i",
            "slant" : 4,
            "italic": true
        }, {
            "name"  : "Playfair Display SC Black 900 italic",
            "weight": "900",
            "str"   : "Playfair+Display+SC:900i",
            "italic": true
        }, {
            "name"     : "Podkova Normal 400",
            "weight"   : "400",
            "str"      : "Podkova:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Podkova Bold 700",
            "weight"   : "700",
            "str"      : "Podkova:700",
            "thickness": 6,
            "italic"   : false
        }, {
            "name"     : "Poly Normal 400",
            "weight"   : "400",
            "str"      : "Poly:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"  : "Poly Normal 400 italic",
            "weight": "400",
            "str"   : "Poly:400i",
            "slant" : 3,
            "italic": true
        }, {
            "name"     : "Port Lligat Slab Normal 400",
            "weight"   : "400",
            "str"      : "Port+Lligat+Slab:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Prata Normal 400",
            "weight"   : "400",
            "str"      : "Prata:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Prociono Normal 400",
            "weight"   : "400",
            "str"      : "Prociono:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Quando Normal 400",
            "weight"   : "400",
            "str"      : "Quando:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Quattrocento Normal 400",
            "weight"   : "400",
            "str"      : "Quattrocento:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Quattrocento Bold 700",
            "weight"   : "700",
            "str"      : "Quattrocento:700",
            "thickness": 5,
            "italic"   : false
        }, {
            "name"     : "Radley Normal 400",
            "weight"   : "400",
            "str"      : "Radley:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"  : "Radley Normal 400 italic",
            "weight": "400",
            "str"   : "Radley:400i",
            "slant" : 4,
            "italic": true
        }, {
            "name"     : "Roboto Slab Thin 100",
            "weight"   : "100",
            "str"      : "Roboto+Slab:100",
            "thickness": 0,
            "italic"   : false
        }, {
            "name"     : "Roboto Slab Light 300",
            "weight"   : "300",
            "str"      : "Roboto+Slab:300",
            "thickness": 2,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Roboto Slab Normal 400",
            "weight"   : "400",
            "str"      : "Roboto+Slab:400",
            "thickness": 3,
            "italic"   : false
        }, {
            "name"     : "Roboto Slab Bold 700",
            "weight"   : "700",
            "str"      : "Roboto+Slab:700",
            "thickness": 6,
            "italic"   : false
        }, {
            "name"     : "Rokkitt Normal 400",
            "weight"   : "400",
            "str"      : "Rokkitt:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Rokkitt Bold 700",
            "weight"   : "700",
            "str"      : "Rokkitt:700",
            "thickness": 5,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Rosarivo Normal 400",
            "weight"   : "400",
            "str"      : "Rosarivo:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"  : "Rosarivo Normal 400 italic",
            "weight": "400",
            "str"   : "Rosarivo:400i",
            "slant" : 3,
            "italic": true
        }, {
            "name"     : "Rozha One Normal 400",
            "weight"   : "400",
            "str"      : "Rozha+One:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Rufina Normal 400",
            "weight"   : "400",
            "str"      : "Rufina:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Rufina Bold 700",
            "weight"   : "700",
            "str"      : "Rufina:700",
            "thickness": 6,
            "italic"   : false
        }, {
            "name"     : "Sanchez Normal 400",
            "weight"   : "400",
            "str"      : "Sanchez:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"  : "Sanchez Normal 400 italic",
            "weight": "400",
            "str"   : "Sanchez:400i",
            "slant" : 4,
            "italic": true
        }, {
            "name"     : "Slabo 13px Normal 400",
            "weight"   : "400",
            "str"      : "Slabo+13px:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Slabo 27px Normal 400",
            "weight"   : "400",
            "str"      : "Slabo+27px:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Sorts Mill Goudy Normal 400",
            "weight"   : "400",
            "str"      : "Sorts+Mill+Goudy:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"  : "Sorts Mill Goudy Normal 400 italic",
            "weight": "400",
            "str"   : "Sorts+Mill+Goudy:400i",
            "slant" : 3,
            "width" : 5,
            "italic": true
        }, {
            "name"     : "Source Serif Pro Normal 400",
            "weight"   : "400",
            "str"      : "Source+Serif+Pro:400",
            "thickness": 3,
            "italic"   : false
        }, {
            "name"     : "Source Serif Pro Semi-Bold 600",
            "weight"   : "600",
            "str"      : "Source+Serif+Pro:600",
            "thickness": 5,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Source Serif Pro Bold 700",
            "weight"   : "700",
            "str"      : "Source+Serif+Pro:700",
            "thickness": 6,
            "italic"   : false
        }, {
            "name"     : "Stoke Light 300",
            "weight"   : "300",
            "str"      : "Stoke:300",
            "thickness": 2,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Stoke Normal 400",
            "weight"   : "400",
            "str"      : "Stoke:400",
            "thickness": 4,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Tienne Normal 400",
            "weight"   : "400",
            "str"      : "Tienne:400",
            "thickness": 4,
            "italic"   : false
        }, {
            "name"     : "Tienne Bold 700",
            "weight"   : "700",
            "str"      : "Tienne:700",
            "thickness": 6,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Tienne Black 900",
            "weight"   : "900",
            "str"      : "Tienne:900",
            "thickness": 7,
            "italic"   : false
        }, {
            "name"     : "Tinos Normal 400",
            "weight"   : "400",
            "str"      : "Tinos:400",
            "thickness": 4,
            "slant"    : 0,
            "italic"   : false
        }, {
            "name"     : "Tinos Bold 700",
            "weight"   : "700",
            "str"      : "Tinos:700",
            "thickness": 6,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"  : "Tinos Normal 400 italic",
            "weight": "400",
            "str"   : "Tinos:400i",
            "slant" : 3,
            "width" : 5,
            "italic": true
        }, {
            "name"     : "Tinos Bold 700 italic",
            "weight"   : "700",
            "str"      : "Tinos:700i",
            "thickness": 5,
            "italic"   : true
        }, {
            "name"     : "Trocchi Normal 400",
            "weight"   : "400",
            "str"      : "Trocchi:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Trykker Normal 400",
            "weight"   : "400",
            "str"      : "Trykker:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Ultra Normal 400",
            "weight"   : "400",
            "str"      : "Ultra:400",
            "thickness": 8,
            "slant"    : 0,
            "width"    : 8,
            "italic"   : false
        }, {
            "name"     : "Unna Normal 400",
            "weight"   : "400",
            "str"      : "Unna:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Vesper Libre Normal 400",
            "weight"   : "400",
            "str"      : "Vesper+Libre:400",
            "thickness": 3,
            "italic"   : false
        }, {
            "name"     : "Vesper Libre Medium 500",
            "weight"   : "500",
            "str"      : "Vesper+Libre:500",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Vesper Libre Bold 700",
            "weight"   : "700",
            "str"      : "Vesper+Libre:700",
            "thickness": 6,
            "italic"   : false
        }, {
            "name"     : "Vesper Libre Black 900",
            "weight"   : "900",
            "str"      : "Vesper+Libre:900",
            "thickness": 8,
            "italic"   : false
        }, {
            "name"     : "Vidaloka Normal 400",
            "weight"   : "400",
            "str"      : "Vidaloka:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Volkhov Normal 400",
            "weight"   : "400",
            "str"      : "Volkhov:400",
            "thickness": 5,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Volkhov Bold 700",
            "weight"   : "700",
            "str"      : "Volkhov:700",
            "thickness": 6,
            "italic"   : false
        }, {
            "name"     : "Volkhov Normal 400 italic",
            "weight"   : "400",
            "str"      : "Volkhov:400i",
            "thickness": 4,
            "slant"    : 4,
            "width"    : 6,
            "italic"   : true
        }, {
            "name"  : "Volkhov Bold 700 italic",
            "weight": "700",
            "str"   : "Volkhov:700i",
            "italic": true
        }, {
            "name"     : "Vollkorn Normal 400",
            "weight"   : "400",
            "str"      : "Vollkorn:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Vollkorn Bold 700",
            "weight"   : "700",
            "str"      : "Vollkorn:700",
            "thickness": 7,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"  : "Vollkorn Normal 400 italic",
            "weight": "400",
            "str"   : "Vollkorn:400i",
            "slant" : 3,
            "width" : 5,
            "italic": true
        }, {
            "name"  : "Vollkorn Bold 700 italic",
            "weight": "700",
            "str"   : "Vollkorn:700i",
            "italic": true
        }, {
            "name"     : "ABeeZee Normal 400",
            "weight"   : "400",
            "str"      : "ABeeZee:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"  : "ABeeZee Normal 400 italic",
            "weight": "400",
            "str"   : "ABeeZee:400i",
            "slant" : 4,
            "italic": true
        }, {
            "name"     : "Abel Normal 400",
            "weight"   : "400",
            "str"      : "Abel:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Aclonica Normal 400",
            "weight"   : "400",
            "str"      : "Aclonica:400",
            "thickness": 7,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Acme Normal 400",
            "weight"   : "400",
            "str"      : "Acme:400",
            "thickness": 5,
            "slant"    : 0,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Actor Normal 400",
            "weight"   : "400",
            "str"      : "Actor:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Advent Pro Thin 100",
            "weight"   : "100",
            "str"      : "Advent+Pro:100",
            "thickness": 0,
            "italic"   : false
        }, {
            "name"     : "Advent Pro Extra-Light 200",
            "weight"   : "200",
            "str"      : "Advent+Pro:200",
            "thickness": 1,
            "italic"   : false
        }, {
            "name"     : "Advent Pro Light 300",
            "weight"   : "300",
            "str"      : "Advent+Pro:300",
            "thickness": 2,
            "italic"   : false
        }, {
            "name"     : "Advent Pro Normal 400",
            "weight"   : "400",
            "str"      : "Advent+Pro:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"  : "Advent Pro Medium 500",
            "weight": "500",
            "str"   : "Advent+Pro:500",
            "italic": false
        }, {
            "name"     : "Advent Pro Semi-Bold 600",
            "weight"   : "600",
            "str"      : "Advent+Pro:600",
            "thickness": 4,
            "italic"   : false
        }, {
            "name"  : "Advent Pro Bold 700",
            "weight": "700",
            "str"   : "Advent+Pro:700",
            "italic": false
        }, {
            "name"     : "Aldrich Normal 400",
            "weight"   : "400",
            "str"      : "Aldrich:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Alef Normal 400",
            "weight"   : "400",
            "str"      : "Alef:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Alef Bold 700",
            "weight"   : "700",
            "str"      : "Alef:700",
            "thickness": 6,
            "italic"   : false
        }, {
            "name"     : "Alegreya Sans Thin 100",
            "weight"   : "100",
            "str"      : "Alegreya+Sans:100",
            "thickness": 0,
            "italic"   : false
        }, {
            "name"     : "Alegreya Sans Light 300",
            "weight"   : "300",
            "str"      : "Alegreya+Sans:300",
            "thickness": 2,
            "italic"   : false
        }, {
            "name"     : "Alegreya Sans Normal 400",
            "weight"   : "400",
            "str"      : "Alegreya+Sans:400",
            "thickness": 3,
            "italic"   : false
        }, {
            "name"     : "Alegreya Sans Medium 500",
            "weight"   : "500",
            "str"      : "Alegreya+Sans:500",
            "thickness": 4,
            "slant"    : 0,
            "italic"   : false
        }, {
            "name"     : "Alegreya Sans Bold 700",
            "weight"   : "700",
            "str"      : "Alegreya+Sans:700",
            "thickness": 6,
            "italic"   : false
        }, {
            "name"     : "Alegreya Sans Extra-Bold 800",
            "weight"   : "800",
            "str"      : "Alegreya+Sans:800",
            "thickness": 7,
            "italic"   : false
        }, {
            "name"     : "Alegreya Sans Black 900",
            "weight"   : "900",
            "str"      : "Alegreya+Sans:900",
            "thickness": 8,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"  : "Alegreya Sans Thin 100 italic",
            "weight": "100",
            "str"   : "Alegreya+Sans:100i",
            "italic": true
        }, {
            "name"  : "Alegreya Sans Light 300 italic",
            "weight": "300",
            "str"   : "Alegreya+Sans:300i",
            "italic": true
        }, {
            "name"  : "Alegreya Sans Normal 400 italic",
            "weight": "400",
            "str"   : "Alegreya+Sans:400i",
            "italic": true
        }, {
            "name"  : "Alegreya Sans Medium 500 italic",
            "weight": "500",
            "str"   : "Alegreya+Sans:500i",
            "slant" : 4,
            "italic": true
        }, {
            "name"  : "Alegreya Sans Bold 700 italic",
            "weight": "700",
            "str"   : "Alegreya+Sans:700i",
            "italic": true
        }, {
            "name"  : "Alegreya Sans Extra-Bold 800 italic",
            "weight": "800",
            "str"   : "Alegreya+Sans:800i",
            "italic": true
        }, {
            "name"  : "Alegreya Sans Black 900 italic",
            "weight": "900",
            "str"   : "Alegreya+Sans:900i",
            "italic": true
        }, {
            "name"     : "Alegreya Sans SC Thin 100",
            "weight"   : "100",
            "str"      : "Alegreya+Sans+SC:100",
            "thickness": 0,
            "italic"   : false
        }, {
            "name"     : "Alegreya Sans SC Light 300",
            "weight"   : "300",
            "str"      : "Alegreya+Sans+SC:300",
            "thickness": 2,
            "italic"   : false
        }, {
            "name"     : "Alegreya Sans SC Normal 400",
            "weight"   : "400",
            "str"      : "Alegreya+Sans+SC:400",
            "thickness": 3,
            "italic"   : false
        }, {
            "name"     : "Alegreya Sans SC Medium 500",
            "weight"   : "500",
            "str"      : "Alegreya+Sans+SC:500",
            "thickness": 4,
            "slant"    : 0,
            "italic"   : false
        }, {
            "name"     : "Alegreya Sans SC Bold 700",
            "weight"   : "700",
            "str"      : "Alegreya+Sans+SC:700",
            "thickness": 6,
            "italic"   : false
        }, {
            "name"     : "Alegreya Sans SC Extra-Bold 800",
            "weight"   : "800",
            "str"      : "Alegreya+Sans+SC:800",
            "thickness": 7,
            "italic"   : false
        }, {
            "name"     : "Alegreya Sans SC Black 900",
            "weight"   : "900",
            "str"      : "Alegreya+Sans+SC:900",
            "thickness": 8,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"  : "Alegreya Sans SC Thin 100 italic",
            "weight": "100",
            "str"   : "Alegreya+Sans+SC:100i",
            "italic": true
        }, {
            "name"  : "Alegreya Sans SC Light 300 italic",
            "weight": "300",
            "str"   : "Alegreya+Sans+SC:300i",
            "italic": true
        }, {
            "name"  : "Alegreya Sans SC Normal 400 italic",
            "weight": "400",
            "str"   : "Alegreya+Sans+SC:400i",
            "italic": true
        }, {
            "name"  : "Alegreya Sans SC Medium 500 italic",
            "weight": "500",
            "str"   : "Alegreya+Sans+SC:500i",
            "slant" : 4,
            "italic": true
        }, {
            "name"  : "Alegreya Sans SC Bold 700 italic",
            "weight": "700",
            "str"   : "Alegreya+Sans+SC:700i",
            "italic": true
        }, {
            "name"  : "Alegreya Sans SC Extra-Bold 800 italic",
            "weight": "800",
            "str"   : "Alegreya+Sans+SC:800i",
            "italic": true
        }, {
            "name"  : "Alegreya Sans SC Black 900 italic",
            "weight": "900",
            "str"   : "Alegreya+Sans+SC:900i",
            "italic": true
        }, {
            "name"     : "Allerta Normal 400",
            "weight"   : "400",
            "str"      : "Allerta:400",
            "thickness": 5,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Allerta Stencil Normal 400",
            "weight"   : "400",
            "str"      : "Allerta+Stencil:400",
            "thickness": 5,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Amaranth Normal 400",
            "weight"   : "400",
            "str"      : "Amaranth:400",
            "thickness": 5,
            "slant"    : 0,
            "italic"   : false
        }, {
            "name"     : "Amaranth Bold 700",
            "weight"   : "700",
            "str"      : "Amaranth:700",
            "thickness": 6,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"  : "Amaranth Normal 400 italic",
            "weight": "400",
            "str"   : "Amaranth:400i",
            "slant" : 4,
            "italic": true
        }, {
            "name"  : "Amaranth Bold 700 italic",
            "weight": "700",
            "str"   : "Amaranth:700i",
            "italic": true
        }, {
            "name"     : "Anaheim Normal 400",
            "weight"   : "400",
            "str"      : "Anaheim:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Andika Normal 400",
            "weight"   : "400",
            "str"      : "Andika:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Antic Normal 400",
            "weight"   : "400",
            "str"      : "Antic:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Anton Normal 400",
            "weight"   : "400",
            "str"      : "Anton:400",
            "thickness": 6,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Archivo Black Normal 400",
            "weight"   : "400",
            "str"      : "Archivo+Black:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Archivo Narrow Normal 400",
            "weight"   : "400",
            "str"      : "Archivo+Narrow:400",
            "thickness": 3,
            "slant"    : 0,
            "italic"   : false
        }, {
            "name"     : "Archivo Narrow Bold 700",
            "weight"   : "700",
            "str"      : "Archivo+Narrow:700",
            "thickness": 6,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"  : "Archivo Narrow Normal 400 italic",
            "weight": "400",
            "str"   : "Archivo+Narrow:400i",
            "slant" : 4,
            "italic": true
        }, {
            "name"  : "Archivo Narrow Bold 700 italic",
            "weight": "700",
            "str"   : "Archivo+Narrow:700i",
            "italic": true
        }, {
            "name"     : "Arimo Normal 400",
            "weight"   : "400",
            "str"      : "Arimo:400",
            "thickness": 4,
            "slant"    : 0,
            "italic"   : false
        }, {
            "name"     : "Arimo Bold 700",
            "weight"   : "700",
            "str"      : "Arimo:700",
            "thickness": 6,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"  : "Arimo Normal 400 italic",
            "weight": "400",
            "str"   : "Arimo:400i",
            "slant" : 3,
            "italic": true
        }, {
            "name"  : "Arimo Bold 700 italic",
            "weight": "700",
            "str"   : "Arimo:700i",
            "italic": true
        }, {
            "name"     : "Armata Normal 400",
            "weight"   : "400",
            "str"      : "Armata:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Asap Normal 400",
            "weight"   : "400",
            "str"      : "Asap:400",
            "thickness": 4,
            "slant"    : 0,
            "italic"   : false
        }, {
            "name"     : "Asap Bold 700",
            "weight"   : "700",
            "str"      : "Asap:700",
            "thickness": 6,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"  : "Asap Normal 400 italic",
            "weight": "400",
            "str"   : "Asap:400i",
            "slant" : 2,
            "italic": true
        }, {
            "name"  : "Asap Bold 700 italic",
            "weight": "700",
            "str"   : "Asap:700i",
            "italic": true
        }, {
            "name"     : "Asul Normal 400",
            "weight"   : "400",
            "str"      : "Asul:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Asul Bold 700",
            "weight"   : "700",
            "str"      : "Asul:700",
            "thickness": 5,
            "italic"   : false
        }, {
            "name"     : "Average Sans Normal 400",
            "weight"   : "400",
            "str"      : "Average+Sans:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Basic Normal 400",
            "weight"   : "400",
            "str"      : "Basic:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Belleza Normal 400",
            "weight"   : "400",
            "str"      : "Belleza:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "BenchNine Light 300",
            "weight"   : "300",
            "str"      : "BenchNine:300",
            "thickness": 2,
            "italic"   : false
        }, {
            "name"     : "BenchNine Normal 400",
            "weight"   : "400",
            "str"      : "BenchNine:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "BenchNine Bold 700",
            "weight"   : "700",
            "str"      : "BenchNine:700",
            "thickness": 6,
            "italic"   : false
        }, {
            "name"     : "Bubbler One Normal 400",
            "weight"   : "400",
            "str"      : "Bubbler+One:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"  : "Cabin Normal 400",
            "weight": "400",
            "str"   : "Cabin:400",
            "italic": false
        }, {
            "name"     : "Cabin Medium 500",
            "weight"   : "500",
            "str"      : "Cabin:500",
            "thickness": 4,
            "slant"    : 0,
            "italic"   : false
        }, {
            "name"  : "Cabin Semi-Bold 600",
            "weight": "600",
            "str"   : "Cabin:600",
            "width" : 6,
            "italic": false
        }, {
            "name"     : "Cabin Bold 700",
            "weight"   : "700",
            "str"      : "Cabin:700",
            "thickness": 5,
            "italic"   : false
        }, {
            "name"  : "Cabin Normal 400 italic",
            "weight": "400",
            "str"   : "Cabin:400i",
            "width" : 5,
            "italic": true
        }, {
            "name"  : "Cabin Medium 500 italic",
            "weight": "500",
            "str"   : "Cabin:500i",
            "slant" : 3,
            "italic": true
        }, {
            "name"  : "Cabin Semi-Bold 600 italic",
            "weight": "600",
            "str"   : "Cabin:600i",
            "italic": true
        }, {
            "name"  : "Cabin Bold 700 italic",
            "weight": "700",
            "str"   : "Cabin:700i",
            "italic": true
        }, {
            "name"     : "Cabin Condensed Normal 400",
            "weight"   : "400",
            "str"      : "Cabin+Condensed:400",
            "thickness": 4,
            "italic"   : false
        }, {
            "name"  : "Cabin Condensed Medium 500",
            "weight": "500",
            "str"   : "Cabin+Condensed:500",
            "slant" : 0,
            "width" : 5,
            "italic": false
        }, {
            "name"     : "Cabin Condensed Semi-Bold 600",
            "weight"   : "600",
            "str"      : "Cabin+Condensed:600",
            "thickness": 5,
            "italic"   : false
        }, {
            "name"  : "Cabin Condensed Bold 700",
            "weight": "700",
            "str"   : "Cabin+Condensed:700",
            "italic": false
        }, {
            "name"     : "Cagliostro Normal 400",
            "weight"   : "400",
            "str"      : "Cagliostro:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Candal Normal 400",
            "weight"   : "400",
            "str"      : "Candal:400",
            "thickness": 7,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Cantarell Normal 400",
            "weight"   : "400",
            "str"      : "Cantarell:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Cantarell Bold 700",
            "weight"   : "700",
            "str"      : "Cantarell:700",
            "thickness": 5,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"  : "Cantarell Normal 400 italic",
            "weight": "400",
            "str"   : "Cantarell:400i",
            "slant" : 5,
            "italic": true
        }, {
            "name"  : "Cantarell Bold 700 italic",
            "weight": "700",
            "str"   : "Cantarell:700i",
            "italic": true
        }, {
            "name"     : "Cantora One Normal 400",
            "weight"   : "400",
            "str"      : "Cantora+One:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Capriola Normal 400",
            "weight"   : "400",
            "str"      : "Capriola:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Carme Normal 400",
            "weight"   : "400",
            "str"      : "Carme:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Carrois Gothic Normal 400",
            "weight"   : "400",
            "str"      : "Carrois+Gothic:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Carrois Gothic SC Normal 400",
            "weight"   : "400",
            "str"      : "Carrois+Gothic+SC:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Chau Philomene One Normal 400",
            "weight"   : "400",
            "str"      : "Chau+Philomene+One:400",
            "thickness": 5,
            "slant"    : 0,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"  : "Chau Philomene One Normal 400 italic",
            "weight": "400",
            "str"   : "Chau+Philomene+One:400i",
            "slant" : 2,
            "italic": true
        }, {
            "name"     : "Chivo Normal 400",
            "weight"   : "400",
            "str"      : "Chivo:400",
            "thickness": 4,
            "slant"    : 0,
            "italic"   : false
        }, {
            "name"     : "Chivo Black 900",
            "weight"   : "900",
            "str"      : "Chivo:900",
            "thickness": 7,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"  : "Chivo Normal 400 italic",
            "weight": "400",
            "str"   : "Chivo:400i",
            "slant" : 2,
            "italic": true
        }, {
            "name"  : "Chivo Black 900 italic",
            "weight": "900",
            "str"   : "Chivo:900i",
            "italic": true
        }, {
            "name"     : "Convergence Normal 400",
            "weight"   : "400",
            "str"      : "Convergence:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Cuprum Normal 400",
            "weight"   : "400",
            "str"      : "Cuprum:400",
            "thickness": 4,
            "slant"    : 0,
            "italic"   : false
        }, {
            "name"     : "Cuprum Bold 700",
            "weight"   : "700",
            "str"      : "Cuprum:700",
            "thickness": 5,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"  : "Cuprum Normal 400 italic",
            "weight": "400",
            "str"   : "Cuprum:400i",
            "slant" : 3,
            "italic": true
        }, {
            "name"  : "Cuprum Bold 700 italic",
            "weight": "700",
            "str"   : "Cuprum:700i",
            "italic": true
        }, {
            "name"     : "Days One Normal 400",
            "weight"   : "400",
            "str"      : "Days+One:400",
            "thickness": 6,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Denk One Normal 400",
            "weight"   : "400",
            "str"      : "Denk+One:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Didact Gothic Normal 400",
            "weight"   : "400",
            "str"      : "Didact+Gothic:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Doppio One Normal 400",
            "weight"   : "400",
            "str"      : "Doppio+One:400",
            "thickness": 5,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Dorsa Normal 400",
            "weight"   : "400",
            "str"      : "Dorsa:400",
            "thickness": 1,
            "slant"    : 0,
            "width"    : 1,
            "italic"   : false
        }, {
            "name"     : "Dosis Extra-Light 200",
            "weight"   : "200",
            "str"      : "Dosis:200",
            "thickness": 1,
            "italic"   : false
        }, {
            "name"     : "Dosis Light 300",
            "weight"   : "300",
            "str"      : "Dosis:300",
            "thickness": 2,
            "italic"   : false
        }, {
            "name"     : "Dosis Normal 400",
            "weight"   : "400",
            "str"      : "Dosis:400",
            "thickness": 3,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"  : "Dosis Medium 500",
            "weight": "500",
            "str"   : "Dosis:500",
            "slant" : 0,
            "italic": false
        }, {
            "name"     : "Dosis Semi-Bold 600",
            "weight"   : "600",
            "str"      : "Dosis:600",
            "thickness": 4,
            "italic"   : false
        }, {
            "name"     : "Dosis Bold 700",
            "weight"   : "700",
            "str"      : "Dosis:700",
            "thickness": 5,
            "italic"   : false
        }, {
            "name"     : "Dosis Extra-Bold 800",
            "weight"   : "800",
            "str"      : "Dosis:800",
            "thickness": 6,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Droid Sans Normal 400",
            "weight"   : "400",
            "str"      : "Droid+Sans:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Droid Sans Bold 700",
            "weight"   : "700",
            "str"      : "Droid+Sans:700",
            "thickness": 6,
            "italic"   : false
        }, {
            "name"     : "Duru Sans Normal 400",
            "weight"   : "400",
            "str"      : "Duru+Sans:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Economica Normal 400",
            "weight"   : "400",
            "str"      : "Economica:400",
            "thickness": 3,
            "slant"    : 0,
            "italic"   : false
        }, {
            "name"     : "Economica Bold 700",
            "weight"   : "700",
            "str"      : "Economica:700",
            "thickness": 4,
            "width"    : 4,
            "italic"   : false
        }, {
            "name"  : "Economica Normal 400 italic",
            "weight": "400",
            "str"   : "Economica:400i",
            "slant" : 3,
            "italic": true
        }, {
            "name"  : "Economica Bold 700 italic",
            "weight": "700",
            "str"   : "Economica:700i",
            "italic": true
        }, {
            "name"     : "Ek Mukta Extra-Light 200",
            "weight"   : "200",
            "str"      : "Ek+Mukta:200",
            "thickness": 1,
            "italic"   : false
        }, {
            "name"     : "Ek Mukta Light 300",
            "weight"   : "300",
            "str"      : "Ek+Mukta:300",
            "thickness": 2,
            "italic"   : false
        }, {
            "name"     : "Ek Mukta Normal 400",
            "weight"   : "400",
            "str"      : "Ek+Mukta:400",
            "thickness": 3,
            "italic"   : false
        }, {
            "name"     : "Ek Mukta Medium 500",
            "weight"   : "500",
            "str"      : "Ek+Mukta:500",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Ek Mukta Semi-Bold 600",
            "weight"   : "600",
            "str"      : "Ek+Mukta:600",
            "thickness": 5,
            "italic"   : false
        }, {
            "name"     : "Ek Mukta Bold 700",
            "weight"   : "700",
            "str"      : "Ek+Mukta:700",
            "thickness": 6,
            "italic"   : false
        }, {
            "name"     : "Ek Mukta Extra-Bold 800",
            "weight"   : "800",
            "str"      : "Ek+Mukta:800",
            "thickness": 7,
            "italic"   : false
        }, {
            "name"     : "Electrolize Normal 400",
            "weight"   : "400",
            "str"      : "Electrolize:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Englebert Normal 400",
            "weight"   : "400",
            "str"      : "Englebert:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Exo Thin 100",
            "weight"   : "100",
            "str"      : "Exo:100",
            "thickness": 0,
            "italic"   : false
        }, {
            "name"  : "Exo Extra-Light 200",
            "weight": "200",
            "str"   : "Exo:200",
            "italic": false
        }, {
            "name"     : "Exo Light 300",
            "weight"   : "300",
            "str"      : "Exo:300",
            "thickness": 2,
            "italic"   : false
        }, {"name": "Exo Normal 400", "weight": "400", "str": "Exo:400", "italic": false}, {
            "name"  : "Exo Medium 500",
            "weight": "500",
            "str"   : "Exo:500",
            "slant" : 0,
            "italic": false
        }, {
            "name"     : "Exo Semi-Bold 600",
            "weight"   : "600",
            "str"      : "Exo:600",
            "thickness": 4,
            "italic"   : false
        }, {
            "name"     : "Exo Bold 700",
            "weight"   : "700",
            "str"      : "Exo:700",
            "thickness": 5,
            "italic"   : false
        }, {
            "name"     : "Exo Extra-Bold 800",
            "weight"   : "800",
            "str"      : "Exo:800",
            "thickness": 6,
            "italic"   : false
        }, {
            "name"     : "Exo Black 900",
            "weight"   : "900",
            "str"      : "Exo:900",
            "thickness": 7,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"  : "Exo Thin 100 italic",
            "weight": "100",
            "str"   : "Exo:100i",
            "italic": true
        }, {
            "name"  : "Exo Extra-Light 200 italic",
            "weight": "200",
            "str"   : "Exo:200i",
            "italic": true
        }, {
            "name"     : "Exo Light 300 italic",
            "weight"   : "300",
            "str"      : "Exo:300i",
            "thickness": 3,
            "italic"   : true
        }, {
            "name"  : "Exo Normal 400 italic",
            "weight": "400",
            "str"   : "Exo:400i",
            "slant" : 3,
            "italic": true
        }, {
            "name"  : "Exo Medium 500 italic",
            "weight": "500",
            "str"   : "Exo:500i",
            "italic": true
        }, {
            "name"  : "Exo Semi-Bold 600 italic",
            "weight": "600",
            "str"   : "Exo:600i",
            "slant" : 2,
            "italic": true
        }, {
            "name"  : "Exo Bold 700 italic",
            "weight": "700",
            "str"   : "Exo:700i",
            "italic": true
        }, {
            "name"  : "Exo Extra-Bold 800 italic",
            "weight": "800",
            "str"   : "Exo:800i",
            "italic": true
        }, {
            "name"  : "Exo Black 900 italic",
            "weight": "900",
            "str"   : "Exo:900i",
            "italic": true
        }, {
            "name"     : "Exo 2 Thin 100",
            "weight"   : "100",
            "str"      : "Exo+2:100",
            "thickness": 0,
            "italic"   : false
        }, {
            "name"     : "Exo 2 Extra-Light 200",
            "weight"   : "200",
            "str"      : "Exo+2:200",
            "thickness": 1,
            "italic"   : false
        }, {
            "name"     : "Exo 2 Light 300",
            "weight"   : "300",
            "str"      : "Exo+2:300",
            "thickness": 2,
            "italic"   : false
        }, {
            "name"     : "Exo 2 Normal 400",
            "weight"   : "400",
            "str"      : "Exo+2:400",
            "thickness": 3,
            "italic"   : false
        }, {
            "name"     : "Exo 2 Medium 500",
            "weight"   : "500",
            "str"      : "Exo+2:500",
            "thickness": 4,
            "slant"    : 0,
            "italic"   : false
        }, {
            "name"     : "Exo 2 Semi-Bold 600",
            "weight"   : "600",
            "str"      : "Exo+2:600",
            "thickness": 5,
            "italic"   : false
        }, {
            "name"     : "Exo 2 Bold 700",
            "weight"   : "700",
            "str"      : "Exo+2:700",
            "thickness": 6,
            "italic"   : false
        }, {
            "name"     : "Exo 2 Extra-Bold 800",
            "weight"   : "800",
            "str"      : "Exo+2:800",
            "thickness": 7,
            "italic"   : false
        }, {
            "name"     : "Exo 2 Black 900",
            "weight"   : "900",
            "str"      : "Exo+2:900",
            "thickness": 8,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"  : "Exo 2 Thin 100 italic",
            "weight": "100",
            "str"   : "Exo+2:100i",
            "italic": true
        }, {
            "name"  : "Exo 2 Extra-Light 200 italic",
            "weight": "200",
            "str"   : "Exo+2:200i",
            "italic": true
        }, {
            "name"  : "Exo 2 Light 300 italic",
            "weight": "300",
            "str"   : "Exo+2:300i",
            "italic": true
        }, {
            "name"  : "Exo 2 Normal 400 italic",
            "weight": "400",
            "str"   : "Exo+2:400i",
            "italic": true
        }, {
            "name"  : "Exo 2 Medium 500 italic",
            "weight": "500",
            "str"   : "Exo+2:500i",
            "slant" : 4,
            "italic": true
        }, {
            "name"  : "Exo 2 Semi-Bold 600 italic",
            "weight": "600",
            "str"   : "Exo+2:600i",
            "italic": true
        }, {
            "name"  : "Exo 2 Bold 700 italic",
            "weight": "700",
            "str"   : "Exo+2:700i",
            "italic": true
        }, {
            "name"  : "Exo 2 Extra-Bold 800 italic",
            "weight": "800",
            "str"   : "Exo+2:800i",
            "italic": true
        }, {
            "name"  : "Exo 2 Black 900 italic",
            "weight": "900",
            "str"   : "Exo+2:900i",
            "italic": true
        }, {
            "name"     : "Federo Normal 400",
            "weight"   : "400",
            "str"      : "Federo:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Fira Sans Light 300",
            "weight"   : "300",
            "str"      : "Fira+Sans:300",
            "thickness": 2,
            "italic"   : false
        }, {
            "name"     : "Fira Sans Normal 400",
            "weight"   : "400",
            "str"      : "Fira+Sans:400",
            "thickness": 3,
            "slant"    : 0,
            "italic"   : false
        }, {
            "name"     : "Fira Sans Medium 500",
            "weight"   : "500",
            "str"      : "Fira+Sans:500",
            "thickness": 4,
            "italic"   : false
        }, {
            "name"     : "Fira Sans Bold 700",
            "weight"   : "700",
            "str"      : "Fira+Sans:700",
            "thickness": 6,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"  : "Fira Sans Light 300 italic",
            "weight": "300",
            "str"   : "Fira+Sans:300i",
            "italic": true
        }, {
            "name"  : "Fira Sans Normal 400 italic",
            "weight": "400",
            "str"   : "Fira+Sans:400i",
            "slant" : 4,
            "italic": true
        }, {
            "name"  : "Fira Sans Medium 500 italic",
            "weight": "500",
            "str"   : "Fira+Sans:500i",
            "italic": true
        }, {
            "name"  : "Fira Sans Bold 700 italic",
            "weight": "700",
            "str"   : "Fira+Sans:700i",
            "italic": true
        }, {
            "name"     : "Fjalla One Normal 400",
            "weight"   : "400",
            "str"      : "Fjalla+One:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Francois One Normal 400",
            "weight"   : "400",
            "str"      : "Francois+One:400",
            "thickness": 5,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Fresca Normal 400",
            "weight"   : "400",
            "str"      : "Fresca:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"  : "GFS Neohellenic Normal 400",
            "weight": "400",
            "str"   : "GFS+Neohellenic:400",
            "italic": false
        }, {
            "name"  : "GFS Neohellenic Bold 700",
            "weight": "700",
            "str"   : "GFS+Neohellenic:700",
            "italic": false
        }, {
            "name"  : "GFS Neohellenic Normal 400 italic",
            "weight": "400",
            "str"   : "GFS+Neohellenic:400i",
            "italic": true
        }, {
            "name"  : "GFS Neohellenic Bold 700 italic",
            "weight": "700",
            "str"   : "GFS+Neohellenic:700i",
            "italic": true
        }, {
            "name"     : "Gafata Normal 400",
            "weight"   : "400",
            "str"      : "Gafata:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Galdeano Normal 400",
            "weight"   : "400",
            "str"      : "Galdeano:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Geo Normal 400",
            "weight"   : "400",
            "str"      : "Geo:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"  : "Geo Normal 400 italic",
            "weight": "400",
            "str"   : "Geo:400i",
            "slant" : 3,
            "italic": true
        }, {
            "name"     : "Gudea Normal 400",
            "weight"   : "400",
            "str"      : "Gudea:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Gudea Bold 700",
            "weight"   : "700",
            "str"      : "Gudea:700",
            "thickness": 5,
            "italic"   : false
        }, {
            "name"     : "Hammersmith One Normal 400",
            "weight"   : "400",
            "str"      : "Hammersmith+One:400",
            "thickness": 5,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Hind Light 300",
            "weight"   : "300",
            "str"      : "Hind:300",
            "thickness": 2,
            "italic"   : false
        }, {
            "name"     : "Hind Normal 400",
            "weight"   : "400",
            "str"      : "Hind:400",
            "thickness": 3,
            "italic"   : false
        }, {
            "name"     : "Hind Medium 500",
            "weight"   : "500",
            "str"      : "Hind:500",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Hind Semi-Bold 600",
            "weight"   : "600",
            "str"      : "Hind:600",
            "thickness": 5,
            "italic"   : false
        }, {
            "name"     : "Hind Bold 700",
            "weight"   : "700",
            "str"      : "Hind:700",
            "thickness": 6,
            "italic"   : false
        }, {
            "name"     : "Homenaje Normal 400",
            "weight"   : "400",
            "str"      : "Homenaje:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 4,
            "italic"   : false
        }, {
            "name"     : "Imprima Normal 400",
            "weight"   : "400",
            "str"      : "Imprima:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Inder Normal 400",
            "weight"   : "400",
            "str"      : "Inder:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Istok Web Normal 400",
            "weight"   : "400",
            "str"      : "Istok+Web:400",
            "thickness": 4,
            "slant"    : 0,
            "italic"   : false
        }, {
            "name"     : "Istok Web Bold 700",
            "weight"   : "700",
            "str"      : "Istok+Web:700",
            "thickness": 5,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"  : "Istok Web Normal 400 italic",
            "weight": "400",
            "str"   : "Istok+Web:400i",
            "slant" : 3,
            "italic": true
        }, {
            "name"  : "Istok Web Bold 700 italic",
            "weight": "700",
            "str"   : "Istok+Web:700i",
            "italic": true
        }, {
            "name"     : "Jockey One Normal 400",
            "weight"   : "400",
            "str"      : "Jockey+One:400",
            "thickness": 5,
            "slant"    : 0,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Josefin Sans Thin 100",
            "weight"   : "100",
            "str"      : "Josefin+Sans:100",
            "thickness": 0,
            "italic"   : false
        }, {
            "name"     : "Josefin Sans Light 300",
            "weight"   : "300",
            "str"      : "Josefin+Sans:300",
            "thickness": 1,
            "italic"   : false
        }, {
            "name"     : "Josefin Sans Normal 400",
            "weight"   : "400",
            "str"      : "Josefin+Sans:400",
            "thickness": 2,
            "slant"    : 0,
            "italic"   : false
        }, {
            "name"  : "Josefin Sans Semi-Bold 600",
            "weight": "600",
            "str"   : "Josefin+Sans:600",
            "italic": false
        }, {
            "name"     : "Josefin Sans Bold 700",
            "weight"   : "700",
            "str"      : "Josefin+Sans:700",
            "thickness": 3,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"  : "Josefin Sans Thin 100 italic",
            "weight": "100",
            "str"   : "Josefin+Sans:100i",
            "italic": true
        }, {
            "name"  : "Josefin Sans Light 300 italic",
            "weight": "300",
            "str"   : "Josefin+Sans:300i",
            "italic": true
        }, {
            "name"  : "Josefin Sans Normal 400 italic",
            "weight": "400",
            "str"   : "Josefin+Sans:400i",
            "slant" : 2,
            "italic": true
        }, {
            "name"  : "Josefin Sans Semi-Bold 600 italic",
            "weight": "600",
            "str"   : "Josefin+Sans:600i",
            "italic": true
        }, {
            "name"  : "Josefin Sans Bold 700 italic",
            "weight": "700",
            "str"   : "Josefin+Sans:700i",
            "italic": true
        }, {
            "name"     : "Julius Sans One Normal 400",
            "weight"   : "400",
            "str"      : "Julius+Sans+One:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Jura Light 300",
            "weight"   : "300",
            "str"      : "Jura:300",
            "thickness": 2,
            "italic"   : false
        }, {
            "name"  : "Jura Normal 400",
            "weight": "400",
            "str"   : "Jura:400",
            "slant" : 0,
            "width" : 6,
            "italic": false
        }, {
            "name"     : "Jura Medium 500",
            "weight"   : "500",
            "str"      : "Jura:500",
            "thickness": 3,
            "italic"   : false
        }, {
            "name"  : "Jura Semi-Bold 600",
            "weight": "600",
            "str"   : "Jura:600",
            "width" : 7,
            "italic": false
        }, {
            "name"     : "Karla Normal 400",
            "weight"   : "400",
            "str"      : "Karla:400",
            "thickness": 4,
            "slant"    : 0,
            "italic"   : false
        }, {
            "name"     : "Karla Bold 700",
            "weight"   : "700",
            "str"      : "Karla:700",
            "thickness": 5,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Karla Normal 400 italic",
            "weight"   : "400",
            "str"      : "Karla:400i",
            "thickness": 3,
            "slant"    : 1,
            "width"    : 5,
            "italic"   : true
        }, {
            "name"  : "Karla Bold 700 italic",
            "weight": "700",
            "str"   : "Karla:700i",
            "italic": true
        }, {
            "name"     : "Khand Light 300",
            "weight"   : "300",
            "str"      : "Khand:300",
            "thickness": 2,
            "italic"   : false
        }, {
            "name"     : "Khand Normal 400",
            "weight"   : "400",
            "str"      : "Khand:400",
            "thickness": 3,
            "italic"   : false
        }, {
            "name"     : "Khand Medium 500",
            "weight"   : "500",
            "str"      : "Khand:500",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Khand Semi-Bold 600",
            "weight"   : "600",
            "str"      : "Khand:600",
            "thickness": 5,
            "italic"   : false
        }, {
            "name"     : "Khand Bold 700",
            "weight"   : "700",
            "str"      : "Khand:700",
            "thickness": 6,
            "italic"   : false
        }, {
            "name"     : "Kite One Normal 400",
            "weight"   : "400",
            "str"      : "Kite+One:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Krona One Normal 400",
            "weight"   : "400",
            "str"      : "Krona+One:400",
            "thickness": 5,
            "slant"    : 0,
            "width"    : 8,
            "italic"   : false
        }, {
            "name"     : "Lato Thin 100",
            "weight"   : "100",
            "str"      : "Lato:100",
            "thickness": 0,
            "italic"   : false
        }, {
            "name"     : "Lato Light 300",
            "weight"   : "300",
            "str"      : "Lato:300",
            "thickness": 2,
            "italic"   : false
        }, {
            "name"     : "Lato Normal 400",
            "weight"   : "400",
            "str"      : "Lato:400",
            "thickness": 4,
            "slant"    : 0,
            "italic"   : false
        }, {
            "name"     : "Lato Bold 700",
            "weight"   : "700",
            "str"      : "Lato:700",
            "thickness": 5,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Lato Black 900",
            "weight"   : "900",
            "str"      : "Lato:900",
            "thickness": 6,
            "italic"   : false
        }, {
            "name"  : "Lato Thin 100 italic",
            "weight": "100",
            "str"   : "Lato:100i",
            "slant" : 5,
            "width" : 5,
            "italic": true
        }, {
            "name"  : "Lato Light 300 italic",
            "weight": "300",
            "str"   : "Lato:300i",
            "slant" : 3,
            "italic": true
        }, {
            "name"  : "Lato Normal 400 italic",
            "weight": "400",
            "str"   : "Lato:400i",
            "italic": true
        }, {
            "name"  : "Lato Bold 700 italic",
            "weight": "700",
            "str"   : "Lato:700i",
            "slant" : 2,
            "italic": true
        }, {
            "name"  : "Lato Black 900 italic",
            "weight": "900",
            "str"   : "Lato:900i",
            "italic": true
        }, {
            "name"     : "Lekton Normal 400",
            "weight"   : "400",
            "str"      : "Lekton:400",
            "thickness": 3,
            "slant"    : 0,
            "italic"   : false
        }, {
            "name"     : "Lekton Bold 700",
            "weight"   : "700",
            "str"      : "Lekton:700",
            "thickness": 4,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Magra Normal 400",
            "weight"   : "400",
            "str"      : "Magra:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Magra Bold 700",
            "weight"   : "700",
            "str"      : "Magra:700",
            "thickness": 6,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Mako Normal 400",
            "weight"   : "400",
            "str"      : "Mako:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Marmelad Normal 400",
            "weight"   : "400",
            "str"      : "Marmelad:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Marvel Normal 400",
            "weight"   : "400",
            "str"      : "Marvel:400",
            "thickness": 2,
            "slant"    : 0,
            "italic"   : false
        }, {
            "name"     : "Marvel Bold 700",
            "weight"   : "700",
            "str"      : "Marvel:700",
            "thickness": 3,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"  : "Marvel Normal 400 italic",
            "weight": "400",
            "str"   : "Marvel:400i",
            "slant" : 3,
            "italic": true
        }, {
            "name"  : "Marvel Bold 700 italic",
            "weight": "700",
            "str"   : "Marvel:700i",
            "italic": true
        }, {
            "name"     : "Maven Pro Normal 400",
            "weight"   : "400",
            "str"      : "Maven+Pro:400",
            "thickness": 3,
            "italic"   : false
        }, {
            "name"     : "Maven Pro Medium 500",
            "weight"   : "500",
            "str"      : "Maven+Pro:500",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Maven Pro Bold 700",
            "weight"   : "700",
            "str"      : "Maven+Pro:700",
            "thickness": 5,
            "italic"   : false
        }, {
            "name"     : "Maven Pro Black 900",
            "weight"   : "900",
            "str"      : "Maven+Pro:900",
            "thickness": 6,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Merriweather Sans Light 300",
            "weight"   : "300",
            "str"      : "Merriweather+Sans:300",
            "thickness": 2,
            "italic"   : false
        }, {
            "name"     : "Merriweather Sans Normal 400",
            "weight"   : "400",
            "str"      : "Merriweather+Sans:400",
            "thickness": 3,
            "slant"    : 0,
            "italic"   : false
        }, {
            "name"     : "Merriweather Sans Bold 700",
            "weight"   : "700",
            "str"      : "Merriweather+Sans:700",
            "thickness": 6,
            "italic"   : false
        }, {
            "name"     : "Merriweather Sans Extra-Bold 800",
            "weight"   : "800",
            "str"      : "Merriweather+Sans:800",
            "thickness": 7,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"  : "Merriweather Sans Light 300 italic",
            "weight": "300",
            "str"   : "Merriweather+Sans:300i",
            "italic": true
        }, {
            "name"  : "Merriweather Sans Normal 400 italic",
            "weight": "400",
            "str"   : "Merriweather+Sans:400i",
            "slant" : 4,
            "italic": true
        }, {
            "name"  : "Merriweather Sans Bold 700 italic",
            "weight": "700",
            "str"   : "Merriweather+Sans:700i",
            "italic": true
        }, {
            "name"  : "Merriweather Sans Extra-Bold 800 italic",
            "weight": "800",
            "str"   : "Merriweather+Sans:800i",
            "italic": true
        }, {
            "name"     : "Metrophobic Normal 400",
            "weight"   : "400",
            "str"      : "Metrophobic:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Michroma Normal 400",
            "weight"   : "400",
            "str"      : "Michroma:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Molengo Normal 400",
            "weight"   : "400",
            "str"      : "Molengo:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Monda Normal 400",
            "weight"   : "400",
            "str"      : "Monda:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Monda Bold 700",
            "weight"   : "700",
            "str"      : "Monda:700",
            "thickness": 6,
            "italic"   : false
        }, {
            "name"     : "Montserrat Normal 400",
            "weight"   : "400",
            "str"      : "Montserrat:400",
            "thickness": 5,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Montserrat Bold 700",
            "weight"   : "700",
            "str"      : "Montserrat:700",
            "thickness": 6,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Montserrat Alternates Normal 400",
            "weight"   : "400",
            "str"      : "Montserrat+Alternates:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Montserrat Alternates Bold 700",
            "weight"   : "700",
            "str"      : "Montserrat+Alternates:700",
            "thickness": 6,
            "italic"   : false
        }, {
            "name"     : "Montserrat Subrayada Normal 400",
            "weight"   : "400",
            "str"      : "Montserrat+Subrayada:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Montserrat Subrayada Bold 700",
            "weight"   : "700",
            "str"      : "Montserrat+Subrayada:700",
            "thickness": 6,
            "italic"   : false
        }, {
            "name"     : "Mouse Memoirs Normal 400",
            "weight"   : "400",
            "str"      : "Mouse+Memoirs:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"  : "Muli Light 300",
            "weight": "300",
            "str"   : "Muli:300",
            "slant" : 0,
            "italic": false
        }, {
            "name"     : "Muli Normal 400",
            "weight"   : "400",
            "str"      : "Muli:400",
            "thickness": 3,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"  : "Muli Light 300 italic",
            "weight": "300",
            "str"   : "Muli:300i",
            "slant" : 1,
            "italic": true
        }, {
            "name"  : "Muli Normal 400 italic",
            "weight": "400",
            "str"   : "Muli:400i",
            "italic": true
        }, {
            "name"     : "News Cycle Normal 400",
            "weight"   : "400",
            "str"      : "News+Cycle:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "News Cycle Bold 700",
            "weight"   : "700",
            "str"      : "News+Cycle:700",
            "thickness": 4,
            "italic"   : false
        }, {
            "name"     : "Nobile Normal 400",
            "weight"   : "400",
            "str"      : "Nobile:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Nobile Bold 700",
            "weight"   : "700",
            "str"      : "Nobile:700",
            "thickness": 6,
            "italic"   : false
        }, {
            "name"  : "Nobile Normal 400 italic",
            "weight": "400",
            "str"   : "Nobile:400i",
            "slant" : 3,
            "width" : 6,
            "italic": true
        }, {
            "name"     : "Nobile Bold 700 italic",
            "weight"   : "700",
            "str"      : "Nobile:700i",
            "thickness": 5,
            "italic"   : true
        }, {
            "name"     : "Noto Sans Normal 400",
            "weight"   : "400",
            "str"      : "Noto+Sans:400",
            "thickness": 3,
            "slant"    : 0,
            "italic"   : false
        }, {
            "name"     : "Noto Sans Bold 700",
            "weight"   : "700",
            "str"      : "Noto+Sans:700",
            "thickness": 6,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"  : "Noto Sans Normal 400 italic",
            "weight": "400",
            "str"   : "Noto+Sans:400i",
            "slant" : 4,
            "italic": true
        }, {
            "name"  : "Noto Sans Bold 700 italic",
            "weight": "700",
            "str"   : "Noto+Sans:700i",
            "italic": true
        }, {
            "name"     : "Numans Normal 400",
            "weight"   : "400",
            "str"      : "Numans:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Nunito Light 300",
            "weight"   : "300",
            "str"      : "Nunito:300",
            "thickness": 4,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Nunito Normal 400",
            "weight"   : "400",
            "str"      : "Nunito:400",
            "thickness": 5,
            "slant"    : 0,
            "italic"   : false
        }, {
            "name"     : "Nunito Bold 700",
            "weight"   : "700",
            "str"      : "Nunito:700",
            "thickness": 6,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Open Sans Light 300",
            "weight"   : "300",
            "str"      : "Open+Sans:300",
            "thickness": 2,
            "italic"   : false
        }, {
            "name"     : "Open Sans Normal 400",
            "weight"   : "400",
            "str"      : "Open+Sans:400",
            "thickness": 3,
            "italic"   : false
        }, {
            "name"     : "Open Sans Semi-Bold 600",
            "weight"   : "600",
            "str"      : "Open+Sans:600",
            "thickness": 5,
            "slant"    : 0,
            "italic"   : false
        }, {
            "name"     : "Open Sans Bold 700",
            "weight"   : "700",
            "str"      : "Open+Sans:700",
            "thickness": 6,
            "italic"   : false
        }, {
            "name"     : "Open Sans Extra-Bold 800",
            "weight"   : "800",
            "str"      : "Open+Sans:800",
            "thickness": 7,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"  : "Open Sans Light 300 italic",
            "weight": "300",
            "str"   : "Open+Sans:300i",
            "width" : 6,
            "italic": true
        }, {
            "name"  : "Open Sans Normal 400 italic",
            "weight": "400",
            "str"   : "Open+Sans:400i",
            "slant" : 4,
            "italic": true
        }, {
            "name"  : "Open Sans Semi-Bold 600 italic",
            "weight": "600",
            "str"   : "Open+Sans:600i",
            "slant" : 3,
            "italic": true
        }, {
            "name"  : "Open Sans Bold 700 italic",
            "weight": "700",
            "str"   : "Open+Sans:700i",
            "italic": true
        }, {
            "name"  : "Open Sans Extra-Bold 800 italic",
            "weight": "800",
            "str"   : "Open+Sans:800i",
            "italic": true
        }, {
            "name"     : "Open Sans Condensed Light 300",
            "weight"   : "300",
            "str"      : "Open+Sans+Condensed:300",
            "thickness": 2,
            "slant"    : 0,
            "width"    : 4,
            "italic"   : false
        }, {
            "name"     : "Open Sans Condensed Bold 700",
            "weight"   : "700",
            "str"      : "Open+Sans+Condensed:700",
            "thickness": 5,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Orbitron Normal 400",
            "weight"   : "400",
            "str"      : "Orbitron:400",
            "thickness": 3,
            "italic"   : false
        }, {
            "name"     : "Orbitron Medium 500",
            "weight"   : "500",
            "str"      : "Orbitron:500",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Orbitron Bold 700",
            "weight"   : "700",
            "str"      : "Orbitron:700",
            "thickness": 5,
            "italic"   : false
        }, {
            "name"     : "Orbitron Black 900",
            "weight"   : "900",
            "str"      : "Orbitron:900",
            "thickness": 6,
            "italic"   : false
        }, {
            "name"     : "Orienta Normal 400",
            "weight"   : "400",
            "str"      : "Orienta:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Oswald Light 300",
            "weight"   : "300",
            "str"      : "Oswald:300",
            "thickness": 3,
            "width"    : 4,
            "italic"   : false
        }, {
            "name"     : "Oswald Normal 400",
            "weight"   : "400",
            "str"      : "Oswald:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Oswald Bold 700",
            "weight"   : "700",
            "str"      : "Oswald:700",
            "thickness": 5,
            "italic"   : false
        }, {
            "name"     : "Oxygen Light 300",
            "weight"   : "300",
            "str"      : "Oxygen:300",
            "thickness": 2,
            "italic"   : false
        }, {
            "name"     : "Oxygen Normal 400",
            "weight"   : "400",
            "str"      : "Oxygen:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Oxygen Bold 700",
            "weight"   : "700",
            "str"      : "Oxygen:700",
            "thickness": 6,
            "italic"   : false
        }, {
            "name"     : "PT Sans Normal 400",
            "weight"   : "400",
            "str"      : "PT+Sans:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "PT Sans Bold 700",
            "weight"   : "700",
            "str"      : "PT+Sans:700",
            "thickness": 5,
            "italic"   : false
        }, {
            "name"     : "PT Sans Normal 400 italic",
            "weight"   : "400",
            "str"      : "PT+Sans:400i",
            "thickness": 3,
            "slant"    : 4,
            "width"    : 5,
            "italic"   : true
        }, {
            "name"  : "PT Sans Bold 700 italic",
            "weight": "700",
            "str"   : "PT+Sans:700i",
            "italic": true
        }, {
            "name"     : "PT Sans Caption Normal 400",
            "weight"   : "400",
            "str"      : "PT+Sans+Caption:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "PT Sans Caption Bold 700",
            "weight"   : "700",
            "str"      : "PT+Sans+Caption:700",
            "thickness": 5,
            "italic"   : false
        }, {
            "name"     : "PT Sans Narrow Normal 400",
            "weight"   : "400",
            "str"      : "PT+Sans+Narrow:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "PT Sans Narrow Bold 700",
            "weight"   : "700",
            "str"      : "PT+Sans+Narrow:700",
            "thickness": 5,
            "italic"   : false
        }, {
            "name"     : "Pathway Gothic One Normal 400",
            "weight"   : "400",
            "str"      : "Pathway+Gothic+One:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Paytone One Normal 400",
            "weight"   : "400",
            "str"      : "Paytone+One:400",
            "thickness": 7,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Philosopher Normal 400",
            "weight"   : "400",
            "str"      : "Philosopher:400",
            "thickness": 4,
            "slant"    : 0,
            "italic"   : false
        }, {
            "name"     : "Philosopher Bold 700",
            "weight"   : "700",
            "str"      : "Philosopher:700",
            "thickness": 5,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"  : "Philosopher Normal 400 italic",
            "weight": "400",
            "str"   : "Philosopher:400i",
            "slant" : 3,
            "italic": true
        }, {
            "name"  : "Philosopher Bold 700 italic",
            "weight": "700",
            "str"   : "Philosopher:700i",
            "italic": true
        }, {
            "name"     : "Play Normal 400",
            "weight"   : "400",
            "str"      : "Play:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Play Bold 700",
            "weight"   : "700",
            "str"      : "Play:700",
            "thickness": 6,
            "italic"   : false
        }, {
            "name"     : "Pontano Sans Normal 400",
            "weight"   : "400",
            "str"      : "Pontano+Sans:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Port Lligat Sans Normal 400",
            "weight"   : "400",
            "str"      : "Port+Lligat+Sans:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Puritan Normal 400",
            "weight"   : "400",
            "str"      : "Puritan:400",
            "thickness": 4,
            "slant"    : 0,
            "italic"   : false
        }, {
            "name"     : "Puritan Bold 700",
            "weight"   : "700",
            "str"      : "Puritan:700",
            "thickness": 5,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"  : "Puritan Normal 400 italic",
            "weight": "400",
            "str"   : "Puritan:400i",
            "slant" : 2,
            "italic": true
        }, {
            "name"  : "Puritan Bold 700 italic",
            "weight": "700",
            "str"   : "Puritan:700i",
            "italic": true
        }, {
            "name"     : "Quantico Normal 400",
            "weight"   : "400",
            "str"      : "Quantico:400",
            "thickness": 4,
            "slant"    : 0,
            "italic"   : false
        }, {
            "name"     : "Quantico Bold 700",
            "weight"   : "700",
            "str"      : "Quantico:700",
            "thickness": 5,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"  : "Quantico Normal 400 italic",
            "weight": "400",
            "str"   : "Quantico:400i",
            "slant" : 2,
            "italic": true
        }, {
            "name"  : "Quantico Bold 700 italic",
            "weight": "700",
            "str"   : "Quantico:700i",
            "italic": true
        }, {
            "name"     : "Quattrocento Sans Normal 400",
            "weight"   : "400",
            "str"      : "Quattrocento+Sans:400",
            "thickness": 3,
            "slant"    : 0,
            "italic"   : false
        }, {
            "name"     : "Quattrocento Sans Bold 700",
            "weight"   : "700",
            "str"      : "Quattrocento+Sans:700",
            "thickness": 5,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"  : "Quattrocento Sans Normal 400 italic",
            "weight": "400",
            "str"   : "Quattrocento+Sans:400i",
            "slant" : 3,
            "italic": true
        }, {
            "name"  : "Quattrocento Sans Bold 700 italic",
            "weight": "700",
            "str"   : "Quattrocento+Sans:700i",
            "italic": true
        }, {
            "name"     : "Questrial Normal 400",
            "weight"   : "400",
            "str"      : "Questrial:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Quicksand Light 300",
            "weight"   : "300",
            "str"      : "Quicksand:300",
            "thickness": 0,
            "italic"   : false
        }, {
            "name"     : "Quicksand Normal 400",
            "weight"   : "400",
            "str"      : "Quicksand:400",
            "thickness": 2,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Quicksand Bold 700",
            "weight"   : "700",
            "str"      : "Quicksand:700",
            "thickness": 4,
            "italic"   : false
        }, {
            "name"     : "Rajdhani Light 300",
            "weight"   : "300",
            "str"      : "Rajdhani:300",
            "thickness": 2,
            "italic"   : false
        }, {
            "name"     : "Rajdhani Normal 400",
            "weight"   : "400",
            "str"      : "Rajdhani:400",
            "thickness": 3,
            "italic"   : false
        }, {
            "name"     : "Rajdhani Medium 500",
            "weight"   : "500",
            "str"      : "Rajdhani:500",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Rajdhani Semi-Bold 600",
            "weight"   : "600",
            "str"      : "Rajdhani:600",
            "thickness": 5,
            "italic"   : false
        }, {
            "name"     : "Rajdhani Bold 700",
            "weight"   : "700",
            "str"      : "Rajdhani:700",
            "thickness": 6,
            "italic"   : false
        }, {
            "name"     : "Raleway Thin 100",
            "weight"   : "100",
            "str"      : "Raleway:100",
            "thickness": 0,
            "italic"   : false
        }, {
            "name"     : "Raleway Extra-Light 200",
            "weight"   : "200",
            "str"      : "Raleway:200",
            "thickness": 1,
            "italic"   : false
        }, {
            "name"     : "Raleway Light 300",
            "weight"   : "300",
            "str"      : "Raleway:300",
            "thickness": 2,
            "italic"   : false
        }, {
            "name"     : "Raleway Normal 400",
            "weight"   : "400",
            "str"      : "Raleway:400",
            "thickness": 3,
            "italic"   : false
        }, {
            "name"     : "Raleway Medium 500",
            "weight"   : "500",
            "str"      : "Raleway:500",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Raleway Semi-Bold 600",
            "weight"   : "600",
            "str"      : "Raleway:600",
            "thickness": 5,
            "italic"   : false
        }, {
            "name"     : "Raleway Bold 700",
            "weight"   : "700",
            "str"      : "Raleway:700",
            "thickness": 6,
            "italic"   : false
        }, {
            "name"     : "Raleway Extra-Bold 800",
            "weight"   : "800",
            "str"      : "Raleway:800",
            "thickness": 7,
            "italic"   : false
        }, {
            "name"     : "Raleway Black 900",
            "weight"   : "900",
            "str"      : "Raleway:900",
            "thickness": 8,
            "italic"   : false
        }, {
            "name"     : "Rambla Normal 400",
            "weight"   : "400",
            "str"      : "Rambla:400",
            "thickness": 3,
            "slant"    : 0,
            "italic"   : false
        }, {
            "name"     : "Rambla Bold 700",
            "weight"   : "700",
            "str"      : "Rambla:700",
            "thickness": 6,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"  : "Rambla Normal 400 italic",
            "weight": "400",
            "str"   : "Rambla:400i",
            "slant" : 4,
            "italic": true
        }, {
            "name"  : "Rambla Bold 700 italic",
            "weight": "700",
            "str"   : "Rambla:700i",
            "italic": true
        }, {
            "name"     : "Rationale Normal 400",
            "weight"   : "400",
            "str"      : "Rationale:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Roboto Thin 100",
            "weight"   : "100",
            "str"      : "Roboto:100",
            "thickness": 1,
            "italic"   : false
        }, {
            "name"     : "Roboto Light 300",
            "weight"   : "300",
            "str"      : "Roboto:300",
            "thickness": 3,
            "italic"   : false
        }, {
            "name"     : "Roboto Normal 400",
            "weight"   : "400",
            "str"      : "Roboto:400",
            "thickness": 4,
            "slant"    : 0,
            "italic"   : false
        }, {
            "name"  : "Roboto Medium 500",
            "weight": "500",
            "str"   : "Roboto:500",
            "italic": false
        }, {
            "name"     : "Roboto Bold 700",
            "weight"   : "700",
            "str"      : "Roboto:700",
            "thickness": 5,
            "italic"   : false
        }, {
            "name"     : "Roboto Black 900",
            "weight"   : "900",
            "str"      : "Roboto:900",
            "thickness": 6,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"  : "Roboto Thin 100 italic",
            "weight": "100",
            "str"   : "Roboto:100i",
            "italic": true
        }, {
            "name"  : "Roboto Light 300 italic",
            "weight": "300",
            "str"   : "Roboto:300i",
            "slant" : 2,
            "italic": true
        }, {
            "name"  : "Roboto Normal 400 italic",
            "weight": "400",
            "str"   : "Roboto:400i",
            "slant" : 3,
            "italic": true
        }, {
            "name"  : "Roboto Medium 500 italic",
            "weight": "500",
            "str"   : "Roboto:500i",
            "italic": true
        }, {
            "name"  : "Roboto Bold 700 italic",
            "weight": "700",
            "str"   : "Roboto:700i",
            "italic": true
        }, {
            "name"  : "Roboto Black 900 italic",
            "weight": "900",
            "str"   : "Roboto:900i",
            "italic": true
        }, {
            "name"     : "Roboto Condensed Light 300",
            "weight"   : "300",
            "str"      : "Roboto+Condensed:300",
            "thickness": 2,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Roboto Condensed Normal 400",
            "weight"   : "400",
            "str"      : "Roboto+Condensed:400",
            "thickness": 4,
            "slant"    : 0,
            "italic"   : false
        }, {
            "name"     : "Roboto Condensed Bold 700",
            "weight"   : "700",
            "str"      : "Roboto+Condensed:700",
            "thickness": 5,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"  : "Roboto Condensed Light 300 italic",
            "weight": "300",
            "str"   : "Roboto+Condensed:300i",
            "slant" : 4,
            "italic": true
        }, {
            "name"  : "Roboto Condensed Normal 400 italic",
            "weight": "400",
            "str"   : "Roboto+Condensed:400i",
            "slant" : 2,
            "italic": true
        }, {
            "name"  : "Roboto Condensed Bold 700 italic",
            "weight": "700",
            "str"   : "Roboto+Condensed:700i",
            "italic": true
        }, {
            "name"     : "Ropa Sans Normal 400",
            "weight"   : "400",
            "str"      : "Ropa+Sans:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"  : "Ropa Sans Normal 400 italic",
            "weight": "400",
            "str"   : "Ropa+Sans:400i",
            "slant" : 3,
            "width" : 6,
            "italic": true
        }, {
            "name"     : "Rosario Normal 400",
            "weight"   : "400",
            "str"      : "Rosario:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Rosario Bold 700",
            "weight"   : "700",
            "str"      : "Rosario:700",
            "thickness": 5,
            "italic"   : false
        }, {
            "name"  : "Rosario Normal 400 italic",
            "weight": "400",
            "str"   : "Rosario:400i",
            "slant" : 2,
            "width" : 5,
            "italic": true
        }, {
            "name"  : "Rosario Bold 700 italic",
            "weight": "700",
            "str"   : "Rosario:700i",
            "italic": true
        }, {
            "name"     : "Rubik Mono One Normal 400",
            "weight"   : "400",
            "str"      : "Rubik+Mono+One:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Rubik One Normal 400",
            "weight"   : "400",
            "str"      : "Rubik+One:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Ruda Normal 400",
            "weight"   : "400",
            "str"      : "Ruda:400",
            "thickness": 3,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Ruda Bold 700",
            "weight"   : "700",
            "str"      : "Ruda:700",
            "thickness": 5,
            "slant"    : 0,
            "italic"   : false
        }, {
            "name"     : "Ruda Black 900",
            "weight"   : "900",
            "str"      : "Ruda:900",
            "thickness": 6,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Ruluko Normal 400",
            "weight"   : "400",
            "str"      : "Ruluko:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Rum Raisin Normal 400",
            "weight"   : "400",
            "str"      : "Rum+Raisin:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Russo One Normal 400",
            "weight"   : "400",
            "str"      : "Russo+One:400",
            "thickness": 6,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Sarpanch Normal 400",
            "weight"   : "400",
            "str"      : "Sarpanch:400",
            "thickness": 3,
            "italic"   : false
        }, {
            "name"     : "Sarpanch Medium 500",
            "weight"   : "500",
            "str"      : "Sarpanch:500",
            "thickness": 4,
            "italic"   : false
        }, {
            "name"     : "Sarpanch Semi-Bold 600",
            "weight"   : "600",
            "str"      : "Sarpanch:600",
            "thickness": 5,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Sarpanch Bold 700",
            "weight"   : "700",
            "str"      : "Sarpanch:700",
            "thickness": 6,
            "italic"   : false
        }, {
            "name"     : "Sarpanch Extra-Bold 800",
            "weight"   : "800",
            "str"      : "Sarpanch:800",
            "thickness": 7,
            "italic"   : false
        }, {
            "name"     : "Sarpanch Black 900",
            "weight"   : "900",
            "str"      : "Sarpanch:900",
            "thickness": 8,
            "italic"   : false
        }, {
            "name"     : "Scada Normal 400",
            "weight"   : "400",
            "str"      : "Scada:400",
            "thickness": 3,
            "slant"    : 0,
            "italic"   : false
        }, {
            "name"     : "Scada Bold 700",
            "weight"   : "700",
            "str"      : "Scada:700",
            "thickness": 6,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"  : "Scada Normal 400 italic",
            "weight": "400",
            "str"   : "Scada:400i",
            "slant" : 4,
            "italic": true
        }, {
            "name"  : "Scada Bold 700 italic",
            "weight": "700",
            "str"   : "Scada:700i",
            "italic": true
        }, {
            "name"     : "Seymour One Normal 400",
            "weight"   : "400",
            "str"      : "Seymour+One:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Shanti Normal 400",
            "weight"   : "400",
            "str"      : "Shanti:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Share Tech Normal 400",
            "weight"   : "400",
            "str"      : "Share+Tech:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Signika Light 300",
            "weight"   : "300",
            "str"      : "Signika:300",
            "thickness": 3,
            "italic"   : false
        }, {
            "name"     : "Signika Normal 400",
            "weight"   : "400",
            "str"      : "Signika:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Signika Semi-Bold 600",
            "weight"   : "600",
            "str"      : "Signika:600",
            "thickness": 5,
            "italic"   : false
        }, {
            "name"     : "Signika Bold 700",
            "weight"   : "700",
            "str"      : "Signika:700",
            "thickness": 6,
            "italic"   : false
        }, {
            "name"     : "Signika Negative Light 300",
            "weight"   : "300",
            "str"      : "Signika+Negative:300",
            "thickness": 3,
            "italic"   : false
        }, {
            "name"     : "Signika Negative Normal 400",
            "weight"   : "400",
            "str"      : "Signika+Negative:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Signika Negative Semi-Bold 600",
            "weight"   : "600",
            "str"      : "Signika+Negative:600",
            "thickness": 5,
            "italic"   : false
        }, {
            "name"     : "Signika Negative Bold 700",
            "weight"   : "700",
            "str"      : "Signika+Negative:700",
            "thickness": 6,
            "italic"   : false
        }, {
            "name"     : "Sintony Normal 400",
            "weight"   : "400",
            "str"      : "Sintony:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Sintony Bold 700",
            "weight"   : "700",
            "str"      : "Sintony:700",
            "thickness": 6,
            "italic"   : false
        }, {
            "name"     : "Six Caps Normal 400",
            "weight"   : "400",
            "str"      : "Six+Caps:400",
            "thickness": 2,
            "slant"    : 0,
            "width"    : 2,
            "italic"   : false
        }, {
            "name"     : "Snippet Normal 400",
            "weight"   : "400",
            "str"      : "Snippet:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Source Sans Pro Extra-Light 200",
            "weight"   : "200",
            "str"      : "Source+Sans+Pro:200",
            "thickness": 1,
            "italic"   : false
        }, {
            "name"     : "Source Sans Pro Light 300",
            "weight"   : "300",
            "str"      : "Source+Sans+Pro:300",
            "thickness": 2,
            "italic"   : false
        }, {
            "name"     : "Source Sans Pro Normal 400",
            "weight"   : "400",
            "str"      : "Source+Sans+Pro:400",
            "thickness": 3,
            "slant"    : 0,
            "italic"   : false
        }, {
            "name"     : "Source Sans Pro Semi-Bold 600",
            "weight"   : "600",
            "str"      : "Source+Sans+Pro:600",
            "thickness": 5,
            "italic"   : false
        }, {
            "name"     : "Source Sans Pro Bold 700",
            "weight"   : "700",
            "str"      : "Source+Sans+Pro:700",
            "thickness": 6,
            "italic"   : false
        }, {
            "name"     : "Source Sans Pro Black 900",
            "weight"   : "900",
            "str"      : "Source+Sans+Pro:900",
            "thickness": 8,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"  : "Source Sans Pro Extra-Light 200 italic",
            "weight": "200",
            "str"   : "Source+Sans+Pro:200i",
            "italic": true
        }, {
            "name"  : "Source Sans Pro Light 300 italic",
            "weight": "300",
            "str"   : "Source+Sans+Pro:300i",
            "italic": true
        }, {
            "name"  : "Source Sans Pro Normal 400 italic",
            "weight": "400",
            "str"   : "Source+Sans+Pro:400i",
            "slant" : 4,
            "italic": true
        }, {
            "name"  : "Source Sans Pro Semi-Bold 600 italic",
            "weight": "600",
            "str"   : "Source+Sans+Pro:600i",
            "italic": true
        }, {
            "name"  : "Source Sans Pro Bold 700 italic",
            "weight": "700",
            "str"   : "Source+Sans+Pro:700i",
            "italic": true
        }, {
            "name"  : "Source Sans Pro Black 900 italic",
            "weight": "900",
            "str"   : "Source+Sans+Pro:900i",
            "italic": true
        }, {
            "name"     : "Spinnaker Normal 400",
            "weight"   : "400",
            "str"      : "Spinnaker:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Strait Normal 400",
            "weight"   : "400",
            "str"      : "Strait:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Syncopate Normal 400",
            "weight"   : "400",
            "str"      : "Syncopate:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 8,
            "italic"   : false
        }, {
            "name"     : "Syncopate Bold 700",
            "weight"   : "700",
            "str"      : "Syncopate:700",
            "thickness": 7,
            "italic"   : false
        }, {
            "name"     : "Tauri Normal 400",
            "weight"   : "400",
            "str"      : "Tauri:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Teko Light 300",
            "weight"   : "300",
            "str"      : "Teko:300",
            "thickness": 2,
            "italic"   : false
        }, {
            "name"     : "Teko Normal 400",
            "weight"   : "400",
            "str"      : "Teko:400",
            "thickness": 3,
            "italic"   : false
        }, {
            "name"     : "Teko Medium 500",
            "weight"   : "500",
            "str"      : "Teko:500",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Teko Semi-Bold 600",
            "weight"   : "600",
            "str"      : "Teko:600",
            "thickness": 5,
            "italic"   : false
        }, {
            "name"     : "Teko Bold 700",
            "weight"   : "700",
            "str"      : "Teko:700",
            "thickness": 6,
            "italic"   : false
        }, {
            "name"     : "Telex Normal 400",
            "weight"   : "400",
            "str"      : "Telex:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Tenor Sans Normal 400",
            "weight"   : "400",
            "str"      : "Tenor+Sans:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Text Me One Normal 400",
            "weight"   : "400",
            "str"      : "Text+Me+One:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Titillium Web Extra-Light 200",
            "weight"   : "200",
            "str"      : "Titillium+Web:200",
            "thickness": 1,
            "italic"   : false
        }, {
            "name"     : "Titillium Web Light 300",
            "weight"   : "300",
            "str"      : "Titillium+Web:300",
            "thickness": 2,
            "italic"   : false
        }, {
            "name"     : "Titillium Web Normal 400",
            "weight"   : "400",
            "str"      : "Titillium+Web:400",
            "thickness": 3,
            "slant"    : 0,
            "italic"   : false
        }, {
            "name"     : "Titillium Web Semi-Bold 600",
            "weight"   : "600",
            "str"      : "Titillium+Web:600",
            "thickness": 5,
            "italic"   : false
        }, {
            "name"     : "Titillium Web Bold 700",
            "weight"   : "700",
            "str"      : "Titillium+Web:700",
            "thickness": 6,
            "italic"   : false
        }, {
            "name"     : "Titillium Web Black 900",
            "weight"   : "900",
            "str"      : "Titillium+Web:900",
            "thickness": 8,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Ubuntu Light 300",
            "weight"   : "300",
            "str"      : "Ubuntu:300",
            "thickness": 3,
            "italic"   : false
        }, {
            "name"     : "Ubuntu Normal 400",
            "weight"   : "400",
            "str"      : "Ubuntu:400",
            "thickness": 4,
            "slant"    : 0,
            "italic"   : false
        }, {
            "name"     : "Ubuntu Medium 500",
            "weight"   : "500",
            "str"      : "Ubuntu:500",
            "thickness": 5,
            "italic"   : false
        }, {
            "name"     : "Ubuntu Bold 700",
            "weight"   : "700",
            "str"      : "Ubuntu:700",
            "thickness": 6,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"  : "Ubuntu Light 300 italic",
            "weight": "300",
            "str"   : "Ubuntu:300i",
            "italic": true
        }, {
            "name"  : "Ubuntu Normal 400 italic",
            "weight": "400",
            "str"   : "Ubuntu:400i",
            "slant" : 4,
            "italic": true
        }, {
            "name"  : "Ubuntu Medium 500 italic",
            "weight": "500",
            "str"   : "Ubuntu:500i",
            "italic": true
        }, {
            "name"  : "Ubuntu Bold 700 italic",
            "weight": "700",
            "str"   : "Ubuntu:700i",
            "italic": true
        }, {
            "name"     : "Ubuntu Condensed Normal 400",
            "weight"   : "400",
            "str"      : "Ubuntu+Condensed:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Varela Normal 400",
            "weight"   : "400",
            "str"      : "Varela:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Varela Round Normal 400",
            "weight"   : "400",
            "str"      : "Varela+Round:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Viga Normal 400",
            "weight"   : "400",
            "str"      : "Viga:400",
            "thickness": 5,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Voltaire Normal 400",
            "weight"   : "400",
            "str"      : "Voltaire:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Wendy One Normal 400",
            "weight"   : "400",
            "str"      : "Wendy+One:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Wire One Normal 400",
            "weight"   : "400",
            "str"      : "Wire+One:400",
            "thickness": 0,
            "slant"    : 0,
            "width"    : 2,
            "italic"   : false
        }, {
            "name"     : "Yanone Kaffeesatz Extra-Light 200",
            "weight"   : "200",
            "str"      : "Yanone+Kaffeesatz:200",
            "thickness": 1,
            "italic"   : false
        }, {
            "name"     : "Yanone Kaffeesatz Light 300",
            "weight"   : "300",
            "str"      : "Yanone+Kaffeesatz:300",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 4,
            "italic"   : false
        }, {
            "name"  : "Yanone Kaffeesatz Normal 400",
            "weight": "400",
            "str"   : "Yanone+Kaffeesatz:400",
            "italic": false
        }, {
            "name"     : "Yanone Kaffeesatz Bold 700",
            "weight"   : "700",
            "str"      : "Yanone+Kaffeesatz:700",
            "thickness": 5,
            "width"    : 3,
            "italic"   : false
        }, {
            "name"     : "Aguafina Script Normal 400",
            "weight"   : "400",
            "str"      : "Aguafina+Script:400",
            "thickness": 3,
            "slant"    : 7,
            "width"    : 4,
            "italic"   : false
        }, {
            "name"     : "Aladin Normal 400",
            "weight"   : "400",
            "str"      : "Aladin:400",
            "thickness": 5,
            "slant"    : 0,
            "width"    : 4,
            "italic"   : false
        }, {
            "name"     : "Alex Brush Normal 400",
            "weight"   : "400",
            "str"      : "Alex+Brush:400",
            "thickness": 4,
            "slant"    : 8,
            "width"    : 4,
            "italic"   : false
        }, {
            "name"     : "Allura Normal 400",
            "weight"   : "400",
            "str"      : "Allura:400",
            "thickness": 2,
            "slant"    : 6,
            "width"    : 4,
            "italic"   : false
        }, {
            "name"     : "Amatic SC Normal 400",
            "weight"   : "400",
            "str"      : "Amatic+SC:400",
            "thickness": 1,
            "slant"    : 0,
            "width"    : 3,
            "italic"   : false
        }, {
            "name"     : "Amatic SC Bold 700",
            "weight"   : "700",
            "str"      : "Amatic+SC:700",
            "thickness": 2,
            "italic"   : false
        }, {
            "name"     : "Annie Use Your Telescope Normal 400",
            "weight"   : "400",
            "str"      : "Annie+Use+Your+Telescope:400",
            "thickness": 2,
            "slant"    : 0,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Architects Daughter Normal 400",
            "weight"   : "400",
            "str"      : "Architects+Daughter:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Arizonia Normal 400",
            "weight"   : "400",
            "str"      : "Arizonia:400",
            "thickness": 2,
            "slant"    : 8,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Bad Script Normal 400",
            "weight"   : "400",
            "str"      : "Bad+Script:400",
            "thickness": 1,
            "slant"    : 4,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Berkshire Swash Normal 400",
            "weight"   : "400",
            "str"      : "Berkshire+Swash:400",
            "thickness": 6,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Bilbo Normal 400",
            "weight"   : "400",
            "str"      : "Bilbo:400",
            "thickness": 2,
            "slant"    : 5,
            "width"    : 3,
            "italic"   : false
        }, {
            "name"     : "Bilbo Swash Caps Normal 400",
            "weight"   : "400",
            "str"      : "Bilbo+Swash+Caps:400",
            "thickness": 3,
            "slant"    : 5,
            "width"    : 3,
            "italic"   : false
        }, {
            "name"     : "Bonbon Normal 400",
            "weight"   : "400",
            "str"      : "Bonbon:400",
            "thickness": 5,
            "slant"    : 1,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Butterfly Kids Normal 400",
            "weight"   : "400",
            "str"      : "Butterfly+Kids:400",
            "thickness": 2,
            "slant"    : 3,
            "width"    : 4,
            "italic"   : false
        }, {
            "name"     : "Calligraffitti Normal 400",
            "weight"   : "400",
            "str"      : "Calligraffitti:400",
            "thickness": 2,
            "slant"    : 5,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Cedarville Cursive Normal 400",
            "weight"   : "400",
            "str"      : "Cedarville+Cursive:400",
            "thickness": 3,
            "slant"    : 5,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Clicker Script Normal 400",
            "weight"   : "400",
            "str"      : "Clicker+Script:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Coming Soon Normal 400",
            "weight"   : "400",
            "str"      : "Coming+Soon:400",
            "thickness": 2,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Condiment Normal 400",
            "weight"   : "400",
            "str"      : "Condiment:400",
            "thickness": 4,
            "slant"    : 8,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Cookie Normal 400",
            "weight"   : "400",
            "str"      : "Cookie:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 4,
            "italic"   : false
        }, {
            "name"     : "Courgette Normal 400",
            "weight"   : "400",
            "str"      : "Courgette:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Covered By Your Grace Normal 400",
            "weight"   : "400",
            "str"      : "Covered+By+Your+Grace:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Crafty Girls Normal 400",
            "weight"   : "400",
            "str"      : "Crafty+Girls:400",
            "thickness": 2,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Damion Normal 400",
            "weight"   : "400",
            "str"      : "Damion:400",
            "thickness": 4,
            "slant"    : 7,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Dancing Script Normal 400",
            "weight"   : "400",
            "str"      : "Dancing+Script:400",
            "thickness": 3,
            "slant"    : 6,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"  : "Dancing Script Bold 700",
            "weight": "700",
            "str"   : "Dancing+Script:700",
            "italic": false
        }, {
            "name"     : "Dawning of a New Day Normal 400",
            "weight"   : "400",
            "str"      : "Dawning+of+a+New+Day:400",
            "thickness": 1,
            "slant"    : 4,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Delius Normal 400",
            "weight"   : "400",
            "str"      : "Delius:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Delius Swash Caps Normal 400",
            "weight"   : "400",
            "str"      : "Delius+Swash+Caps:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Delius Unicase Normal 400",
            "weight"   : "400",
            "str"      : "Delius+Unicase:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Delius Unicase Bold 700",
            "weight"   : "700",
            "str"      : "Delius+Unicase:700",
            "thickness": 5,
            "width"    : 8,
            "italic"   : false
        }, {
            "name"     : "Devonshire Normal 400",
            "weight"   : "400",
            "str"      : "Devonshire:400",
            "thickness": 4,
            "slant"    : 2,
            "width"    : 4,
            "italic"   : false
        }, {
            "name"     : "Dr Sugiyama Normal 400",
            "weight"   : "400",
            "str"      : "Dr+Sugiyama:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 4,
            "italic"   : false
        }, {
            "name"     : "Eagle Lake Normal 400",
            "weight"   : "400",
            "str"      : "Eagle+Lake:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Engagement Normal 400",
            "weight"   : "400",
            "str"      : "Engagement:400",
            "thickness": 4,
            "slant"    : 1,
            "width"    : 3,
            "italic"   : false
        }, {
            "name"     : "Euphoria Script Normal 400",
            "weight"   : "400",
            "str"      : "Euphoria+Script:400",
            "thickness": 3,
            "slant"    : 3,
            "width"    : 4,
            "italic"   : false
        }, {
            "name"     : "Felipa Normal 400",
            "weight"   : "400",
            "str"      : "Felipa:400",
            "thickness": 2,
            "slant"    : 3,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Fondamento Normal 400",
            "weight"   : "400",
            "str"      : "Fondamento:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"  : "Fondamento Normal 400 italic",
            "weight": "400",
            "str"   : "Fondamento:400i",
            "slant" : 3,
            "italic": true
        }, {
            "name"     : "Give You Glory Normal 400",
            "weight"   : "400",
            "str"      : "Give+You+Glory:400",
            "thickness": 2,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Gloria Hallelujah Normal 400",
            "weight"   : "400",
            "str"      : "Gloria+Hallelujah:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Gochi Hand Normal 400",
            "weight"   : "400",
            "str"      : "Gochi+Hand:400",
            "thickness": 5,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Grand Hotel Normal 400",
            "weight"   : "400",
            "str"      : "Grand+Hotel:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Great Vibes Normal 400",
            "weight"   : "400",
            "str"      : "Great+Vibes:400",
            "thickness": 3,
            "slant"    : 7,
            "width"    : 4,
            "italic"   : false
        }, {
            "name"     : "Handlee Normal 400",
            "weight"   : "400",
            "str"      : "Handlee:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Herr Von Muellerhoff Normal 400",
            "weight"   : "400",
            "str"      : "Herr+Von+Muellerhoff:400",
            "thickness": 2,
            "slant"    : 8,
            "width"    : 3,
            "italic"   : false
        }, {
            "name"     : "Homemade Apple Normal 400",
            "weight"   : "400",
            "str"      : "Homemade+Apple:400",
            "thickness": 4,
            "slant"    : 5,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Indie Flower Normal 400",
            "weight"   : "400",
            "str"      : "Indie+Flower:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Italianno Normal 400",
            "weight"   : "400",
            "str"      : "Italianno:400",
            "thickness": 2,
            "slant"    : 7,
            "width"    : 3,
            "italic"   : false
        }, {
            "name"     : "Jim Nightshade Normal 400",
            "weight"   : "400",
            "str"      : "Jim+Nightshade:400",
            "thickness": 3,
            "slant"    : 3,
            "width"    : 4,
            "italic"   : false
        }, {
            "name"     : "Julee Normal 400",
            "weight"   : "400",
            "str"      : "Julee:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Just Another Hand Normal 400",
            "weight"   : "400",
            "str"      : "Just+Another+Hand:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 2,
            "italic"   : false
        }, {
            "name"     : "Just Me Again Down Here Normal 400",
            "weight"   : "400",
            "str"      : "Just+Me+Again+Down+Here:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 4,
            "italic"   : false
        }, {
            "name"     : "Kalam Light 300",
            "weight"   : "300",
            "str"      : "Kalam:300",
            "thickness": 2,
            "italic"   : false
        }, {
            "name"     : "Kalam Normal 400",
            "weight"   : "400",
            "str"      : "Kalam:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Kalam Bold 700",
            "weight"   : "700",
            "str"      : "Kalam:700",
            "thickness": 6,
            "italic"   : false
        }, {
            "name"     : "Kaushan Script Normal 400",
            "weight"   : "400",
            "str"      : "Kaushan+Script:400",
            "thickness": 4,
            "slant"    : 6,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Kristi Normal 400",
            "weight"   : "400",
            "str"      : "Kristi:400",
            "thickness": 2,
            "slant"    : 6,
            "width"    : 3,
            "italic"   : false
        }, {
            "name"     : "La Belle Aurore Normal 400",
            "weight"   : "400",
            "str"      : "La+Belle+Aurore:400",
            "thickness": 4,
            "slant"    : 7,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "League Script Normal 400",
            "weight"   : "400",
            "str"      : "League+Script:400",
            "thickness": 0,
            "slant"    : 7,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Leckerli One Normal 400",
            "weight"   : "400",
            "str"      : "Leckerli+One:400",
            "thickness": 6,
            "slant"    : 3,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Loved by the King Normal 400",
            "weight"   : "400",
            "str"      : "Loved+by+the+King:400",
            "thickness": 1,
            "slant"    : 0,
            "width"    : 4,
            "italic"   : false
        }, {
            "name"     : "Lovers Quarrel Normal 400",
            "weight"   : "400",
            "str"      : "Lovers+Quarrel:400",
            "thickness": 3,
            "slant"    : 4,
            "width"    : 2,
            "italic"   : false
        }, {
            "name"     : "Marck Script Normal 400",
            "weight"   : "400",
            "str"      : "Marck+Script:400",
            "thickness": 5,
            "slant"    : 6,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Meddon Normal 400",
            "weight"   : "400",
            "str"      : "Meddon:400",
            "thickness": 3,
            "slant"    : 8,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Meie Script Normal 400",
            "weight"   : "400",
            "str"      : "Meie+Script:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Merienda Normal 400",
            "weight"   : "400",
            "str"      : "Merienda:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Merienda Bold 700",
            "weight"   : "700",
            "str"      : "Merienda:700",
            "thickness": 6,
            "italic"   : false
        }, {
            "name"     : "Merienda One Normal 400",
            "weight"   : "400",
            "str"      : "Merienda+One:400",
            "thickness": 5,
            "slant"    : 2,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Miss Fajardose Normal 400",
            "weight"   : "400",
            "str"      : "Miss+Fajardose:400",
            "thickness": 3,
            "slant"    : 8,
            "width"    : 2,
            "italic"   : false
        }, {
            "name"  : "Molle Normal 400",
            "weight": "400",
            "str"   : "Molle:400",
            "italic": false
        }, {
            "name"     : "Molle Normal 400 italic",
            "weight"   : "400",
            "str"      : "Molle:400i",
            "thickness": 3,
            "slant"    : 4,
            "width"    : 6,
            "italic"   : true
        }, {
            "name"     : "Monsieur La Doulaise Normal 400",
            "weight"   : "400",
            "str"      : "Monsieur+La+Doulaise:400",
            "thickness": 2,
            "slant"    : 9,
            "width"    : 4,
            "italic"   : false
        }, {
            "name"     : "Montez Normal 400",
            "weight"   : "400",
            "str"      : "Montez:400",
            "thickness": 2,
            "slant"    : 0,
            "width"    : 4,
            "italic"   : false
        }, {
            "name"     : "Mr Bedfort Normal 400",
            "weight"   : "400",
            "str"      : "Mr+Bedfort:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Mr Dafoe Normal 400",
            "weight"   : "400",
            "str"      : "Mr+Dafoe:400",
            "thickness": 5,
            "slant"    : 9,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Mr De Haviland Normal 400",
            "weight"   : "400",
            "str"      : "Mr+De+Haviland:400",
            "thickness": 2,
            "slant"    : 8,
            "width"    : 3,
            "italic"   : false
        }, {
            "name"     : "Mrs Saint Delafield Normal 400",
            "weight"   : "400",
            "str"      : "Mrs+Saint+Delafield:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Mrs Sheppards Normal 400",
            "weight"   : "400",
            "str"      : "Mrs+Sheppards:400",
            "thickness": 7,
            "slant"    : 9,
            "width"    : 4,
            "italic"   : false
        }, {
            "name"     : "Neucha Normal 400",
            "weight"   : "400",
            "str"      : "Neucha:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Niconne Normal 400",
            "weight"   : "400",
            "str"      : "Niconne:400",
            "thickness": 5,
            "slant"    : 5,
            "width"    : 4,
            "italic"   : false
        }, {
            "name"     : "Norican Normal 400",
            "weight"   : "400",
            "str"      : "Norican:400",
            "thickness": 5,
            "slant"    : 4,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Nothing You Could Do Normal 400",
            "weight"   : "400",
            "str"      : "Nothing+You+Could+Do:400",
            "thickness": 2,
            "slant"    : 7,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Over the Rainbow Normal 400",
            "weight"   : "400",
            "str"      : "Over+the+Rainbow:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Pacifico Normal 400",
            "weight"   : "400",
            "str"      : "Pacifico:400",
            "thickness": 4,
            "slant"    : 3,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Parisienne Normal 400",
            "weight"   : "400",
            "str"      : "Parisienne:400",
            "thickness": 4,
            "slant"    : 7,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Patrick Hand Normal 400",
            "weight"   : "400",
            "str"      : "Patrick+Hand:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Patrick Hand SC Normal 400",
            "weight"   : "400",
            "str"      : "Patrick+Hand+SC:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Permanent Marker Normal 400",
            "weight"   : "400",
            "str"      : "Permanent+Marker:400",
            "thickness": 6,
            "slant"    : 5,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Petit Formal Script Normal 400",
            "weight"   : "400",
            "str"      : "Petit+Formal+Script:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Pinyon Script Normal 400",
            "weight"   : "400",
            "str"      : "Pinyon+Script:400",
            "thickness": 4,
            "slant"    : 8,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Princess Sofia Normal 400",
            "weight"   : "400",
            "str"      : "Princess+Sofia:400",
            "thickness": 3,
            "slant"    : 2,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Quintessential Normal 400",
            "weight"   : "400",
            "str"      : "Quintessential:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Qwigley Normal 400",
            "weight"   : "400",
            "str"      : "Qwigley:400",
            "thickness": 2,
            "slant"    : 6,
            "width"    : 3,
            "italic"   : false
        }, {
            "name"     : "Rancho Normal 400",
            "weight"   : "400",
            "str"      : "Rancho:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 4,
            "italic"   : false
        }, {
            "name"     : "Redressed Normal 400",
            "weight"   : "400",
            "str"      : "Redressed:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Reenie Beanie Normal 400",
            "weight"   : "400",
            "str"      : "Reenie+Beanie:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Rochester Normal 400",
            "weight"   : "400",
            "str"      : "Rochester:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 4,
            "italic"   : false
        }, {
            "name"     : "Rock Salt Normal 400",
            "weight"   : "400",
            "str"      : "Rock+Salt:400",
            "thickness": 3,
            "slant"    : 1,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Romanesco Normal 400",
            "weight"   : "400",
            "str"      : "Romanesco:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Rouge Script Normal 400",
            "weight"   : "400",
            "str"      : "Rouge+Script:400",
            "thickness": 3,
            "slant"    : 3,
            "width"    : 4,
            "italic"   : false
        }, {
            "name"     : "Ruge Boogie Normal 400",
            "weight"   : "400",
            "str"      : "Ruge+Boogie:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 4,
            "italic"   : false
        }, {
            "name"     : "Ruthie Normal 400",
            "weight"   : "400",
            "str"      : "Ruthie:400",
            "thickness": 3,
            "slant"    : 6,
            "width"    : 3,
            "italic"   : false
        }, {
            "name"     : "Sacramento Normal 400",
            "weight"   : "400",
            "str"      : "Sacramento:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Satisfy Normal 400",
            "weight"   : "400",
            "str"      : "Satisfy:400",
            "thickness": 3,
            "slant"    : 4,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Schoolbell Normal 400",
            "weight"   : "400",
            "str"      : "Schoolbell:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Shadows Into Light Normal 400",
            "weight"   : "400",
            "str"      : "Shadows+Into+Light:400",
            "thickness": 2,
            "slant"    : 0,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Shadows Into Light Two Normal 400",
            "weight"   : "400",
            "str"      : "Shadows+Into+Light+Two:400",
            "thickness": 2,
            "slant"    : 0,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Short Stack Normal 400",
            "weight"   : "400",
            "str"      : "Short+Stack:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Sofia Normal 400",
            "weight"   : "400",
            "str"      : "Sofia:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Stalemate Normal 400",
            "weight"   : "400",
            "str"      : "Stalemate:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Sue Ellen Francisco Normal 400",
            "weight"   : "400",
            "str"      : "Sue+Ellen+Francisco:400",
            "thickness": 2,
            "slant"    : 0,
            "width"    : 3,
            "italic"   : false
        }, {
            "name"     : "Sunshiney Normal 400",
            "weight"   : "400",
            "str"      : "Sunshiney:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Swanky and Moo Moo Normal 400",
            "weight"   : "400",
            "str"      : "Swanky+and+Moo+Moo:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Tangerine Normal 400",
            "weight"   : "400",
            "str"      : "Tangerine:400",
            "thickness": 2,
            "slant"    : 9,
            "width"    : 2,
            "italic"   : false
        }, {
            "name"     : "Tangerine Bold 700",
            "weight"   : "700",
            "str"      : "Tangerine:700",
            "thickness": 3,
            "slant"    : 7,
            "width"    : 3,
            "italic"   : false
        }, {
            "name"     : "The Girl Next Door Normal 400",
            "weight"   : "400",
            "str"      : "The+Girl+Next+Door:400",
            "thickness": 2,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Vibur Normal 400",
            "weight"   : "400",
            "str"      : "Vibur:400",
            "thickness": 4,
            "slant"    : 2,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Waiting for the Sunrise Normal 400",
            "weight"   : "400",
            "str"      : "Waiting+for+the+Sunrise:400",
            "thickness": 1,
            "slant"    : 0,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Walter Turncoat Normal 400",
            "weight"   : "400",
            "str"      : "Walter+Turncoat:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Yellowtail Normal 400",
            "weight"   : "400",
            "str"      : "Yellowtail:400",
            "thickness": 5,
            "slant"    : 7,
            "width"    : 4,
            "italic"   : false
        }, {
            "name"     : "Yesteryear Normal 400",
            "weight"   : "400",
            "str"      : "Yesteryear:400",
            "thickness": 5,
            "slant"    : 6,
            "width"    : 4,
            "italic"   : false
        }, {
            "name"     : "Zeyada Normal 400",
            "weight"   : "400",
            "str"      : "Zeyada:400",
            "thickness": 2,
            "slant"    : 0,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Abril Fatface Normal 400",
            "weight"   : "400",
            "str"      : "Abril+Fatface:400",
            "thickness": 6,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Akronim Normal 400",
            "weight"   : "400",
            "str"      : "Akronim:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Alfa Slab One Normal 400",
            "weight"   : "400",
            "str"      : "Alfa+Slab+One:400",
            "thickness": 8,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Allan Normal 400",
            "weight"   : "400",
            "str"      : "Allan:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Allan Bold 700",
            "weight"   : "700",
            "str"      : "Allan:700",
            "thickness": 5,
            "slant"    : 4,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Almendra Display Normal 400",
            "weight"   : "400",
            "str"      : "Almendra+Display:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Amarante Normal 400",
            "weight"   : "400",
            "str"      : "Amarante:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        },
        {
            "name"     : "Arbutus Normal 400",
            "weight"   : "400",
            "str"      : "Arbutus:400",
            "thickness": 7,
            "slant"    : 0,
            "width"    : 8,
            "italic"   : false
        }, {
            "name"     : "Asset Normal 400",
            "weight"   : "400",
            "str"      : "Asset:400",
            "thickness": 9,
            "slant"    : 0,
            "width"    : 9,
            "italic"   : false
        }, {
            "name"     : "Astloch Normal 400",
            "weight"   : "400",
            "str"      : "Astloch:400",
            "thickness": 1,
            "slant"    : 0,
            "width"    : 4,
            "italic"   : false
        }, {
            "name"     : "Astloch Bold 700",
            "weight"   : "700",
            "str"      : "Astloch:700",
            "thickness": 5,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Atomic Age Normal 400",
            "weight"   : "400",
            "str"      : "Atomic+Age:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Aubrey Normal 400",
            "weight"   : "400",
            "str"      : "Aubrey:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Audiowide Normal 400",
            "weight"   : "400",
            "str"      : "Audiowide:400",
            "thickness": 5,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Autour One Normal 400",
            "weight"   : "400",
            "str"      : "Autour+One:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Averia Gruesa Libre Normal 400",
            "weight"   : "400",
            "str"      : "Averia+Gruesa+Libre:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"  : "Averia Libre Light 300",
            "weight": "300",
            "str"   : "Averia+Libre:300",
            "italic": false
        }, {
            "name"     : "Averia Libre Normal 400",
            "weight"   : "400",
            "str"      : "Averia+Libre:400",
            "thickness": 4,
            "slant"    : 0,
            "italic"   : false
        }, {
            "name"     : "Averia Libre Bold 700",
            "weight"   : "700",
            "str"      : "Averia+Libre:700",
            "thickness": 5,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Averia Libre Light 300 italic",
            "weight"   : "300",
            "str"      : "Averia+Libre:300i",
            "thickness": 3,
            "italic"   : true
        }, {
            "name"  : "Averia Libre Normal 400 italic",
            "weight": "400",
            "str"   : "Averia+Libre:400i",
            "slant" : 3,
            "italic": true
        }, {
            "name"  : "Averia Libre Bold 700 italic",
            "weight": "700",
            "str"   : "Averia+Libre:700i",
            "italic": true
        }, {
            "name"  : "Averia Sans Libre Light 300",
            "weight": "300",
            "str"   : "Averia+Sans+Libre:300",
            "italic": false
        }, {
            "name"     : "Averia Sans Libre Normal 400",
            "weight"   : "400",
            "str"      : "Averia+Sans+Libre:400",
            "thickness": 4,
            "slant"    : 0,
            "italic"   : false
        }, {
            "name"     : "Averia Sans Libre Bold 700",
            "weight"   : "700",
            "str"      : "Averia+Sans+Libre:700",
            "thickness": 5,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Averia Sans Libre Light 300 italic",
            "weight"   : "300",
            "str"      : "Averia+Sans+Libre:300i",
            "thickness": 3,
            "italic"   : true
        }, {
            "name"  : "Averia Sans Libre Normal 400 italic",
            "weight": "400",
            "str"   : "Averia+Sans+Libre:400i",
            "slant" : 3,
            "italic": true
        }, {
            "name"  : "Averia Sans Libre Bold 700 italic",
            "weight": "700",
            "str"   : "Averia+Sans+Libre:700i",
            "italic": true
        }, {
            "name"  : "Averia Serif Libre Light 300",
            "weight": "300",
            "str"   : "Averia+Serif+Libre:300",
            "italic": false
        }, {
            "name"  : "Averia Serif Libre Normal 400",
            "weight": "400",
            "str"   : "Averia+Serif+Libre:400",
            "slant" : 0,
            "italic": false
        }, {
            "name"     : "Averia Serif Libre Bold 700",
            "weight"   : "700",
            "str"      : "Averia+Serif+Libre:700",
            "thickness": 5,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Averia Serif Libre Light 300 italic",
            "weight"   : "300",
            "str"      : "Averia+Serif+Libre:300i",
            "thickness": 4,
            "italic"   : true
        }, {
            "name"  : "Averia Serif Libre Normal 400 italic",
            "weight": "400",
            "str"   : "Averia+Serif+Libre:400i",
            "slant" : 3,
            "italic": true
        }, {
            "name"  : "Averia Serif Libre Bold 700 italic",
            "weight": "700",
            "str"   : "Averia+Serif+Libre:700i",
            "italic": true
        }, {
            "name"     : "Bangers Normal 400",
            "weight"   : "400",
            "str"      : "Bangers:400",
            "thickness": 5,
            "slant"    : 3,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Baumans Normal 400",
            "weight"   : "400",
            "str"      : "Baumans:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Bevan Normal 400",
            "weight"   : "400",
            "str"      : "Bevan:400",
            "thickness": 7,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Bigelow Rules Normal 400",
            "weight"   : "400",
            "str"      : "Bigelow+Rules:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Bigshot One Normal 400",
            "weight"   : "400",
            "str"      : "Bigshot+One:400",
            "thickness": 6,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Black Ops One Normal 400",
            "weight"   : "400",
            "str"      : "Black+Ops+One:400",
            "thickness": 8,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Boogaloo Normal 400",
            "weight"   : "400",
            "str"      : "Boogaloo:400",
            "thickness": 5,
            "slant"    : 0,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Bowlby One Normal 400",
            "weight"   : "400",
            "str"      : "Bowlby+One:400",
            "thickness": 8,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Bowlby One SC Normal 400",
            "weight"   : "400",
            "str"      : "Bowlby+One+SC:400",
            "thickness": 8,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Bubblegum Sans Normal 400",
            "weight"   : "400",
            "str"      : "Bubblegum+Sans:400",
            "thickness": 5,
            "slant"    : 0,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Buda Light 300",
            "weight"   : "300",
            "str"      : "Buda:300",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Butcherman Normal 400",
            "weight"   : "400",
            "str"      : "Butcherman:400",
            "thickness": 5,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Cabin Sketch Normal 400",
            "weight"   : "400",
            "str"      : "Cabin+Sketch:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"  : "Cabin Sketch Bold 700",
            "weight": "700",
            "str"   : "Cabin+Sketch:700",
            "italic": false
        }, {
            "name"     : "Caesar Dressing Normal 400",
            "weight"   : "400",
            "str"      : "Caesar+Dressing:400",
            "thickness": 5,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Carter One Normal 400",
            "weight"   : "400",
            "str"      : "Carter+One:400",
            "thickness": 6,
            "slant"    : 2,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Ceviche One Normal 400",
            "weight"   : "400",
            "str"      : "Ceviche+One:400",
            "thickness": 7,
            "slant"    : 4,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Changa One Normal 400",
            "weight"   : "400",
            "str"      : "Changa+One:400",
            "thickness": 7,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"  : "Changa One Normal 400 italic",
            "weight": "400",
            "str"   : "Changa+One:400i",
            "slant" : 3,
            "italic": true
        }, {
            "name"     : "Chango Normal 400",
            "weight"   : "400",
            "str"      : "Chango:400",
            "thickness": 9,
            "slant"    : 0,
            "width"    : 8,
            "italic"   : false
        }, {
            "name"     : "Chela One Normal 400",
            "weight"   : "400",
            "str"      : "Chela+One:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Chelsea Market Normal 400",
            "weight"   : "400",
            "str"      : "Chelsea+Market:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Cherry Cream Soda Normal 400",
            "weight"   : "400",
            "str"      : "Cherry+Cream+Soda:400",
            "thickness": 6,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Cherry Swash Normal 400",
            "weight"   : "400",
            "str"      : "Cherry+Swash:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Cherry Swash Bold 700",
            "weight"   : "700",
            "str"      : "Cherry+Swash:700",
            "thickness": 6,
            "italic"   : false
        }, {
            "name"     : "Chewy Normal 400",
            "weight"   : "400",
            "str"      : "Chewy:400",
            "thickness": 6,
            "slant"    : 0,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Chicle Normal 400",
            "weight"   : "400",
            "str"      : "Chicle:400",
            "thickness": 5,
            "slant"    : 0,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Cinzel Decorative Normal 400",
            "weight"   : "400",
            "str"      : "Cinzel+Decorative:400",
            "thickness": 3,
            "italic"   : false
        }, {
            "name"     : "Cinzel Decorative Bold 700",
            "weight"   : "700",
            "str"      : "Cinzel+Decorative:700",
            "thickness": 6,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Cinzel Decorative Black 900",
            "weight"   : "900",
            "str"      : "Cinzel+Decorative:900",
            "thickness": 8,
            "italic"   : false
        }, {
            "name"     : "Coda Normal 400",
            "weight"   : "400",
            "str"      : "Coda:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Coda Extra-Bold 800",
            "weight"   : "800",
            "str"      : "Coda:800",
            "thickness": 8,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Codystar Light 300",
            "weight"   : "300",
            "str"      : "Codystar:300",
            "thickness": 0,
            "slant"    : 8,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"  : "Codystar Normal 400",
            "weight": "400",
            "str"   : "Codystar:400",
            "slant" : 0,
            "italic": false
        }, {
            "name"     : "Combo Normal 400",
            "weight"   : "400",
            "str"      : "Combo:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Comfortaa Light 300",
            "weight"   : "300",
            "str"      : "Comfortaa:300",
            "thickness": 3,
            "italic"   : false
        }, {
            "name"  : "Comfortaa Normal 400",
            "weight": "400",
            "str"   : "Comfortaa:400",
            "slant" : 0,
            "width" : 7,
            "italic": false
        }, {
            "name"     : "Comfortaa Bold 700",
            "weight"   : "700",
            "str"      : "Comfortaa:700",
            "thickness": 4,
            "italic"   : false
        }, {
            "name"     : "Concert One Normal 400",
            "weight"   : "400",
            "str"      : "Concert+One:400",
            "thickness": 6,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        },
        {
            "name"     : "Contrail One Normal 400",
            "weight"   : "400",
            "str"      : "Contrail+One:400",
            "thickness": 5,
            "slant"    : 2,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Corben Normal 400",
            "weight"   : "400",
            "str"      : "Corben:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Corben Bold 700",
            "weight"   : "700",
            "str"      : "Corben:700",
            "thickness": 8,
            "width"    : 8,
            "italic"   : false
        }, {
            "name"     : "Creepster Normal 400",
            "weight"   : "400",
            "str"      : "Creepster:400",
            "thickness": 6,
            "slant"    : 0,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Croissant One Normal 400",
            "weight"   : "400",
            "str"      : "Croissant+One:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Crushed Normal 400",
            "weight"   : "400",
            "str"      : "Crushed:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Diplomata Normal 400",
            "weight"   : "400",
            "str"      : "Diplomata:400",
            "thickness": 8,
            "slant"    : 0,
            "width"    : 9,
            "italic"   : false
        }, {
            "name"     : "Diplomata SC Normal 400",
            "weight"   : "400",
            "str"      : "Diplomata+SC:400",
            "thickness": 8,
            "slant"    : 0,
            "width"    : 9,
            "italic"   : false
        }, {
            "name"     : "Dynalight Normal 400",
            "weight"   : "400",
            "str"      : "Dynalight:400",
            "thickness": 3,
            "slant"    : 6,
            "width"    : 4,
            "italic"   : false
        }, {
            "name"     : "Eater Normal 400",
            "weight"   : "400",
            "str"      : "Eater:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Elsie Normal 400",
            "weight"   : "400",
            "str"      : "Elsie:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Elsie Black 900",
            "weight"   : "900",
            "str"      : "Elsie:900",
            "thickness": 8,
            "italic"   : false
        }, {
            "name"     : "Elsie Swash Caps Normal 400",
            "weight"   : "400",
            "str"      : "Elsie+Swash+Caps:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Elsie Swash Caps Black 900",
            "weight"   : "900",
            "str"      : "Elsie+Swash+Caps:900",
            "thickness": 8,
            "italic"   : false
        }, {
            "name"     : "Emblema One Normal 400",
            "weight"   : "400",
            "str"      : "Emblema+One:400",
            "thickness": 7,
            "slant"    : 2,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Emilys Candy Normal 400",
            "weight"   : "400",
            "str"      : "Emilys+Candy:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Erica One Normal 400",
            "weight"   : "400",
            "str"      : "Erica+One:400",
            "thickness": 9,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Ewert Normal 400",
            "weight"   : "400",
            "str"      : "Ewert:400",
            "thickness": 5,
            "slant"    : 2,
            "width"    : 8,
            "italic"   : false
        }, {
            "name"  : "Expletus Sans Normal 400",
            "weight": "400",
            "str"   : "Expletus+Sans:400",
            "italic": false
        }, {
            "name"     : "Expletus Sans Medium 500",
            "weight"   : "500",
            "str"      : "Expletus+Sans:500",
            "thickness": 4,
            "slant"    : 0,
            "italic"   : false
        }, {
            "name"  : "Expletus Sans Semi-Bold 600",
            "weight": "600",
            "str"   : "Expletus+Sans:600",
            "italic": false
        }, {
            "name"     : "Expletus Sans Bold 700",
            "weight"   : "700",
            "str"      : "Expletus+Sans:700",
            "thickness": 5,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"  : "Expletus Sans Normal 400 italic",
            "weight": "400",
            "str"   : "Expletus+Sans:400i",
            "italic": true
        }, {
            "name"  : "Expletus Sans Medium 500 italic",
            "weight": "500",
            "str"   : "Expletus+Sans:500i",
            "slant" : 2,
            "italic": true
        }, {
            "name"  : "Expletus Sans Semi-Bold 600 italic",
            "weight": "600",
            "str"   : "Expletus+Sans:600i",
            "italic": true
        }, {
            "name"  : "Expletus Sans Bold 700 italic",
            "weight": "700",
            "str"   : "Expletus+Sans:700i",
            "italic": true
        }, {
            "name"     : "Fascinate Normal 400",
            "weight"   : "400",
            "str"      : "Fascinate:400",
            "thickness": 8,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Fascinate Inline Normal 400",
            "weight"   : "400",
            "str"      : "Fascinate+Inline:400",
            "thickness": 8,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Faster One Normal 400",
            "weight"   : "400",
            "str"      : "Faster+One:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Federant Normal 400",
            "weight"   : "400",
            "str"      : "Federant:400",
            "thickness": 5,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Finger Paint Normal 400",
            "weight"   : "400",
            "str"      : "Finger+Paint:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Flamenco Light 300",
            "weight"   : "300",
            "str"      : "Flamenco:300",
            "thickness": 0,
            "slant"    : 0,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Flamenco Normal 400",
            "weight"   : "400",
            "str"      : "Flamenco:400",
            "thickness": 3,
            "italic"   : false
        }, {
            "name"     : "Flavors Normal 400",
            "weight"   : "400",
            "str"      : "Flavors:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Fontdiner Swanky Normal 400",
            "weight"   : "400",
            "str"      : "Fontdiner+Swanky:400",
            "thickness": 5,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Forum Normal 400",
            "weight"   : "400",
            "str"      : "Forum:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Freckle Face Normal 400",
            "weight"   : "400",
            "str"      : "Freckle+Face:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Fredericka the Great Normal 400",
            "weight"   : "400",
            "str"      : "Fredericka+the+Great:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Fredoka One Normal 400",
            "weight"   : "400",
            "str"      : "Fredoka+One:400",
            "thickness": 6,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"  : "Freehand Normal 400",
            "weight": "400",
            "str"   : "Freehand:400",
            "italic": false
        }, {
            "name"     : "Frijole Normal 400",
            "weight"   : "400",
            "str"      : "Frijole:400",
            "thickness": 8,
            "slant"    : 0,
            "width"    : 8,
            "italic"   : false
        }, {
            "name"     : "Fruktur Normal 400",
            "weight"   : "400",
            "str"      : "Fruktur:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Fugaz One Normal 400",
            "weight"   : "400",
            "str"      : "Fugaz+One:400",
            "thickness": 6,
            "slant"    : 3,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Galindo Normal 400",
            "weight"   : "400",
            "str"      : "Galindo:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Geostar Normal 400",
            "weight"   : "400",
            "str"      : "Geostar:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 8,
            "italic"   : false
        }, {
            "name"     : "Geostar Fill Normal 400",
            "weight"   : "400",
            "str"      : "Geostar+Fill:400",
            "thickness": 5,
            "slant"    : 0,
            "width"    : 8,
            "italic"   : false
        }, {
            "name"     : "Germania One Normal 400",
            "weight"   : "400",
            "str"      : "Germania+One:400",
            "thickness": 5,
            "slant"    : 0,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Glass Antiqua Normal 400",
            "weight"   : "400",
            "str"      : "Glass+Antiqua:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Goblin One Normal 400",
            "weight"   : "400",
            "str"      : "Goblin+One:400",
            "thickness": 7,
            "slant"    : 0,
            "width"    : 8,
            "italic"   : false
        }, {
            "name"     : "Gorditas Normal 400",
            "weight"   : "400",
            "str"      : "Gorditas:400",
            "thickness": 5,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Gorditas Bold 700",
            "weight"   : "700",
            "str"      : "Gorditas:700",
            "thickness": 7,
            "italic"   : false
        }, {
            "name"     : "Graduate Normal 400",
            "weight"   : "400",
            "str"      : "Graduate:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Gravitas One Normal 400",
            "weight"   : "400",
            "str"      : "Gravitas+One:400",
            "thickness": 8,
            "slant"    : 0,
            "width"    : 8,
            "italic"   : false
        }, {
            "name"     : "Griffy Normal 400",
            "weight"   : "400",
            "str"      : "Griffy:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Gruppo Normal 400",
            "weight"   : "400",
            "str"      : "Gruppo:400",
            "thickness": 2,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Hanalei Normal 400",
            "weight"   : "400",
            "str"      : "Hanalei:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Hanalei Fill Normal 400",
            "weight"   : "400",
            "str"      : "Hanalei+Fill:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Happy Monkey Normal 400",
            "weight"   : "400",
            "str"      : "Happy+Monkey:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Henny Penny Normal 400",
            "weight"   : "400",
            "str"      : "Henny+Penny:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Iceberg Normal 400",
            "weight"   : "400",
            "str"      : "Iceberg:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Iceland Normal 400",
            "weight"   : "400",
            "str"      : "Iceland:400",
            "thickness": 5,
            "slant"    : 0,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Irish Grover Normal 400",
            "weight"   : "400",
            "str"      : "Irish+Grover:400",
            "thickness": 5,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Jacques Francois Shadow Normal 400",
            "weight"   : "400",
            "str"      : "Jacques+Francois+Shadow:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Jolly Lodger Normal 400",
            "weight"   : "400",
            "str"      : "Jolly+Lodger:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 3,
            "italic"   : false
        }, {
            "name"     : "Joti One Normal 400",
            "weight"   : "400",
            "str"      : "Joti+One:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Kavoon Normal 400",
            "weight"   : "400",
            "str"      : "Kavoon:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"  : "Kdam Thmor Normal 400",
            "weight": "400",
            "str"   : "Kdam+Thmor:400",
            "italic": false
        }, {
            "name"     : "Keania One Normal 400",
            "weight"   : "400",
            "str"      : "Keania+One:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Kelly Slab Normal 400",
            "weight"   : "400",
            "str"      : "Kelly+Slab:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Kenia Normal 400",
            "weight"   : "400",
            "str"      : "Kenia:400",
            "thickness": 5,
            "slant"    : 0,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"  : "Khmer Normal 400",
            "weight": "400",
            "str"   : "Khmer:400",
            "italic": false
        }, {
            "name"     : "Knewave Normal 400",
            "weight"   : "400",
            "str"      : "Knewave:400",
            "thickness": 7,
            "slant"    : 6,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"  : "Koulen Normal 400",
            "weight": "400",
            "str"   : "Koulen:400",
            "italic": false
        }, {
            "name"     : "Kranky Normal 400",
            "weight"   : "400",
            "str"      : "Kranky:400",
            "thickness": 2,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Lancelot Normal 400",
            "weight"   : "400",
            "str"      : "Lancelot:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Lemon Normal 400",
            "weight"   : "400",
            "str"      : "Lemon:400",
            "thickness": 7,
            "slant"    : 3,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Life Savers Normal 400",
            "weight"   : "400",
            "str"      : "Life+Savers:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Life Savers Bold 700",
            "weight"   : "700",
            "str"      : "Life+Savers:700",
            "thickness": 6,
            "italic"   : false
        }, {
            "name"     : "Lilita One Normal 400",
            "weight"   : "400",
            "str"      : "Lilita+One:400",
            "thickness": 7,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Lily Script One Normal 400",
            "weight"   : "400",
            "str"      : "Lily+Script+One:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Limelight Normal 400",
            "weight"   : "400",
            "str"      : "Limelight:400",
            "thickness": 7,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Lobster Normal 400",
            "weight"   : "400",
            "str"      : "Lobster:400",
            "thickness": 4,
            "slant"    : 4,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"  : "Lobster Two Normal 400",
            "weight": "400",
            "str"   : "Lobster+Two:400",
            "slant" : 0,
            "italic": false
        }, {
            "name"     : "Lobster Two Bold 700",
            "weight"   : "700",
            "str"      : "Lobster+Two:700",
            "thickness": 4,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Lobster Two Normal 400 italic",
            "weight"   : "400",
            "str"      : "Lobster+Two:400i",
            "thickness": 3,
            "slant"    : 4,
            "italic"   : true
        }, {
            "name"  : "Lobster Two Bold 700 italic",
            "weight": "700",
            "str"   : "Lobster+Two:700i",
            "italic": true
        }, {
            "name"     : "Londrina Outline Normal 400",
            "weight"   : "400",
            "str"      : "Londrina+Outline:400",
            "thickness": 0,
            "slant"    : 0,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Londrina Shadow Normal 400",
            "weight"   : "400",
            "str"      : "Londrina+Shadow:400",
            "thickness": 2,
            "slant"    : 0,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Londrina Sketch Normal 400",
            "weight"   : "400",
            "str"      : "Londrina+Sketch:400",
            "thickness": 2,
            "slant"    : 0,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Londrina Solid Normal 400",
            "weight"   : "400",
            "str"      : "Londrina+Solid:400",
            "thickness": 5,
            "slant"    : 0,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Love Ya Like A Sister Normal 400",
            "weight"   : "400",
            "str"      : "Love+Ya+Like+A+Sister:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Luckiest Guy Normal 400",
            "weight"   : "400",
            "str"      : "Luckiest+Guy:400",
            "thickness": 7,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Macondo Normal 400",
            "weight"   : "400",
            "str"      : "Macondo:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Macondo Swash Caps Normal 400",
            "weight"   : "400",
            "str"      : "Macondo+Swash+Caps:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Maiden Orange Normal 400",
            "weight"   : "400",
            "str"      : "Maiden+Orange:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 4,
            "italic"   : false
        }, {
            "name"     : "Margarine Normal 400",
            "weight"   : "400",
            "str"      : "Margarine:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "McLaren Normal 400",
            "weight"   : "400",
            "str"      : "McLaren:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "MedievalSharp Normal 400",
            "weight"   : "400",
            "str"      : "MedievalSharp:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Medula One Normal 400",
            "weight"   : "400",
            "str"      : "Medula+One:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 3,
            "italic"   : false
        }, {
            "name"     : "Megrim Normal 400",
            "weight"   : "400",
            "str"      : "Megrim:400",
            "thickness": 1,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"  : "Metal Normal 400",
            "weight": "400",
            "str"   : "Metal:400",
            "italic": false
        }, {
            "name"     : "Metal Mania Normal 400",
            "weight"   : "400",
            "str"      : "Metal+Mania:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Metamorphous Normal 400",
            "weight"   : "400",
            "str"      : "Metamorphous:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Milonga Normal 400",
            "weight"   : "400",
            "str"      : "Milonga:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Miltonian Normal 400",
            "weight"   : "400",
            "str"      : "Miltonian:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Miltonian Tattoo Normal 400",
            "weight"   : "400",
            "str"      : "Miltonian+Tattoo:400",
            "thickness": 6,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Miniver Normal 400",
            "weight"   : "400",
            "str"      : "Miniver:400",
            "thickness": 3,
            "slant"    : 4,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Modern Antiqua Normal 400",
            "weight"   : "400",
            "str"      : "Modern+Antiqua:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Monofett Normal 400",
            "weight"   : "400",
            "str"      : "Monofett:400",
            "thickness": 9,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Monoton Normal 400",
            "weight"   : "400",
            "str"      : "Monoton:400",
            "thickness": 5,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"  : "Moul Normal 400",
            "weight": "400",
            "str"   : "Moul:400",
            "italic": false
        }, {
            "name"  : "Moulpali Normal 400",
            "weight": "400",
            "str"   : "Moulpali:400",
            "italic": false
        }, {
            "name"     : "Mountains of Christmas Normal 400",
            "weight"   : "400",
            "str"      : "Mountains+of+Christmas:400",
            "thickness": 2,
            "slant"    : 0,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Mountains of Christmas Bold 700",
            "weight"   : "700",
            "str"      : "Mountains+of+Christmas:700",
            "thickness": 3,
            "italic"   : false
        }, {
            "name"     : "Mystery Quest Normal 400",
            "weight"   : "400",
            "str"      : "Mystery+Quest:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "New Rocker Normal 400",
            "weight"   : "400",
            "str"      : "New+Rocker:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Nixie One Normal 400",
            "weight"   : "400",
            "str"      : "Nixie+One:400",
            "thickness": 1,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Nosifer Normal 400",
            "weight"   : "400",
            "str"      : "Nosifer:400",
            "thickness": 7,
            "slant"    : 0,
            "width"    : 8,
            "italic"   : false
        }, {
            "name"     : "Nova Cut Normal 400",
            "weight"   : "400",
            "str"      : "Nova+Cut:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Nova Flat Normal 400",
            "weight"   : "400",
            "str"      : "Nova+Flat:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Nova Oval Normal 400",
            "weight"   : "400",
            "str"      : "Nova+Oval:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Nova Round Normal 400",
            "weight"   : "400",
            "str"      : "Nova+Round:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Nova Script Normal 400",
            "weight"   : "400",
            "str"      : "Nova+Script:400",
            "thickness": 4,
            "slant"    : 3,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Nova Slim Normal 400",
            "weight"   : "400",
            "str"      : "Nova+Slim:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Nova Square Normal 400",
            "weight"   : "400",
            "str"      : "Nova+Square:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"  : "Odor Mean Chey Normal 400",
            "weight": "400",
            "str"   : "Odor+Mean+Chey:400",
            "italic": false
        }, {
            "name"     : "Offside Normal 400",
            "weight"   : "400",
            "str"      : "Offside:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Oldenburg Normal 400",
            "weight"   : "400",
            "str"      : "Oldenburg:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Oleo Script Normal 400",
            "weight"   : "400",
            "str"      : "Oleo+Script:400",
            "thickness": 5,
            "slant"    : 3,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Oleo Script Bold 700",
            "weight"   : "700",
            "str"      : "Oleo+Script:700",
            "thickness": 6,
            "italic"   : false
        }, {
            "name"     : "Oleo Script Swash Caps Normal 400",
            "weight"   : "400",
            "str"      : "Oleo+Script+Swash+Caps:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Oleo Script Swash Caps Bold 700",
            "weight"   : "700",
            "str"      : "Oleo+Script+Swash+Caps:700",
            "thickness": 6,
            "italic"   : false
        }, {
            "name"     : "Oregano Normal 400",
            "weight"   : "400",
            "str"      : "Oregano:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"  : "Oregano Normal 400 italic",
            "weight": "400",
            "str"   : "Oregano:400i",
            "slant" : 4,
            "italic": true
        }, {
            "name"     : "Original Surfer Normal 400",
            "weight"   : "400",
            "str"      : "Original+Surfer:400",
            "thickness": 5,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Overlock Normal 400",
            "weight"   : "400",
            "str"      : "Overlock:400",
            "thickness": 3,
            "italic"   : false
        }, {
            "name"     : "Overlock Bold 700",
            "weight"   : "700",
            "str"      : "Overlock:700",
            "thickness": 4,
            "slant"    : 0,
            "italic"   : false
        }, {
            "name"     : "Overlock Black 900",
            "weight"   : "900",
            "str"      : "Overlock:900",
            "thickness": 6,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"  : "Overlock Normal 400 italic",
            "weight": "400",
            "str"   : "Overlock:400i",
            "width" : 5,
            "italic": true
        }, {
            "name"  : "Overlock Bold 700 italic",
            "weight": "700",
            "str"   : "Overlock:700i",
            "slant" : 2,
            "italic": true
        }, {
            "name"  : "Overlock Black 900 italic",
            "weight": "900",
            "str"   : "Overlock:900i",
            "italic": true
        }, {
            "name"     : "Overlock SC Normal 400",
            "weight"   : "400",
            "str"      : "Overlock+SC:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Paprika Normal 400",
            "weight"   : "400",
            "str"      : "Paprika:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Passero One Normal 400",
            "weight"   : "400",
            "str"      : "Passero+One:400",
            "thickness": 5,
            "slant"    : 0,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Passion One Normal 400",
            "weight"   : "400",
            "str"      : "Passion+One:400",
            "thickness": 7,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"  : "Passion One Bold 700",
            "weight": "700",
            "str"   : "Passion+One:700",
            "slant" : 0,
            "width" : 6,
            "italic": false
        }, {
            "name"     : "Passion One Black 900",
            "weight"   : "900",
            "str"      : "Passion+One:900",
            "thickness": 8,
            "italic"   : false
        }, {
            "name"     : "Patua One Normal 400",
            "weight"   : "400",
            "str"      : "Patua+One:400",
            "thickness": 5,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Peralta Normal 400",
            "weight"   : "400",
            "str"      : "Peralta:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Piedra Normal 400",
            "weight"   : "400",
            "str"      : "Piedra:400",
            "thickness": 6,
            "slant"    : 0,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Pirata One Normal 400",
            "weight"   : "400",
            "str"      : "Pirata+One:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Plaster Normal 400",
            "weight"   : "400",
            "str"      : "Plaster:400",
            "thickness": 8,
            "slant"    : 0,
            "width"    : 8,
            "italic"   : false
        }, {
            "name"     : "Playball Normal 400",
            "weight"   : "400",
            "str"      : "Playball:400",
            "thickness": 4,
            "slant"    : 6,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Poiret One Normal 400",
            "weight"   : "400",
            "str"      : "Poiret+One:400",
            "thickness": 1,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Poller One Normal 400",
            "weight"   : "400",
            "str"      : "Poller+One:400",
            "thickness": 8,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Pompiere Normal 400",
            "weight"   : "400",
            "str"      : "Pompiere:400",
            "thickness": 2,
            "slant"    : 0,
            "width"    : 4,
            "italic"   : false
        }, {
            "name"  : "Preahvihear Normal 400",
            "weight": "400",
            "str"   : "Preahvihear:400",
            "italic": false
        }, {
            "name"     : "Press Start 2P Normal 400",
            "weight"   : "400",
            "str"      : "Press+Start+2P:400",
            "thickness": 7,
            "slant"    : 0,
            "width"    : 9,
            "italic"   : false
        }, {
            "name"     : "Prosto One Normal 400",
            "weight"   : "400",
            "str"      : "Prosto+One:400",
            "thickness": 5,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Purple Purse Normal 400",
            "weight"   : "400",
            "str"      : "Purple+Purse:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Racing Sans One Normal 400",
            "weight"   : "400",
            "str"      : "Racing+Sans+One:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Raleway Dots Normal 400",
            "weight"   : "400",
            "str"      : "Raleway+Dots:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Rammetto One Normal 400",
            "weight"   : "400",
            "str"      : "Rammetto+One:400",
            "thickness": 8,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Ranchers Normal 400",
            "weight"   : "400",
            "str"      : "Ranchers:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Revalia Normal 400",
            "weight"   : "400",
            "str"      : "Revalia:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 8,
            "italic"   : false
        }, {
            "name"     : "Ribeye Normal 400",
            "weight"   : "400",
            "str"      : "Ribeye:400",
            "thickness": 5,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Ribeye Marrow Normal 400",
            "weight"   : "400",
            "str"      : "Ribeye+Marrow:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Righteous Normal 400",
            "weight"   : "400",
            "str"      : "Righteous:400",
            "thickness": 5,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Risque Normal 400",
            "weight"   : "400",
            "str"      : "Risque:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Ruslan Display Normal 400",
            "weight"   : "400",
            "str"      : "Ruslan+Display:400",
            "thickness": 8,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Rye Normal 400",
            "weight"   : "400",
            "str"      : "Rye:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Sail Normal 400",
            "weight"   : "400",
            "str"      : "Sail:400",
            "thickness": 4,
            "slant"    : 3,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Salsa Normal 400",
            "weight"   : "400",
            "str"      : "Salsa:400",
            "thickness": 5,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Sancreek Normal 400",
            "weight"   : "400",
            "str"      : "Sancreek:400",
            "thickness": 6,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Sansita One Normal 400",
            "weight"   : "400",
            "str"      : "Sansita+One:400",
            "thickness": 7,
            "slant"    : 4,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Sarina Normal 400",
            "weight"   : "400",
            "str"      : "Sarina:400",
            "thickness": 7,
            "slant"    : 6,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Seaweed Script Normal 400",
            "weight"   : "400",
            "str"      : "Seaweed+Script:400",
            "thickness": 3,
            "slant"    : 6,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Sevillana Normal 400",
            "weight"   : "400",
            "str"      : "Sevillana:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Share Normal 400",
            "weight"   : "400",
            "str"      : "Share:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Share Bold 700",
            "weight"   : "700",
            "str"      : "Share:700",
            "thickness": 5,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"  : "Share Normal 400 italic",
            "weight": "400",
            "str"   : "Share:400i",
            "slant" : 2,
            "italic": true
        }, {
            "name"  : "Share Bold 700 italic",
            "weight": "700",
            "str"   : "Share:700i",
            "slant" : 1,
            "italic": true
        }, {
            "name"     : "Shojumaru Normal 400",
            "weight"   : "400",
            "str"      : "Shojumaru:400",
            "thickness": 7,
            "slant"    : 0,
            "width"    : 8,
            "italic"   : false
        }, {
            "name"  : "Siemreap Normal 400",
            "weight": "400",
            "str"   : "Siemreap:400",
            "italic": false
        }, {
            "name"     : "Sigmar One Normal 400",
            "weight"   : "400",
            "str"      : "Sigmar+One:400",
            "thickness": 9,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Simonetta Normal 400",
            "weight"   : "400",
            "str"      : "Simonetta:400",
            "thickness": 3,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Simonetta Black 900",
            "weight"   : "900",
            "str"      : "Simonetta:900",
            "thickness": 6,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"  : "Simonetta Normal 400 italic",
            "weight": "400",
            "str"   : "Simonetta:400i",
            "italic": true
        }, {
            "name"  : "Simonetta Black 900 italic",
            "weight": "900",
            "str"   : "Simonetta:900i",
            "slant" : 1,
            "italic": true
        }, {
            "name"     : "Sirin Stencil Normal 400",
            "weight"   : "400",
            "str"      : "Sirin+Stencil:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Skranji Normal 400",
            "weight"   : "400",
            "str"      : "Skranji:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Skranji Bold 700",
            "weight"   : "700",
            "str"      : "Skranji:700",
            "thickness": 6,
            "italic"   : false
        }, {
            "name"     : "Slackey Normal 400",
            "weight"   : "400",
            "str"      : "Slackey:400",
            "thickness": 6,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Smokum Normal 400",
            "weight"   : "400",
            "str"      : "Smokum:400",
            "thickness": 1,
            "slant"    : 0,
            "width"    : 4,
            "italic"   : false
        }, {
            "name"     : "Smythe Normal 400",
            "weight"   : "400",
            "str"      : "Smythe:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 4,
            "italic"   : false
        }, {
            "name"     : "Sniglet Normal 400",
            "weight"   : "400",
            "str"      : "Sniglet:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Sniglet Extra-Bold 800",
            "weight"   : "800",
            "str"      : "Sniglet:800",
            "thickness": 8,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Snowburst One Normal 400",
            "weight"   : "400",
            "str"      : "Snowburst+One:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Sofadi One Normal 400",
            "weight"   : "400",
            "str"      : "Sofadi+One:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Sonsie One Normal 400",
            "weight"   : "400",
            "str"      : "Sonsie+One:400",
            "thickness": 8,
            "slant"    : 5,
            "width"    : 8,
            "italic"   : false
        }, {
            "name"     : "Special Elite Normal 400",
            "weight"   : "400",
            "str"      : "Special+Elite:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Spicy Rice Normal 400",
            "weight"   : "400",
            "str"      : "Spicy+Rice:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Spirax Normal 400",
            "weight"   : "400",
            "str"      : "Spirax:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Squada One Normal 400",
            "weight"   : "400",
            "str"      : "Squada+One:400",
            "thickness": 6,
            "slant"    : 0,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Stalinist One Normal 400",
            "weight"   : "400",
            "str"      : "Stalinist+One:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Stardos Stencil Normal 400",
            "weight"   : "400",
            "str"      : "Stardos+Stencil:400",
            "thickness": 5,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Stardos Stencil Bold 700",
            "weight"   : "700",
            "str"      : "Stardos+Stencil:700",
            "thickness": 6,
            "italic"   : false
        }, {
            "name"     : "Stint Ultra Condensed Normal 400",
            "weight"   : "400",
            "str"      : "Stint+Ultra+Condensed:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 3,
            "italic"   : false
        }, {
            "name"     : "Stint Ultra Expanded Normal 400",
            "weight"   : "400",
            "str"      : "Stint+Ultra+Expanded:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Supermercado One Normal 400",
            "weight"   : "400",
            "str"      : "Supermercado+One:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Titan One Normal 400",
            "weight"   : "400",
            "str"      : "Titan+One:400",
            "thickness": 8,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Trade Winds Normal 400",
            "weight"   : "400",
            "str"      : "Trade+Winds:400",
            "thickness": 6,
            "slant"    : 4,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Trochut Normal 400",
            "weight"   : "400",
            "str"      : "Trochut:400",
            "thickness": 4,
            "slant"    : 0,
            "italic"   : false
        }, {
            "name"     : "Trochut Bold 700",
            "weight"   : "700",
            "str"      : "Trochut:700",
            "thickness": 6,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Tulpen One Normal 400",
            "weight"   : "400",
            "str"      : "Tulpen+One:400",
            "thickness": 2,
            "slant"    : 0,
            "width"    : 2,
            "italic"   : false
        }, {
            "name"     : "Uncial Antiqua Normal 400",
            "weight"   : "400",
            "str"      : "Uncial+Antiqua:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Underdog Normal 400",
            "weight"   : "400",
            "str"      : "Underdog:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Unica One Normal 400",
            "weight"   : "400",
            "str"      : "Unica+One:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "UnifrakturMaguntia Normal 400",
            "weight"   : "400",
            "str"      : "UnifrakturMaguntia:400",
            "thickness": 5,
            "slant"    : 0,
            "width"    : 5,
            "italic"   : false
        }, {
            "name"     : "Unkempt Normal 400",
            "weight"   : "400",
            "str"      : "Unkempt:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Unkempt Bold 700",
            "weight"   : "700",
            "str"      : "Unkempt:700",
            "thickness": 4,
            "italic"   : false
        }, {
            "name"     : "Unlock Normal 400",
            "weight"   : "400",
            "str"      : "Unlock:400",
            "thickness": 7,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Vampiro One Normal 400",
            "weight"   : "400",
            "str"      : "Vampiro+One:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Vast Shadow Normal 400",
            "weight"   : "400",
            "str"      : "Vast+Shadow:400",
            "thickness": 5,
            "slant"    : 0,
            "width"    : 8,
            "italic"   : false
        }, {
            "name"     : "Voces Normal 400",
            "weight"   : "400",
            "str"      : "Voces:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Wallpoet Normal 400",
            "weight"   : "400",
            "str"      : "Wallpoet:400",
            "thickness": 6,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Warnes Normal 400",
            "weight"   : "400",
            "str"      : "Warnes:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Wellfleet Normal 400",
            "weight"   : "400",
            "str"      : "Wellfleet:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Yeseva One Normal 400",
            "weight"   : "400",
            "str"      : "Yeseva+One:400",
            "thickness": 6,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Anonymous Pro Normal 400",
            "weight"   : "400",
            "str"      : "Anonymous+Pro:400",
            "thickness": 3,
            "slant"    : 0,
            "italic"   : false
        }, {
            "name"     : "Anonymous Pro Bold 700",
            "weight"   : "700",
            "str"      : "Anonymous+Pro:700",
            "thickness": 4,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"  : "Anonymous Pro Normal 400 italic",
            "weight": "400",
            "str"   : "Anonymous+Pro:400i",
            "slant" : 4,
            "italic": true
        }, {
            "name"  : "Anonymous Pro Bold 700 italic",
            "weight": "700",
            "str"   : "Anonymous+Pro:700i",
            "italic": true
        }, {
            "name"     : "Cousine Normal 400",
            "weight"   : "400",
            "str"      : "Cousine:400",
            "thickness": 4,
            "slant"    : 0,
            "italic"   : false
        }, {
            "name"     : "Cousine Bold 700",
            "weight"   : "700",
            "str"      : "Cousine:700",
            "thickness": 6,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"  : "Cousine Normal 400 italic",
            "weight": "400",
            "str"   : "Cousine:400i",
            "slant" : 3,
            "italic": true
        }, {
            "name"  : "Cousine Bold 700 italic",
            "weight": "700",
            "str"   : "Cousine:700i",
            "italic": true
        }, {
            "name"     : "Cutive Mono Normal 400",
            "weight"   : "400",
            "str"      : "Cutive+Mono:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Droid Sans Mono Normal 400",
            "weight"   : "400",
            "str"      : "Droid+Sans+Mono:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Fira Mono Normal 400",
            "weight"   : "400",
            "str"      : "Fira+Mono:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Fira Mono Bold 700",
            "weight"   : "700",
            "str"      : "Fira+Mono:700",
            "thickness": 6,
            "italic"   : false
        }, {
            "name"     : "Inconsolata Normal 400",
            "weight"   : "400",
            "str"      : "Inconsolata:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Inconsolata Bold 700",
            "weight"   : "700",
            "str"      : "Inconsolata:700",
            "thickness": 5,
            "italic"   : false
        }, {
            "name"     : "Nova Mono Normal 400",
            "weight"   : "400",
            "str"      : "Nova+Mono:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Oxygen Mono Normal 400",
            "weight"   : "400",
            "str"      : "Oxygen+Mono:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "PT Mono Normal 400",
            "weight"   : "400",
            "str"      : "PT+Mono:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 7,
            "italic"   : false
        }, {
            "name"     : "Share Tech Mono Normal 400",
            "weight"   : "400",
            "str"      : "Share+Tech+Mono:400",
            "thickness": 3,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Source Code Pro Extra-Light 200",
            "weight"   : "200",
            "str"      : "Source+Code+Pro:200",
            "thickness": 1,
            "italic"   : false
        }, {
            "name"     : "Source Code Pro Light 300",
            "weight"   : "300",
            "str"      : "Source+Code+Pro:300",
            "thickness": 2,
            "italic"   : false
        }, {
            "name"     : "Source Code Pro Normal 400",
            "weight"   : "400",
            "str"      : "Source+Code+Pro:400",
            "thickness": 3,
            "italic"   : false
        }, {
            "name"     : "Source Code Pro Medium 500",
            "weight"   : "500",
            "str"      : "Source+Code+Pro:500",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"     : "Source Code Pro Semi-Bold 600",
            "weight"   : "600",
            "str"      : "Source+Code+Pro:600",
            "thickness": 5,
            "italic"   : false
        }, {
            "name"     : "Source Code Pro Bold 700",
            "weight"   : "700",
            "str"      : "Source+Code+Pro:700",
            "thickness": 6,
            "italic"   : false
        }, {
            "name"     : "Source Code Pro Black 900",
            "weight"   : "900",
            "str"      : "Source+Code+Pro:900",
            "thickness": 8,
            "italic"   : false
        }, {
            "name"     : "Ubuntu Mono Normal 400",
            "weight"   : "400",
            "str"      : "Ubuntu+Mono:400",
            "thickness": 4,
            "slant"    : 0,
            "italic"   : false
        }, {
            "name"     : "Ubuntu Mono Bold 700",
            "weight"   : "700",
            "str"      : "Ubuntu+Mono:700",
            "thickness": 5,
            "width"    : 6,
            "italic"   : false
        }, {
            "name"  : "Ubuntu Mono Normal 400 italic",
            "weight": "400",
            "str"   : "Ubuntu+Mono:400i",
            "slant" : 4,
            "italic": true
        }, {
            "name"  : "Ubuntu Mono Bold 700 italic",
            "weight": "700",
            "str"   : "Ubuntu+Mono:700i",
            "italic": true
        }, {
            "name"     : "VT323 Normal 400",
            "weight"   : "400",
            "str"      : "VT323:400",
            "thickness": 4,
            "slant"    : 0,
            "width"    : 5,
            "italic"   : false
        }
    ];

//endregion JSON

//region General
var $$ = {
    queue: {
        fnArr  : [],
        running: false,

        add: function (fn, arg1)
        {
            var q = this;

            q.fnArr.push({fn: fn, argument: arg1});
            if (!q.running)  q.run();
        },

        run: function (index)
        {
            var q = this;
            index = (index) ? index : 0;
            //if (!q.running) {

            if (q.fnArr[index])
            {
                q.running = true;
                q.fnArr[index].fn(q.fnArr[index].argument, function ()
                {
                    q.run(++index);
                });
            }
            else
            {
                q.running = false;
                q.fnArr = [];
            }
            //}
        }
    }
};
var widgetSettings,
    categories;

/*
 var $$ = {};
 $$.queue = {
 _timer: null,
 _queue: [],
 add   : function (fn, context, arg1, arg2, time)
 {
 var setTimer = function (time)
 {
 $$.queue._timer = setTimeout(function ()
 {
 time = $$.queue.add();
 if ($$.queue._queue.length)
 {
 setTimer(time);
 }
 }, time || 10);
 };
 if (fn)
 {
 $$.queue._queue.push([fn, context, arg1, arg2, time]);
 if ($$.queue._queue.length == 1)
 {
 setTimer(time);
 }
 return;
 }
 var next = $$.queue._queue.shift();
 if (!next)
 {
 return 0;
 }
 next[0].call(next[1] || window, next[2], next[3]);
 return next[2];
 },
 clear : function ()
 {
 clearTimeout($$.queue._timer);
 $$.queue._queue = [];
 }
 };
 */
//endregion General

//region Fonts

var
    loadedFamilies = [],
    allFonts                  = [],
    fontsLoaded               = 0,
    loadedFontStrings         = [],
    currentViewFonts          = [],
    currentViewDisplayed      = 0,
    currentViewLoaded         = 0,
    lastDisplayedIndex        = 0,
    lastLoadedIndex           = 0,
    currentViewVariantIndexes = null,
    //fontsToAddOnScroll        = 200,
    //initiallyLoadedFonts      = 200,
    $redactor                 = null,
    fontsCompletelyLoadedIdx  = [],
    trialTime,
    isTrial;

//endregion Fonts

//region UI

var
    fontContainer,
    viewPortHeight;
//endregion

var fontVarientNumToText = {
    '100': "Thin",
    '200': "Extra-Light",
    '300': "Light",
    '400': "Normal",
    '500': "Medium",
    '600': "Semi-Bold",
    '700': "Bold",
    '800': "Extra-Bold",
    '900': "Ultra-Bold"

};
var supportedFont = [
    'ttf', 'TTF',
    'otf', 'OTF',
    'woff', 'WOFF'
];

var fontVarientObjTextToNum = {
    'Thin'       : "100",
    'Extra-Light': "200",
    'Light'      : "300",
    'Normal'     : "400",
    'Medium'     : "500",
    'Semi-Bold'  : "600",
    'Bold'       : "700",
    'Extra-Bold' : "800",
    'Ultra-Bold' : "900"

};

var newWidgets = {
    'fontfacedropdown': {
        css : 'font-family',
        func: 'changeDropdownFont'
    },

/*
    'fontsizewidget': {
        css : 'font-size',
        func: 'updateInput'
    },
*/

/*
    'letterspacingwidget': {
        css : 'letter-spacing',
        func: 'updateSpacing'
    },
*/

    'fontWeightDropdown': {
        css : 'font-weight',
        func: 'updateWeight'
    },
    'fontItalic'        : {
        css : 'font-style',
        func: 'updateItalic'
    },
    'fontBold'        : {
        css : 'font-weight',
        func: 'updateBold'
    },
    'fontColor' : {
        css:'color',
        func:'updateFontColor'
    },
    'fontBgColor' : {
        css:'background-color',
        func:'updateFontColor'
    },
    'fontsize' : {
        css : 'font-size',
        func : 'updateFontSizeLabel'
    },
    'fontspacing' : {
        css : 'letter-spacing',
        func : 'updateFontSpacingLabel'
    }
};

Object.defineProperty(Array.prototype, 'addToSet', {
    value        : function (value) {
        if (this.indexOf(value) == -1) this.push(value)
    }, enumerable: false
});