<?php
// countries array
$countries_list = array(
	'af' =>	'afghanistan',
	'al' =>	'albania',
	'dz' =>	'algeria',
	'as' =>	'american samoa',
	'ad' =>	'andorra',
	'ao' =>	'angola',
	'ai' =>	'anguilla',
	'aq' =>	'antarctica',
	'ag' =>	'antigua',
	'ar' =>	'argentina',
	'am' =>	'armenia',
	'aw' =>	'aruba',
	'au' =>	'australia',
	'at' =>	'austria',
	'az' =>	'azerbaijan',
	'bs' =>	'bahamas',
	'bh' =>	'bahrain',
	'bd' =>	'bangladesh',
	'bb' =>	'barbados',
	'by' =>	'belarus',
	'be' =>	'belgium',
	'bz' =>	'belize',
	'bj' =>	'benin',
	'bm' =>	'bermuda',
	'bt' =>	'bhutan',
	'bo' =>	'bolivia',
	'ba' =>	'bosnia',
	'bw' =>	'botswana',
	'br' =>	'brazil',
	'io' =>	'indian ocean',
	'bn' =>	'brunei darussalam',
	'bg' =>	'bulgaria',
	'bf' =>	'burkina faso',
	'bi' =>	'burundi',
	'kh' =>	'cambodia',
	'cm' =>	'cameroon',
	'ca' =>	'canada',
	'cv' =>	'cape verde',
	'ky' =>	'cayman islands',
	'cf' =>	'african republic',
	'td' =>	'chad',
	'cl' =>	'chile',
	'cn' =>	'china',
	'cx' => 'christmas island',
	'co' =>	'colombia',
	'km' =>	'comoros',
	'cg' =>	'congo',
	'ck' =>	'cook islands',
	'cr' =>	'costa rica',
	'ci' =>	'cote divoire',
	'hr' =>	'croatia',
	'cu' =>	'cuba',
	'cy' =>	'cyprus',
	'cz' =>	'czech republic',
	'dk' =>	'denmark',
	'dj' =>	'djibouti',
	'do' =>	'dominican republic',
	'dm' =>	'dominica',
	'tp' =>	'east timor',
	'ec' =>	'ecuador',
	'eg' =>	'egypt',
	'sv' =>	'el salvador',
	'gq' =>	'equatorial guinea',
	'ee' =>	'estonia',
	'et' =>	'ethiopia',
	'fk' => 'falklans',
	'fo' =>	'faroe islands',
	'fj' =>	'fiji',
	'fi' =>	'finland',
	'fr' =>	'france',
	'gf' =>	'french guiana',
	'pf' =>	'french polynesia',
	'ga' =>	'gabon',
	'gm' =>	'gambia',
	'ge' =>	'georgia',
	'de' =>	'germany',
	'gh' =>	'ghana',
	'gi' =>	'gibraltar',
	'gr' =>	'greece',
	'gl' =>	'greenland',
	'gd' =>	'grenada',
	'gp' =>	'guadeloupe',
	'gu' =>	'guam',
	'gt' =>	'guatemala',
	'gw' =>	'guinea-bissau',
	'gn' =>	'guinea',
	'gy' =>	'guyana',
	'ht' =>	'haiti',
	'hn' =>	'honduras',
	'hk' =>	'hong kong',
	'hu' =>	'hungary',
	'is' =>	'iceland',
	'in' =>	'india',
	'id' =>	'indonesia',
	'ir' =>	'iran',
	'iq' =>	'iraq',
	'ie' =>	'ireland',
	'il' =>	'israel',
	'it' =>	'italy',
	'jm' =>	'jamaica',
	'jp' =>	'japan',
	'jo' =>	'jordan',
	'kz' =>	'kazakhstan',
	'ke' =>	'kenya',
	'ki' =>	'kiribati',
	'kr' =>	'korea',
	'kw' =>	'kuwait',
	'kg' =>	'kyrgyzstan',
	'la' =>	'lao',
	'lv' =>	'latvia',
	'lb' =>	'lebanon',
	'ls' =>	'lesotho',
	'lr' =>	'liberia',
	'ly' =>	'libya',
	'li' =>	'liechtenstein',
	'lt' =>	'lithuania',
	'lu' =>	'luxembourg',
	'mo' =>	'macau',
	'mk' =>	'macedonia',
	'mg' =>	'madagascar',
	'mw' =>	'malawi',
	'my' =>	'malaysia',
	'mv' =>	'maldives',
	'ml' =>	'mali',
	'mt' =>	'malta',
	'mh' =>	'marshall islands',
	'mq' => 'martinique', 
	'mr' =>	'mauritania',
	'mu' =>	'mauritius',
	'mx' =>	'mexico',
	'fm' =>	'micronesia',
	'md' =>	'moldova',
	'mc' =>	'monaco',
	'mn' =>	'mongolia',
	'ms' =>	'montserrat',
	'ma' =>	'morocco',
	'mz' =>	'mozambique',
	'mm' =>	'myanmar',
	'na' =>	'namibia',
	'nr' =>	'nauru',
	'np' =>	'nepal',
	'an' =>	'netherlands antilles',
	'nl' =>	'netherlands',
	'nc' =>	'new caledonia',
	'nz' =>	'new zealand',
	'ni' =>	'nicaragua',
	'ng' =>	'nigeria',
	'ne' =>	'niger',
	'no' =>	'norway',
	'om' =>	'oman',
	'pk' =>	'pakistan',
	'pw' =>	'palau',
	'ps' => 'palestine',
	'pa' =>	'panama',
	'pg' =>	'papua new guinea',
	'py' =>	'paraguay',
	'pe' =>	'peru',
	'ph' =>	'philippines',
	'pl' =>	'poland',
	'pt' =>	'portugal',
	'pr' =>	'puerto rico',
	'qa' =>	'qatar',
	're' =>	'reunion',
	'ro' =>	'romania',
	'ru' =>	'russian federation',
	'rw' =>	'rwanda',
	'sh' =>	'saint helena',
	'kn' =>	'saint kitts and nevis',
	'lc' =>	'saint lucia',
	'pm' =>	'saint pierre',
	'vc' =>	'saint vincent',
	'ws' =>	'samoa',
	'sm' =>	'san marino',
	'st' =>	'sao tome and principe',
	'sa' =>	'saudi arabia',
	'sn' =>	'senegal',
	'sc' =>	'seychelles',
	'sl' =>	'sierra leone',
	'sg' =>	'singapore',
	'sk' =>	'slovakia',
	'si' =>	'slovenia',
	'sb' =>	'solomon islands',
	'so' =>	'somalia',
	'za' =>	'south africa',
	'gs' =>	'south georgia',
	'es' =>	'spain',
	'lk' =>	'sri lanka',
	'sd' =>	'sudan',
	'sr' =>	'suriname',
	'sj' =>	'svalbard and jan mayen',
	'sz' =>	'swaziland',
	'se' =>	'sweden',
	'ch' =>	'switzerland',
	'sy' =>	'syrian arab republic',
	'tw' =>	'taiwan',
	'tj' =>	'tajikistan',
	'tz' =>	'tanzania',
	'th' =>	'thailand',
	'tg' =>	'togo',
	'to' =>	'tonga',
	'tt' =>	'trinidad',
	'tn' =>	'tunisia',
	'tr' =>	'turkey',
	'tm' =>	'turkmenistan',
	'tc' =>	'turks and caicos islands',
	'tv' =>	'tuvalu',
	'ug' =>	'uganda',
	'ua' =>	'ukraine',
	'ae' =>	'united arab emirates',
	'gb' =>	'united kingdom',
	'us' =>	'united states',
	'um' =>	'united states minor outlying islands',
	'uy' =>	'uruguay',
	'uz' =>	'uzbekistan',
	'vu' =>	'vanuatu',
	've' =>	'venezuela',
	'vn' =>	'viet nam',
	'vg' =>	'virgin islands, brit',
	'vi' =>	'virgin islands, US',
	'wi' =>	'western sahara',
	'ye' =>	'yemen',
	'yu' =>	'yugoslavia',
	'cd' =>	'zaire',
	'zm' =>	'zambia',
	'zw' =>	'zimbabwe'
);

