namespace SpriteKind {
    export const Text = SpriteKind.create()
}
function Hamestart () {
    scene.setBackgroundColor(8)
    color.pauseUntilFadeDone()
    Stongplay()
    color.startFade(color.Black, color.originalPalette)
    Starteverything = true
    player1 = sprites.create(assets.image`myImage0`, SpriteKind.Player)
    player1.setPosition(20, 15)
    player1.setFlag(SpriteFlag.StayInScreen, true)
    controller.moveSprite(player1, 200, 200)
    info.player1.setLife(3)
    info.player1.setScore(0)
    player2 = sprites.create(assets.image`myImage1`, SpriteKind.Player)
    player2.setPosition(20, 45)
    player2.setFlag(SpriteFlag.StayInScreen, true)
    controller.player2.moveSprite(player2, 200, 200)
    info.player2.setLife(3)
    info.player2.setScore(0)
    player3 = sprites.create(assets.image`myImage2`, SpriteKind.Player)
    player3.setPosition(20, 75)
    player3.setFlag(SpriteFlag.StayInScreen, true)
    controller.player3.moveSprite(player3, 200, 200)
    info.player3.setLife(3)
    info.player3.setScore(0)
    player4 = sprites.create(assets.image`myImage3`, SpriteKind.Player)
    player4.setPosition(20, 105)
    player4.setFlag(SpriteFlag.StayInScreen, true)
    controller.player4.moveSprite(player4, 200, 200)
    info.player4.setLife(3)
    info.player4.setScore(0)
}
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (Starteverything) {
        if (info.player2.hasLife()) {
            timer.background(function () {
                music.play(music.createSoundEffect(WaveShape.Sine, 1600, 1, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
            })
            dart2 = sprites.createProjectileFromSprite(assets.image`myImage7`, player2, 200, 0)
            pause(100)
        }
    }
})
function Startscreen () {
    scene.getIcon_block(scene.SystemMenuIcon.CardNormal).fill(0)
    scene.getIcon_block(scene.SystemMenuIcon.CardNormal).drawTransparentImage(img`
        66666666666666666666999999999999999.
        666666666666666666669999999999999999
        666666666666666666669999999999999999
        666666666666666666666666666666669999
        666666666666666666666666666666669999
        666666666666666666666666666666669999
        666666666666666666666666666666669999
        666666666666666666666666666666669999
        666666666666666666666666666666669999
        666666666666666666666666666666669999
        666666666666666666666666666666669999
        666666666666666666666666666666666666
        666666666666666666666666666666666666
        666666666666666666666666666666666666
        666666666666666666666666666666666666
        666666666666666666666666666666666666
        666666666666666666666666666666666666
        666666666666666666666666666666666666
        999666666666666666666666666666666666
        999666666666666666666666666666666666
        999666666666666666666666666666666666
        999666666666666666666666666666666666
        999666666666666666666666666666666666
        999666666666666666666666666666666666
        999666666666666666666666666666666666
        999666666666666666666666666666666666
        999666666666666666666666666666666666
        999666666666666666666666666666666666
        999666111166666666666666666666666666
        999666666666666666666666666666666666
        999666111111111116666666666666666666
        999666666666666666666666666666666666
        999666666666666666666666666666666666
        999999999999966666666666666666666666
        999999999999966666666666666666666666
        .99999999999966666666666666666666666
        `, 0, 0)
    scene.getIcon_block(scene.SystemMenuIcon.CardSelected).fill(0)
    scene.getIcon_block(scene.SystemMenuIcon.CardSelected).drawTransparentImage(img`
        88888888888888888888999999999999999.
        888888888888888888889999999999999999
        888888888888888888889999999999999999
        888888888888888888888888888888889999
        888888888888888888888888888888889999
        888888888888888888888888888888889999
        888888888888888888888888888888889999
        888888888888888888888888888888889999
        888888888888888888888888888888889999
        888888888888888888888888888888889999
        888888888888888888888888888888889999
        888888888888888888888888888888888888
        888888888888888888888888888888888888
        888888888888888888888888888888888888
        888888888888888888888888888888888888
        888888888888888888888888888888888888
        888888888888888888888888888888888888
        888888888888888888888888888888888888
        999888888888888888888888888888888888
        999888888888888888888888888888888888
        999888888888888888888888888888888888
        999888888888888888888888888888888888
        999888888888888888888888888888888888
        999888888888888888888888888888888888
        999888888888888888888888888888888888
        999888888888888888888888888888888888
        999888888888888888888888888888888888
        999888888888888888888888888888888888
        999811118888888888888888888888888888
        999888888888888888888888888888888888
        999881111111118888888888888888888888
        999888888888888888888888888888888888
        999888888888888888888888888888888888
        999999999999988888888888888888888888
        999999999999988888888888888888888888
        .99999999999988888888888888888888888
        `, 0, 0)
    scene.getIcon_block(scene.SystemMenuIcon.CardActive).fill(0)
    scene.getIcon_block(scene.SystemMenuIcon.CardActive).drawTransparentImage(img`
        99999999999999999999999999999999999.
        999999999999999999999999999999999999
        999999999999999999999999999999999999
        999999999999999999999999999999999999
        999999999999999999999999999999999999
        999999999999999999999999999999999999
        999999999999999999999999999999999999
        999999999999999999999999999999999999
        999999999999999999999999999999999999
        999999999999999999999999999999999999
        999999999999999999999999999999999999
        999999999999999999999999999999999999
        999999999999999999999999999999999999
        999999999999999999999999999999999999
        999999999999999999999999999999999999
        999999999999999999999999999999999999
        999999999999999999999999999999999999
        999999999999999999999999999999999999
        999999999999999999999999999999999999
        999999999999999999999999999999999999
        999999999999999999999999999999999999
        999999999999999999999999999999999999
        999999999999999999999999999999999999
        999999999999999999999999999999999999
        999999999999999999999999999999999999
        999999999999999999999999999999999999
        999999999999999999999999999999999999
        999999999999999999999999999999999999
        999999999999999999999999999999999999
        999999999999999999999999999999999999
        999999999999999999999999999999999999
        999999999999999999999999999999999999
        999999999999999999999999999999999999
        999999999999999999999999999999999999
        999999999999999999999999999999999999
        .99999999999999999999999999999999999
        `, 0, 0)
    scene.getIcon_block(scene.SystemMenuIcon.VolumeDown).fill(0)
    scene.getIcon_block(scene.SystemMenuIcon.VolumeDown).drawTransparentImage(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ...............ff...............
        ..............fff...............
        .............ffff...............
        .........ffffffff.ff............
        ........fffffffff.fff...........
        ........fffffffff..ff...........
        .......ffffffffff..ff...........
        .......ffffffffff..ff...........
        ........fffffffff..ff...........
        ........fffffffff.fff...........
        .........ffffffff.ff............
        .............ffff...............
        ..............fff...............
        ...............ff...............
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        `, 0, 0)
    scene.getIcon_block(scene.SystemMenuIcon.VolumeUp).fill(0)
    scene.getIcon_block(scene.SystemMenuIcon.VolumeUp).drawTransparentImage(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ...............ff..fff..........
        ..............fff..ffff.........
        .............ffff....fff........
        .........ffffffff.ff..ff........
        ........fffffffff.fff.fff.......
        ........fffffffff..ff..ff.......
        .......ffffffffff..ff..ff.......
        .......ffffffffff..ff..ff.......
        ........fffffffff..ff..ff.......
        ........fffffffff.fff.fff.......
        .........ffffffff.ff..ff........
        .............ffff....fff........
        ..............fff..ffff.........
        ...............ff..fff..........
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        `, 0, 0)
    scene.getIcon_block(scene.SystemMenuIcon.Stats).fill(0)
    scene.getIcon_block(scene.SystemMenuIcon.Stats).drawTransparentImage(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        .........ffff...................
        .........f88ffff................
        .........f88f66ffff.............
        .........f88f66f99ffff..........
        .........f88f66f99f11f..........
        .........f88f66f99f11f..........
        .........f88f66f99f11f..aaaaaa..
        .........f88f66f99f11f.aaaaaaa.a
        .........f88f66f99f11f.aaaaaaa..
        .........f88f66f99f11faaaa......
        .........f88f66f99f11faaaa......
        ...aaaaaafffffffffffffaaa.......
        .a.aaaaaaaaaaaaa.....aaaa.......
        ...aaaaaaaaaaaaaa....aaaa.......
        .............aaaa...aaaa........
        ..............aaaa..aaaa........
        ..............aaaaa.aaa.........
        ...............aaaaaaaa.........
        ................aaaaaaa.........
        ................aaaaaa..........
        .................aaaaa..........
        ................................
        ................................
        ................................
        `, 0, 0)
    scene.getIcon_block(scene.SystemMenuIcon.Console).fill(0)
    scene.getIcon_block(scene.SystemMenuIcon.Console).drawTransparentImage(img`
        ................................
        ................................
        ................................
        ................................
        ....ffffffffffffffffffffff......
        ...f7777777777777777777777f.....
        ...f7777777777777777777777f.....
        ...f7777777777777777777777f.....
        ...f7777f77777777777777777f.....
        ...f77777f7777777777777777f.....
        ...f777777f777777777777777f.....
        ...f7777777f77777777777777f.....
        ...f77777777f7777777777777f.....
        ...f777777777f777777777777f.....
        ...f777777777f777777777777f.....
        ...f77777777f7777777777777f.....
        ...f7777777f77777777777777f.....
        ...f777777f777777777777777f.....
        ...f77777f77fffffffff77777f.....
        ...f7777f77777777777777777f.....
        ...f7777777777777777777777f.....
        ...f7777777777777777777777f.....
        ....ffffffffffffffffffffff......
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        `, 0, 0)
    scene.getIcon_block(scene.SystemMenuIcon.Sleep).fill(0)
    scene.getIcon_block(scene.SystemMenuIcon.Sleep).drawTransparentImage(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................55..............
        ................55..............
        ...............7557.............
        ..............7.55.7............
        ..............7....7............
        ..............77..77............
        ...............7777.............
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        `, 0, 0)
    scene.getIcon_block(scene.SystemMenuIcon.Close).fill(0)
    scene.getIcon_block(scene.SystemMenuIcon.Close).drawTransparentImage(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ........22............22........
        ........222..........222........
        .........222........222.........
        ..........222......222..........
        ...........222....222...........
        ............222..222............
        .............222222.............
        ..............2222..............
        ..............2222..............
        .............222222.............
        ............222..222............
        ...........222....222...........
        ..........222......222..........
        .........222........222.........
        ........222..........222........
        ........22............22........
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        `, 0, 0)
    timer.background(function () {
        color.startFade(color.White, color.originalPalette)
    })
    music.play(music.createSong(hex`
                    0096000408180504001c00100500640000041e000004000000000000000000000000000a040004840000012001010f20013001010f30013801011438014001011140016001010f60017001010f7001780101167801800101148001a0010112a001b0010112c001e001011100022002010f20023002010f30023802011438024002011140026002010f60027002010f7002780201167802800201148002a0020112a002c0020112c002e002011105001c000f0a006400f4010a0000040000000000000000000000000000000002680300000200031e222702000800031e222714001600012718001a00012a1a001c0001291c001e0001251e002000012720002200031e222722002800031e22273c003e00012540004200031e222742004800031e222754005600012758005a00012c5a005c0001295c005e0001255e006000012760006200031e222762006800031e2227800082000322252a820088000322252a94009600012a96009800012c98009a0001299a009c0001259c009e000127a000a2000322252aa200b0000322252ac000c20003222529c200e00003222529e00000010320242900010201031b222702010801031b222714011601012718011a01012a1a011c0101291c011e0101251e012001012720012201031b222722012801031b222740014201031b222742014801031b222754015601012758015a01012c5a015c0101295c015e0101255e016001012760016201031b222762016801031b222780018201041e22252a82018801041e22252a94019601012a98019a01012c9a019c01012a9c019e0101299e01a0010125a001a201041e22252aa201a801041e22252ac001c201041d222529c201e001041d222529e001e201041b202429e201e401041b202429e401e601041b202429e601e801041b202429e801ea0103202429ea01ec0103202429ec01ee0103202429ee01f00103202429f001f201022429f201f401022429f401f601022429f601f801022429f801fa010129fa01fc010129fc01fe010129fe010002012900020202031b222702020802031b222714021602012718021a02012a1a021c0201291c021e0201251e022002012720022202031b222722022802031b222740024202031b222742024802031b222754025602012758025a02012c5a025c0201295c025e0201255e026002012760026202031b222762026802031b222780028202041e22252a82028802041e22252a94029602012a98029a02012c9a029c02012a9c029e0201299e02a0020125a002a202041e22252aa202a802041e22252ac002c202041d222529c202e002041d222529e002e202041b202429e202e402041b202429e402e602041b202429e602e802041b202429e802ea0203202429ea02ec0203202429ec02ee0203202429ee02f00203202429f002f202022429f202f402022429f402f602022429f602f802022429f802fa020129fa02fc020129fc02fe020129fe020003012906001c00010a006400f4016400000400000000000000000000000000000000020c06c000e0000129e0000001012900010201011b02010401011b04010601011b06010801011b08010a01011b0a010c01011b0c010e01011b0e011001011b10011201011b12011401011b14011601011b16011801011b18011a01011b1a011c01011b1c011e01011b1e012001011b20012201011b22012401011b24012601011b26012801011b28012a01011b2a012c01011b2c012e01011b2e013001011b30013201011b32013401011b34013601011b36013801011b38013a01011b3a013c01011b3c013e01011b3e014001011b40014201011b42014401011b44014601011b46014801011b48014a01011b4a014c01011b4c014e01011b4e015001011b50015201011b52015401011b54015601011b56015801011b58015a01011b5a015c01011b5c015e01011b5e016001011b60016201011b62016401011b64016601011b66016801011b68016a01011b6a016c01011b6c016e01011b6e017001011b70017201011b72017401011b74017601011b76017801011b78017a01011b7a017c01011b7c017e01011b7e018001011b80018201011e82018401011e84018601011e86018801011e88018a01011e8a018c01011e8c018e01011e8e019001011e90019201011e92019401011e94019601011e96019801011e98019a01011e9a019c01011e9c019e01011e9e01a001011ea001a201011ea201a401011ea401a601011ea601a801011ea801aa01011eaa01ac01011eac01ae01011eae01b001011eb001b201011eb201b401011eb401b601011eb601b801011eb801ba01011eba01bc01011ebc01be01011ebe01c001011ec001c201011dc201c401011dc401c601011dc601c801011dc801ca01011dca01cc01011dcc01ce01011dce01d001011dd001d201011dd201d401011dd401d601011dd601d801011dd801da01011dda01dc01011ddc01de01011dde01e001011de001e201011de201e401011de401e601011de601e801011de801ea01011dea01ec01011dec01ee01011dee01f001011df001f201011df201f401011df401f601011df601f801011df801fa01011dfa01fc01011dfc01fe01011dfe010002011d00020202011b02020402011b04020602011b06020802011b08020a02011b0a020c02011b0c020e02011b0e021002011b10021202011b12021402011b14021602011b16021802011b18021a02011b1a021c02011b1c021e02011b1e022002011b20022202011b22022402011b24022602011b26022802011b28022a02011b2a022c02011b2c022e02011b2e023002011b30023202011b32023402011b34023602011b36023802011b38023a02011b3a023c02011b3c023e02011b3e024002011b40024202011b42024402011b44024602011b46024802011b48024a02011b4a024c02011b4c024e02011b4e025002011b50025202011b52025402011b54025602011b56025802011b58025a02011b5a025c02011b5c025e02011b5e026002011b60026202011b62026402011b64026602011b66026802011b68026a02011b6a026c02011b6c026e02011b6e027002011b70027202011b72027402011b74027602011b76027802011b78027a02011b7a027c02011b7c027e02011b7e028002011b80028202011e82028402011e84028602011e86028802011e88028a02011e8a028c02011e8c028e02011e8e029002011e90029202011e92029402011e94029602011e96029802011e98029a02011e9a029c02011e9c029e02011e9e02a002011ea002a202011ea202a402011ea402a602011ea602a802011ea802aa02011eaa02ac02011eac02ae02011eae02b002011eb002b202011eb202b402011eb402b602011eb602b802011eb802ba02011eba02bc02011ebc02be02011ebe02c002011ec002c202011dc202c402011dc402c602011dc602c802011dc802ca02011dca02cc02011dcc02ce02011dce02d002011dd002d202011dd202d402011dd402d602011dd602d802011dd802da02011dda02dc02011ddc02de02011dde02e002011de002e202011de202e402011de402e602011de602e802011de802ea02011dea02ec02011dec02ee02011dee02f002011df002f202011df202f402011df402f602011df602f802011df802fa02011dfa02fc02011dfc02fe02011dfe020003011d07001c00020a006400f4016400000400000000000000000000000000000000035c0100010201010f02010401010f14011601010f18011a01010f1a011c01010f1c011e01010f1e012001010f20012201010f22012401010f40014201010f42014401010f54015601010f58015a01010f5a015c01010f5c015e01010f5e016001010f60016201010f62016401010f80018201011282018401011294019601011298019a0101129a019c0101129c019e0101129e01a0010112a001a2010112a201a4010112c001c2010111c201c401011100020202010f02020402010f14021602010f18021a02010f1a021c02010f1c021e02010f1e022002010f20022202010f22022402010f40024202010f42024402010f54025602010f58025a02010f5a025c02010f5c025e02010f5e026002010f60026202010f62026402010f80028202011282028402011294029602011298029a0201129a029c0201129c029e0201129e02a0020112a002a2020112a202a4020112c002c2020111c202c402011109010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8001b070000010004111201060200030001120400050003110106080009000204060c000d0001060e000f00010410001100010612001300010414001500041112010618001900031204061a001b000212011c001d000201061e001f0002120120002100031201062200230001122400250003110106280029000204062c002d0001062e002f0001043000310001063400350003110106380039000204063c003d0001064000410004111201064200430001124400450003110106480049000204064c004d0001064e004f00010450005100010652005300010454005500041112010658005900031204065a005b000212015c005d000201065e005f0002120160006100031201066200630001126400650003110106680069000204066c006d0001066e006f0001047000710001067400750003110106780079000204067c007d0001068000810004111201068200830001128400850003110106880089000204068c008d0001068e008f00010490009100010692009300010494009500041112010698009900031204069a009b000212019c009d000201069e009f00021201a000a10003120106a200a3000112a400a50003110106a800a900020406ac00ad000106ae00af000104b000b1000106b400b50003110106b800b900020406bc00bd000106c000c10003010406c400c50003010406c800c90003010406cc00cd0003010406d000d10003010406d200d30003010406d400d50003010406d600d70003010406d800d90003010406da00db0003010406dc00dd0003010406de00df0003010406e000e100020106e400e500020106e800e900020406ec00ed000106ee00ef000104f000f1000106f200f3000104f400f500020006f800f900020406fc00fd0001060001010102140604010501020106080109010204060c010d0101060e010f01010410011101010612011301010414011501020106180119010204061a011b0101011c011d010201061e011f0101012001210102010624012501020106280129010204062c012d0101062e012f01010430013101010634013501020106380139010204063c013d0101064001410102010644014501020106480149010204064c014d0101064e014f01010450015101010652015301010454015501020106580159010204065a015b0101015c015d010201065e015f0101016001610102010664016501020106680169010204066c016d0101066e016f01010470017101010674017501020106780179010204067c017d0101068001810102010684018501020106880189010204068c018d0101068e018f01010490019101010692019301010494019501020106980199010204069a019b0101019c019d010201069e019f010101a001a101020106a401a501020106a801a901020406ac01ad010106ae01af010104b001b1010106b401b501020106b801b901020406bc01bd010106c001c101020106c401c501020106c801c901020406cc01cd010106ce01cf010104d001d1010106d201d3010104d401d501020106d801d901020406da01db010101dc01dd01020106de01df010101e001e1010414010406e401e50103010406e801e90103010406ec01ed0103010406f001f1010414010406f201f30103010406f401f50103010406f601f7010414010406f801f90103010406fa01fb0103010406fc01fd010414010406fe01ff01030104060002010202140604020502020106080209020204060c020d0201060e020f02010410021102010612021302010414021502020106180219020204061a021b0201011c021d020201061e021f0201012002210202010624022502020106280229020204062c022d0201062e022f02010430023102010634023502020106380239020204063c023d0201064002410202010644024502020106480249020204064c024d0201064e024f02010450025102010652025302010454025502020106580259020204065a025b0201015c025d020201065e025f0201016002610202010664026502020106680269020204066c026d0201066e026f02010470027102010674027502020106780279020204067c027d0201068002810202010684028502020106880289020204068c028d0201068e028f02010490029102010692029302010494029502020106980299020204069a029b0201019c029d020201069e029f020101a002a102020106a402a502020106a802a902020406ac02ad020106ae02af020104b002b1020106b402b502020106b802b902020406bc02bd020106c002c102020106c402c502020106c802c902020406cc02cd020106ce02cf020104d002d1020106d202d3020104d402d502020106d802d902020406da02db020101dc02dd02020106de02df020101e002e1020414010406e402e50203010406e802e90203010406ec02ed0203010406f002f1020414010406f202f30203010406f402f50203010406f602f7020414010406f802f90203010406fa02fb0203010406fc02fd020414010406fe02ff0203010406
                    `), music.PlaybackMode.LoopingInBackground)
    effects.clouds.startScreenEffect()
    scene.setBackgroundColor(9)
    Starteverything = false
    Maintext = fancyText.create("SkyWars")
    Maintext.setKind(SpriteKind.Text)
    fancyText.setColor(Maintext, 8)
    fancyText.setMaxWidth(Maintext, 100)
    fancyText.setFont(Maintext, fancyText.geometric_serif_11)
    myMenu = miniMenu.createMenu(
    miniMenu.createMenuItem("Start!"),
    miniMenu.createMenuItem("Credits")
    )
    miniMenu.setFrame(myMenu, img`
        . . . 6 6 6 6 6 6 6 6 6 6 6 . 
        . . . . . . . . . . . . . . 6 
        . . . . . . . . . . . . . . 6 
        6 . . . . . . . . . . . . . 6 
        6 . . . . . . . . . . . . . 6 
        6 . . . . . . . . . . . . . 6 
        6 . . . . . . . . . . . . . 6 
        6 . . . . . . . . . . . . . 6 
        6 . . . . . . . . . . . . . 6 
        6 . . . . . . . . . . . . . 6 
        6 . . . . . . . . . . . . . 6 
        6 . . . . . . . . . . . . . 6 
        6 . . . . . . . . . . . . . . 
        6 . . . . . . . . . . . . . . 
        . 6 6 6 6 6 6 6 6 6 . . . . . 
        `)
    miniMenu.setStyleProperty(myMenu, miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Background, 7)
    myMenu.setPosition(122, 89)
    miniMenu.onButtonPressed(myMenu, miniMenu.Button.A, function (selection, selectedIndex) {
        if (selection == "Start!") {
            game.splash("Gather your crew,", "Then press A!")
            music.stopAllSounds()
            sprites.destroyAllSpritesOfKind(SpriteKind.Text)
            sprites.destroyAllSpritesOfKind(SpriteKind.MiniMenu)
            pause(1000)
            color.startFade(color.originalPalette, color.Black)
            Hamestart()
        } else {
            Credits()
        }
    })
}
info.player4.onLifeZero(function () {
    if (Starteverything) {
        game.setDialogTextColor(1)
        game.setDialogFrame(img`
            f f f f 9 9 9 9 9 9 9 9 9 f f 
            9 f f f f f f f f f f f f 9 f 
            9 f f f f f f f f f f f f f 9 
            9 f f f f f f f f f f f f f 9 
            9 f f f f f f f f f f f f f 9 
            9 f f f f f f f f f f f f f 9 
            9 f f f f f f f f f f f f f 9 
            9 f f f f f f f f f f f f f 9 
            9 f f f f f f f f f f f f f 9 
            9 f f f f f f f f f f f f f 9 
            9 f f f f f f f f f f f f f 9 
            9 f f f f f f f f f f f f f f 
            9 f f f f f f f f f f f f f f 
            9 9 f f f f f f f f f f f f f 
            f f 9 9 9 9 9 9 9 9 9 9 9 f f 
            `)
        if (!(info.player1.hasLife()) && (!(info.player2.hasLife()) && !(info.player3.hasLife()))) {
            game.showLongText("Player 4 Wins!", DialogLayout.Bottom)
            game.showLongText("They got big by " + ("" + info.player4.score()) + " points!", DialogLayout.Bottom)
            music.stopAllSounds()
            game.over(true)
        } else {
            game.showLongText("Player 4 is out :-(", DialogLayout.Bottom)
            player4.destroy()
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite2, otherSprite2) {
    if (Starteverything) {
        if (sprite2 == player1) {
            info.player1.changeLifeBy(-1)
            scene.cameraShake(4, 200)
        } else if (sprite2 == player2) {
            info.player2.changeLifeBy(-1)
            scene.cameraShake(4, 200)
        } else if (sprite2 == player3) {
            info.player3.changeLifeBy(-1)
            scene.cameraShake(4, 200)
        } else {
            info.player4.changeLifeBy(-1)
            scene.cameraShake(4, 200)
        }
        otherSprite2.destroy(effects.fire, 200)
    }
})
function Startupppp () {
    game.splash("A game built for", "Mini Game Jam #33")
    game.splash("Big Jam")
    game.splash("RoboVacDev and his friends", "at RoboVac Studios")
    game.splash("PRESENT")
    music.play(music.createSoundEffect(WaveShape.Square, 1, 1457, 255, 255, 1200, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    timer.background(function () {
        color.startFade(color.originalPalette, color.White, 500)
    })
    Startscreen()
}
info.player3.onLifeZero(function () {
    if (Starteverything) {
        game.setDialogTextColor(1)
        game.setDialogFrame(img`
            f f f f 9 9 9 9 9 9 9 9 9 f f 
            9 f f f f f f f f f f f f 9 f 
            9 f f f f f f f f f f f f f 9 
            9 f f f f f f f f f f f f f 9 
            9 f f f f f f f f f f f f f 9 
            9 f f f f f f f f f f f f f 9 
            9 f f f f f f f f f f f f f 9 
            9 f f f f f f f f f f f f f 9 
            9 f f f f f f f f f f f f f 9 
            9 f f f f f f f f f f f f f 9 
            9 f f f f f f f f f f f f f 9 
            9 f f f f f f f f f f f f f f 
            9 f f f f f f f f f f f f f f 
            9 9 f f f f f f f f f f f f f 
            f f 9 9 9 9 9 9 9 9 9 9 9 f f 
            `)
        if (!(info.player1.hasLife()) && (!(info.player2.hasLife()) && !(info.player4.hasLife()))) {
            game.showLongText("Player 3 Wins!", DialogLayout.Bottom)
            game.showLongText("They got big by " + ("" + info.player3.score()) + " points!", DialogLayout.Bottom)
            music.stopAllSounds()
            game.over(true)
        } else {
            game.showLongText("Player 3 is out :-(", DialogLayout.Bottom)
            player3.destroy()
        }
    }
})
controller.player4.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (Starteverything) {
        if (info.player4.hasLife()) {
            timer.background(function () {
                music.play(music.createSoundEffect(WaveShape.Sawtooth, 1600, 1, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
            })
            dart4 = sprites.createProjectileFromSprite(assets.image`myImage6`, player4, 200, 0)
            pause(100)
        }
    }
})
function Stongplay () {
    Stangplay = true
}
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (Starteverything) {
        if (info.player1.hasLife()) {
            timer.background(function () {
                music.play(music.createSoundEffect(WaveShape.Triangle, 1600, 1, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
            })
            dart1 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . 5 5 5 5 . . . 
                . . . . . . . 5 5 4 4 4 4 5 . . 
                . . . . 5 5 2 2 4 4 4 4 4 4 5 . 
                . . 2 2 2 2 4 4 4 4 4 4 4 4 5 . 
                . . 4 4 4 4 4 4 4 4 4 4 4 4 5 . 
                . . 2 2 5 5 2 4 4 4 4 4 4 4 5 . 
                . . . . . . 5 5 2 4 4 4 4 5 . . 
                . . . . . . . . . 5 5 5 5 . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, player1, 200, 0)
            pause(100)
        }
    }
})
function Credits () {
    myTextSprite = fancyText.create("     ")
    myTextSprite2 = fancyText.create("     ")
    fancyText.setText(myTextSprite, "Code and Art by RoboVacDev (and friends)")
    fancyText.setText(myTextSprite2, "Songs by AbstractDesigner and InvalidProject")
    fancyText.setMaxWidth(myTextSprite, 100)
    fancyText.setMaxWidth(myTextSprite2, 100)
    myTextSprite.setKind(SpriteKind.Text)
    myTextSprite2.setKind(SpriteKind.Text)
    fancyText.setFont(myTextSprite2, fancyText.geometric_sans_6)
    fancyText.setFont(myTextSprite, fancyText.geometric_sans_6)
    myTextSprite.setPosition(52, 28)
    myTextSprite2.setPosition(52, 88)
    pause(2000)
    sprites.destroy(myTextSprite)
    sprites.destroy(myTextSprite2)
}
info.player1.onLifeZero(function () {
    if (Starteverything) {
        game.setDialogTextColor(1)
        game.setDialogFrame(img`
            f f f f 9 9 9 9 9 9 9 9 9 f f 
            9 f f f f f f f f f f f f 9 f 
            9 f f f f f f f f f f f f f 9 
            9 f f f f f f f f f f f f f 9 
            9 f f f f f f f f f f f f f 9 
            9 f f f f f f f f f f f f f 9 
            9 f f f f f f f f f f f f f 9 
            9 f f f f f f f f f f f f f 9 
            9 f f f f f f f f f f f f f 9 
            9 f f f f f f f f f f f f f 9 
            9 f f f f f f f f f f f f f 9 
            9 f f f f f f f f f f f f f f 
            9 f f f f f f f f f f f f f f 
            9 9 f f f f f f f f f f f f f 
            f f 9 9 9 9 9 9 9 9 9 9 9 f f 
            `)
        if (!(info.player2.hasLife()) && (!(info.player3.hasLife()) && !(info.player4.hasLife()))) {
            game.showLongText("Player 1 Wins!", DialogLayout.Bottom)
            game.showLongText("They got big by " + ("" + info.player1.score()) + " points!", DialogLayout.Bottom)
            music.stopAllSounds()
            game.over(true)
        } else {
            game.showLongText("Player 1 is out :-(", DialogLayout.Bottom)
            player1.destroy()
        }
    }
})
controller.player3.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (Starteverything) {
        if (info.player3.hasLife()) {
            timer.background(function () {
                music.play(music.createSoundEffect(WaveShape.Square, 1600, 1, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
            })
            dart3 = sprites.createProjectileFromSprite(assets.image`myImage5`, player3, 200, 0)
            pause(100)
        }
    }
})
info.player2.onLifeZero(function () {
    if (Starteverything) {
        game.setDialogTextColor(1)
        game.setDialogFrame(img`
            f f f f 9 9 9 9 9 9 9 9 9 f f 
            9 f f f f f f f f f f f f 9 f 
            9 f f f f f f f f f f f f f 9 
            9 f f f f f f f f f f f f f 9 
            9 f f f f f f f f f f f f f 9 
            9 f f f f f f f f f f f f f 9 
            9 f f f f f f f f f f f f f 9 
            9 f f f f f f f f f f f f f 9 
            9 f f f f f f f f f f f f f 9 
            9 f f f f f f f f f f f f f 9 
            9 f f f f f f f f f f f f f 9 
            9 f f f f f f f f f f f f f f 
            9 f f f f f f f f f f f f f f 
            9 9 f f f f f f f f f f f f f 
            f f 9 9 9 9 9 9 9 9 9 9 9 f f 
            `)
        if (!(info.player1.hasLife()) && (!(info.player3.hasLife()) && !(info.player4.hasLife()))) {
            game.showLongText("Player 2 Wins!", DialogLayout.Bottom)
            game.showLongText("They got big by " + ("" + info.player2.score()) + " points!", DialogLayout.Bottom)
            music.stopAllSounds()
            game.over(true)
        } else {
            game.showLongText("Player 2 is out :-(", DialogLayout.Bottom)
            player2.destroy()
        }
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (Starteverything) {
        if (sprite == dart1) {
            info.player1.changeScoreBy(1)
            timer.background(function () {
                player1.changeScale(0.5, ScaleAnchor.Middle)
            })
        } else if (sprite == dart2) {
            info.player2.changeScoreBy(1)
            timer.background(function () {
                player2.changeScale(0.5, ScaleAnchor.Middle)
            })
        } else if (sprite == dart3) {
            info.player3.changeScoreBy(1)
            timer.background(function () {
                player3.changeScale(0.5, ScaleAnchor.Middle)
            })
        } else if (sprite == dart4) {
            info.player4.changeScoreBy(1)
            timer.background(function () {
                player4.changeScale(0.5, ScaleAnchor.Middle)
            })
        }
        timer.background(function () {
            music.play(music.createSoundEffect(WaveShape.Noise, 1, 5000, 255, 0, 500, SoundExpressionEffect.Warble, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
        })
        sprite.destroy(effects.halo, 500)
        otherSprite.destroy(effects.fire, 500)
    }
})
let bogey: Sprite = null
let dart3: Sprite = null
let myTextSprite2: fancyText.TextSprite = null
let myTextSprite: fancyText.TextSprite = null
let dart1: Sprite = null
let Stangplay = false
let dart4: Sprite = null
let myMenu: Sprite = null
let Maintext: fancyText.TextSprite = null
let dart2: Sprite = null
let player4: Sprite = null
let player3: Sprite = null
let player2: Sprite = null
let player1: Sprite = null
let Starteverything = false
Startupppp()
game.onUpdateInterval(999, function () {
    if (Starteverything) {
        if (true) {
            bogey = sprites.create(assets.image`myImage4`, SpriteKind.Enemy)
            bogey.setVelocity(-50, 0)
            bogey.setPosition(180, randint(0, 120))
        } else {
        	
        }
    }
})
forever(function () {
    if (Stangplay) {
        music.play(music.createSong(hex`
                            00a0000408040205001c000f0a006400f4010a0000040000000000000000000000000000000002480000000400010c0c001000010c18001c00010c24002800010c30003400010c3c004000010d40004400010c4c005000010c58005c00010c64006800010c70007400010d78007c00010d09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800c0000000010001050400050001060800090001080c000d0001051000110001061400150001051800190001081c001d0001062000210001052400250001062800290001082c002d0001053000310001063400350001053800390001083c003d0001064000410001054400450001064800490001084c004d0001055000510001065400550001055800590001085c005d0001066000610001056400650001066800690001086c006d0001057000710001067400750001057800790001087c007d000106
                            `), music.PlaybackMode.UntilDone)
        music.play(music.createSong(hex`
                            00a0000408040205001c000f0a006400f4010a0000040000000000000000000000000000000002480000000400010c0c001000010c18001c00010c24002800010c30003400010c3c004000010d40004400010c4c005000010c58005c00010c64006800010c70007400010d78007c00010a09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800b0000000010001050400050001060800090001080c000d0001051000110001061400150001051800190001081c001d0001062000210001052400250001062800290001082c002d0001053000310001063400350001053800390001083c003d0001064000410001054400450001064800490001084c004d0001055000510001065400550001055800590001085c005d0001066000610001056400650001066800690001086c006d0001057000710003030608
                            `), music.PlaybackMode.UntilDone)
        music.play(music.createSong(hex`
                            00a0000408040504001c00100500640000041e000004000000000000000000000000000a040004480000000400010c0c001000010c18001c00010c24002800010c30003400010c3c004000010d40004400010c4c005000010c58005c00010c64006800010c70007400010d78007c00010d05001c000f0a006400f4010a000004000000000000000000000000000000000260000400080001180c00100001181400180001181c00200001182400280001182c00300001183400380001193c00400001164400480001184c00500001185400580001185c006000011864006800011d6c007000011d74007800019f7c008000019f07001c00020a006400f40164000004000000000000000000000000000000000360000000040001240c00100001241400180001241c00200001242400280001252c00300001273400380001293c00400001ab40004400012448004c0001245400580001245c006000012460006400012268006c00012570007400012978007c0001ab08001c000e050046006603320000040a002d00000064001400013200020100022f00000004000218242000300003181d243000400003169f254000440003181d246000700003169f25700080000393192909010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800c0000000010001050400050001060800090001080c000d0001051000110001061400150001051800190001081c001d0001062000210001052400250001062800290001082c002d0001053000310001063400350001053800390001083c003d0001064000410001054400450001064800490001084c004d0001055000510001065400550001055800590001085c005d0001066000610001056400650001066800690001086c006d0001057000710001067400750001057800790001087c007d000106
                            `), music.PlaybackMode.UntilDone)
        music.play(music.createSong(hex`
                            00a0000408040504001c00100500640000041e000004000000000000000000000000000a040004480000000400010c0c001000010c18001c00010c24002800010c30003400010c3c004000010d40004400010c4c005000010c58005c00010c64006800010c70007400010d78007c00010d05001c000f0a006400f4010a000004000000000000000000000000000000000260000400080001180c00100001181400180001181c00200001182400280001182c00300001183400380001193c00400001164400480001184c00500001185400580001185c006000011864006800011d6c007000011d74007800019f7c008000019f07001c00020a006400f40164000004000000000000000000000000000000000378000000040001240c00100001241400180001241c002000012420002400012524002800012228002c0001252c003000012230003400012934003800011d38003c0001ab3c004000011d40004400012448004c0001245400580001245c006000012460006400012268006c00012570007400012278007c00012508001c000e050046006603320000040a002d00000064001400013200020100022f00000004000218242000300003181d243000400003169f254000440003181d246000700003169f25700080000393192909010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800c0000000010001050400050001060800090001080c000d0001051000110001061400150001051800190001081c001d0001062000210001052400250001062800290001082c002d0001053000310001063400350001053800390001083c003d0001064000410001054400450001064800490001084c004d0001055000510001065400550001055800590001085c005d0001066000610001056400650001066800690001086c006d0001057000710001067400750001057800790001087c007d000106
                            `), music.PlaybackMode.UntilDone)
        music.play(music.createSong(hex`
                            00a0000408040602001c000c960064006d019001000478002c010000640032000000000a0600054e0008000c00012410001400012418001c00012428002c00012430003400012538003c00012248004c00012450005400012458005c00012460006400012568006c00012570007400012278007c00012504001c00100500640000041e000004000000000000000000000000000a040004480000000400010c0c001000010c18001c00010c24002800010c30003400010c3c004000010d40004400010c4c005000010c58005c00010c64006800010c70007400010d78007c00010d05001c000f0a006400f4010a000004000000000000000000000000000000000260000400080001180c00100001181400180001181c00200001182400280001182c00300001183400380001193c00400001164400480001184c00500001185400580001185c006000011864006800011d6c007000011d74007800019f7c008000019f07001c00020a006400f40164000004000000000000000000000000000000000360000000040001240c00100001241400180001241c00200001242400280001252c00300001273400380001293c00400001ab40004400012448004c0001245400580001245c006000012460006400012268006c00012570007400012978007c0001ab08001c000e050046006603320000040a002d00000064001400013200020100022f00000004000218242000300003181d243000400003169f254000440003181d246000700003169f25700080000393192909010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800c0000000010001050400050001060800090001080c000d0001051000110001061400150001051800190001081c001d0001062000210001052400250001062800290001082c002d0001053000310001063400350001053800390001083c003d0001064000410001054400450001064800490001084c004d0001055000510001065400550001055800590001085c005d0001066000610001056400650001066800690001086c006d0001057000710001067400750001057800790001087c007d000106
                            `), music.PlaybackMode.UntilDone)
        music.play(music.createSong(hex`
                            00a0000408040602001c000c960064006d019001000478002c010000640032000000000a0600055a0008000c00012410001400012418001c00012428002c00012230003400012538003c0001253c004000012248004c00012450005400012458005c0001245c006000012460006400012568006c00012570007400012978007c0001ab04001c00100500640000041e000004000000000000000000000000000a040004480000000400010c0c001000010c18001c00010c24002800010c30003400010c3c004000010d40004400010c4c005000010c58005c00010c64006800010c70007400010d78007c00010d05001c000f0a006400f4010a000004000000000000000000000000000000000260000400080001180c00100001181400180001181c00200001182400280001182c00300001183400380001193c00400001164400480001184c00500001185400580001185c006000011864006800011d6c007000011d74007800019f7c008000019f07001c00020a006400f40164000004000000000000000000000000000000000378000000040001240c00100001241400180001241c002000012420002400012524002800012228002c0001252c003000012230003400012934003800011d38003c0001ab3c004000011d40004400012448004c0001245400580001245c006000012460006400012268006c00012570007400012278007c00012508001c000e050046006603320000040a002d00000064001400013200020100022f00000004000218242000300003181d243000400003169f254000440003181d246000700003169f25700080000393192909010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800c0000000010001050400050001060800090001080c000d0001051000110001061400150001051800190001081c001d0001062000210001052400250001062800290001082c002d0001053000310001063400350001053800390001083c003d0001064000410001054400450001064800490001084c004d0001055000510001065400550001055800590001085c005d0001066000610001056400650001066800690001086c006d0001057000710001067400750001057800790001087c007d000106
                            `), music.PlaybackMode.UntilDone)
        music.play(music.createSong(hex`
                            00a0000408040602001c000c960064006d019001000478002c010000640032000000000a0600050c0050005800012470007800012404001c00100500640000041e000004000000000000000000000000000a040004240000002000010c20003800010c38004000010a40006000010c60007800010c78008000010a05001c000f0a006400f4010a000004000000000000000000000000000000000238000c00100001181c00200001182c00300001163c00400001164c00500001185c00600001186c00700002161d74007800019f7c00800002169f07001c00020a006400f401640000040000000000000000000000000000000003f00000000200012402000400012504000600012706000800012908000a0001240a000c0001250c000e0001270e001000012910001200012412001400012514001600012716001800012918001a0001241a001c0001251c001e0001271e002000012920002200012422002400012524002600012726002800012928002a0001242a002c0001252c002e0001272e003000012930003200012432003400012534003600012736003800012938003a0001243a003c0001253c003e0001273e004000012940004200012448004a00012950005200012458005a00012960006200012468006a00012970007200012478007a00012208001c000e050046006603320000040a002d000000640014000132000201000218000000200003181d242000300003169f25300040000311192209010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800b100000001000105040005000106080009000214080c000d000105100011000106140015000105180019000214081c001d000106200021000105240025000106280029000214082c002d000105300031000106340035000105380039000214083c003d00010640004100010548004900021408500051000106580059000214086000610001056800690002140870007100021406740075000114780079000214087a007b0001147c007d0001147e007f000114
                            `), music.PlaybackMode.UntilDone)
        music.play(music.createSong(hex`
                            00a0000408040602001c000c960064006d019001000478002c010000640032000000000a0600050c0050005800012470007800012404001c00100500640000041e000004000000000000000000000000000a040004240000002000010c20003800010c38004000010a40006000010c60007800010c78008000010a05001c000f0a006400f4010a000004000000000000000000000000000000000238000c00100001181c00200001182c00300001163c00400001164c00500001185c00600001186c00700002161d74007800019f7c00800002169f07001c00020a006400f401640000040000000000000000000000000000000003f00000000200012402000400012504000600012706000800012908000a0001240a000c0001250c000e0001270e001000012910001200012412001400012514001600012716001800012918001a0001241a001c0001251c001e0001271e002000012920002200012422002400012524002600012726002800012928002a0001242a002c0001252c002e0001272e003000012930003200012432003400012534003600012736003800012938003a0001243a003c0001253c003e0001273e004000012940004200012448004a00012950005200012458005a00012960006200012468006a00012970007200012478007a00012208001c000e050046006603320000040a002d000000640014000132000201000218000000200003181d242000300003169f25300040000311192209010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800b100000001000105040005000106080009000214080c000d000105100011000106140015000105180019000214081c001d000106200021000105240025000106280029000214082c002d000105300031000106340035000105380039000214083c003d00010640004100010548004900021408500051000106580059000214086000610001056800690002140870007100021406740075000114780079000214087a007b0001147c007d0001147e007f000114
                            `), music.PlaybackMode.UntilDone)
        music.play(music.createSong(hex`
                            00a0000408040602001c000c960064006d019001000478002c010000640032000000000a060005480008000c00012410001400012418001c00012428002c00012430003400012538003c00012248004c00012250005400012258005c00012268006c00012270007400012578007c00012504001c00100500640000041e000004000000000000000000000000000a040004480000000400010c0c001000010c18001c00010c24002800010c30003400010c3c004000010d40004400010a4c005000010a58005c00010a64006800010a70007400010a78007c00010a05001c000f0a006400f4010a000004000000000000000000000000000000000260000400080001180c00100001181400180001181c00200001182400280001182c00300001183400380001193c00400001164400480001164c00500001165400580001165c00600001166400680001166c00700001167400780001167c008000011607001c00020a006400f40164000004000000000000000000000000000000000360000000040001240c00100001241400180001241c00200001242400280001242c00300001223400380001203c004000019f40004400012448004c0001245400580001245c006000012460006400012268006c00012570007400012978007c0001ab08001c000e050046006603320000040a002d00000064001400013200020100022f00000004000218242000300003181d243000400003169f254000440003141b226000700003169f24700080000316192209010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800c0000000010001050400050001060800090001080c000d0001051000110001061400150001051800190001081c001d0001062000210001052400250001062800290001082c002d0001053000310001063400350001053800390001083c003d0001064000410001054400450001064800490001084c004d0001055000510001065400550001055800590001085c005d0001066000610001056400650001066800690001086c006d0001057000710001067400750001057800790001087c007d000106
                            `), music.PlaybackMode.UntilDone)
        music.play(music.createSong(hex`
                            00a0000408040602001c000c960064006d019001000478002c010000640032000000000a0600054e0008000c00012010001400012018001c00012028002c00012030003400012038003c0001203c004000011d48004c00019f50005400019f58005c00019f68006c00019f70007400019f78007c00019f04001c00100500640000041e000004000000000000000000000000000a04000448000000040001080c001000010818001c0001082400280001083000340001083c00400001084000440001874c005000018758005c00018764006800018770007400018778007c00018705001c000f0a006400f4010a000004000000000000000000000000000000000260000400080001140c00100001141400180001141c00200001142400280001142c00300001143400380001143c00400001144400480001934c00500001935400580001935c00600001936400680001936c00700001937400780001937c008000019307001c00020a006400f40164000004000000000000000000000000000000000360000000040001200c00100001201400180001201c00200001202400280001202c003000012034003800019f3c004000019f40004400012448004c0001245400580001245c006000012460006400012268006c00012570007400012978007c0001ab08001c000e050046006603320000040a002d0000006400140001320002010002300000000400031618202000300003161820300040000316182040004400030d149f60007000030d149f700080000316192209010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800c0000000010001050400050001060800090001080c000d0001051000110001061400150001051800190001081c001d0001062000210001052400250001062800290001082c002d0001053000310001063400350001053800390001083c003d0001064000410001054400450001064800490001084c004d0001055000510001065400550001055800590001085c005d0001066000610001056400650001066800690001086c006d0001057000710001067400750001057800790001087c007d000106
                            `), music.PlaybackMode.UntilDone)
        music.play(music.createSong(hex`
                            00a0000408040602001c000c960064006d019001000478002c010000640032000000000a0600050c0050005800012470007800012404001c00100500640000041e000004000000000000000000000000000a040004240000002000010c20003800010c38004000010a40006000010c60007800010d78008000010a05001c000f0a006400f4010a000004000000000000000000000000000000000230000c00100001181c00200001182c00300001163c00400001164c00500001185c00600001186c007000011978007c00011907001c00020a006400f401640000040000000000000000000000000000000003f00000000200012402000400012504000600012706000800012908000a0001240a000c0001250c000e0001270e001000012910001200012412001400012514001600012716001800012918001a0001241a001c0001251c001e0001271e002000012920002200012422002400012524002600012726002800012928002a0001242a002c0001252c002e0001272e003000012930003200012432003400012534003600012736003800012938003a0001243a003c0001253c003e0001273e004000012940004200012448004a00012950005200012458005a00012960006200012568006a00012970007200012578007c00012908001c000e050046006603320000040a002d000000640014000132000201000218000000200003181d242000300003169f25300040000311192209010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800b100000001000105040005000106080009000214080c000d000105100011000106140015000105180019000214081c001d000106200021000105240025000106280029000214082c002d000105300031000106340035000105380039000214083c003d00010640004100010548004900021408500051000106580059000214086000610001056800690002140870007100021406740075000114780079000214087a007b0001147c007d0001147e007f000114
                            `), music.PlaybackMode.UntilDone)
        music.play(music.createSong(hex`
                            00a0000408040602001c000c960064006d019001000478002c010000640032000000000a0600050c0050005800012470007800012404001c00100500640000041e000004000000000000000000000000000a040004240000002000010c20003800010c38004000010a40006000010c60007800010d78008000010a05001c000f0a006400f4010a000004000000000000000000000000000000000230000c00100001181c00200001182c00300001163c00400001164c00500001185c00600001186c007000011978007c00011907001c00020a006400f401640000040000000000000000000000000000000003f00000000200012402000400012504000600012706000800012908000a0001240a000c0001250c000e0001270e001000012910001200012412001400012514001600012716001800012918001a0001241a001c0001251c001e0001271e002000012920002200012422002400012524002600012726002800012928002a0001242a002c0001252c002e0001272e003000012930003200012432003400012534003600012736003800012938003a0001243a003c0001253c003e0001273e004000012940004200012448004a00012950005200012458005a00012960006200012568006a00012970007200012578007c00012908001c000e050046006603320000040a002d000000640014000132000201000218000000200003181d242000300003169f25300040000311192209010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800b100000001000105040005000106080009000214080c000d000105100011000106140015000105180019000214081c001d000106200021000105240025000106280029000214082c002d000105300031000106340035000105380039000214083c003d00010640004100010548004900021408500051000106580059000214086000610001056800690002140870007100021406740075000114780079000214087a007b0001147c007d0001147e007f000114
                            `), music.PlaybackMode.UntilDone)
        music.play(music.createSong(hex`
                            00a0000408040602001c000c960064006d019001000478002c010000640032000000000a060005480008000c00012410001400012418001c00012428002c00012430003400012538003c00012248004c00012250005400012258005c00012268006c00012270007400012578007c00012504001c00100500640000041e000004000000000000000000000000000a040004480000000400010c0c001000010c18001c00010c24002800010c30003400010c3c004000010d40004400010a4c005000010a58005c00010a64006800010a70007400010a78007c00010a05001c000f0a006400f4010a000004000000000000000000000000000000000260000400080001180c00100001181400180001181c00200001182400280001182c00300001183400380001193c00400001164400480001164c00500001165400580001165c00600001166400680001166c00700001167400780001167c008000011607001c00020a006400f40164000004000000000000000000000000000000000360000000040001240c00100001241400180001241c00200001242400280001242c00300001223400380001203c004000019f40004400012448004c0001245400580001245c006000012460006400012268006c00012570007400012978007c0001ab08001c000e050046006603320000040a002d00000064001400013200020100022f00000004000218242000300003181d243000400003169f254000440003141b226000700003169f24700080000316192209010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800c0000000010001050400050001060800090001080c000d0001051000110001061400150001051800190001081c001d0001062000210001052400250001062800290001082c002d0001053000310001063400350001053800390001083c003d0001064000410001054400450001064800490001084c004d0001055000510001065400550001055800590001085c005d0001066000610001056400650001066800690001086c006d0001057000710001067400750001057800790001087c007d000106
                            `), music.PlaybackMode.UntilDone)
        music.play(music.createSong(hex`
                            00a0000408040602001c000c960064006d019001000478002c010000640032000000000a0600054e0008000c00012010001400012018001c00012028002c00012030003400012038003c0001203c004000011d48004c00019f50005400019f58005c00019f68006c00019f70007400019f78007c00019f04001c00100500640000041e000004000000000000000000000000000a04000448000000040001080c001000010818001c0001082400280001083000340001083c00400001084000440001874c005000018758005c00018764006800018770007400018778007c00018705001c000f0a006400f4010a000004000000000000000000000000000000000260000400080001140c00100001141400180001141c00200001142400280001142c00300001143400380001143c00400001144400480001934c00500001935400580001935c00600001936400680001936c00700001937400780001937c008000019307001c00020a006400f40164000004000000000000000000000000000000000360000000040001200c00100001201400180001201c00200001202400280001202c003000012034003800019f3c004000019f40004400012448004c0001245400580001245c006000012460006400012268006c00012570007400012978007c0001ab08001c000e050046006603320000040a002d0000006400140001320002010002300000000400031618202000300003161820300040000316182040004400030d149f60007000030d149f700080000316192209010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800c0000000010001050400050001060800090001080c000d0001051000110001061400150001051800190001081c001d0001062000210001052400250001062800290001082c002d0001053000310001063400350001053800390001083c003d0001064000410001054400450001064800490001084c004d0001055000510001065400550001055800590001085c005d0001066000610001056400650001066800690001086c006d0001057000710001067400750001057800790001087c007d000106
                            `), music.PlaybackMode.UntilDone)
        music.play(music.createSong(hex`
                            00a0000408040504001c00100500640000041e000004000000000000000000000000000a040004480000000400010c0c001000010c18001c00010c24002800010c30003400010c3c004000010d40004400010c4c005000010c58005c00010c64006800010c70007400010d78007c00010d05001c000f0a006400f4010a000004000000000000000000000000000000000260000400080001180c00100001181400180001181c00200001182400280001182c00300001183400380001193c00400001164400480001184c00500001185400580001185c006000011864006800011d6c007000011d74007800019f7c008000019f07001c00020a006400f40164000004000000000000000000000000000000000360000000040001240c00100001241400180001241c00200001242400280001252c00300001273400380001293c00400001ab40004400012448004c0001245400580001245c006000012460006400012268006c00012570007400012978007c0001ab08001c000e050046006603320000040a002d00000064001400013200020100022f00000004000218242000300003181d243000400003169f254000440003181d246000700003169f25700080000393192909010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80060002000210001062800290001063000310001063800390001064000410001054400450001064800490001084c004d0001055000510001065400550001055800590001085c005d000106600061000105680069000105700071000105780079000105
                            `), music.PlaybackMode.UntilDone)
        music.play(music.createSong(hex`
                            00a0000408040504001c00100500640000041e000004000000000000000000000000000a040004480000000400010c0c001000010c18001c00010c24002800010c30003400010c3c004000010d40004400010c4c005000010c58005c00010c64006800010c70007400010d78007c00010d05001c000f0a006400f4010a000004000000000000000000000000000000000260000400080001180c00100001181400180001181c00200001182400280001182c00300001183400380001193c00400001164400480001184c00500001185400580001185c006000011864006800011d6c007000011d74007800019f7c008000019f07001c00020a006400f40164000004000000000000000000000000000000000378000000040001240c00100001241400180001241c002000012420002400012524002800012228002c0001252c003000012230003400012934003800011d38003c0001ab3c004000011d40004400012448004c0001245400580001245c006000012460006400012268006c00012570007400012278007c00012508001c000e050046006603320000040a002d00000064001400013200020100022f00000004000218242000300003181d243000400003169f254000440003181d246000700003169f25700080000393192909010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80060002000210001052800290001053000310001053800390001054000410001054400450001064800490001084c004d0001055000510001065400550001055800590001085c005d000106600061000105680069000105700071000105780079000105
                            `), music.PlaybackMode.UntilDone)
        music.play(music.createSong(hex`
                            00a0000408010602001c000c960064006d019001000478002c010000640032000000000a060005060000000400012404001c00100500640000041e000004000000000000000000000000000a040004060000000400010c05001c000f0a006400f4010a0000040000000000000000000000000000000002060000000400011807001c00020a006400f401640000040000000000000000000000000000000003060000000400012408001c000e050046006603320000040a002d000000640014000132000201000207000000040002182409010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8000a0000000100051404050708
                            `), music.PlaybackMode.UntilDone)
    }
})
