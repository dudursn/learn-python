import csv
import pandas as pd

#Modo tradicional
def carregar_buscas():
    dados = []
   
    arquivo = open('entrada-buscas.csv','r')
    leitor = csv.reader(arquivo)

    #Caso a primeira linha tenha o nome dos atributos e da classe
    next(leitor)

    for home,busca,logado,comprou in leitor:
        dado = [int(home)]
        #Utilizar dummies
        if busca=='algoritmos':
            dado.extend([1,0,0])
        elif busca=='java':
            dado.extend([0,1,0])
        else:
            dado.extend([0,0,1])
        dado.extend([int(logado), int(comprou)])
        dados.append(dado)

    return dados

#Modo com o panda
def carregar_buscas_com_pandas():
    
    df = pd.read_csv('entrada-buscas.csv')

    #Pandas trata aqui os dados categóricos
    dummies = pd.get_dummies(df)
    '''
    Gambiarra, a classe foi para o meio ao usar o get dummies, 
    entao fiz uma copia joguei para o final e apaguei a do meio
    '''
    dummies['comprou2'] = dummies['comprou']
    df.drop('comprou',axis=1)
    dados = dummies.values
    print(dados)
    return dados

    '''
    Y = df['comprou']

    
    
    #Caso a classe fosse categorica
    #Ydummies = pd.get_dummies(Y)

    #Pega o dataframe em forma de array
    
    '''
carregar_buscas_com_pandas()
