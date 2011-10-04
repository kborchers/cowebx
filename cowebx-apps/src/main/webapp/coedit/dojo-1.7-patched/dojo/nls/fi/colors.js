/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

define(
//begin v1.x content
({
// local representation of all CSS3 named colors, companion to dojo.colors.  To be used where descriptive information
// is required for each color, such as a palette widget, and not for specifying color programatically.

//Note: due to the SVG 1.0 spec additions, some of these are alternate spellings for the same color e.g. gray vs. gray.
//TODO: should we be using unique rgb values as keys instead and avoid these duplicates, or rely on the caller to do the reverse mapping?
aliceblue: "vaaleanharmaansininen",
antiquewhite: "antiikinvalkoinen",
aqua: "sinivihre?",
aquamarine: "vedenvihre?",
azure: "taivaansininen",
beige: "vaaleanruskea",
bisque: "vaaleanruskea",
black: "musta",
blanchedalmond: "kuorittu manteli",
blue: "sininen",
blueviolet: "sinivioletti",
brown: "ruskea",
burlywood: "puunruskea",
cadetblue: "meren vihre?",
chartreuse: "kellanvihre?",
chocolate: "suklaanruskea",
coral: "koralli",
cornflowerblue: "syv?nsininen",
cornsilk: "maissinkeltainen",
crimson: "karmiininpunainen",
cyan: "syaani",
darkblue: "tummansininen",
darkcyan: "tumma turkoosi",
darkgoldenrod: "tumma kultapiisku",
darkgray: "tummanharmaa",
darkgreen: "tummanvihre?",
darkgrey: "tummanharmaa", // same as darkgray
darkkhaki: "tumma khaki",
darkmagenta: "tumma magenta",
darkolivegreen: "tummanoliivinvihre?",
darkorange: "tummanoranssi",
darkorchid: "tumma orkidea",
darkred: "tummanpunainen",
darksalmon: "tumma lohenpunainen",
darkseagreen: "tumma merenvihre?",
darkslateblue: "tumma siniharmaa",
darkslategray: "tummanharmaa",
darkslategrey: "tummanharmaa", // same as darkslategray
darkturquoise: "tumma turkoosi",
darkviolet: "tummanvioletti",
deeppink: "syv? vaaleanpunainen",
deepskyblue: "tumma taivaansininen",
dimgray: "himme?nharmaa",
dimgrey: "himme?nharmaa", // same as dimgray
dodgerblue: "Dodger-sininen",
firebrick: "poltetun tiilen punainen",
floralwhite: "kukanvalkoinen",
forestgreen: "mets?nvihre?",
fuchsia: "purppura",
gainsboro: "gainsboro",
ghostwhite: "lakananvalkoinen",
gold: "kulta",
goldenrod: "kullanruskea",
gray: "harmaa",
green: "vihre?",
greenyellow: "vihre?nkeltainen",
grey: "harmaa", // same as gray
honeydew: "hunajameloninvihre?",
hotpink: "pinkki",
indianred: "kirkkaanpunainen",
indigo: "indigo",
ivory: "norsunluu",
khaki: "khaki",
lavender: "laventeli",
lavenderblush: "laventelinpunainen",
lawngreen: "ruohonvihre?",
lemonchiffon: "sitruunankeltainen",
lightblue: "vaaleansininen",
lightcoral: "vaalea koralli",
lightcyan: "vaalea syaani",
lightgoldenrodyellow: "vaalea kultapiiskunkeltainen",
lightgray: "vaaleanharmaa",
lightgreen: "vaaleanvihre?",
lightgrey: "vaaleanharmaa", // same as lightgray
lightpink: "vaaleanpunainen",
lightsalmon: "vaalea lohenpunainen",
lightseagreen: "vaalea merenvihre?",
lightskyblue: "vaalea taivaansininen",
lightslategray: "vaaleanharmaa",
lightslategrey: "vaaleanharmaa", // same as lightslategray
lightsteelblue: "vaalea ter?ksensininen",
lightyellow: "vaaleankeltainen",
lime: "vaaleanvihre?",
limegreen: "limetinvihre?",
linen: "pellavanvaalea",
magenta: "magenta",
maroon: "kastanjanruskea",
mediumaquamarine: "keskivaalea vedenvihre?",
mediumblue: "keskisininen",
mediumorchid: "keskivaalea orkidea",
mediumpurple: "keskivaalea violetti",
mediumseagreen: "keskivaalea merenvihre?",
mediumslateblue: "keskivaalea siniharmaa",
mediumspringgreen: "keskivaalea kev??nvihre?",
mediumturquoise: "keskivaalea turkoosi",
mediumvioletred: "keskivaalea lila",
midnightblue: "y?nsininen",
mintcream: "minttukreemi",
mistyrose: "utuinen ruusu",
moccasin: "nahanruskea",
navajowhite: "navajonvalkoinen",
navy: "laivastonsininen",
oldlace: "vanha pitsi",
olive: "oliivinvihre?",
olivedrab: "oliivinruskea",
orange: "oranssi",
orangered: "oranssinpunainen",
orchid: "orkidea",
palegoldenrod: "haalea kultapiisku",
palegreen: "haalea vihre?",
paleturquoise: "haalea turkoosi",
palevioletred: "haalea lila",
papayawhip: "papaijavaahto",
peachpuff: "persikka",
peru: "peru",
pink: "vaaleanpunainen",
plum: "luumunpunainen",
powderblue: "harmaansininen",
purple: "violetti",
red: "punainen",
rosybrown: "punertavanruskea",
royalblue: "syv?nsininen",
saddlebrown: "satulanruskea",
salmon: "lohenpunainen",
sandybrown: "hiekanruskea",
seagreen: "merenvihre?",
seashell: "simpukankuori",
sienna: "siena",
silver: "hopea",
skyblue: "taivaansininen",
slateblue: "savensininen",
slategray: "savenharmaa",
slategrey: "savenharmaa", // same as slategray
snow: "lumivalkoinen",
springgreen: "kev??nvihre?",
steelblue: "ter?ksensininen",
tan: "kellanruskea",
teal: "sinivihre?",
thistle: "ohdake",
tomato: "tomaatinpunainen",
turquoise: "turkoosi",
violet: "violetti",
wheat: "vehn?nkeltainen",
white: "valkoinen",
whitesmoke: "savunvalkea",
yellow: "keltainen",
yellowgreen: "kellanvihre?"
})
//end v1.x content
);
