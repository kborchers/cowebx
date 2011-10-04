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
aliceblue: "modrav?",
antiquewhite: "kr?mov? b?l?",
aqua: "azurov?",
aquamarine: "akvamar?nov?",
azure: "bled? azurov?",
beige: "bled? b??ov?",
bisque: "bled? oran?ov?",
black: "?ern?",
blanchedalmond: "mandlov?",
blue: "modr?",
blueviolet: "modrofialov?",
brown: "?ervenohn?d?",
burlywood: "kr?mov?",
cadetblue: "?edomodr?",
chartreuse: "chartreuska",
chocolate: "hn?dob??ov?",
coral: "kor?lov? ?erven?",
cornflowerblue: "chrpov? modr?",
cornsilk: "re?n?",
crimson: "karm?nov?",
cyan: "azurov?",
darkblue: "tmav? modr?",
darkcyan: "tmav? azurov?",
darkgoldenrod: "tmav? b??ov?",
darkgray: "tmav? ?ed?",
darkgreen: "tmav? zelen?",
darkgrey: "tmav? ?ed?", // same as darkgray
darkkhaki: "p?skov? hn?d?",
darkmagenta: "tmav? purpurov?",
darkolivegreen: "tmav? olivov?",
darkorange: "tmav? oran?ov?",
darkorchid: "tmav? orchidejov?",
darkred: "tmav? ?erven?",
darksalmon: "tmav? lososov?",
darkseagreen: "tmav? mo?sk? zelen?",
darkslateblue: "tmav? b?idlicov? modr?",
darkslategray: "tmav? b?idlicov? ?ed?",
darkslategrey: "tmav? b?idlicov? ?ed?", // same as darkslategray
darkturquoise: "tmav? tyrkysov?",
darkviolet: "tmav? fialov?",
deeppink: "syt? r??ov?",
deepskyblue: "syt? nebesk? modr?",
dimgray: "kou?ov? ?ed?",
dimgrey: "kou?ov? ?ed?", // same as dimgray
dodgerblue: "jasn? modr?",
firebrick: "cihlov?",
floralwhite: "kv?tinov? b?l?",
forestgreen: "lesn? zelen?",
fuchsia: "fuchsiov?",
gainsboro: "bled? ?ed?",
ghostwhite: "modrav? b?l?",
gold: "zlat?",
goldenrod: "b??ov?",
gray: "?ed?",
green: "zelen?",
greenyellow: "zeleno?lut?",
grey: "?ed?", // same as gray
honeydew: "nazelenal?",
hotpink: "jasn? r??ov?",
indianred: "indi?nsk? ?erven?",
indigo: "indigov? modr?",
ivory: "slonovinov?",
khaki: "p?skov?",
lavender: "levandulov?",
lavenderblush: "levandulov? r??ov?",
lawngreen: "jasn? zelen?",
lemonchiffon: "sv?tle citr?nov?",
lightblue: "sv?tle modr?",
lightcoral: "sv?tle kor?lov?",
lightcyan: "sv?tle azurov?",
lightgoldenrodyellow: "sv?tle ?lut?",
lightgray: "sv?tle ?ed?",
lightgreen: "sv?tle zelen?",
lightgrey: "sv?tle ?ed?", // same as lightgray
lightpink: "sv?tle r??ov?",
lightsalmon: "sv?tle lososov?",
lightseagreen: "sv?tl? mo?sk? zelen?",
lightskyblue: "sv?tl? nebesk? modr?",
lightslategray: "sv?tl? b?idlicov? ?ed?",
lightslategrey: "sv?tl? b?idlicov? ?ed?", // same as lightslategray
lightsteelblue: "sv?tl? ocelov? modr?",
lightyellow: "bled? ?lut?",
lime: "limetkov?",
limegreen: "limetkov? zelen?",
linen: "bled? ?edob??ov?",
magenta: "purpurov?",
maroon: "ka?tanov?",
mediumaquamarine: "st?edn? akvamar?nov?",
mediumblue: "st?edn? modr?",
mediumorchid: "st?edn? orchidejov?",
mediumpurple: "st?edn? nachov?",
mediumseagreen: "st?edn? mo?sk? zelen?",
mediumslateblue: "st?edn? b?idlicov? modr?",
mediumspringgreen: "st?edn? jarn? zelen?",
mediumturquoise: "st?edn? tyrkysov?",
mediumvioletred: "st?edn? fialovo?erven?",
midnightblue: "temn? modr?",
mintcream: "mentolov?",
mistyrose: "r??ovob?l?",
moccasin: "bled? kr?mov?",
navajowhite: "sv?tle kr?mov?",
navy: "n?mo?nick? modr?",
oldlace: "sv?tle b??ov?",
olive: "olivov?",
olivedrab: "khaki",
orange: "oran?ov?",
orangered: "oran?ovo?erven?",
orchid: "orchidejov?",
palegoldenrod: "bled? p?skov?",
palegreen: "bled? zelen?",
paleturquoise: "bled? tyrkysov?",
palevioletred: "bled? fialovo?erven?",
papayawhip: "pap?jov?",
peachpuff: "broskvov?",
peru: "karamelov?",
pink: "r??ov?",
plum: "?vestkov?",
powderblue: "bled? modr?",
purple: "nachov?",
red: "?erven?",
rosybrown: "r??ovohn?d?",
royalblue: "kr?lovsk? modr?",
saddlebrown: "hn?d?",
salmon: "lososov?",
sandybrown: "oran?ovohn?d?",
seagreen: "mo?sk? zelen?",
seashell: "lasturov?",
sienna: "siena",
silver: "st??brn?",
skyblue: "nebesk? modr?",
slateblue: "b?idlicov? modr?",
slategray: "b?idlicov? ?ed?",
slategrey: "b?idlicov? ?ed?", // same as slategray
snow: "sn?hob?l?",
springgreen: "jarn? zelen?",
steelblue: "ocelov? modr?",
tan: "?edob??ov?",
teal: "?edozelen?",
thistle: "bodl?kov?",
tomato: "tomatov?",
turquoise: "tyrkysov?",
violet: "fialov?",
wheat: "zlatohn?d?",
white: "b?l?",
whitesmoke: "kou?ov? b?l?",
yellow: "?lut?",
yellowgreen: "?lutozelen?"
})
//end v1.x content
);