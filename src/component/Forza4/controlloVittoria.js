function checkWin(game){
	//const pDir=[[1,0], [0, 1], [1,1], [1,-1]] /* colonna, riga */ 
	return controllaDirezione(game, [1,0]) || controllaDirezione(game, [0, 1]) || controllaDirezione(game, [1,1]) || controllaDirezione(game, [1,-1]);
}

function controllaDirezione(game, direzione){
	let num=controllaVerso(game, direzione) + controllaVerso(game, [-direzione[0],-direzione[1]])
	return num>=3; /*3 perché l'elemento appena selezionato sarà sicuramente valido */
}

function controllaVerso(game, direzione){
	let [x,y]=[game.lastInserted.colonna, game.lastInserted.riga];
	const grid=game.griglia;

	let count=0;
	for(let colore=grid[x][y]; checkBound(x,y) && colore===grid[x][y]; count++, x+=direzione[0], y+=direzione[1]);
	return count-1;/*devo rimuovere l'elemento iniziale che non serve*/

}
function checkBound(x,y){
	if(x >= 0 && x < 7 && y >= 0 && y < 6)
		return true;
	return false;
}

export default checkWin;