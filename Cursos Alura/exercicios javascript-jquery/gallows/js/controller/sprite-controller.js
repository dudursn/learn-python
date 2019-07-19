function createSprite(seletorCSS){

	var sprite =  null
	numFrames = 9
	while(numFrames>0){

		var proximo = sprite;
		sprite = new Sprite("frame"+numFrames, seletorCSS, proximo);
		numFrames -=1
	}
	return sprite;
}