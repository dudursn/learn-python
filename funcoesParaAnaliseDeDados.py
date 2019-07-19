import pandas as pd 
import numpy as np
from datetime import datetime


#Modo com o panda carregar dados
def carregar_dados_com_pandas(nomeArquivo):
    df = pd.read_csv(nomeArquivo)
    return df

#Normalizar todos entre 0 e 1
def normaliza_dados(dados):
    for i in range(1,14):
        dados[:,i] = (dados[:,i] - dados[:,i].min())/(dados[:,i].max()-dados[:,i].min())
    return dados

def imprime(dado):
    print(dado)
    input()

#Gerar excel
def gera_arquivo_excel(dados, nomeVariaveis):
    filename = 'dadosNormalizados.xlsx'
    writer = pd.ExcelWriter(filename)
    data = pd.DataFrame(data=np.array(dados), columns=nomeVariaveis)
    data.to_excel(writer,"Sheet1",  encoding='utf-8', index=False)
    writer.save()

#Gerar csv
def gera_arquivo_csv(dados, nomeVariaveis):
    filename = 'dadosNormalizados.csv'
    data = pd.DataFrame(data=np.array(dados), columns=nomeVariaveis)
    data.to_csv(filename, sep=';', encoding='utf-8', index=False)

#Ordenar por nome
def ordena_dados(dados):
    dados.sort(key=ordenarPorNome)
    return dados
def ordenar_por_nome(elem, posicao):
    return elem[posicao]

#Trabalhando com idade
def calculando_idade_de_todos(dataFrame):
    idades = []
    for i in range(len(dataFrame)):
        dataNascimento = datetime.strptime(dataFrame["Data de nascimento"][i], date_format)
        dataInscricao = datetime.strptime(dataFrame["Timestamp"][i], date_format)
        idade = dataInscricao.year - dataNascimento.year - ((dataInscricao.month, dataInscricao.day) < (dataNascimento.month, dataNascimento.day))
        if idade<=10:
            idade =""
        idades.append(idade)
    return idades
    
df = carregar_dados_com_pandas()
nomeVariaveis = list(df.columns.values)
#Pegando os dados em formato de lista
dados = np.array(df.values)
dados = normaliza_dados(dados)
gera_arquivo_csv(dados,nomeVariaveis)
