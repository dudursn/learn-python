import csv

def carregar_acessos():
    dados = []
   
    arquivo = open('acesso.csv','r')
    leitor = csv.reader(arquivo)

    #Caso a primeira linha tenha o nome dos atributos e da classe
    next(leitor)

    for acessou_home, acessou_como_funciona, acessou_contato, comprou in leitor:
        dados.append([int(acessou_home), int(acessou_como_funciona), int(acessou_contato), int(comprou)])
      
    return dados
