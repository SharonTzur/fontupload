function stripHtml(html)
{
    var tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
}

function refreshLocalWidget(settings, $el)
{
    var italic = 'normal';
    //loadAllFontVariants(settings.font);

    if (
        (settings.variant.indexOf('i') !== -1) ||
        (settings.italic == '1')
    )
    {
        italic = "italic";
    }


    /*
     $el//.empty().append(decodeTextForURL(settings.code))
     .css('font-family', family)
     .css('font-weight', (settings.weight))
     .css('font-style', italic)
     */
}

function removeMarkers()
{
    var markers = $(document).find('span.redactor-selection-marker');
    if (markers.length > 0)
    {
        console.log('removed ' + markers.length + ' markers');
        markers.remove();
    }
}

var ScriptLoader = function () {};
ScriptLoader.prototype = {
    require    : function (scripts, callback)
    {
        this.loadCount = 0;
        this.totalRequired = scripts.length;
        this.callback = callback;

        for (var i = 0; i < scripts.length; i++)
        {
            this.writeScript(scripts[i]);
        }
    },
    loaded     : function (evt)
    {
        this.loadCount++;

        if (this.loadCount == this.totalRequired && typeof this.callback == 'function') this.callback.call();
    },
    writeScript: function (src)
    {
        var self = this;
        var s = document.createElement('script');
        s.type = "text/javascript";
        s.async = true;
        s.src = src;
        s.addEventListener('load', function (e)
        {
            self.loaded(e);
        }, false);
        var head = document.getElementsByTagName('head')[0];
        head.appendChild(s);
    }
}


function escapeRegExp(string)
{
    return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}

