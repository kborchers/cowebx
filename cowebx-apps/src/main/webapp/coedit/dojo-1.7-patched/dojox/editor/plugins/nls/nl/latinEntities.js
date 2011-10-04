/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

define(
//begin v1.x content
({
	/* These are already handled in the default RTE
		amp:"ampersand",lt:"less-than sign",
		gt:"greater-than sign",
		nbsp:"no-break space\nnon-breaking space",
		quot:"quote",
	*/
	iexcl:"omgekeerd uitroepteken",
	cent:"dollarcent",
	pound:"pond",
	curren:"algemeen muntsymbool",
	yen:"yen\nyuan",
	brvbar:"sluisteken\ngebroken streepje",
	sect:"paragraaf",
	uml:"umlaut/trema",
	copy:"copyright (auteursrecht)",
	ordf:"aanduiding vrouwelijk rangtelwoord (Spaans)",
	laquo:"linker guillemet\ndubbele punthaak openen",
	not:"niet-teken",
	shy:"zacht afbreekstreepje",
	reg:"gedeponeerd handelsmerk",
	macr:"macron\nbovenlijn",
	deg:"graad",
	plusmn:"plusminus\nplus-of-min",
	sup2:"superscript 2\nkwadraat",
	sup3:"superscript 3\ntot de derde",
	acute:"accent aigu",
	micro:"micro (mu)",
	para:"paragraaf (pilcrow)",
	middot:"vermenigvuldigingspunt\nmiddle dot",
	cedil:"cedille",
	sup1:"superscript 1",
	ordm:"aanduiding mannelijk rangtelwoord (Spaans)",
	raquo:"rechter guillemet\ndubbele punthaak sluiten",
	frac14:"1/4 (kwart)",
	frac12:"1/2 (half)",
	frac34:"3/4 (driekwart)",
	iquest:"omgekeerd vraagteken",
	Agrave:"hoofdletter A met accent grave",
	Aacute:"hoofdletter A met accent aigu",
	Acirc:"hoofdletter A met accent circonflexe",
	Atilde:"hoofdletter A met tilde",
	Auml:"hoofdletter A met trema",
	Aring:"hoofdletter A met corona",
	AElig:"hoofletter AE-ligatuur",
	Ccedil:"hoofdletter C met cedille",
	Egrave:"hoofdletter E met accent grave",
	Eacute:"hoofdletter E met accent aigu",
	Ecirc:"hoofdletter E met accent circonflexe",
	Euml:"hoofdletter E met trema",
	Igrave:"hoofdletter I met accent grave",
	Iacute:"hoofdletter I met accent aigu",
	Icirc:"hoofdletter I met accent circonflexe",
	Iuml:"hoofdletter I met trema",
	ETH:"hoofdletter ETH-ligatuur",
	Ntilde:"hoofdletter N met tilde",
	Ograve:"hoofdletter O met accent grave",
	Oacute:"hoofdletter O met accent aigu",
	Ocirc:"hoofdletter O met accent circonflexe",
	Otilde:"hoofdletter O met tilde",
	Ouml:"hoofdletter O met trema",
	times:"maal",
	Oslash:"hoofdletter O doorgestreept",
	Ugrave:"hoofdletter U met accent grave",
	Uacute:"hoofdletter U met accent aigu",
	Ucirc:"hoofdletter U met accent circonflexe",
	Uuml:"hoofdletter U met trema",
	Yacute:"hoofdletter Y met accent aigu",
	THORN:"hoofdletter THORN",
	szlig:"sz-ligatuur\nringel S",
	agrave:"kleine letter a met accent grave",
	aacute:"kleine letter a met accent aigu",
	acirc:"kleine letter a met accent circonflexe",
	atilde:"kleine letter a met tilde",
	auml:"kleine letter a met trema",
	aring:"kleine letter a met corona",
	aelig:"kleine letter ae-ligatuur",
	ccedil:"kleine letter c met cedille",
	egrave:"kleine letter e met accent grave",
	eacute:"kleine letter e met accent aigu",
	ecirc:"kleine letter e met accent circonflexe",
	euml:"kleine letter e met trema",
	igrave:"kleine letter i met accent grave",
	iacute:"kleine letter i met accent aigu",
	icirc:"kleine letter i met accent circonflexe",
	iuml:"kleine letter i met trema",
	eth:"kleine letter eth",
	ntilde:"kleine letter n met tilde",
	ograve:"kleine letter o met accent grave",
	oacute:"kleine letter o met accent aigu",
	ocirc:"kleine letter o met accent circonflexe",
	otilde:"kleine letter o met tilde",
	ouml:"kleine letter o met trema",
	divide:"deelteken",
	oslash:"kleine letter o doorgestreept",
	ugrave:"kleine letter u met accent grave",
	uacute:"kleine letter u met accent aigu",
	ucirc:"kleine letter u met accent circonflexe",
	uuml:"kleine letter u met trema",
	yacute:"kleine letter y met accent aigu",
	thorn:"kleine letter thorn",
	yuml:"kleine letter y met trema",

// Greek Characters and Symbols
	fnof:"cursieve f\nfunctie\ngulden",
	Alpha:"Griekse hoofdletter alpha",
	Beta:"Griekse hoofdletter b?ta",
	Gamma:"Griekse hoofdletter gamma",
	Delta:"Griekse hoofdletter delta",
	Epsilon:"Griekse hoofdletter epsilon",
	Zeta:"Griekse hoofdletter z?ta",
	Eta:"Griekse hoofdletter ?ta",
	Theta:"Griekse hoofdletter th?ta",
	Iota:"Griekse hoofdletter iota",
	Kappa:"Griekse hoofdletter kappa",
	Lambda:"Griekse hoofdletter lambda",
	Mu:"Griekse hoofdletter mu",
	Nu:"Griekse hoofdletter nu",
	Xi:"Griekse hoofdletter xi",
	Omicron:"Griekse hoofdletter omicron",
	Pi:"Griekse hoofdletter pi",
	Rho:"Griekse hoofdletter rho",
	Sigma:"Griekse hoofdletter sigma",
	Tau:"Griekse hoofdletter tau",
	Upsilon:"Griekse hoofdletter ypsilon",
	Phi:"Griekse hoofdletter phi",
	Chi:"Griekse hoofdletter chi",
	Psi:"Griekse hoofdletter psi",
	Omega:"Griekse hoofdletter omega",
	alpha:"Griekse kleine letter alpha",
	beta:"Griekse kleine letter b?ta",
	gamma:"Griekse kleine letter gamma",
	delta:"Griekse kleine letter delta",
	epsilon:"Griekse kleine letter epsilon",
	zeta:"Griekse kleine letter z?ta",
	eta:"Griekse kleine letter ?ta",
	theta:"Griekse kleine letter th?ta",
	iota:"Griekse kleine letter iota",
	kappa:"Griekse kleine letter kappa",
	lambda:"Griekse kleine letter lambda",
	mu:"Griekse kleine letter mu",
	nu:"Griekse kleine letter nu",
	xi:"Griekse kleine letter xi",
	omicron:"Griekse kleine letter omicron",
	pi:"Griekse kleine letter pi",
	rho:"Griekse kleine letter rho",
	sigmaf:"Griekse kleine letter sigma (einde woord)",
	sigma:"Griekse kleine letter sigma",
	tau:"Griekse kleine letter tau",
	upsilon:"Griekse kleine letter ypsilon",
	phi:"Griekse kleine letter phi",
	chi:"Griekse kleine letter chi",
	psi:"Griekse kleine letter psi",
	omega:"Griekse kleine letter omega",
	thetasym:"Griekse kleine letter th?ta (2e vorm)",
	upsih:"Griekse letter ypsilon met haakje",
	piv:"Griekse letter pi (2e vorm)",
	bull:"opsommingsteken\naandachtspunt",
	hellip:"beletselteken\weglatingsteken",
	prime:"accent\nminuut\nvoet",
	Prime:"dubbel accent\nseconde\ninch",
	oline:"hoge lijn\nbovenstreepje",
	frasl:"deelteken/schuine streep",
	weierp:"Gotische P",
	image:"Gotische I\nimaginair deel",
	real:"Gotische R\nre?el deel",
	trade:"handelsmerk",
	alefsym:"alef",
	larr:"pijl naar links",
	uarr:"pijl omhoog",
	rarr:"pijl naar rechts",
	darr:"pijl omlaag",
	harr:"pijl links/rechts",
	crarr:"pijl omlaag en naar links\nterugloopteken",
	lArr:"dubbele pijl naar links",
	uArr:"dubbele pijl omhoog",
	rArr:"dubbele pijl naar rechts",
	dArr:"dubbele pijl omlaag",
	hArr:"dubbele pijl links/rechts",
	forall:"voor alle geldt",
	part:"parti?le differentiaal",
	exist:"er bestaat",
	empty:"lege verzameling\nnulverzameling\ndiameter",
	nabla:"nabla\ngradi?nt",
	isin:"is element van",
	notin:"is geen element van",
	ni:"heeft als element",
	prod:"product\nherhaald vermenigvuldigen",
	sum:"som\nherhaald optellen",
	minus:"min",
	lowast:"asterisk operator",
	radic:"wortel\nvierkantswortel",
	prop:"evenredig met",
	infin:"oneindig",
	ang:"hoek",
	and:"logische en",
	or:"logische of",
	cap:"snijpunt",
	cup:"vereniging","int":"integraal",
	there4:"hieruit volgt",
	sim:"tilde operator\nvarieert met\nvergelijkbaar met",
	cong:"congruent aan",
	asymp:"ongeveer gelijk aan",
	ne:"niet gelijk aan",
	equiv:"identiek met",
	le:"kleiner dan of gelijk aan",
	ge:"groter dan of gelijk aan",
	sub:"is deelverzameling van",
	sup:"bevat deelverzameling",
	nsub:"is geen deelverzameling van",
	sube:"is deelverzameling van of is gelijk aan",
	supe:"bevat deelverzameling of is gelijk aan",
	oplus:"plus in cirkel\ndirecte som",
	otimes:"maal in cirkel\nvectorproduct",
	perp:"loodrecht\northogonaal met",
	sdot:"punt operator",
	lceil:"linker afrondingshaakje (naar boven)",
	rceil:"rechter afrondingshaakje (naar boven)",
	lfloor:"linker afrondingshaakje (naar beneden)",
	rfloor:"linker afrondingshaakje (naar beneden)",
	lang:"punthaak openen",
	rang:"punthaak sluiten",
	loz:"ruit",
	spades:"schoppen",
	clubs:"klaveren",
	hearts:"harten",
	diams:"ruiten",
	OElig:"hoofdletter OE-ligatuur",
	oelig:"kleine letter oe-ligatuur",
	Scaron:"hoofdletter S met caron",
	scaron:"kleine letter s met caron",
	Yuml:"hoofdletter Y met trema",
	circ:"accent circonflexe",
	tilde:"kleine tilde",
	ensp:"smalle spatie",
	emsp:"brede spatie",
	thinsp:"extra smalle spatie",
	zwnj:"verdelingsteken met breedte nul",
	zwj:"verbindingsteken met breedte nul",
	lrm:"van links naar rechts-markering",
	rlm:"van rechts naar links-markering",
	ndash:"divisie (kort steepje)",
	mdash:"divisie (lang steepje)",
	lsquo:"linker enkel aanhalingsteken",
	rsquo:"rechter enkel aanhalingsteken",
	sbquo:"apostrof (vorm = 9)",
	ldquo:"linker dubbele aanhalingsteken",
	rdquo:"rechter dubbele aanhalingsteken",
	bdquo:"dubbele apostrof (vorm = 9)",
	dagger:"obelisk",
	Dagger:"dubbele obelisk",
	permil:"promille",
	lsaquo:"enkele linkswijzend aanhalingsteken",
	rsaquo:"enkele rechtswijzend aanhalingsteken",
	euro:"euro"
})

//end v1.x content
);
