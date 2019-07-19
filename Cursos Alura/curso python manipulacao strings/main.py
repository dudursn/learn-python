from extratorArgumentoUrl import ExtratorArgumentoUrl

site = "https://www.bytebank.com.br/cambio?moedaOrigem=real&moedadestino=dolar&valor=1500"

try:

	extrator = ExtratorArgumentoUrl(site)

	#Extrator tem um método especial definido em  def __len__(self):
	print(len(extrator))
	print(extrator)
	mO, mD = extrator.extraiArgumentos2()
	v = extrator.extraiValor()

except Exception as e: 
	print(e)
	