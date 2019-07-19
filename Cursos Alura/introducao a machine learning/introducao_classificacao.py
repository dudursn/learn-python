from sklearn.naive_bayes import MultinomialNB

dados = [[1,1,0], [1,1,0], [1,1,1], [0,1,0], [0,0,0], [1,1,1]]
classes = [1,1,1,-1,-1,-1]

misterioso = [[1,1,1],[1,0,0],[1,0,1]]
respostas=[-1,1,1]
modelo = MultinomialNB()
modelo.fit(dados, classes)
resultado =modelo.predict(misterioso)

diferenca = resultado - respostas
print(diferenca)
acertos = [d for d in diferenca if d==0]

total_de_acertos = len(acertos)
total_de_elementos = len(respostas)
print(total_de_acertos)
print(total_de_elementos)
taxa_de_acerto = 100.0*(total_de_acertos/total_de_elementos)
print(taxa_de_acerto)