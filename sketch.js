var database  , index , dir  , bullet , bullets  , returnMe ;
var gameState = 0;
var playerCount;

var database, allPlayers , bulletY , bulletX  , belatrix , hermoine

var flag = 0

var form, player, game, ron1bullet , ron2bullet, bulletGroup, bgGroup;
var bulletsX
var bulletsY
var Ron1, Ron2, ronsGroup;
var rons = [];
var bullets = [];
function preload() {
  //preload the images here
  img = loadImage("bg workout.jpeg");
  belatrix = loadImage("imgs/lord.png")
  hermoine = loadImage("imgs/hermoine.png")
  curse = loadImage("imgs/curse.png")



}

function setup() {
  createCanvas(1355, 670);
  // create sprites here
  bulletGroup = new Group();
  bgGroup = new Group();
  ronsGroup = new Group();


  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background("#01002b");
  


  if (playerCount === 2 && keyDown("space")) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

  if (gameState === 2) {
    game.gameEnd1();
  }

  if (gameState === 3){
    game.gameEnd2();
  }

  
}
function bg() {
  spriteMode = CENTER;

  base1 = createSprite(238, 107, 150, 5);
  base2 = createSprite(170, 180, 5, 150);
  base3 = createSprite(196, 254, 50, 5);
  base4 = createSprite(221, 285, 5, 70);
  base5 = createSprite(204, 321, 40, 5);
  base6 = createSprite(185, 300, 5, 45);
  base7 = createSprite(161, 279, 50, 5);
  base8 = createSprite(139, 257, 5, 50);
  base9 = createSprite(95, 233, 90, 5);
  base10 = createSprite(55, 348, 5, 230);
  base11 = createSprite(95, 457, 90, 5);
  base12 = createSprite(139, 435, 5, 50);
  base13 = createSprite(161, 410, 50, 5);
  base14 = createSprite(185, 393, 5, 40);
  base15 = createSprite(204, 375, 40, 5);
  base16 = createSprite(223, 412, 5, 70);
  base17 = createSprite(196, 447, 55, 5);
  base18 = createSprite(170, 522, 5, 150);
  base19 = createSprite(238, 592, 150, 5);
  base20 = createSprite(309, 569, 5, 50);
  base21 = createSprite(335, 545, 55, 5);
  base22 = createSprite(363, 585, 5, 83);
  base23 = createSprite(473, 623, 230, 5);
  base24 = createSprite(584, 655, 5, 70);
  base25 = createSprite(675, 668, 190, 5);
  base26 = createSprite(767, 615, 5, 110);
  base27 = createSprite(812, 560, 95, 5);
  base28 = createSprite(859, 570, 5, 25);
  base29 = createSprite(818, 579, 85, 5);
  base30 = createSprite(777, 625, 5, 90);
  base31 = createSprite(852, 668, 155, 5);
  base32 = createSprite(927, 623, 5, 90);
  base33 = createSprite(920, 579, 20, 5);
  base34 = createSprite(909, 570, 5, 25);
  base35 = createSprite(924, 560, 30, 5);
  base36 = createSprite(939, 590, 5, 60);
  base37 = createSprite(1010, 618, 140, 5);
  base38 = createSprite(1075, 545, 5, 150);
  base39 = createSprite(1056, 471, 40, 5);
  base40 = createSprite(1036, 437, 5, 75);
  base41 = createSprite(1070, 401, 67, 5);
  base42 = createSprite(1103, 378, 5, 50);
  base43 = createSprite(1144, 354, 85, 5);
  base44 = createSprite(1185, 374, 5, 40);
  base45 = createSprite(1237, 392, 105, 5);
  base46 = createSprite(1237, 263, 105, 5);
  base47 = createSprite(1144, 300, 85, 5);
  base48 = createSprite(1185, 281, 5, 40);
  base49 = createSprite(1103, 281, 5, 40);
  base50 = createSprite(1070, 263, 67, 5);
  base51 = createSprite(1289, 327, 5, 135);
  base52 = createSprite(1035, 249, 5, 33);
  base53 = createSprite(1054, 234, 40, 5);
  base54 = createSprite(1074, 162, 5, 150);
  base55 = createSprite(1007, 89, 140, 5);
  base56 = createSprite(938, 116, 5, 55);
  base57 = createSprite(909, 143, 60, 5);
  base58 = createSprite(880, 84, 5, 120);
  base59 = createSprite(717, 24, 330, 5);
  base60 = createSprite(554, 84, 5, 120);
  base61 = createSprite(433, 142, 247, 5);
  base62 = createSprite(310, 125, 5, 40);
  base63 = createSprite(271, 285, 5, 70);
  base64 = createSprite(291, 253, 45, 5);
  base65 = createSprite(310, 228, 5, 57);
  base66 = createSprite(378, 201, 140, 5);
  base67 = createSprite(446, 208, 5, 20);
  base68 = createSprite(429, 215, 40, 5);
  base69 = createSprite(519, 215, 42, 5);
  base70 = createSprite(496, 208, 5, 20);
  base71 = createSprite(412, 294, 5, 160);
  base72 = createSprite(500, 370, 180, 5);
  base73 = createSprite(589, 349, 5, 50);
  base74 = createSprite(564, 327, 55, 5);
  base75 = createSprite(538, 271, 5, 117);
  base76 = createSprite(527, 200, 58, 5);
  base77 = createSprite(554, 232, 5, 65);
  base78 = createSprite(629, 297, 5, 75);
  base79 = createSprite(592, 262, 80, 5);
  base80 = createSprite(660, 333, 65, 5);
  base81 = createSprite(691, 384, 5, 105);
  base82 = createSprite(662, 434, 60, 5);
  base83 = createSprite(631, 455, 5, 47);
  base84 = createSprite(608, 475, 47, 5);
  base85 = createSprite(587, 521, 5, 94);
  base86 = createSprite(536, 566, 105, 5);
  base87 = createSprite(484, 558, 5, 23);
  base88 = createSprite(519, 549, 70, 5);
  base89 = createSprite(552, 489, 5, 120);
  base90 = createSprite(570, 430, 41, 5);
  base91 = createSprite(589, 413, 5, 38);
  base92 = createSprite(513, 396, 155, 5);
  base93 = createSprite(438, 480, 5, 172);
  base94 = createSprite(424, 566, 32, 5);
  base95 = createSprite(411, 528, 5, 80);
  base96 = createSprite(360, 490, 106, 5);
  base97 = createSprite(310, 467, 5, 45);
  base98 = createSprite(290, 446, 42, 5);
  base99 = createSprite(271, 410, 5, 72);
  base100 = createSprite(293, 375, 50, 5);
  base102 = createSprite(293, 319, 50, 5);
  base103 = createSprite(315, 293, 5, 55);
  base104 = createSprite(355, 265, 85, 5);
  base105 = createSprite(394, 337, 5, 150);
  base106 = createSprite(354, 410, 82, 5);
  base107 = createSprite(315, 393, 5, 40);
  base108 = createSprite(774, 333, 65, 5);
  base109 = createSprite(843, 262, 80, 5);
  base110 = createSprite(803, 297, 5, 75);
  base111 = createSprite(881, 231, 5, 65);
  base112 = createSprite(740, 350, 5, 38);
  base113 = createSprite(841, 367, 200, 5);
  base114 = createSprite(939, 429, 5, 127);
  base115 = createSprite(865, 491, 150, 5);
  base116 = createSprite(790, 457, 5, 75);
  base117 = createSprite(766, 421, 50, 5);
  base118 = createSprite(743, 428, 5, 15);
  base119 = createSprite(868, 506, 205, 5);
  base120 = createSprite(756, 433, 25, 5);
  base121 = createSprite(767, 470, 5, 75);
  base123 = createSprite(969, 488, 5, 38);
  base124 = createSprite(978, 471, 20, 5);
  base125 = createSprite(986, 409, 5, 127);
  base126 = createSprite(1020, 346, 70, 5);
  base127 = createSprite(1055, 332, 5, 30);
  base128 = createSprite(1009, 317, 98, 5);
  base129 = createSprite(962, 333, 5, 35);
  base130 = createSprite(907, 349, 112, 5);
  base131 = createSprite(853, 329, 5, 45);
  base132 = createSprite(898, 279, 5, 57);
  base133 = createSprite(875.5, 305, 50, 5);
  base134 = createSprite(909, 198, 62, 5);
  base135 = createSprite(929, 251, 65, 5);
  base136 = createSprite(974, 263, 30, 5);
  base137 = createSprite(961.5, 257, 5, 15);
  base138 = createSprite(986, 248, 5, 33);
  base139 = createSprite(938, 217, 5, 40);
  base140 = createSprite(961, 235, 50, 5);
  
    bgGroup.add(base1)
    bgGroup.add(base2)
    bgGroup.add(base3)
    bgGroup.add(base4)
    bgGroup.add(base5)
    bgGroup.add(base6)
    bgGroup.add(base7)
    bgGroup.add(base8)
    bgGroup.add(base9)
    bgGroup.add(base10)
    bgGroup.add(base11)
    bgGroup.add(base12)
    bgGroup.add(base13)
    bgGroup.add(base14)
    bgGroup.add(base15)
    bgGroup.add(base16)
    bgGroup.add(base17)
    bgGroup.add(base18)
    bgGroup.add(base19)
    bgGroup.add(base20)
    bgGroup.add(base21)
    bgGroup.add(base22)
    bgGroup.add(base23)
    bgGroup.add(base24)
    bgGroup.add(base25)
    bgGroup.add(base26)
    bgGroup.add(base27)
    bgGroup.add(base28)
    bgGroup.add(base29)
    bgGroup.add(base30)
    bgGroup.add(base31)
    bgGroup.add(base32)
    bgGroup.add(base33)
    bgGroup.add(base34)
    bgGroup.add(base35)
    bgGroup.add(base36)
    bgGroup.add(base37)
    bgGroup.add(base38)
    bgGroup.add(base39)
    bgGroup.add(base40)
    bgGroup.add(base41)
    bgGroup.add(base42)
    bgGroup.add(base43)
    bgGroup.add(base44)
    bgGroup.add(base45)
    bgGroup.add(base46)
    bgGroup.add(base47)
    bgGroup.add(base48)
    bgGroup.add(base49)
    bgGroup.add(base50)
    bgGroup.add(base51)
    bgGroup.add(base52)
    bgGroup.add(base53)
    bgGroup.add(base54)
    bgGroup.add(base55)
    bgGroup.add(base56)
    bgGroup.add(base57)
    bgGroup.add(base58)
    bgGroup.add(base59)
    bgGroup.add(base60)
    bgGroup.add(base61)
    bgGroup.add(base62)
    bgGroup.add(base63)
    bgGroup.add(base64)
    bgGroup.add(base65)
    bgGroup.add(base66)
    bgGroup.add(base67)
    bgGroup.add(base68)
    bgGroup.add(base69)
    bgGroup.add(base70)
    bgGroup.add(base71)
    bgGroup.add(base72)
    bgGroup.add(base73)
    bgGroup.add(base74)
    bgGroup.add(base75)
    bgGroup.add(base76)
    bgGroup.add(base77)
    bgGroup.add(base78)
    bgGroup.add(base79)
    bgGroup.add(base80)
    bgGroup.add(base81)
    bgGroup.add(base82)
    bgGroup.add(base83)
    bgGroup.add(base84)
    bgGroup.add(base85)
    bgGroup.add(base86)
    bgGroup.add(base87)
    bgGroup.add(base88)
    bgGroup.add(base89)
    bgGroup.add(base90)
    bgGroup.add(base91)
    bgGroup.add(base92)
    bgGroup.add(base93)
    bgGroup.add(base94)
    bgGroup.add(base95)
    bgGroup.add(base96)
    bgGroup.add(base97)
    bgGroup.add(base98)
    bgGroup.add(base99)
    bgGroup.add(base100)
    bgGroup.add(base102)
    bgGroup.add(base103)
    bgGroup.add(base104)
    bgGroup.add(base105)
    bgGroup.add(base106)
    bgGroup.add(base107)
    bgGroup.add(base108)
    bgGroup.add(base109)
    bgGroup.add(base110)
    bgGroup.add(base111)
    bgGroup.add(base112)
    bgGroup.add(base113)
    bgGroup.add(base114)
    bgGroup.add(base115)
    bgGroup.add(base116)
    bgGroup.add(base117)
    bgGroup.add(base118)
    bgGroup.add(base119)
    bgGroup.add(base120)
    bgGroup.add(base121)
    bgGroup.add(base123)
    bgGroup.add(base124)
    bgGroup.add(base125)
    bgGroup.add(base126)
    bgGroup.add(base127)
    bgGroup.add(base128)
    bgGroup.add(base129)
    bgGroup.add(base130)
    bgGroup.add(base131)
    bgGroup.add(base132)
    bgGroup.add(base133)
    bgGroup.add(base134)
    bgGroup.add(base135)
    bgGroup.add(base136)
    bgGroup.add(base137)
    bgGroup.add(base138)
    bgGroup.add(base139)
    bgGroup.add(base140)

    bgGroup.setColorEach("yellow")
  
}