$us_state_list = array(
	"AL" => "Alabama",	
	"AK" => "Alaska",	
	"AZ" => "Arizona",	
	"AR" => "Arkansas",	
	"CA" => "California",	
	"CO" => "Colorado",	
	"CT" => "Connecticut",	
	"DE" => "Delaware",	
	"DC" => "District Of Columbia",	
	"FL" => "Florida",	
	"GA" => "Georgia",	
	"HI" => "Hawaii",	
	"ID" => "Idaho",	
	"IL" => "Illinois",	
	"IN" => "Indiana",	
	"IA" => "Iowa",	
	"KS" => "Kansas",	
	"KY" => "Kentucky",	
	"LA" => "Louisiana",	
	"ME" => "Maine",	
	"MD" => "Maryland",	
	"MA" => "Massachusetts",	
	"MI" => "Michigan",	
	"MN" => "Minnesota",	
	"MS" => "Mississippi",	
	"MO" => "Missouri",	
	"MT" => "Montana",
	"NE" => "Nebraska",
	"NV" => "Nevada",
	"NH" => "New Hampshire",
	"NJ" => "New Jersey",
	"NM" => "New Mexico",
	"NY" => "New York",
	"NC" => "North Carolina",
	"ND" => "North Dakota",
	"OH" => "Ohio",	
	"OK" => "Oklahoma",	
	"OR" => "Oregon",	
	"PA" => "Pennsylvania",	
	"PR" => "Puerto Rico",	
	"RI" => "Rhode Island",	
	"SC" => "South Carolina",	
	"SD" => "South Dakota",
	"TN" => "Tennessee",	
	"TX" => "Texas",	
	"UT" => "Utah",	
	"VT" => "Vermont",	
	"VA" => "Virginia",	
	"VI" => "US Virgin Islands",	
	"WA" => "Washington",	
	"WV" => "West Virginia",	
	"WI" => "Wisconsin",	
	"WY" => "Wyoming"
);

$ca_state_list = array (
	"AB" => "Alberta",
	"BC" => "British Columbia",	
	"MB" => "Manitoba",	
	"NB" => "New Brunswick",	
	"NF" => "Newfoundland",	
	"NS" => "Nova Scotia",	
	"NT" => "Northwest Territories",	
	"ON" => "Ontario",	
	"PE" => "Prince Edward Island",	
	"QC" => "Quebec",
	"SK" => "Saskatchewan",	
	"YU" => "Yukon",
	"NU" => "Nunavut"
);

$au_state_list = array (
	"ACT" => "Australian Capital Territory",	
	"NT" => "Northern Territory",	
	"NSW" => "New South Wales",	
	"QLD" => "Queensland",	
	"SA" => "South Australia",	
	"TAS" => "Tasmania",
	"VIC" => "Victoria",	
	"WA" => "Western Australia"
);
?>
