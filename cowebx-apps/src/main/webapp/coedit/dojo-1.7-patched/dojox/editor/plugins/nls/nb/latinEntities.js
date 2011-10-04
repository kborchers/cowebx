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
	iexcl:"invertert utropstegn",
	cent:"cent-tegn",
	pound:"pund-tegn",
	curren:"valutategn",
	yen:"yen-tegn\nyuan-tegn",
	brvbar:"brutt strek\nbrutt loddrett strek",
	sect:"seksjonstegn",
	uml:"dieresis",
	copy:"opphavsrettstegn",
	ordf:"feminin ordenstallsindikator",
	laquo:"venstre doble anf?rselstegn",
	not:"ikke-tegn",
	shy:"myk bindestrek",
	reg:"registrert-tegn\nregistrert varemerke-tegn",
	macr:"makron\nmellomromsmakron\noverstrek\nAPL-overstrek",
	deg:"gradtegn",
	plusmn:"pluss-minus-tegn\npluss-eller-minus-tegn",
	sup2:"hevet skrift to\nhevet skrift tall to\nkvadrat",
	sup3:"hevet skrift tre\nhevet skrift tall tre\nkubikk",
	acute:"akuttegn\nmellomromsakuttegn",
	micro:"mikro-tegn",
	para:"avsnittstegn",
	middot:"midtprikk\nGeorgisk komma\ngresk midtprikk",
	cedil:"cedille\nmellomromscedille",
	sup1:"hevet skrift en\nhevet skrift tall en",
	ordm:"maskulin ordenstallsindikator",
	raquo:"h?yre doble anf?rselstegn",
	frac14:"br?k en kvart",
	frac12:"br?k en halv",
	frac34:"br?k tre kvart",
	iquest:"invertert sp?rsm?lstegn\nsnudd sp?rsm?lstegn",
	Agrave:"Stor bokstav A med aksent grave\nStor bokstav A grave",
	Aacute:"Stor bokstav A med aigu",
	Acirc:"Stor bokstav A med circumfleks",
	Atilde:"Stor bokstav A med tilde",
	Auml:"Stor bokstav A med dieresis",
	Aring:"Stor bokstav A med ring\nStor bokstav A ring",
	AElig:"Stor bokstav AE\nStor bokstav sammenbundet AE",
	Ccedil:"Stor bokstav C med cedille",
	Egrave:"Stor bokstav E med grave",
	Eacute:"Stor bokstav E med aigu",
	Ecirc:"Stor bokstav E med circumfleks",
	Euml:"Stor bokstav E med diaeresis",
	Igrave:"Stor bokstav I med grave",
	Iacute:"Stor bokstav I med aigu",
	Icirc:"Stor bokstav I med circumflex",
	Iuml:"Stor bokstav I med dieresis",
	ETH:"Stor bokstav ETH",
	Ntilde:"Stor bokstav N med tilde",
	Ograve:"Stor bokstav O med grave",
	Oacute:"Stor bokstav O med aigu",
	Ocirc:"Stor bokstav O med circumfleks",
	Otilde:"Stor bokstav O med tilde",
	Ouml:"Stor bokstav O med dieresis",
	times:"multiplikasjonstegn",
	Oslash:"Stor bokstav O med strek\nStor bokstav O skr?strek",
	Ugrave:"Stor bokstav U med grave",
	Uacute:"Stor bokstav U med aigu",
	Ucirc:"Stor bokstav U med circumflex",
	Uuml:"Stor bokstav U med dieresis",
	Yacute:"Stor bokstav Y med aigu",
	THORN:"Stor bokstav THORN",
	szlig:"liten bokstav dobbelt-s\neszett",
	agrave:"Liten bokstav a med aksent grave\nLiten bokstav a grave",
	aacute:"Liten bokstav a med aigu",
	acirc:"Liten bokstav a med circumfleks",
	atilde:"Liten bokstav a med tilde",
	auml:"Liten bokstav a med dieresis",
	aring:"Liten bokstav a med aksent grave\nLiten bokstav a ring",
	aelig:"Liten bokstav ae\nLiten bokstav sammenbundet AE",
	ccedil:"Liten bokstav c med cedille",
	egrave:"Liten bokstav e med grave",
	eacute:"Liten bokstav e med aigu",
	ecirc:"Liten bokstav e med circumflex",
	euml:"Liten bokstav e med dieresis",
	igrave:"Liten bokstav i med grave",
	iacute:"Liten bokstav i med aigu",
	icirc:"Liten bokstav i med circumflex",
	iuml:"Liten bokstav i med dieresis",
	eth:"Liten bokstav eth",
	ntilde:"Liten bokstav n med tilde",
	ograve:"Liten bokstav o med grave",
	oacute:"Liten bokstav o med aigu",
	ocirc:"Liten bokstav o med circumflex",
	otilde:"Liten bokstav o med tilde",
	ouml:"Liten bokstav o med dieresis",
	divide:"divisjonstegn",
	oslash:"Liten bokstav o med strek\nLiten bokstav o skr?strek",
	ugrave:"Liten bokstav u med grave",
	uacute:"Liten bokstav u med aigu",
	ucirc:"Liten bokstav u med circumfleks",
	uuml:"Liten bokstav u med dieresis",
	yacute:"Liten bokstav y med aigu",
	thorn:"Liten bokstav thorn",
	yuml:"Liten bokstav y med dieresis",

