<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'keeper');

/** MySQL database username */
define('DB_USER', 'darriusah');

/** MySQL database password */
define('DB_PASSWORD', 'Starwind1');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'ODe4CR}Y:O?NLuVi(wcN2]1w3Rd0W?0{AR+@FAW&OQ|V%_ >?-2<O1}hg_^s!DK>');
define('SECURE_AUTH_KEY',  'i)^O;9_Go 1bI*)86T&-f%J/. f{fBIEV.`lzliP&CDGZu5^H2HS@1Ptm4!C,{bu');
define('LOGGED_IN_KEY',    'X;!yr9(tY#}xE_;n60ha,j/cxWd4%qErWlXjdI7cy?x0Vt:jO:l<%Wrcs9yR~8bd');
define('NONCE_KEY',        'lT5H*U/g,wy%}3PP_,_&>aZ}BjK%wody-Vib4Cxd<54Z~V7]2{Z[?*du&N$V:3^d');
define('AUTH_SALT',        'h:LQC;!LE{}b;Y3DkjG-ZU1%VUpx|B*Q(k.FXts,n%g<EL2tACmkBm&uKQzb:%6P');
define('SECURE_AUTH_SALT', '/y+i~PiF6o5,CoAv={GKKq_)O,s%+Gz(uTQp jOCod!_N78/,@5@H$jW]Gz{1{#N');
define('LOGGED_IN_SALT',   'zNaZ )a8$xXw*|%W:,dOm,|&D$rQU?8 ^7%8Gx%(W_uB(Dxi/4V%;!^VO9>M8%Dd');
define('NONCE_SALT',       '&dRw0}I*d_M8 -%d08.Rb}qsi>|,ko5u#_lwZln/, #6m-bw|a?DMnp*RX=`Yb^B');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'tk_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
