
function newImage(source, left, bottom){
    let imageName = document.createElement('img');
    imageName.src = source;
    imageName.style.position = 'fixed';
    imageName.style.left = left;
    imageName.style.bottom = bottom;
    document.body.append(imageName);
}

newImage('assets/green-character.gif', '100px', '100px');
newImage('assets/pine-tree.png', '450px', '200px');
newImage('assets/tree.png', '200px', '300px');
newImage('assets/pillar.png', '350px', '100px');
newImage('assets/crate.png', '150px', '200px');
newImage('assets/well.png', '500px', '425px');

function newItem(source, left, bottom){
    let itemName = document.createElement('img');
    itemName.src = source;
    itemName.style.position = 'fixed';
    itemName.style.left = left;
    itemName.style.bottom = bottom;
    document.body.append(itemName);
    itemName.addEventListener('dblclick', function(){
        itemName.remove();
    });
}
newItem('assets/sword.png', '500px', '405px');
newItem('assets/sheild.png', '165px', '185px');
newItem('assets/staff.png', '600px', '100px');


for(let a=0; a<window.innerHeight/200; a++){
        document.body.style.backgroundImage = 'url(assets/grass.png)';
}
for(let i= window.innerHeight; i>window.innerHeight/2; i--){
        document.body.style.backgroundImage = 'url(assets/sky.png)';
}