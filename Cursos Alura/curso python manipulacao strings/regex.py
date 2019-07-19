import re
# re.search, re.findall e group()
txt  = "Meu número é 1234-1234"
txt2 = "1234-1234 é o meu celular"
txt3 = "Fale comigo em 1234-1234, esse é meu telefone"
txt4 = "Esse numero é 12346123"

padrao = "[0-9]{4}-*[0-9]{4}"

try:
	#Search - encontra a string com o padrão estabelecido
	retorno = re.search(padrao, txt4)
	print(retorno.group())

except Exception as e: 
	print(e)
	
