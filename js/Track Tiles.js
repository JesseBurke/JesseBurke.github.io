//Tile Attributes
const TILE_WIDTH = 20,                                                       //Width of tile
      TILE_HEIGHT = 20,                                                      //Height of tile   
      NUM_OF_ROWS = (600/TILE_HEIGHT),                                       //Total rows of tiles == c.width/TILE_HEIGHT
      NUM_OF_COLS = (800/TILE_WIDTH),                                        //Total columns of tiles == c.height/TILE_WIDTH
      TILE_GAP = 2,                                                          //Gap distance between tiles
      TILE_COLOUR = 'palegreen';                                             //Colour of tiles

//Tile Grid Array
var trackOne = new Array //Create an array to contain the layout of the tracks tiles
                      //0 == track piece, 1 == Wall, 2 = Player Spawn
                     (3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,
                      3,3,3,3,1,1,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,3,3,3,3,3,3,1,1,1,1,1,1,1,1,3,3,
                      3,3,3,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,3,3,3,3,1,1,0,0,0,0,0,0,1,1,3,
                      3,3,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,1,3,3,3,1,1,0,0,0,0,0,0,0,0,1,1,
                      3,3,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,4,0,0,0,0,1,3,3,3,1,0,0,0,0,0,0,0,0,0,0,1,
                      3,1,4,0,0,0,0,0,0,1,1,3,3,3,3,3,3,1,1,4,0,0,0,0,1,3,3,1,1,0,0,0,1,1,1,1,0,0,0,1,
                      1,1,0,0,0,0,0,0,1,1,3,3,3,3,1,1,1,1,0,0,0,0,0,4,1,3,3,1,0,0,0,1,1,3,3,1,4,0,0,1,
                      1,4,0,0,0,0,0,1,1,3,3,3,1,1,1,0,0,0,0,0,0,0,0,1,1,3,1,1,0,0,0,1,3,3,3,1,4,0,0,1,
                      1,0,0,0,0,0,0,1,3,3,3,1,1,0,0,0,0,0,0,0,0,0,4,1,1,1,1,0,0,0,0,1,3,3,3,1,0,0,0,1,
                      1,0,0,0,0,0,1,1,3,3,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,3,3,1,1,0,0,0,1,
                      1,0,0,0,0,0,1,3,3,1,1,0,0,0,0,0,0,1,1,3,3,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,
                      1,0,0,0,0,0,1,3,3,1,4,0,0,0,0,1,1,1,3,3,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,4,1,
                      1,0,0,0,0,0,1,3,3,1,0,0,0,0,1,1,3,3,3,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,4,1,
                      1,0,9,0,9,0,1,3,3,1,0,0,0,0,1,3,3,3,1,1,0,0,0,0,1,1,3,3,3,3,1,0,0,0,0,0,0,0,0,1,
                      1,0,0,0,0,0,1,3,3,1,0,0,0,0,1,3,3,3,1,0,0,0,0,1,1,3,3,3,3,3,1,0,0,1,1,1,0,0,0,1,
                      1,2,2,2,2,2,1,3,3,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,3,3,3,3,3,3,1,0,0,1,3,1,0,0,0,1,
                      1,0,0,0,0,0,1,3,3,1,4,0,0,0,0,0,0,0,0,0,0,0,4,1,1,1,1,1,1,1,1,0,0,1,3,1,0,0,0,1,
                      1,0,0,0,0,0,1,3,3,1,4,0,0,0,0,0,0,0,0,0,0,0,4,4,4,0,0,0,4,4,0,0,1,1,3,1,0,0,0,1,
                      1,0,0,0,0,0,1,3,3,1,1,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,3,3,1,0,0,0,1,
                      1,0,0,0,0,0,1,3,3,3,1,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,4,1,3,3,1,0,0,0,1,
                      1,0,0,0,0,0,1,3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,3,1,0,0,0,1,
                      1,0,0,0,0,0,1,3,3,3,3,3,3,3,3,3,3,3,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,3,3,1,0,0,0,1,
                      1,0,0,0,0,0,1,3,3,3,3,3,3,1,1,1,1,1,1,0,0,0,0,4,1,1,1,1,1,3,3,3,3,3,3,1,0,0,0,1,
                      1,0,0,0,0,0,1,1,3,3,3,3,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,3,3,3,1,0,0,0,1,
                      1,4,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,3,3,1,0,0,0,1,
                      1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,
                      3,1,1,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
                      3,3,1,1,1,0,0,0,0,0,0,0,0,0,0,0,4,1,1,1,3,3,3,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,4,1,
                      3,3,3,3,1,1,4,0,0,0,0,0,0,0,1,1,1,1,3,3,3,3,3,3,3,3,3,3,1,1,0,0,0,0,0,0,0,4,1,1,
                      3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,3);