// Greek Characters and Symbols
	fnof:"Liten bokstav f med krok\nfunksjon\nflorin",
	Alpha:"Gresk stor bokstav alfa",
	Beta:"Gresk stor bokstav beta",
	Gamma:"Gresk stor bokstav gamma",
	Delta:"Gresk stor bokstav delta",
	Epsilon:"Gresk stor bokstav epsilon",
	Zeta:"Gresk stor bokstav zeta",
	Eta:"Gresk stor bokstav eta",
	Theta:"Gresk stor bokstav theta",
	Iota:"Gresk stor bokstav iota",
	Kappa:"Gresk stor bokstav kappa",
	Lambda:"Gresk stor bokstav lambda",
	Mu:"Gresk stor bokstav my",
	Nu:"Gresk stor bokstav ny",
	Xi:"Gresk stor bokstav ksi",
	Omicron:"Gresk stor bokstav omikron",
	Pi:"Gresk stor bokstav pi",
	Rho:"Gresk stor bokstav rho",
	Sigma:"Gresk stor bokstav sigma",
	Tau:"Gresk stor bokstav tau",
	Upsilon:"Gresk stor bokstav ypsilon",
	Phi:"Gresk stor bokstav phi",
	Chi:"Gresk stor bokstav khi",
	Psi:"Gresk stor bokstav psi",
	Omega:"Gresk stor bokstav omega",
	alpha:"Gresk liten bokstav alfa",
	beta:"Gresk liten bokstav beta",
	gamma:"Gresk liten bokstav gamma",
	delta:"Gresk liten bokstav delta",
	epsilon:"Gresk liten bokstav epsilon",
	zeta:"Gresk liten bokstav zeta",
	eta:"Gresk liten bokstav eta",
	theta:"Gresk liten bokstav theta",
	iota:"Gresk liten bokstav iota",
	kappa:"Gresk liten bokstav kappa",
	lambda:"Gresk liten bokstav lambda",
	mu:"Gresk liten bokstav my",
	nu:"Gresk liten bokstav ny",
	xi:"Gresk liten bokstav ksi",
	omicron:"Gresk liten bokstav omikron",
	pi:"Gresk liten bokstav pi",
	rho:"Gresk liten bokstav rho",
	sigmaf:"Gresk liten bokstav sluttform sigma",
	sigma:"Gresk liten bokstav sigma",
	tau:"Gresk liten bokstav tau",
	upsilon:"Gresk liten bokstav ypsilon",
	phi:"Gresk liten bokstav phi",
	chi:"Gresk liten bokstav khi",
	psi:"Gresk liten bokstav psi",
	omega:"Gresk liten bokstav omega",
	thetasym:"Gresk liten bokstav theta-symbol",
	upsih:"Gresk ypsilon med krok-symbol",
	piv:"Gresk pi-symbol",
	bull:"punkt\nliten svart sirkel",
	hellip:"vannrett ellipse\ntre prikker",
	prime:"prim\nminutter\nfot",
	Prime:"dobbelt prim\nsekunder\ntommer",
	oline:"overstrek\nmellomromsoverstrek",
	frasl:"br?kskr?strek",
	weierp:"script capital P\npower set\nWeierstrass p",
	image:"blackletter capital I\nimaginary part",
	real:"blackletter capital R\nreal part symbol",
	trade:"varemerketegn",
	alefsym:"alef symbol\nfirst transfinite cardinal",
	larr:"venstrepil",
	uarr:"opp-pil",
	rarr:"h?yrepil",
	darr:"nedpil",
	harr:"venstre-h?yre-pil",
	crarr:"nedpil med hj?rne mot venstre\nretur",
	lArr:"dobbeltpil mot venstre",
	uArr:"dobbeltpil oppover",
	rArr:"dobbeltpil mot h?yre",
	dArr:"dobbeltpil nedover",
	hArr:"dobbeltpil venstre-h?yre",
	forall:"for alle",
	part:"partiell differensial",
	exist:"det finnes",
	empty:"tomt sett\nnullsett\ndiameter",
	nabla:"nabla\nbakoverdifferanse",
	isin:"element av",
	notin:"ikke et element av",
	ni:"contains as member",
	prod:"n-?rt produkt\nprodukttegn",
	sum:"n-?r summering",
	minus:"minustegn",
	lowast:"stjerneoperator",
	radic:"kvadratrot\nradikaltegn",
	prop:"proporsjonalt med",
	infin:"uendelighet",
	ang:"vinkel",
	and:"logisk og\nkile",
	or:"logisk eller\nv",
	cap:"snitt\nbue",
	cup:"union\nkopp","int":"integral",
	there4:"derfor",
	sim:"tilde-operator\nvarierer med\nlikner p?",
	cong:"omtrent lik",
	asymp:"nesten lik\nasymptotisk med",
	ne:"ikke lik",
	equiv:"identisk med",
	le:"mindre enn eller lik",
	ge:"st?rre enn eller lik",
	sub:"delsett av",
	sup:"overordnet sett av",
	nsub:"ikke delsett av",
	sube:"delsett av eller lik",
	supe:"overordnet sett av eller lik",
	oplus:"pluss med sirkel\ndirekte sum",
	otimes:"circled times\nvector product",
	perp:"up tack\northogonal to\nperpendicular",
	sdot:"dot operator",
	lceil:"left ceiling\nAPL upstile",
	rceil:"right ceiling",
	lfloor:"left floor\nAPL downstile",
	rfloor:"right floor",
	lang:"left-pointing angle bracket",
	rang:"right-pointing angle bracket",
	loz:"lozenge",
	spades:"black spade suit",
	clubs:"black club suit\nshamrock",
	hearts:"black heart suit\nvalentine",
	diams:"black diamond suit",
	OElig:"Stor bokstav ligatur OE",
	oelig:"Liten bokstav ligatur oe",
	Scaron:"Latin capital letter S with caron",
	scaron:"Latin small letter s with caron",
	Yuml:"Latin capital letter Y with diaeresis",
	circ:"modifier letter circumflex accent",
	tilde:"liten tilde",
	ensp:"en-mellomrom",
	emsp:"em-mellomrom",
	thinsp:"tynt mellomrom",
	zwnj:"zero width non-joiner",
	zwj:"zero width joiner",
	lrm:"left-to-right mark",
	rlm:"right-to-left mark",
	ndash:"en-strek",
	mdash:"em-strek",
	lsquo:"venstre enkelt anf?rselstegn",
	rsquo:"h?yre enkelt anf?rselstegn",
	sbquo:"single low-9 quotation mark",
	ldquo:"venstre dobbelt anf?rselstegn",
	rdquo:"h?yre dobbelt anf?rselstegn",
	bdquo:"double low-9 quotation mark",
	dagger:"dolk",
	Dagger:"dobbelt dolk",
	permil:"per mille sign",
	lsaquo:"single left-pointing angle quotation mark",
	rsaquo:"single right-pointing angle quotation mark",
	euro:"euro-tegn"
})
//end v1.x content
);
