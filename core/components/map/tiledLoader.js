

function loadMap (map, data, blocksID, waterID) {
    
    /*let height = mapData.height;
    let width = mapData.width;
    let layers = mapData.layers.length;*/
    //console.log('Map loading - height:', height, ', width:', width, ', layers:', layers);

    map.layers.forEach(function (layer, layerIndex) {
        const layerData = layer.data;
        layerData.forEach (function (block, blockIndex) {
            
            let x = blockIndex;
            let y = Math.floor(blockIndex/layer.width);
            let z = layerIndex;

            if (x >= layer.width) x = x - y * 20;

            if (block < 1) data.set(x, z, y, waterID);
            else data.set(x, z, y, blocksID);

            //old map creation
            //if (block < 1) box.Engine.noa.setBlock(waterID, x, z, y);
            //else box.Engine.noa.setBlock(blocksID, x, z, y);
            //console.log ('block number', blockIndex, 'x', x, 'y', y, 'z', z);
        });
    });  

}

export default loadMap;