function replaceAll(string, find, replace)
{
    return string.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

function encodeTextForURL(text)
{
    return encodeURIComponent(text).replace(/'/g, "%27").replace(/"/g, "%22")
}

function decodeTextForURL(encoded)
{
    //return decodeURIComponent(encoded.replace(/\+/g, " "));
    return encoded.replace(/\+/g, " ");
}


function sanitizeFontFamilyName(family)
{
    return replaceAll(family.replace(/\s+/g, '').toLowerCase(), '_', '');
}


function getFontVariantsString(fontObj)
{
    var str = fontObj.family + ':';

    for (var i = 0; i < fontObj.variants.length; i++)
    {
        if (fontObj.variants[i] == "normal")
        {
            str += '400,'
        }
        else str += fontObj.variants[i] + ',';
    }

    if (fontObj.italic)
    {
        for (var i = 0; i < fontObj.variants.length; i++)
        {
            if (fontObj.variants[i] == "normal")
            {
                str += '400italic,'
            }
            else str += fontObj.variants[i] + 'italic,';
        }
    }
    return str.substring(0, str.length - 1).replace(' ', '+');
}

/*
 function loadAllFontVariants(fontObj, callback, scope, activeCallback, activeScope)
 {
 WebFont.load({
 google      : {
 families: [fontObj.str]
 },
 active : function () {
 if (activeCallback && activeScope)
 activeCallback.call(activeScope);
 },
 fontactive  : function (familyName, fvd)
 {
 if (callback && scope)
 callback.call(scope);
 },
 fontinactive: function (familyName, fvd)
 {
 if (callback && scope)
 callback.call(scope);

 }
 });
 }*/

function getFontVariantDisplayName(variant)
{
    return fontVarientNumToText[variant];
    /*    switch (variant)
     {
     case "100" :
     return "Thin";
     case "200" :
     return "Extra-Light";
     case "300" :
     return "Light";
     case "400" :
     return "Normal";
     case "500" :
     return "Medium";
     case "600" :
     return "Semi-Bold";
     case "700" :
     return "Bold";
     case "800" :
     return "Extra-Bold";
     case "900" :
     return "Ultra-Bold";
     }*/
}

function _Test_AddFontProperty()
{
    var thickness = [],
        slant     = [],
        width     = [], count = 0;

    thickness[0] = ["Lato:100", "Raleway:100", "Roboto+Slab:100", "Josefin+Sans:100", "Quicksand:300", "Exo:100", "Exo+2:100", "Josefin+Slab:300", "Alegreya+Sans:100", "Advent+Pro:100", "Alegreya+Sans+SC:100", "Wire+One:400", "League+Script:400", "Codystar:300", "Flamenco:300", "Londrina+Outline:400"];
    thickness[1] = ["Roboto:100", "Source+Sans+Pro:200", "Raleway:200", "Yanone+Kaffeesatz:200", "Titillium+Web:200", "Dosis:200", "Poiret+One:400", "Josefin+Sans:300", "Exo+2:200", "Amatic+SC:400", "Source+Code+Pro:200", "Bad+Script:400", "Waiting+for+the+Sunrise:400", "Nixie+One:400", "Advent+Pro:200", "Loved+by+the+King:400", "Megrim:400", "Dawning+of+a+New+Day:400", "Dorsa:400", "Ek+Mukta:200", "Astloch:400", "Smokum:400"];
    thickness[2] = ["Open+Sans:300", "Lato:300", "Roboto+Condensed:300", "Source+Sans+Pro:300", "Open+Sans+Condensed:300", "Raleway:300", "Roboto+Slab:300", "Merriweather:300", "Oxygen:300", "Titillium+Web:300", "Dosis:300", "Shadows+Into+Light:400", "Josefin+Sans:400", "Merriweather+Sans:300", "Quicksand:400", "Exo:300", "Exo+2:300", "Coming+Soon:400", "Josefin+Slab:400", "Amatic+SC:700", "Source+Code+Pro:300", "BenchNine:300", "Fira+Sans:300", "Shadows+Into+Light+Two:400", "Marvel:400", "Jura:300", "Crafty+Girls:400", "Calligraffitti:400", "Alegreya+Sans:300", "Tangerine:400", "Gruppo:400", "Hind:300", "Nothing+You+Could+Do:400", "Advent+Pro:300", "Alegreya+Sans+SC:300", "Six+Caps:400", "Allura:400", "The+Girl+Next+Door:400", "Pompiere:400", "Give+You+Glory:400", "Sue+Ellen+Francisco:400", "Kranky:400", "Montez:400", "Mountains+of+Christmas:400", "Italianno:400", "Mr+De+Haviland:400", "Annie+Use+Your+Telescope:400", "Kristi:400", "Arizonia:400", "Rajdhani:300", "Qwigley:400", "Kalam:300", "Tulpen+One:400", "Ek+Mukta:300", "Halant:300", "Zeyada:400", "Bilbo:400", "Stoke:300", "Herr+Von+Muellerhoff:400", "Teko:300", "Londrina+Shadow:400", "Monsieur+La+Doulaise:400", "Khand:300", "Londrina+Sketch:400", "Butterfly+Kids:400", "Felipa:400", "Karma:300", "Laila:300"];
    thickness[3] = ["Open+Sans:400", "Slabo+27px:400", "Roboto:300", "Oswald:300", "Source+Sans+Pro:400", "PT+Sans:400", "Raleway:400", "Ubuntu:300", "Roboto+Slab:400", "Merriweather:300", "Lora:400", "PT+Sans+Narrow:400", "Yanone+Kaffeesatz:300", "Noto+Sans:400", "Indie+Flower:400", "Titillium+Web:400", "Dosis:400", "Fjalla+One:400", "Playfair+Display:400", "Muli:400", "Abel:400", "Signika:300", "Noto+Serif:400", "Inconsolata:400", "Archivo+Narrow:400", "Josefin+Sans:700", "Maven+Pro:400", "Alegreya:400", "Armata:400", "Libre+Baskerville:400", "Karla:400", "Merriweather+Sans:400", "Questrial:400", "Gloria+Hallelujah:400", "Dancing+Script:400", "Pathway+Gothic+One:400", "Exo:300", "Monda:400", "Exo+2:400", "Architects+Daughter:400", "News+Cycle:400", "Crimson+Text:400", "Pontano+Sans:400", "Quattrocento+Sans:400", "Josefin+Slab:700", "Slabo+13px:400", "Gudea:400", "Playfair+Display+SC:400", "Sanchez:400", "Kreon:300", "Didact+Gothic:400", "Courgette:400", "Orbitron:400", "Glegoo:400", "Lobster+Two:400", "Economica:400", "EB+Garamond:400", "Cantarell:400", "Source+Code+Pro:400", "Old+Standard+TT:400", "Nobile:400", "BenchNine:400", "Fira+Sans:400", "Comfortaa:300", "Domine:400", "Marvel:700", "Jura:500", "Covered+By+Your+Grace:400", "Handlee:400", "Rock+Salt:400", "Satisfy:400", "Cinzel:400", "Special+Elite:400", "Cardo:400", "Sintony:400", "Antic+Slab:400", "Quattrocento:400", "Overlock:400", "Scada:400", "Signika+Negative:300", "Alegreya+Sans:400", "Tangerine:700", "Voltaire:400", "Archivo+Black:400", "Rambla:400", "Patrick+Hand:400", "Sorts+Mill+Goudy:400", "Ruda:400", "Great+Vibes:400", "Reenie+Beanie:400", "Montserrat+Alternates:400", "ABeeZee:400", "Hind:400", "Kotta+One:400", "Syncopate:400", "Neuton:200", "Carrois+Gothic:400", "Neucha:400", "Sacramento:400", "Arbutus+Slab:400", "Rochester:400", "Just+Another+Hand:400", "Strait:400", "Fauna+One:400", "Schoolbell:400", "Gentium+Basic:400", "Duru+Sans:400", "Arapey:400", "Lily+Script+One:400", "Julius+Sans+One:400", "Advent+Pro:400", "Antic:400", "Alegreya+Sans+SC:400", "Port+Lligat+Slab:400", "Unkempt:400", "Denk+One:400", "Fredericka+the+Great:400", "Galindo:400", "Cinzel+Decorative:400", "Average+Sans:400", "Just+Me+Again+Down+Here:400", "Cabin+Sketch:400", "Racing+Sans+One:400", "Imprima:400", "Alef:400", "Tauri:400", "Oranienbaum:400", "Grand+Hotel:400", "Capriola:400", "Orienta:400", "Metrophobic:400", "Love+Ya+Like+A+Sister:400", "Englebert:400", "Anaheim:400", "Lustria:400", "Forum:400", "Petit+Formal+Script:400", "Marcellus+SC:400", "Ovo:400", "Euphoria+Script:400", "Alegreya+SC:400", "Marcellus:400", "Crushed:400", "Quando:400", "Freckle+Face:400", "Lekton:400", "Anonymous+Pro:400", "Patrick+Hand+SC:400", "Allan:400", "Delius:400", "Gilda+Display:400", "Mountains+of+Christmas:700", "Fenix:400", "Headland+One:400", "Over+the+Rainbow:400", "Kelly+Slab:400", "Merienda:400", "Carrois+Gothic+SC:400", "IM+Fell+DW+Pica:400", "Kavoon:400", "Simonetta:400", "Kite+One:400", "Nova+Mono:400", "Rufina:400", "Cedarville+Cursive:400", "Stint+Ultra+Condensed:400", "Unica+One:400", "Delius+Swash+Caps:400", "Skranji:400", "Gafata:400", "Happy+Monkey:400", "Rajdhani:400", "Averia+Libre:300", "Oleo+Script+Swash+Caps:400", "Meddon:400", "Sniglet:400", "Mouse+Memoirs:400", "Oregano:400", "Share+Tech:400", "Life+Savers:400", "Kalam:400", "Bilbo+Swash+Caps:400", "Mate+SC:400", "Sofia:400", "Rationale:400", "Julee:400", "Henny+Penny:400", "Cantora+One:400", "Finger+Paint:400", "Amarante:400", "Gabriela:400", "Quintessential:400", "Clicker+Script:400", "Sunshiney:400", "Averia+Sans+Libre:300", "Cutive+Mono:400", "Ek+Mukta:400", "Griffy:400", "Junge:400", "Rosarivo:400", "Halant:400", "Linden+Hill:400", "Esteban:400", "Snippet:400", "Paprika:400", "Buda:300", "Medula+One:400", "Mystery+Quest:400", "Rouge+Script:400", "Dynalight:400", "Overlock+SC:400", "Flamenco:400", "Donegal+One:400", "Mate:400", "MedievalSharp:400", "Milonga:400", "Sofadi+One:400", "Cherry+Swash:400", "Oxygen+Mono:400", "Raleway+Dots:400", "Oldenburg:400", "Seaweed+Script:400", "Rye:400", "Stint+Ultra+Expanded:400", "Text+Me+One:400", "Jacques+Francois:400", "Source+Serif+Pro:400", "Port+Lligat+Sans:400", "Spirax:400", "Aguafina+Script:400", "Ruluko:400", "Della+Respira:400", "Share+Tech+Mono:400", "Montaga:400", "Ribeye+Marrow:400", "Habibi:400", "Lancelot:400", "Wendy+One:400", "Teko:400", "Offside:400", "Miniver:400", "Keania+One:400", "Geostar:400", "Seymour+One:400", "Lovers+Quarrel:400", "McLaren:400", "Miltonian:400", "Ruthie:400", "Pirata+One:400", "Antic+Didone:400", "Mrs+Saint+Delafield:400", "Aubrey:400", "Italiana:400", "Joti+One:400", "Rum+Raisin:400", "Snowburst+One:400", "Autour+One:400", "Spicy+Rice:400", "Molle:400", "Ranchers:400", "Montserrat+Subrayada:400", "Faster+One:400", "Vampiro+One:400", "Akronim:400", "Glass+Antiqua:400", "Chela+One:400", "Jacques+Francois+Shadow:400", "Bubbler+One:400", "Croissant+One:400", "Almendra:400", "Peralta:400", "Eagle+Lake:400", "Elsie:400", "Elsie+Swash+Caps:400", "Stalemate:400", "Princess+Sofia:400", "Combo:400", "Vesper+Libre:400", "Khand:400", "Purple+Purse:400", "Romanesco:400", "Miss+Fajardose:400", "Sevillana:400", "Margarine:400", "Dr+Sugiyama:400", "Fira+Mono:400", "Risque:400", "New+Rocker:400", "Karma:400", "Bigelow+Rules:400", "Mr+Bedfort:400", "Meie+Script:400", "Jim+Nightshade:400", "Underdog:400", "Rubik+One:400", "Stalinist+One:400", "Metal+Mania:400", "Macondo:400", "Warnes:400", "Ruge+Boogie:400", "Almendra+SC:400", "Mandali:400", "Sarpanch:400", "Almendra+Display:400", "Hanalei+Fill:400", "Laila:400", "Hanalei:400", "Rozha+One:400", "Mallanna:400", "Ramabhadra:400", "NTR:400", "Fruktur:400", "Gurajada:400", "Rubik+Mono+One:400", "Dhurjati:400", "Timmana:400", "Tenali+Ramakrishna:400", "Ramaraja:400", "Sree+Krushnadevaraya:400", "Lakki+Reddy:400", "Ravi+Prakash:400", "Suranna:400", "Suravaram:400", "Gidugu:400", "Peddana:400"];
    thickness[4] = ["Roboto:400", "Oswald:400", "Lato:400", "Roboto+Condensed:400", "PT+Sans:400", "Droid+Sans:400", "Droid+Serif:400", "Raleway:500", "Ubuntu:400", "Merriweather:400", "Arimo:400", "Lobster:400", "Bitter:400", "Oxygen:400", "Arvo:400", "PT+Serif:400", "Dosis:600", "Ubuntu+Condensed:400", "Cabin:500", "Nunito:300", "Vollkorn:400", "Signika:400", "Play:400", "Cuprum:400", "Maven+Pro:500", "Asap:400", "Rokkitt:400", "PT+Sans+Caption:400", "Pacifico:400", "Karla:400", "Varela+Round:400", "Quicksand:700", "Exo:600", "Exo+2:500", "Crete+Round:400", "Istok+Web:400", "News+Cycle:700", "Crimson+Text:400", "Noticia+Text:400", "Ropa+Sans:400", "Cabin+Condensed:400", "Kreon:400", "Tinos:400", "Orbitron:500", "Lobster+Two:700", "Economica:700", "Source+Code+Pro:500", "Old+Standard+TT:400", "Enriqueta:400", "Philosopher:400", "Fira+Sans:500", "Comfortaa:700", "Playball:400", "Kaushan+Script:400", "Pinyon+Script:400", "Droid+Sans+Mono:400", "Varela:400", "Cardo:400", "Vidaloka:400", "Molengo:400", "Gentium+Book+Basic:400", "Overlock:700", "Actor:400", "Trocchi:400", "Signika+Negative:400", "Alegreya+Sans:500", "Coustard:400", "Cookie:400", "Coda:400", "Chivo:400", "Cantata+One:400", "Hind:500", "Damion:400", "Walter+Turncoat:400", "Homemade+Apple:400", "Copse:400", "PT+Serif+Caption:400", "Neuton:400", "Lusitana:400", "Goudy+Bookletter+1911:400", "Michroma:400", "Kameron:400", "Marmelad:400", "Carme:400", "Share:400", "Rancho:400", "Ubuntu+Mono:400", "Telex:400", "Cutive:400", "Belleza:400", "Basic:400", "Aldrich:400", "Electrolize:400", "Volkhov:400", "Alice:400", "Prata:400", "Advent+Pro:600", "Alegreya+Sans+SC:500", "Parisienne:400", "Rosario:400", "Unkempt:700", "Inder:400", "Convergence:400", "Radley:400", "Alex+Brush:400", "Adamina:400", "IM+Fell+English:400", "Homenaje:400", "Mako:400", "Spinnaker:400", "Poly:400", "Caudex:700", "Judson:400", "Puritan:400", "Tenor+Sans:400", "Nova+Square:400", "Magra:400", "Cousine:400", "Voces:400", "Average:400", "Alike:400", "Belgrano:400", "Tienne:400", "Andika:400", "PT+Mono:400", "Lekton:700", "Anonymous+Pro:700", "Brawler:400", "Bentham:400", "Shanti:400", "Metamorphous:400", "Corben:400", "La+Belle+Aurore:400", "Short+Stack:400", "Andada:400", "Engagement:400", "Quantico:400", "Baumans:400", "Vibur:400", "Chelsea+Market:400", "Geo:400", "IM+Fell+English+SC:400", "Graduate:400", "Podkova:400", "IM+Fell+DW+Pica:400", "Federo:400", "Cambo:400", "Maiden+Orange:400", "Expletus+Sans:500", "IM+Fell+Double+Pica:400", "Buenard:400", "Redressed:400", "Rajdhani:500", "Averia+Libre:400", "VT323:400", "IM+Fell+DW+Pica+SC:400", "Unna:400", "IM+Fell+French+Canon:400", "IM+Fell+Great+Primer+SC:400", "Fanwood+Text:400", "Fjord+One:400", "Amethysta:400", "Averia+Sans+Libre:400", "Ek+Mukta:500", "Halant:500", "Nova+Round:400", "Delius+Unicase:400", "Inika:400", "Ledger:400", "Numans:400", "Balthazar:400", "Alike+Angular:400", "Nova+Oval:400", "IM+Fell+Great+Primer:400", "Swanky+and+Moo+Moo:400", "Fresca:400", "Nova+Slim:400", "Sail:400", "IM+Fell+French+Canon+SC:400", "Prociono:400", "Cagliostro:400", "Condiment:400", "Stoke:400", "Smythe:400", "IM+Fell+Double+Pica+SC:400", "Nova+Flat:400", "Modern+Antiqua:400", "Petrona:400", "Atomic+Age:400", "Fondamento:400", "Nova+Script:400", "Averia+Serif+Libre:300", "Teko:500", "Iceberg:400", "Asul:400", "Trochut:400", "Nova+Cut:400", "Trykker:400", "Galdeano:400", "Wellfleet:400", "Supermercado+One:400", "Devonshire:400", "Revalia:400", "Jolly+Lodger:400", "Emilys+Candy:400", "Vesper+Libre:500", "Khand:500", "Eater:400", "Sirin+Stencil:400", "Macondo+Swash+Caps:400", "Karma:500", "Flavors:400", "Uncial+Antiqua:400", "Averia+Gruesa+Libre:400", "Sarpanch:500", "Laila:500"];
    thickness[5] = ["Open+Sans:600", "Roboto:700", "Oswald:700", "Lato:700", "Roboto+Condensed:700", "Source+Sans+Pro:600", "PT+Sans:700", "Open+Sans+Condensed:700", "Droid+Serif:700", "Raleway:600", "Ubuntu:500", "Montserrat:400", "Merriweather:700", "Lora:700", "PT+Sans+Narrow:700", "Yanone+Kaffeesatz:700", "Titillium+Web:600", "PT+Serif:700", "Dosis:700", "Francois+One:400", "Playfair+Display:700", "Cabin:700", "Bree+Serif:400", "Nunito:400", "Signika:600", "Inconsolata:700", "Cuprum:700", "Maven+Pro:700", "Rokkitt:700", "Alegreya:700", "PT+Sans+Caption:700", "Karla:700", "Hammersmith+One:400", "Exo:700", "Exo+2:600", "Righteous:400", "Istok+Web:700", "Crimson+Text:700", "Noticia+Text:700", "Quattrocento+Sans:700", "Cabin+Condensed:600", "Fontdiner+Swanky:400", "Gudea:700", "Kreon:700", "Patua+One:400", "Bangers:400", "Tinos:700", "Orbitron:700", "Cantarell:700", "Source+Code+Pro:600", "Old+Standard+TT:700", "Nobile:700", "Enriqueta:700", "Philosopher:700", "Audiowide:400", "Cardo:700", "Niconne:400", "Marck+Script:400", "Viga:400", "Amaranth:400", "Yellowtail:400", "Quattrocento:700", "Gentium+Book+Basic:700", "Signika+Negative:600", "Ruda:700", "Hind:600", "Bubblegum+Sans:400", "Allerta:400", "Lusitana:700", "Share:700", "Gochi+Hand:400", "Ubuntu+Mono:700", "Doppio+One:400", "Oleo+Script:400", "Jockey+One:400", "Gentium+Basic:700", "Boogaloo:400", "Volkhov:400", "Allerta+Stencil:400", "Rosario:700", "Acme:400", "Judson:700", "Puritan:700", "Merienda+One:400", "Alegreya+SC:700", "Allan:700", "Yesteryear:400", "Contrail+One:400", "Quantico:700", "Monoton:400", "Norican:400", "Salsa:400", "Stardos+Stencil:400", "Prosto+One:400", "Expletus+Sans:700", "Iceland:400", "UnifrakturMaguntia:400", "Londrina+Solid:400", "Buenard:700", "Rajdhani:600", "Averia+Libre:700", "Chau+Philomene+One:400", "Mr+Dafoe:400", "Vast+Shadow:400", "Aladin:400", "Averia+Sans+Libre:700", "Ek+Mukta:600", "Halant:600", "Delius+Unicase:700", "Inika:700", "Artifika:400", "Kenia:400", "Source+Serif+Pro:600", "Astloch:700", "Irish+Grover:400", "Geostar+Fill:400", "Original+Surfer:400", "Averia+Serif+Libre:700", "Teko:600", "Krona+One:400", "Passero+One:400", "Asul:700", "Federant:400", "Marko+One:400", "Germania+One:400", "Ribeye:400", "Caesar+Dressing:400", "Ewert:400", "Butcherman:400", "Gorditas:400", "Khand:600", "Chicle:400", "Karma:600", "Bonbon:400", "Sarpanch:600", "Laila:600"];
    thickness[6] = ["Open+Sans:700", "Roboto:900", "Lato:900", "Source+Sans+Pro:700", "Droid+Sans:700", "Raleway:700", "Ubuntu:700", "Montserrat:700", "Roboto+Slab:700", "Merriweather:900", "Arimo:700", "Bitter:700", "Noto+Sans:700", "Oxygen:700", "Arvo:700", "Titillium+Web:700", "Dosis:800", "Playfair+Display:900", "Nunito:700", "Signika:700", "Noto+Serif:700", "Play:700", "Archivo+Narrow:700", "Maven+Pro:900", "Asap:700", "Anton:400", "Libre+Baskerville:700", "Merriweather+Sans:700", "Chewy:400", "Exo:800", "Monda:700", "Exo+2:700", "Playfair+Display+SC:700", "Squada+One:400", "Tinos:700", "Russo+One:400", "Orbitron:900", "Glegoo:700", "Fredoka+One:400", "Abril+Fatface:400", "Source+Code+Pro:700", "Nobile:700", "BenchNine:700", "Fira+Sans:700", "Domine:700", "Cinzel:700", "Sintony:700", "Amaranth:700", "Permanent+Marker:400", "Overlock:900", "Scada:700", "Signika+Negative:700", "Alegreya+Sans:700", "Rambla:700", "Ruda:900", "Montserrat+Alternates:700", "Cherry+Cream+Soda:400", "Hind:700", "Berkshire+Swash:400", "Neuton:700", "Kameron:700", "Fugaz+One:400", "Oleo+Script:700", "Volkhov:700", "Alegreya+Sans+SC:700", "Cinzel+Decorative:700", "Alef:700", "Slackey:400", "Leckerli+One:400", "Magra:700", "Cousine:700", "Days+One:400", "Tienne:700", "Yeseva+One:400", "Trade+Winds:400", "Carter+One:400", "Merienda:700", "Podkova:700", "Stardos+Stencil:700", "Simonetta:900", "Rufina:700", "Skranji:700", "Rajdhani:700", "Oleo+Script+Swash+Caps:700", "Life+Savers:700", "Kalam:700", "Concert+One:400", "Ek+Mukta:700", "Halant:700", "Miltonian+Tattoo:400", "Sancreek:400", "Wallpoet:400", "Cherry+Swash:700", "Bigshot+One:400", "Source+Serif+Pro:700", "Creepster:400", "Piedra:400", "Teko:700", "Trochut:700", "Montserrat+Subrayada:700", "Almendra:700", "Vesper+Libre:700", "Khand:700", "Fira+Mono:700", "Karma:700", "Sarpanch:700", "Laila:700"];
    thickness[7] = ["Open+Sans:800", "Raleway:800", "Vollkorn:700", "Alegreya:900", "Merriweather+Sans:800", "Exo:900", "Exo+2:800", "Changa+One:400", "Bevan:400", "Paytone+One:400", "Passion+One:400", "Luckiest+Guy:400", "Alegreya+Sans:800", "Chivo:900", "Syncopate:700", "Neuton:800", "Sansita+One:400", "Alegreya+Sans+SC:800", "Candal:400", "Limelight:400", "Aclonica:400", "Lemon:400", "Tienne:900", "Alegreya+SC:900", "Ceviche+One:400", "Knewave:400", "Lilita+One:400", "Press+Start+2P:400", "Shojumaru:400", "Coda+Caption:800", "Ek+Mukta:800", "Sarina:400", "UnifrakturCook:700", "Goblin+One:400", "Nosifer:400", "Gorditas:700", "Emblema+One:400", "Mrs+Sheppards:400", "Arbutus:400", "Unlock:400", "Sarpanch:800"];
    thickness[8] = ["Source+Sans+Pro:900", "Raleway:900", "Merriweather:900", "Titillium+Web:900", "Exo+2:900", "Playfair+Display+SC:900", "Alfa+Slab+One:400", "Source+Code+Pro:900", "Passion+One:900", "Cinzel:900", "Black+Ops+One:400", "Alegreya+Sans:900", "Coustard:900", "Coda:800", "Alegreya+Sans+SC:900", "Cinzel+Decorative:900", "Frijole:400", "Ultra:400", "Corben:700", "Bowlby+One:400", "Poller+One:400", "Bowlby+One+SC:400", "Sniglet:800", "Ruslan+Display:400", "Titan+One:400", "Holtwood+One+SC:400", "Rammetto+One:400", "Gravitas+One:400", "Sonsie+One:400", "Elsie:900", "Elsie+Swash+Caps:900", "Diplomata:400", "Vesper+Libre:900", "Plaster:400", "Fascinate:400", "Diplomata+SC:400", "Sarpanch:900", "Fascinate+Inline:400"];
    thickness[9] = ["Sigmar+One:400", "Monofett:400", "Asset:400", "Chango:400", "Erica+One:400"];

    slant[0] = ["Open+Sans:600", "Slabo+27px:400", "Roboto:400", "Oswald:400", "Lato:400", "Roboto+Condensed:400", "Source+Sans+Pro:400", "PT+Sans:400", "Droid+Sans:400", "Open+Sans+Condensed:300", "Droid+Serif:400", "Raleway:500", "Ubuntu:400", "Montserrat:400", "Roboto+Slab:300", "Merriweather:400", "Lora:400", "PT+Sans+Narrow:400", "Arimo:400", "Bitter:400", "Yanone+Kaffeesatz:300", "Noto+Sans:400", "Oxygen:400", "Indie+Flower:400", "Arvo:400", "Titillium+Web:400", "PT+Serif:400", "Dosis:500", "Francois+One:400", "Fjalla+One:400", "Playfair+Display:700", "Ubuntu+Condensed:400", "Cabin:500", "Bree+Serif:400", "Nunito:400", "Muli:300", "Abel:400", "Vollkorn:400", "Signika:400", "Shadows+Into+Light:400", "Poiret+One:400", "Noto+Serif:400", "Play:400", "Inconsolata:400", "Archivo+Narrow:400", "Cuprum:400", "Josefin+Sans:400", "Maven+Pro:500", "Asap:400", "Rokkitt:400", "Alegreya:700", "PT+Sans+Caption:400", "Armata:400", "Anton:400", "Libre+Baskerville:400", "Karla:400", "Merriweather+Sans:400", "Chewy:400", "Questrial:400", "Varela+Round:400", "Gloria+Hallelujah:400", "Quicksand:400", "Sigmar+One:400", "Pathway+Gothic+One:400", "Hammersmith+One:400", "Exo:500", "Monda:400", "Exo+2:500", "Architects+Daughter:400", "Crete+Round:400", "Righteous:400", "Istok+Web:400", "Coming+Soon:400", "News+Cycle:400", "Crimson+Text:600", "Noticia+Text:400", "Pontano+Sans:400", "Ropa+Sans:400", "Changa+One:400", "Quattrocento+Sans:400", "Cabin+Condensed:500", "Fontdiner+Swanky:400", "Josefin+Slab:400", "Slabo+13px:400", "Gudea:400", "Playfair+Display+SC:700", "Sanchez:400", "Kreon:400", "Amatic+SC:400", "Patua+One:400", "Didact+Gothic:400", "Squada+One:400", "Tinos:400", "Russo+One:400", "Courgette:400", "Orbitron:500", "Glegoo:400", "Lobster+Two:400", "Economica:400", "Fredoka+One:400", "EB+Garamond:400", "Alfa+Slab+One:400", "Abril+Fatface:400", "Cantarell:400", "Source+Code+Pro:500", "Old+Standard+TT:400", "Nobile:400", "Enriqueta:400", "Philosopher:400", "BenchNine:400", "Bevan:400", "Fira+Sans:400", "Shadows+Into+Light+Two:400", "Comfortaa:400", "Domine:400", "Marvel:400", "Paytone+One:400", "Jura:400", "Passion+One:700", "Audiowide:400", "Covered+By+Your+Grace:400", "Crafty+Girls:400", "Handlee:400", "Cinzel:700", "Special+Elite:400", "Black+Ops+One:400", "Droid+Sans+Mono:400", "Varela:400", "Cardo:400", "Sintony:400", "Viga:400", "Antic+Slab:400", "Amaranth:400", "Vidaloka:400", "Molengo:400", "Quattrocento:400", "Gentium+Book+Basic:400", "Overlock:700", "Luckiest+Guy:400", "Actor:400", "Scada:400", "Trocchi:400", "Signika+Negative:400", "Alegreya+Sans:500", "Coustard:400", "Cookie:400", "Coda:400", "Voltaire:400", "Chivo:400", "Gruppo:400", "Archivo+Black:400", "Rambla:400", "Patrick+Hand:400", "Cantata+One:400", "Sorts+Mill+Goudy:400", "Ruda:700", "Waiting+for+the+Sunrise:400", "Reenie+Beanie:400", "Montserrat+Alternates:400", "ABeeZee:400", "Cherry+Cream+Soda:400", "Nixie+One:400", "Hind:500", "Walter+Turncoat:400", "Berkshire+Swash:400", "Bubblegum+Sans:400", "Allerta:400", "Syncopate:400", "Copse:400", "PT+Serif+Caption:400", "Neuton:400", "Lusitana:400", "Goudy+Bookletter+1911:400", "Michroma:400", "Kameron:400", "Carrois+Gothic:400", "Neucha:400", "Marmelad:400", "Sacramento:400", "Arbutus+Slab:400", "Carme:400", "Share:400", "Rochester:400", "Gochi+Hand:400", "Rancho:400", "Ubuntu+Mono:400", "Telex:400", "Just+Another+Hand:400", "Strait:400", "Doppio+One:400", "Cutive:400", "Belleza:400", "Basic:400", "Fauna+One:400", "Aldrich:400", "Jockey+One:400", "Electrolize:400", "Schoolbell:400", "Gentium+Basic:400", "Boogaloo:400", "Volkhov:400", "Alice:400", "Duru+Sans:400", "Prata:400", "Arapey:400", "Allerta+Stencil:400", "Lily+Script+One:400", "Julius+Sans+One:400", "Advent+Pro:400", "Antic:400", "Alegreya+Sans+SC:500", "Port+Lligat+Slab:400", "Rosario:400", "Unkempt:400", "Denk+One:400", "Acme:400", "Fredericka+the+Great:400", "Inder:400", "Candal:400", "Convergence:400", "Galindo:400", "Radley:400", "Limelight:400", "Six+Caps:400", "Adamina:400", "Cinzel+Decorative:700", "IM+Fell+English:400", "Average+Sans:400", "Homenaje:400", "The+Girl+Next+Door:400", "Mako:400", "Just+Me+Again+Down+Here:400", "Cabin+Sketch:400", "Racing+Sans+One:400", "Imprima:400", "Spinnaker:400", "Frijole:400", "Aclonica:400", "Poly:400", "Alef:400", "Tauri:400", "Slackey:400", "Ultra:400", "Caudex:400", "Oranienbaum:400", "Judson:400", "Grand+Hotel:400", "Puritan:400", "Capriola:400", "Orienta:400", "Tenor+Sans:400", "Metrophobic:400", "Nova+Square:400", "Magra:400", "Cousine:400", "Love+Ya+Like+A+Sister:400", "Englebert:400", "Anaheim:400", "Days+One:400", "Voces:400", "Average:400", "Lustria:400", "Forum:400", "Alike:400", "Belgrano:400", "Petit+Formal+Script:400", "Marcellus+SC:400", "Ovo:400", "Tienne:700", "Alegreya+SC:700", "Marcellus:400", "Crushed:400", "Pompiere:400", "Quando:400", "Andika:400", "Give+You+Glory:400", "Freckle+Face:400", "PT+Mono:400", "Sue+Ellen+Francisco:400", "Lekton:400", "Anonymous+Pro:400", "Patrick+Hand+SC:400", "Allan:400", "Brawler:400", "Bentham:400", "Kranky:400", "Shanti:400", "Yeseva+One:400", "Metamorphous:400", "Delius:400", "Corben:400", "Short+Stack:400", "Andada:400", "Gilda+Display:400", "Montez:400", "Mountains+of+Christmas:400", "Fenix:400", "Loved+by+the+King:400", "Headland+One:400", "Quantico:400", "Baumans:400", "Wire+One:400", "Monoton:400", "Chelsea+Market:400", "Over+the+Rainbow:400", "Kelly+Slab:400", "Merienda:400", "Geo:400", "IM+Fell+English+SC:400", "Graduate:400", "Podkova:400", "Carrois+Gothic+SC:400", "IM+Fell+DW+Pica:400", "Salsa:400", "Megrim:400", "Kavoon:400", "Stardos+Stencil:400", "Annie+Use+Your+Telescope:400", "Simonetta:900", "Federo:400", "Kite+One:400", "Bowlby+One:400", "Nova+Mono:400", "Lilita+One:400", "Cambo:400", "Maiden+Orange:400", "Press+Start+2P:400", "Poller+One:400", "Rufina:400", "Prosto+One:400", "Expletus+Sans:500", "Iceland:400", "IM+Fell+Double+Pica:400", "UnifrakturMaguntia:400", "Londrina+Solid:400", "Stint+Ultra+Condensed:400", "Unica+One:400", "Delius+Swash+Caps:400", "Skranji:400", "Bowlby+One+SC:400", "Gafata:400", "Buenard:400", "Redressed:400", "Happy+Monkey:400", "Rajdhani:500", "Averia+Libre:400", "Oleo+Script+Swash+Caps:400", "Codystar:400", "VT323:400", "Chau+Philomene+One:400", "Shojumaru:400", "Sniglet:400", "Ruslan+Display:400", "IM+Fell+DW+Pica+SC:400", "Mouse+Memoirs:400", "Coda+Caption:800", "Oregano:400", "Unna:400", "Share+Tech:400", "Life+Savers:400", "IM+Fell+French+Canon:400", "Kalam:400", "Concert+One:400", "IM+Fell+Great+Primer+SC:400", "Mate+SC:400", "Tulpen+One:400", "Sofia:400", "Fanwood+Text:400", "Dorsa:400", "Rationale:400", "Titan+One:400", "Julee:400", "Henny+Penny:400", "Cantora+One:400", "Finger+Paint:400", "Amarante:400", "Gabriela:400", "Vast+Shadow:400", "Quintessential:400", "Fjord+One:400", "Clicker+Script:400", "Holtwood+One+SC:400", "Aladin:400", "Amethysta:400", "Sunshiney:400", "Averia+Sans+Libre:400", "Cutive+Mono:400", "Ek+Mukta:500", "Griffy:400", "Junge:400", "Rosarivo:400", "Halant:500", "Nova+Round:400", "Linden+Hill:400", "Delius+Unicase:400", "Rammetto+One:400", "Inika:400", "Zeyada:400", "Ledger:400", "Numans:400", "Esteban:400", "Snippet:400", "Balthazar:400", "Artifika:400", "Paprika:400", "Alike+Angular:400", "Buda:300", "Miltonian+Tattoo:400", "Nova+Oval:400", "Medula+One:400", "Mystery+Quest:400", "Sancreek:400", "Overlock+SC:400", "Flamenco:300", "Swanky+and+Moo+Moo:400", "Donegal+One:400", "Mate:400", "Gravitas+One:400", "MedievalSharp:400", "Wallpoet:400", "Milonga:400", "Fresca:400", "Nova+Slim:400", "Sofadi+One:400", "Cherry+Swash:400", "Oxygen+Mono:400", "IM+Fell+French+Canon+SC:400", "Raleway+Dots:400", "Oldenburg:400", "Rye:400", "Stint+Ultra+Expanded:400", "Text+Me+One:400", "Monofett:400", "Prociono:400", "Jacques+Francois:400", "UnifrakturCook:700", "Bigshot+One:400", "Cagliostro:400", "Stoke:300", "Kenia:400", "Goblin+One:400", "Source+Serif+Pro:600", "Astloch:400", "Port+Lligat+Sans:400", "Smythe:400", "IM+Fell+Double+Pica+SC:400", "Spirax:400", "Londrina+Outline:400", "Creepster:400", "Nova+Flat:400", "Modern+Antiqua:400", "Ruluko:400", "Petrona:400", "Atomic+Age:400", "Della+Respira:400", "Share+Tech+Mono:400", "Montaga:400", "Irish+Grover:400", "Geostar+Fill:400", "Piedra:400", "Original+Surfer:400", "Ribeye+Marrow:400", "Habibi:400", "Fondamento:400", "Lancelot:400", "Wendy+One:400", "Averia+Serif+Libre:400", "Teko:500", "Offside:400", "Keania+One:400", "Krona+One:400", "Iceberg:400", "Geostar:400", "Seymour+One:400", "McLaren:400", "Asset:400", "Chango:400", "Passero+One:400", "Miltonian:400", "Pirata+One:400", "Smokum:400", "Asul:400", "Trochut:400", "Federant:400", "Antic+Didone:400", "Mrs+Saint+Delafield:400", "Aubrey:400", "Nova+Cut:400", "Trykker:400", "Marko+One:400", "Galdeano:400", "Londrina+Shadow:400", "Italiana:400", "Joti+One:400", "Rum+Raisin:400", "Snowburst+One:400", "Wellfleet:400", "Autour+One:400", "Supermercado+One:400", "Spicy+Rice:400", "Ranchers:400", "Montserrat+Subrayada:400", "Faster+One:400", "Nosifer:400", "Vampiro+One:400", "Germania+One:400", "Akronim:400", "Glass+Antiqua:400", "Revalia:400", "Chela+One:400", "Jacques+Francois+Shadow:400", "Jolly+Lodger:400", "Ribeye:400", "Caesar+Dressing:400", "Bubbler+One:400", "Croissant+One:400", "Almendra:700", "Peralta:400", "Eagle+Lake:400", "Elsie:400", "Butcherman:400", "Elsie+Swash+Caps:400", "Stalemate:400", "Diplomata:400", "Gorditas:400", "Emilys+Candy:400", "Combo:400", "Vesper+Libre:500", "Plaster:400", "Khand:500", "Londrina+Sketch:400", "Purple+Purse:400", "Romanesco:400", "Eater:400", "Chicle:400", "Sevillana:400", "Margarine:400", "Sirin+Stencil:400", "Dr+Sugiyama:400", "Fira+Mono:400", "Risque:400", "Macondo+Swash+Caps:400", "New+Rocker:400", "Karma:500", "Bigelow+Rules:400", "Mr+Bedfort:400", "Meie+Script:400", "Flavors:400", "Underdog:400", "Uncial+Antiqua:400", "Averia+Gruesa+Libre:400", "Rubik+One:400", "Stalinist+One:400", "Metal+Mania:400", "Fascinate:400", "Arbutus:400", "Diplomata+SC:400", "Erica+One:400", "Macondo:400", "Warnes:400", "Ruge+Boogie:400", "Almendra+SC:400", "Unlock:400", "Mandali:400", "Sarpanch:600", "Almendra+Display:400", "Hanalei+Fill:400", "Laila:500", "Fascinate+Inline:400", "Hanalei:400", "Rozha+One:400", "Mallanna:400", "Ramabhadra:400", "NTR:400", "Fruktur:400", "Gurajada:400", "Rubik+Mono+One:400", "Dhurjati:400", "Timmana:400", "Tenali+Ramakrishna:400", "Ramaraja:400", "Sree+Krushnadevaraya:400", "Lakki+Reddy:400", "Ravi+Prakash:400", "Suranna:400", "Suravaram:400", "Gidugu:400", "Peddana:400"];
    slant[1] = ["Lora:400", "Muli:300", "Karla:400", "Rock+Salt:400", "Share:700", "Engagement:400", "Simonetta:900", "Linden+Hill:400", "IM+Fell+Great+Primer:400", "Bonbon:400"];
    slant[2] = ["Roboto:300", "Lato:700", "Roboto+Condensed:400", "Lora:700", "Josefin+Sans:400", "Asap:400", "Alegreya:900", "Exo:600", "Noticia+Text:400", "Josefin+Slab:600", "Gentium+Book+Basic:400", "Overlock:700", "Chivo:400", "Kotta+One:400", "Share:400", "Gentium+Basic:400", "Rosario:400", "Puritan:400", "Merienda+One:400", "Alegreya+SC:700", "Contrail+One:400", "Quantico:400", "Vibur:400", "Carter+One:400", "Expletus+Sans:500", "Chau+Philomene+One:400", "Devonshire:400", "Ewert:400", "Princess+Sofia:400", "Emblema+One:400"];
    slant[3] = ["Open+Sans:600", "Roboto:400", "Lato:300", "Open+Sans+Condensed:300", "Droid+Serif:400", "Arimo:400", "Bitter:400", "Arvo:700", "PT+Serif:400", "Cabin:500", "Vollkorn:400", "Cuprum:400", "Alegreya:400", "Pacifico:400", "Exo:400", "Crete+Round:400", "Istok+Web:400", "Crimson+Text:400", "Ropa+Sans:400", "Changa+One:400", "Quattrocento+Sans:400", "Josefin+Slab:300", "Gudea:400", "Bangers:400", "Tinos:400", "Economica:400", "Nobile:400", "Philosopher:400", "Marvel:400", "Gentium+Book+Basic:700", "Sorts+Mill+Goudy:400", "PT+Serif+Caption:400", "Neuton:400", "Fugaz+One:400", "Oleo+Script:400", "Poly:400", "Judson:400", "Leckerli+One:400", "Cousine:400", "Lemon:400", "Euphoria+Script:400", "Alegreya+SC:400", "Lekton:400", "Geo:400", "Averia+Libre:400", "Fanwood+Text:400", "Averia+Sans+Libre:400", "Rosarivo:400", "Rouge+Script:400", "Mate:400", "Sail:400", "Fondamento:400", "Nova+Script:400", "Averia+Serif+Libre:400", "Butterfly+Kids:400", "Felipa:400", "Jim+Nightshade:400"];
    slant[4] = ["Open+Sans:400", "Roboto+Condensed:300", "Source+Sans+Pro:400", "PT+Sans:400", "Droid+Serif:700", "Ubuntu:400", "Merriweather:400", "Lobster:400", "Noto+Sans:400", "Arvo:400", "Titillium+Web:400", "Noto+Serif:400", "Archivo+Narrow:400", "Libre+Baskerville:400", "Merriweather+Sans:400", "Exo+2:500", "Crimson+Text:700", "Playfair+Display+SC:700", "Sanchez:400", "Lobster+Two:400"];
    slant[5] = ["Lato:100", "Playfair+Display:700", "Cantarell:400", "Niconne:400", "Permanent+Marker:400", "Calligraffitti:400", "Homemade+Apple:400", "IM+Fell+English:400", "Cedarville+Cursive:400", "IM+Fell+Double+Pica:400", "Bilbo+Swash+Caps:400", "IM+Fell+Great+Primer:400", "Bilbo:400", "Sonsie+One:400"];
    slant[6] = ["Dancing+Script:400", "Playball:400", "Kaushan+Script:400", "Marck+Script:400", "Allura:400", "Yesteryear:400", "Knewave:400", "IM+Fell+DW+Pica:400", "Kristi:400", "Qwigley:400", "IM+Fell+French+Canon:400", "Dynalight:400", "Sarina:400", "Seaweed+Script:400", "Ruthie:400"];
    slant[7] = ["Yellowtail:400", "Tangerine:700", "Great+Vibes:400", "Damion:400", "Nothing+You+Could+Do:400", "Parisienne:400", "La+Belle+Aurore:400", "Italianno:400", "League+Script:400", "Aguafina+Script:400"];
    slant[8] = ["Pinyon+Script:400", "Alex+Brush:400", "Mr+De+Haviland:400", "Arizonia:400", "Codystar:300", "Meddon:400", "Condiment:400", "Herr+Von+Muellerhoff:400", "Miss+Fajardose:400"];
    slant[9] = ["Tangerine:400", "Mr+Dafoe:400", "Monsieur+La+Doulaise:400", "Mrs+Sheppards:400"];

    width[0] = [];
    width[1] = ["Dorsa:400"];
    width[2] = ["Tangerine:400", "Just+Another+Hand:400", "Six+Caps:400", "Wire+One:400", "Tulpen+One:400", "Lovers+Quarrel:400", "Miss+Fajardose:400"];
    width[3] = ["Yanone+Kaffeesatz:700", "Amatic+SC:400", "Tangerine:700", "Sue+Ellen+Francisco:400", "Engagement:400", "Italianno:400", "Mr+De+Haviland:400", "Kristi:400", "Stint+Ultra+Condensed:400", "Qwigley:400", "Bilbo+Swash+Caps:400", "Medula+One:400", "Bilbo:400", "Herr+Von+Muellerhoff:400", "Ruthie:400", "Jolly+Lodger:400"];
    width[4] = ["Oswald:300", "Open+Sans+Condensed:300", "Yanone+Kaffeesatz:300", "Economica:700", "Niconne:400", "Yellowtail:400", "Cookie:400", "Great+Vibes:400", "Rochester:400", "Rancho:400", "Alex+Brush:400", "Allura:400", "Homenaje:400", "Just+Me+Again+Down+Here:400", "Euphoria+Script:400", "Pompiere:400", "Yesteryear:400", "Montez:400", "Loved+by+the+King:400", "Maiden+Orange:400", "Aladin:400", "Linden+Hill:400", "Rouge+Script:400", "Dynalight:400", "Astloch:400", "Smythe:400", "Aguafina+Script:400", "Smokum:400", "Devonshire:400", "Monsieur+La+Doulaise:400", "Butterfly+Kids:400", "Mrs+Sheppards:400", "Dr+Sugiyama:400", "Jim+Nightshade:400", "Ruge+Boogie:400"];
    width[5] = ["Oswald:400", "Lato:100", "Roboto+Condensed:700", "PT+Sans:400", "Open+Sans+Condensed:700", "PT+Sans+Narrow:400", "Lobster:400", "Dosis:400", "Ubuntu+Condensed:400", "Cabin:400", "Abel:400", "Vollkorn:400", "Shadows+Into+Light:400", "Cuprum:700", "Rokkitt:400", "Alegreya:400", "Pacifico:400", "Karla:400", "Chewy:400", "Dancing+Script:400", "News+Cycle:400", "Crimson+Text:400", "Ropa+Sans:400", "Cabin+Condensed:500", "Gudea:400", "Kreon:300", "Squada+One:400", "Bangers:400", "Tinos:400", "Lobster+Two:700", "EB+Garamond:400", "Shadows+Into+Light+Two:400", "Playball:400", "Kaushan+Script:400", "Marvel:700", "Passion+One:400", "Covered+By+Your+Grace:400", "Pinyon+Script:400", "Handlee:400", "Satisfy:400", "Cardo:400", "Gentium+Book+Basic:400", "Calligraffitti:400", "Overlock:400", "Voltaire:400", "Patrick+Hand:400", "Bad+Script:400", "Sorts+Mill+Goudy:400", "Waiting+for+the+Sunrise:400", "Reenie+Beanie:400", "Damion:400", "Bubblegum+Sans:400", "Neuton:400", "Goudy+Bookletter+1911:400", "Neucha:400", "Share:400", "Oleo+Script:400", "Belleza:400", "Jockey+One:400", "Schoolbell:400", "Gentium+Basic:400", "Boogaloo:400", "Arapey:400", "Advent+Pro:400", "Parisienne:400", "Port+Lligat+Slab:400", "Rosario:400", "Acme:400", "IM+Fell+English:400", "Magra:400", "Forum:400", "Ceviche+One:400", "Crushed:400", "Allan:700", "Contrail+One:400", "Mountains+of+Christmas:400", "Vibur:400", "Geo:400", "Norican:400", "IM+Fell+DW+Pica:400", "Annie+Use+Your+Telescope:400", "Simonetta:400", "Federo:400", "Dawning+of+a+New+Day:400", "Iceland:400", "IM+Fell+Double+Pica:400", "UnifrakturMaguntia:400", "Londrina+Solid:400", "Arizonia:400", "Redressed:400", "VT323:400", "Chau+Philomene+One:400", "Mr+Dafoe:400", "Unna:400", "IM+Fell+French+Canon:400", "Fanwood+Text:400", "Rationale:400", "Julee:400", "Sunshiney:400", "Linden+Hill:400", "Zeyada:400", "Balthazar:400", "Buda:300", "IM+Fell+Great+Primer:400", "Flamenco:300", "Mate:400", "Fresca:400", "Sail:400", "Seaweed+Script:400", "UnifrakturCook:700", "Condiment:400", "Kenia:400", "Astloch:700", "Port+Lligat+Sans:400", "Londrina+Outline:400", "Creepster:400", "Ruluko:400", "Piedra:400", "Lancelot:400", "Iceberg:400", "Passero+One:400", "Trochut:700", "Aubrey:400", "Galdeano:400", "Londrina+Shadow:400", "Germania+One:400", "Glass+Antiqua:400", "Almendra:400", "Princess+Sofia:400", "Londrina+Sketch:400", "Chicle:400", "Sevillana:400", "Felipa:400", "Sirin+Stencil:400"];
    width[6] = ["Open+Sans:300", "Slabo+27px:400", "Roboto:900", "Lato:700", "Roboto+Condensed:300", "Source+Sans+Pro:900", "PT+Sans:400", "Droid+Sans:400", "Droid+Serif:400", "Raleway:500", "Ubuntu:700", "Montserrat:700", "Roboto+Slab:300", "Merriweather:400", "Lora:700", "Arimo:700", "Bitter:400", "Noto+Sans:700", "Oxygen:400", "Indie+Flower:400", "Titillium+Web:900", "PT+Serif:700", "Dosis:800", "Francois+One:400", "Fjalla+One:400", "Playfair+Display:900", "Cabin:600", "Bree+Serif:400", "Nunito:300", "Muli:400", "Vollkorn:400", "Signika:400", "Poiret+One:400", "Noto+Serif:700", "Play:400", "Inconsolata:400", "Archivo+Narrow:700", "Josefin+Sans:700", "Maven+Pro:500", "Asap:700", "Rokkitt:700", "Alegreya:700", "Anton:400", "Libre+Baskerville:700", "Karla:700", "Merriweather+Sans:800", "Questrial:400", "Varela+Round:400", "Pathway+Gothic+One:400", "Hammersmith+One:400", "Exo:900", "Monda:400", "Exo+2:900", "Architects+Daughter:400", "Crete+Round:400", "Righteous:400", "Istok+Web:700", "Coming+Soon:400", "Crimson+Text:600", "Noticia+Text:400", "Pontano+Sans:400", "Ropa+Sans:400", "Changa+One:400", "Quattrocento+Sans:700", "Josefin+Slab:700", "Slabo+13px:400", "Gudea:400", "Playfair+Display+SC:900", "Sanchez:400", "Kreon:700", "Patua+One:400", "Didact+Gothic:400", "Tinos:700", "Courgette:400", "Glegoo:700", "Fredoka+One:400", "Abril+Fatface:400", "Cantarell:400", "Source+Code+Pro:500", "Old+Standard+TT:700", "Nobile:400", "Enriqueta:400", "Philosopher:700", "BenchNine:400", "Fira+Sans:700", "Domine:400", "Jura:400", "Passion+One:700", "Cinzel:700", "Varela:400", "Cardo:400", "Sintony:400", "Marck+Script:400", "Viga:400", "Antic+Slab:400", "Amaranth:700", "Vidaloka:400", "Molengo:400", "Quattrocento:400", "Gentium+Book+Basic:700", "Overlock:900", "Actor:400", "Scada:700", "Signika+Negative:400", "Alegreya+Sans:900", "Coda:400", "Chivo:900", "Gruppo:400", "Archivo+Black:400", "Rambla:700", "Sorts+Mill+Goudy:400", "Ruda:400", "Montserrat+Alternates:400", "ABeeZee:400", "Hind:500", "Walter+Turncoat:400", "Berkshire+Swash:400", "Kotta+One:400", "Copse:400", "PT+Serif+Caption:400", "Neuton:800", "Lusitana:400", "Kameron:400", "Carrois+Gothic:400", "Marmelad:400", "Sacramento:400", "Arbutus+Slab:400", "Carme:400", "Share:700", "Gochi+Hand:400", "Ubuntu+Mono:700", "Telex:400", "Strait:400", "Doppio+One:400", "Basic:400", "Fauna+One:400", "Electrolize:400", "Gentium+Basic:400", "Volkhov:400", "Alice:400", "Prata:400", "Lily+Script+One:400", "Julius+Sans+One:400", "Antic:400", "Alegreya+Sans+SC:900", "Rosario:400", "Unkempt:400", "Denk+One:400", "Fredericka+the+Great:400", "Inder:400", "Galindo:400", "Radley:400", "Adamina:400", "Cinzel+Decorative:700", "IM+Fell+English:400", "Average+Sans:400", "The+Girl+Next+Door:400", "Mako:400", "Cabin+Sketch:400", "Racing+Sans+One:400", "Imprima:400", "Poly:400", "Alef:400", "Tauri:400", "Caudex:700", "Oranienbaum:400", "Judson:700", "Leckerli+One:400", "Grand+Hotel:400", "Puritan:700", "Capriola:400", "Orienta:400", "Metrophobic:400", "Nova+Square:400", "Magra:700", "Love+Ya+Like+A+Sister:400", "Englebert:400", "Anaheim:400", "Voces:400", "Average:400", "Lustria:400", "Alike:400", "Petit+Formal+Script:400", "Marcellus+SC:400", "Ovo:400", "Alegreya+SC:900", "Marcellus:400", "Quando:400", "Andika:400", "Give+You+Glory:400", "Freckle+Face:400", "Lekton:700", "Patrick+Hand+SC:400", "Allan:400", "Brawler:400", "Bentham:400", "Kranky:400", "Shanti:400", "Delius:400", "Corben:400", "La+Belle+Aurore:400", "Andada:400", "Gilda+Display:400", "Fenix:400", "Headland+One:400", "Quantico:700", "Baumans:400", "Knewave:400", "Over+the+Rainbow:400", "Carter+One:400", "Kelly+Slab:400", "Merienda:400", "IM+Fell+English+SC:400", "Podkova:400", "Carrois+Gothic+SC:400", "Salsa:400", "Megrim:400", "Kavoon:400", "Stardos+Stencil:400", "Simonetta:900", "Kite+One:400", "Lilita+One:400", "League+Script:400", "Cambo:400", "Rufina:400", "Expletus+Sans:700", "Cedarville+Cursive:400", "Unica+One:400", "Delius+Swash+Caps:400", "Skranji:400", "Gafata:400", "Buenard:400", "Rajdhani:500", "Averia+Libre:700", "Oleo+Script+Swash+Caps:400", "Sniglet:400", "IM+Fell+DW+Pica+SC:400", "Mouse+Memoirs:400", "Oregano:400", "Share+Tech:400", "Life+Savers:400", "IM+Fell+French+Canon:400", "Kalam:400", "Concert+One:400", "IM+Fell+Great+Primer+SC:400", "Mate+SC:400", "Sofia:400", "Henny+Penny:400", "Cantora+One:400", "Finger+Paint:400", "Amarante:400", "Gabriela:400", "Quintessential:400", "Fjord+One:400", "Clicker+Script:400", "Averia+Sans+Libre:700", "Cutive+Mono:400", "Ek+Mukta:500", "Griffy:400", "Junge:400", "Rosarivo:400", "Halant:500", "Nova+Round:400", "Inika:400", "Esteban:400", "Snippet:400", "Paprika:400", "Alike+Angular:400", "Nova+Oval:400", "Mystery+Quest:400", "Sancreek:400", "Overlock+SC:400", "Swanky+and+Moo+Moo:400", "Donegal+One:400", "Mate:400", "MedievalSharp:400", "Milonga:400", "Nova+Slim:400", "Sofadi+One:400", "Cherry+Swash:400", "Oxygen+Mono:400", "IM+Fell+French+Canon+SC:400", "Raleway+Dots:400", "Rye:400", "Text+Me+One:400", "Monofett:400", "Prociono:400", "Jacques+Francois:400", "Bigshot+One:400", "Cagliostro:400", "Stoke:300", "Source+Serif+Pro:600", "IM+Fell+Double+Pica+SC:400", "Spirax:400", "Nova+Flat:400", "Petrona:400", "Della+Respira:400", "Share+Tech+Mono:400", "Montaga:400", "Irish+Grover:400", "Original+Surfer:400", "Habibi:400", "Fondamento:400", "Nova+Script:400", "Wendy+One:400", "Averia+Serif+Libre:700", "Teko:500", "Offside:400", "Miniver:400", "Keania+One:400", "Seymour+One:400", "McLaren:400", "Pirata+One:400", "Asul:400", "Federant:400", "Antic+Didone:400", "Mrs+Saint+Delafield:400", "Italiana:400", "Joti+One:400", "Rum+Raisin:400", "Snowburst+One:400", "Autour+One:400", "Supermercado+One:400", "Spicy+Rice:400", "Molle:400", "Ranchers:400", "Montserrat+Subrayada:400", "Faster+One:400", "Vampiro+One:400", "Akronim:400", "Chela+One:400", "Jacques+Francois+Shadow:400", "Caesar+Dressing:400", "Bubbler+One:400", "Croissant+One:400", "Almendra:700", "Peralta:400", "Eagle+Lake:400", "Elsie:400", "Elsie+Swash+Caps:400", "Stalemate:400", "Emilys+Candy:400", "Combo:400", "Vesper+Libre:500", "Khand:500", "Purple+Purse:400", "Romanesco:400", "Margarine:400", "Fira+Mono:400", "Risque:400", "Macondo+Swash+Caps:400", "New+Rocker:400", "Karma:500", "Bigelow+Rules:400", "Mr+Bedfort:400", "Meie+Script:400", "Flavors:400", "Underdog:400", "Averia+Gruesa+Libre:400", "Rubik+One:400", "Stalinist+One:400", "Metal+Mania:400", "Macondo:400", "Warnes:400", "Almendra+SC:400", "Mandali:400", "Sarpanch:600", "Almendra+Display:400", "Hanalei+Fill:400", "Laila:500", "Hanalei:400", "Rozha+One:400", "Mallanna:400", "Ramabhadra:400", "NTR:400", "Fruktur:400", "Gurajada:400", "Rubik+Mono+One:400", "Dhurjati:400", "Timmana:400", "Tenali+Ramakrishna:400", "Ramaraja:400", "Sree+Krushnadevaraya:400", "Lakki+Reddy:400", "Ravi+Prakash:400", "Suranna:400", "Suravaram:400", "Gidugu:400", "Peddana:400"];
    width[7] = ["Open+Sans:800", "Droid+Serif:700", "Montserrat:400", "Merriweather:400", "Bitter:700", "Arvo:700", "Nunito:700", "Vollkorn:700", "Maven+Pro:900", "PT+Sans+Caption:400", "Armata:400", "Gloria+Hallelujah:400", "Quicksand:400", "Sigmar+One:400", "Noticia+Text:700", "Fontdiner+Swanky:400", "Russo+One:400", "Orbitron:500", "Glegoo:400", "Alfa+Slab+One:400"];
    width[8] = ["Syncopate:400", "Frijole:400", "Ultra:400", "Corben:700", "Shojumaru:400", "Vast+Shadow:400", "Holtwood+One+SC:400", "Delius+Unicase:700", "Gravitas+One:400", "Sonsie+One:400", "Goblin+One:400", "Geostar+Fill:400", "Krona+One:400", "Geostar:400", "Chango:400", "Nosifer:400", "Revalia:400", "Ewert:400", "Plaster:400", "Arbutus:400"];
    width[9] = ["Press+Start+2P:400", "Asset:400", "Diplomata:400", "Diplomata+SC:400"];


    for (var cat in completeFontCatJSON)
    {

        console.log('processing' + cat);

        for (var i = 0; i < completeFontCatJSON[cat]['fonts'].length; i++)
        {
            //completeFontCatJSON[cat]['fonts'][i].loadString = getFontVariantsString(completeFontCatJSON[cat]['fonts'][i])
            if (slant2.indexOf(completeFontCatJSON[cat]['fonts'][i].family) != -1)
            {
                completeFontCatJSON[cat]['fonts'][i].thickness = 2;
                count++;
            }
        }
    }
    console.info('changed ' + count + ' fonts.');
    document.write(JSON.stringify(completeFontCatJSON));
}

function css(a)
{
    var sheets = document.styleSheets, o = {};
    for (var i in sheets)
    {
        var rules = sheets[i].rules || sheets[i].cssRules;
        for (var r in rules)
        {
            if (a.is(rules[r].selectorText))
            {
                o = $.extend(o, css2json(rules[r].style), css2json(a.attr('style')));
            }
        }
    }
    return o;
}

function css2json(css)
{
    var s = {};
    if (!css) return s;
    if (css instanceof CSSStyleDeclaration)
    {
        for (var i in css)
        {
            if ((css[i]).toLowerCase)
            {
                s[(css[i]).toLowerCase()] = (css[css[i]]);
            }
        }
    } else if (typeof css == "string")
    {
        css = css.split("; ");
        for (var i in css)
        {
            var l = css[i].split(": ");
            s[l[0].toLowerCase()] = (l[1]);
        }
    }
    return s;
}

function getAllFontsIdxByFamily(family)
{
    return allFonts.indexOf($.grep(allFonts, function (obj)
    {
        return obj.family == family;
    })[0])
}
function SearchAllFontsIdxByFamily(family, max)
{
    var foundObjs = $.grep(allFonts, function (obj)
    {
        return obj.family.search(new RegExp("^" + family, "i")) != -1
    });
    var families  = [],
        returnObj = [],
        obj       = {};
    for (var i = 0; i < foundObjs.length; i++)
    {
        families.push(foundObjs[i].family);
        obj[foundObjs[i].family] = i;
    } //ui anyfontdropdown floating dropdown labeled search icon button
      //ui anyfontdropdown floating dropdown labeled search icon button active
    return families.sort().slice(0, max);

    for (i = 0; i < families.length && i < max; i++)
    {
        returnObj.push(foundObjs[obj[families[i]]]);
    }
}

function getObj(arr, family)
{
    return $.grep(arr, function (obj)
    {
        return obj.family == family;
    })
}

function arraysEqual(a, b)
{
    //debugger;
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length != b.length) return false;

    // If you don't care about the order of the elements inside
    // the array, you should sort both arrays here.
    a = a.sort();
    b = b.sort();
    for (var i = 0; i < a.length; ++i)
    {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

function extenstion(name)
{
    var ext = name.split('.');
    ext = ext[ext.length - 1];
    return ext;

}