var tiles = trackOne.slice();

//Track Tile Values
const TILE_ROAD = 0,
      TILE_WALL = 1,
      TILE_CHECKERED = 2,
      TILE_GRASS = 3,
      TILE_CRATE = 4,
      TILE_PATH = 5,
      TILE_PLAYER_SPAWN = 9;

function calcTileGridIndex(c, r){                                            //Calculate tile id using col and row
    return (r * NUM_OF_COLS) + c;                                            //id = (current row * total columns) + current column 
}

function drawTiles(){

    var gridIndex = 0;
    var nextTileX = 0;
    var nextTileY = 0;
    for(var row=0; row<NUM_OF_ROWS; row++){                                  //Loop NUM_OF_ROWS and carry a row id to assign to each tile        
        for(var col=0; col<NUM_OF_COLS; col++){                              //Loop NUM_OF_COLS and carry a col id to assign to each
            var tileType = tiles[gridIndex];
            var tileImg = tilePics[tileType];   

            cc.drawImage(tileImg,nextTileX,nextTileY);
            nextTileX += TILE_WIDTH;
            gridIndex++;
        } // stop the current row of tiles
        nextTileX = 0;
        nextTileY += TILE_HEIGHT;
    }
}

function returnTileTypeAtIndex(col,row){
    if(col >= 0 && col < NUM_OF_COLS &&
       row >= 0 && row < NUM_OF_ROWS){
        var tileIndexAtPosition = calcTileGridIndex(col,row);
        return tiles[tileIndexAtPosition];
    } else {
        return TILE_WALL;
    }
}

function detectCarTileCollision(carObj){
    var carGridCol = Math.floor(carObj.x/TILE_WIDTH);                        //Calculate the column of the current car x position
    var carGridRow = Math.floor(carObj.y/TILE_HEIGHT);                       //Calculate the row of the current car y position
    var carIndex = calcTileGridIndex(carGridCol,carGridRow);             //Use the above two values to pinpoint the current hitbox position
        
    if(carGridRow < NUM_OF_ROWS && carGridRow >= 0                       /**This determines car to tile collision*/    
    && carGridCol < NUM_OF_COLS && carGridCol >= 0){                     //If the car is within the bounds of the tile grid
        var currentTile = returnTileTypeAtIndex(carGridCol,carGridRow);
            
        if(currentTile == TILE_CHECKERED){
            console.log(carObj.name + " WINS!");
            //loadTrack(trackOne);
        } else if(currentTile != TILE_ROAD){
            console.log("Am I stuck?");
            carObj.velocity *= -0.5;
            carObj.x += 2*(Math.cos(carObj.angle)*carObj.velocity);                                                                                
            carObj.y += 2*(Math.sin(carObj.angle)*carObj.velocity); 
        }//stop checking the colliding tile 
    } //stop checking if the car is within grid
}

