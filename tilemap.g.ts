// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile12 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile13 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile14 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile15 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile17 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile18 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile20 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "Beach_0":
            case "Beach_1":return tiles.createTilemap(hex`100008000404040404040404040404040404040405020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202060202020202020202030303030303030303030303030303030101010101010101010101010101010101010101010101010101010101010101`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile4,myTiles.tile5,myTiles.tile7,myTiles.tile3], TileScale.Sixteen);
            case "level":
            case "level1":return tiles.createTilemap(hex`0a00080004040404040404040404030101010101010101010101010701070701010101070606060606060101010505050505050505070505050505050c0c0c0505080505050a0909090909090909090b02020202`, img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile2,myTiles.tile4,myTiles.tile7,myTiles.tile5,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile12,myTiles.tile13,myTiles.tile14,myTiles.tile15,myTiles.tile16], TileScale.Sixteen);
            case "Dock_0":
            case "Beach_2":return tiles.createTilemap(hex`100008000404040404040404040404040404040405020202020202020202020202020206080202020202020202020202080608070303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030301010101010101010101010101010101`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile4,myTiles.tile5,myTiles.tile7,myTiles.tile3,myTiles.tile8,myTiles.tile10], TileScale.Sixteen);
            case "Farm_0":
            case "level2":return tiles.createTilemap(hex`1000080004040404040404040404040404040404050202020202020202020202020202020a020202020202020202020202020a06080a02020202020202020a060208080703030303030303030303030303030303010101010101010101010101010101010101010101010101010101010101010109090909090909090909090909090909`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile4,myTiles.tile5,myTiles.tile7,myTiles.tile3,myTiles.tile8,myTiles.tile9,myTiles.tile6,myTiles.tile10], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "Sand":
            case "tile1":return tile1;
            case "Sky1":
            case "tile2":return tile2;
            case "Water":
            case "tile4":return tile4;
            case "Sun":
            case "tile7":return tile7;
            case "Sky2":
            case "tile3":return tile3;
            case "Sky":
            case "tile5":return tile5;
            case "myTile":
            case "tile8":return tile8;
            case "myTile0":
            case "tile9":return tile9;
            case "myTile2":
            case "tile12":return tile12;
            case "myTile3":
            case "tile13":return tile13;
            case "myTile4":
            case "tile14":return tile14;
            case "Water0":
            case "tile15":return tile15;
            case "myTile5":
            case "tile16":return tile16;
            case "myTile6":
            case "tile17":return tile17;
            case "myTile7":
            case "tile18":return tile18;
            case "myTile9":
            case "tile20":return tile20;
            case "myTile1":
            case "tile6":return tile6;
            case "myTile8":
            case "tile11":return tile11;
            case "Sky3":
            case "tile10":return tile10;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
