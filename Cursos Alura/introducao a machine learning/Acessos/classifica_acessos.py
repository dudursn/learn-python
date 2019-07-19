from carrega_dados_csv import carregar_acessos
from sklearn.naive_bayes import MultinomialNB
import random

def use_training_set(dados):
    N = len(dados)
    num_atributos = len(dados[0])

    #Randomize nos dados
    seed = random.randint(0,100)
    random.seed(seed)
    random.shuffle(dados)

    X, Y =[], []
    for i in range(N):
        X.append(dados[i][:num_atributos-1])
        Y.append(dados[i][num_atributos-1])
    print(X)
    return X, Y

def hold_out(dados, porcentagem):
    if porcentagem< 0 or porcentagem>1:
        return None
    
    N = len(dados)
    num_atributos = len(dados[0])

    #Randomize nos dados
    seed = random.randint(0,100)
    random.seed(seed)
    random.shuffle(dados)

    X, Y =[], []
    X_teste, Y_teste = [], []
    num_instancias = round((porcentagem * N)+1)
    for i in range(num_instancias):
        X.append(dados[i][:num_atributos-1])
        Y.append(dados[i][num_atributos-1])

    for i in range(num_instancias, N):
        X_teste.append(dados[i][:num_atributos-1])
        Y_teste.append(dados[i][num_atributos-1])

    return X, Y, X_teste, Y_teste
        



dados = carregar_acessos()

'''
X, Y = use_training_set(dados)
X, Y, X_teste, Y_teste = hold_out(dados, 0.7)
teste_criado_na_mao_X = [[1,0,1],[0,1,0], [1,0,0], [1,1,1]]
'''
#Dividindo os dados
X, Y, X_teste, Y_teste = hold_out(dados, 0.9)

#Cria instância do algoritmo Naive Bayes
modelo = MultinomialNB()

#Treina
modelo.fit(X, Y)

#Previsão
predicoes = modelo.predict(X_teste)

#Mostra o por que ele classifica, colocando os valores das probabilidades de uma instância pertencer a cada classe
a = modelo.predict_proba(X_teste)

print('Probabilidades:')
print(a)
print('Predicoes:')
print(predicoes)

#Acurácia
diferenca = predicoes - Y_teste
acertos = [d for d in diferenca if d==0]

total_de_acertos = len(acertos)
total_de_elementos = len(Y_teste)
print('Acertos:', total_de_acertos)
print('Total:', total_de_elementos)
taxa_de_acerto = 100.0*(total_de_acertos/total_de_elementos)
print(taxa_de_acerto)