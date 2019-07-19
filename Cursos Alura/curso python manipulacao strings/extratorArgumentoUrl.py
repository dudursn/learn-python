'''
	Metodos de strings aprendidos

		find, replace, split
		
	    Os métodos upper() e lower();

	    O método replace()

	    O método in

	    Os métodos startwith, endwith


'''
class ExtratorArgumentoUrl:

	def __init__(self, url):

		if self.urlEhValida(url):

			self.url = url.lower()


	def __len__(self):

		return len(self.url)
			

	def __str__(self):

		moedaOrigem, moedaDestino = self.extraiArgumentos2()
		representacaoStr2 = "Valor: "+self.extraiValor() + " " + moedaOrigem + " "\
			+ moedaDestino

		representacaoStr = "Valor: {}\nMoeda Origem: {} \nMoeda Destino: {}"\
			.format(self.extraiValor(), moedaOrigem, moedaDestino)

		return representacaoStr


	def __eq__(self, outraInstancia):
		
		return self.url == outraInstancia.url


	@staticmethod
	def urlEhValida(url):

		#startswith - verifica se uma string começa com algum texto que queremos ou não
		if url and url.startswith("https://www.bytebank.com.br"):
			return True

		return False


	def extraiArgumentos(self):

		indiceInicialMoedaOrigem = self.url.find("=") + 1
		indiceFinalMoedaOrigem = self.url.find("&")

		#O segundo parâmetro define o índice que começará a ser feita a busca
		indiceInicialMoedaDestino = self.url.find("=", indiceFinalMoedaOrigem) +1
		indiceFinalMoedaDestino = self.url.find("&", indiceInicialMoedaDestino)

		moedaOrigem = self.url[indiceInicialMoedaOrigem:indiceFinalMoedaOrigem]
		moedaDestino = self.url[indiceInicialMoedaDestino:indiceFinalMoedaDestino]
		
		return moedaOrigem, moedaDestino


	def extraiArgumentos2(self):

		buscaMoedaOrigem = "moedaorigem="
		buscaMoedaDestino = "moedadestino="

		indiceInicialMoedaOrigem = self.encontraIndiceInicial(buscaMoedaOrigem)
		indiceFinalMoedaOrigem = self.url.find("&")
		moedaOrigem = self.url[indiceInicialMoedaOrigem:indiceFinalMoedaOrigem]

		if moedaOrigem.lower() =="moedaorigem":

			moedaOrigem = self.trocaMoedaOrigem()

		indiceInicialMoedaDestino = self.encontraIndiceInicial(buscaMoedaDestino)
		indiceFinalMoedaDestino = self.url.find("&", indiceInicialMoedaDestino)
		moedaDestino = self.url[indiceInicialMoedaDestino:indiceFinalMoedaDestino]

		return moedaOrigem, moedaDestino


	#Método find
	def encontraIndiceInicial(self, string):

		return self.url.find(string) + len(string) 


	#Método Replace
	def trocaMoedaOrigem(self):

		#O terceito parâmetro refere-se aos números de índices encontrados que devem ser substituídos
		self.url = self.url.replace("moedadestino", "real", 1)
		

	def extraiValor(self):

		buscaValor = "valor="
		indiceInicialValor = self.encontraIndiceInicial(buscaValor)
		valor = self.url[indiceInicialValor:]
		
		return valor
