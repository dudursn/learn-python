

function criaJogo(){
	var $sprite = createSprite(".sprite");
	var $entrada = $(".entrada");
	var $lacunas = $(".lacunas");
	var j = new JogoController($entrada, $lacunas, $sprite);
	return j;
}


class JogoController{

	constructor($entrada, $lacunas,$sprite, palavraSecreta="", etapa=1, lacunas=[]){
		this.$entrada = $entrada;
		this.$lacunas = $lacunas;
		this.$sprite = $sprite;
		this.buffer = [];
		this.jogo = new Jogo(palavraSecreta, etapa, lacunas);
	}

	getLacunas(){
		return this.jogo.getLacunas();
	}	

	getEtapa(){
		return this.jogo.getEtapa();
	}

	setPalavraSecreta(palavraSecreta){

		var qtd = palavraSecreta.length, lacunas = [];

		this.jogo.setEtapa(2);

		for(let i = 0; i<qtd;i+=1)
			lacunas.push("");
		//var lacunas = Array(palavraSecreta.length).fill('')

		this.jogo.setLacunas(lacunas);

		this.jogo.setPalavraSecreta(palavraSecreta);
	}

	// consulta jogo.getLacunas() e exibe para o usuário cada lacuna 
	exibeLacunas() {

		if(this.getLacunas()==2){
			this.lacunas.forEach(){}
			var li = $("li");
			li.append(".lacuna");

			this.$lacunas.append(li);

		}
    };

    // muda o texto do placeHolder do campo de entrada    
    mudaPlaceHolder(texto) {

        console.log('falta implementar');
    };

    // passa para jogo.setPalavraSecreta() o valor digitado pelo jogador e chama o a função `exibeLacunas()` e `mudaPlaceHolder()` definidas no controller. 
    guardaPalavraSecreta() {

		this.setPalavraSecreta(this.$entrada.val());
		this.exibeLacunas();        
    };

    // faz a associação do evento keypress para capturar a entrada do usuário toda vez que ele teclar ENTER
    inicia() {

        this.$entrada.keypress(function (event) {
            if (event.which == 13) {
                switch (this.jogo.getEtapa()) {
                    case 1:
						guardaPalavraSecreta();
                        break;
                    case 2:
                        alert('etapa 2 - falta implementar');
                        break;
                }
            }
        });
    };

	processaChute(chute){
		if(this.jogo.getPalavraSecreta!=""){
			var encontrou = false, exp, resultado = [];
			//Verifica se o chute ja foi dado 
			if (!this.buffer.includes(chute)){

				//Adiciona um chute ao buffer
				this.buffer.push(chute)

				//Cria regex - g: busca além da primeira ocorrencia, i:nao diferencia mauiuscula e minuscula
				exp = new RegExp(chute,"gi");
				while(resultado!=null){
					resultado = exp.exec(this.jogo.getPalavraSecreta());
					if (resultado!=null){
						encontrou = true;
						this.preencheLacuna(resultado.index, chute);
					}
				}
				
				if (encontrou == false){
					this.preencheSprite();
				}
			}
		}
	}

	preencheLacuna(pos, chute){
		this.jogo.getLacunas()[pos] = chute;
	}
	preencheSprite(){
		this.$sprite.nextFrame();
	}

	ganhou(){
		var exp, 
			palavraNasLacunas = this.jogo.getLacunas().join(""),
			palavraResposta = this.jogo.getPalavraSecreta();

		if(palavraResposta!=""){
			exp = new RegExp(palavraResposta,"i");
			return exp.test(palavraNasLacunas);
		}
		return false;
	}

	perdeu(){
		return this.$sprite.isFinished();
	}

	ganhouOuPerdeu(){
		return(this.ganhou() || this.perdeu());
	}

	reinicia(){
		this.$sprite.reset();
		this.buffer = [];
		this.jogo = new Jogo("", 1, []);
	}

}
