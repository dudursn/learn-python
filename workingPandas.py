import pandas as pd 
import numpy as np
from datetime import datetime

#Modo com o panda
def carregar_dados_com_pandas():
    
    dicti ={}
    df = pd.read_csv('olimpiadas.csv')
    df = df.sort_values(by=['Nome:'], ascending=True)
    apagar = []
    for i in range(len(df)-1):
        nome1 = df["Nome:"][i]
        for j in range(i+1,len(df)):
            nome2 = df["Nome:"][j]
            if nome1.upper()==nome2.upper():
                apagar.append(i)
                break

    for i in apagar:
        df = df.drop(i)
    
    indexesAtuais = df.index.values
    for i in range(len(df)):
        dicti[indexesAtuais[i]] = i
    df = df.rename(dicti)
    return df

def ordenarPorNome(elem):
    return elem[0]

def geraTamanhoDaCamisa(dados):
    tipo = ["PP", "P","M","G","GG","XG"]
    rotulos = ["Nome","Tamanho"]
    resultados= []
    writer1 = pd.ExcelWriter('Tamanho_da_Camisa.xlsx')
    
    for t in tipo:
        for i in range(len(dados)):
            linha = []
            nome = dados["Nome:"][i]
            nome = nome.upper()
            if t==dados["Tamanho Camisa"][i]:
                linha = [nome,t]
                resultados.append(linha)

    for i in range(len(dados)):
        nome = dados["Nome:"][i]
        nome = nome.upper()
        if(not pd.isnull(dados["Tamanho Camisa"][i]) and not dados["Tamanho Camisa"][i] in tipo):
            resultados.append([nome,dados["Tamanho Camisa"][i]])


    for i in range(len(dados)):
        nome = dados["Nome:"][i]
        nome = nome.upper()
        if(pd.isnull(dados["Tamanho Camisa"][i])):
            resultados.append([nome,""])
    
    data = pd.DataFrame(data=np.array(resultados), columns=rotulos)
    imprime(data)
    #data.to_csv("Tamanho da Camisa", encoding='utf-8', index=False)
    data.to_excel(writer1,"Sheet1",  encoding='utf-8', index=False)
    writer1.save()

def mineraDados(dados):
    modalidades =["Basquete","Corrida 3 km","Dominó","Futebol society","Futsal feminino","Futsal masculino","Natação","Poker Hold'em","Tênis de Mesa","Tênis de quadra","Tiro esportivo","Voleibol de praia"]
    date_format = "%m/%d/%Y"
    writer = pd.ExcelWriter('Inscricoes_Olimpiadas_TCE_MA.xlsx')

    for modalidade in modalidades:
        tipos = ["Nome","Gênero", "Setor", "Idade"]
        resultados= []
        k = 0

        for i in range(len(dados)):
            linha = []
            if modalidade in dados["Modalidades"][i]:
                #Idade
                dataNascimento = datetime.strptime(dados["Data de nascimento"][i], date_format)
                dataInscricao = datetime.strptime(dados["Timestamp"][i], date_format)
                idade = dataInscricao.year - dataNascimento.year - ((dataInscricao.month, dataInscricao.day) < (dataNascimento.month, dataNascimento.day))
                if idade<=10:
                    idade =""
                nome = dados["Nome:"][i]
                nome = nome.upper()
                #Define o gênero e adiciona
                if "Futsal masculino" in dados["Modalidades"][i]:
                    linha = [nome,"M", dados["Setor/Empresa"][i],idade]
                elif "Futsal feminino" in dados["Modalidades"][i]:
                    linha = [nome,"F", dados["Setor/Empresa"][i],idade]
                else:
                    linha = [nome," ", dados["Setor/Empresa"][i],idade]
                k+=1
                resultados.append(linha)

        resultados.sort(key=ordenarPorNome)
        nome_do_arquivo = modalidade +"_inscritos"
        data = pd.DataFrame(data=np.array(resultados), index=range(k), columns=tipos)
        data.to_excel(writer,nome_do_arquivo,  encoding='utf-8', index=False)
        #data.to_csv(nome_do_arquivo, encoding='utf-8', index=False)
        resultados.clear()
    writer.save()

def imprime(dado):
    print(dado)
    input()

dados = carregar_dados_com_pandas()
geraTamanhoDaCamisa(dados)
mineraDados(dados)