/* Default map with drive path included
                     (3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,
                      3,3,3,3,1,1,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,3,3,3,3,3,3,1,1,1,1,1,1,1,1,3,3,
                      3,3,3,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,3,3,3,3,1,1,0,0,0,0,0,0,1,1,3,
                      3,3,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,1,3,3,3,1,1,0,0,0,0,0,0,0,0,1,1,
                      3,3,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,4,0,0,0,0,1,3,3,3,1,0,0,0,0,0,0,0,0,0,0,1,
                      3,1,4,0,0,0,0,0,0,1,1,3,3,3,3,3,3,1,1,4,0,0,0,0,1,3,3,1,1,0,0,0,1,1,1,1,0,0,0,1,
                      1,1,0,0,0,0,0,0,1,1,3,3,3,3,1,1,1,1,0,0,0,0,0,4,1,3,3,1,0,0,0,1,1,3,3,1,4,0,0,1,
                      1,4,0,0,0,0,0,1,1,3,3,3,1,1,1,0,0,0,0,0,0,0,0,1,1,3,1,1,0,0,0,1,3,3,3,1,4,0,0,1,
                      1,0,0,0,0,0,0,1,3,3,3,1,1,0,0,0,0,0,0,0,0,0,4,1,1,1,1,0,0,0,0,1,3,3,3,1,0,0,0,1,
                      1,0,0,0,0,0,1,1,3,3,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,3,3,1,1,0,0,0,1,
                      1,0,0,0,0,0,1,3,3,1,1,0,0,0,0,0,0,1,1,3,3,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,
                      1,0,0,0,0,0,1,3,3,1,4,0,0,0,0,1,1,1,3,3,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,4,1,
                      1,0,0,0,0,0,1,3,3,1,0,0,0,0,1,1,3,3,3,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,4,1,
                      1,0,0,0,0,0,1,3,3,1,0,0,0,0,1,3,3,3,1,1,0,0,0,0,1,1,3,3,3,3,1,0,0,0,0,0,0,0,0,1,
                      1,0,0,0,0,0,1,3,3,1,0,0,0,0,1,3,3,3,1,0,0,0,0,1,1,3,3,3,3,3,1,0,0,1,1,1,0,0,0,1,
                      1,0,0,0,0,0,1,3,3,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,3,3,3,3,3,3,1,0,0,1,3,1,0,0,0,1,
                      1,0,0,9,0,0,1,3,3,1,4,0,0,0,0,0,0,0,0,0,0,0,4,1,1,1,1,1,1,1,1,0,0,1,3,1,0,0,0,1,
                      1,2,2,2,2,2,1,3,3,1,4,0,0,0,0,0,0,0,0,0,0,0,4,4,4,0,0,0,4,4,0,0,1,1,3,1,0,0,0,1,
                      1,2,2,2,2,2,1,3,3,1,1,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,3,3,1,0,0,0,1,
                      1,0,0,0,0,0,1,3,3,3,1,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,4,1,3,3,1,0,0,0,1,
                      1,0,0,0,0,0,1,3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,3,1,0,0,0,1,
                      1,0,0,0,0,0,1,3,3,3,3,3,3,3,3,3,3,3,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,3,3,1,0,0,0,1,
                      1,0,0,0,0,0,1,3,3,3,3,3,3,1,1,1,1,1,1,0,0,0,0,4,1,1,1,1,1,3,3,3,3,3,3,1,0,0,0,1,
                      1,0,0,0,0,0,1,1,3,3,3,3,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,3,3,3,1,0,0,0,1,
                      1,4,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,3,3,1,0,0,0,1,
                      1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,
                      3,1,1,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
                      3,3,1,1,1,0,0,0,0,0,0,0,0,0,0,0,4,1,1,1,3,3,3,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,4,1,
                      3,3,3,3,1,1,4,0,0,0,0,0,0,0,1,1,1,1,3,3,3,3,3,3,3,3,3,3,1,1,0,0,0,0,0,0,0,4,1,1,
                      3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,3)
                      */