-- INSERT --
-- Primeiro Aluno

{
    "nome" : "Alberto",
    "data_nascimento" : new Date(1972, 08, 30),
    "curso" : {
        "nome" : "Medicina"
    },
    "habilidades" : [
        {
            "nome" : "inglês",
            "nivel" : "avançado"
        }
    ]
}

-- Segundo Aluno

{
    "nome" : "Alberto",
    "data_nascimento" : new Date(1972, 09, 30),
    "curso" : {
        "nome" : "Engenharia Química"
    },
    "habilidades" : [
        {
            "nome" : "inglês",
            "nivel" : "intermediario"
        }
    ]
}

-- Terceiro Aluno

{
    "nome" : "Daniela",
    "data_nascimento" : new Date(1972, 09, 30),
    "curso" : {
        "nome" : "Moda"
    },
    "habilidades" : [
        {
            "nome" : "alemão",
            "nivel" : "básico"
        }
    ]
}

db.alunos.insert({
    nome: "Fernando",
    data_nascimento: new Date(1994, 03, 26),
    notas: [10, 4.5, 7],
    curso : {
        nome: "Sistema de informação"
    }
})


-- BUSCANDO COM OPERADOR --
-- OR --
db.alunos.find({
    $or: [
        {"curso.nome" : "Sistemas de informação"},
        {"curso.nome" : "Engenharia Química"}
    ]
})

-- AND --
db.alunos.find({
    $or: [
        {"curso.nome" : "Sistemas de informação"},
        {"curso.nome" : "Engenharia Química"}
        {"curso.nome" : "Curso de Moda"}
    ],
    "nome" : "Daniela"
})

-- IN --
db.alunos.find({
        "curso.nome" : { 
            $in : ["Sistemas de informação", "Engenharia Química"] -- Busca alunos que estão em Sistemas de Informação ou Engenharia Química.
            }
})

-- GT --
-- GT = Greater than = maior que --
db.alunos.find({
    "notas" : {$gt : 5}
})

-- Buscando apenas um elemento --
db.alunos.findOne({
    notas : {$gt : 5}
})

-- Buscando elementos por ordem alfabetica de forma crescente --
db.alunos.find().sort({"nome" : 1})

-- Buscando elementos por ordem alfabetica de forma de decrescente --
db.alunos.find().sort({"nome" : -1})

-- Buscando elementos por ordem alfabetica de forma de crescente e limitando o resultado --
db.alunos.find().sort({"nome" : 1}).limit(3)


-- UPDATE --
-- Update no MongoDB: Se vc não usar operadores no update do mongo, ele não apenas atualiza o documento, ele substitui o antigo documento pelo novo.
-- Update sem operador --
db.alunos.update(
    {"curso.nome" : "Sistema de informação"},
    {
        "curso.nome" : "Sistemas de informação"
    }
)

-- Update com operador --
db.alunos.update(
    {"curso.nome" : "Sistema de informação"},
    {
        $set: {
            "curso.nome" : "Sistemas de Informação"
        }
    }
)

-- Update em vários documentos --
db.alunos.update(
    {"curso.nome" : "Sistemas de Informação"},
    {
        $set: {
            "curso.nome" : "Sistemas De Informação"
        }
    }, {
        multi: true
    }
)

-- Update em um array - Inserindo um único valor --
db.alunos.update(
    {"_id": ObjectId("58611959cc0368bb657dc5df")},
    {
        $push: {
            notas: 8.5
        }
    }
)

-- Update em um array - Inserindo vários valores --
db.alunos.update(
    {"_id": ObjectId("58611959cc0368bb657dc5df")},
    {
        $push: {
            notas: {$each : [8.5, 3]}
        }
    }
)

-- REMOVE --
db.alunos.remove({"_id" : ObjectId("129301293012")})

-- LOCALIZAÇÃO COM MONGODB --
db.alunos.insert(
    {"_id" : ObjectId("029zsad0a9sd0123cd")},
    {
        $set : {
            localizacao : {
                endereco : "Rua Vergueiro, 3185",
                cidade : "São Paulo",
                pais : "Brasil",
                coordinates : [-23.588213, -46.632356],
                type : "Point"
            }
        }
    })

-- Comando Import --
mongoimport -c alunos --jsonArray < alunos.json

-- PESQUISA GEOGRAFICA COM MONGODB --
db.alunos.aggregate([ -- Traz a coleção inteira
    {
        $geoNear : { -- e usa a proximidade para fazer a agregação
            near : {
                coordinates: [-23.5640265, -46.6527128],
                type: "Point"
            },
            distanceField : "distancia.calculada", -- Coloca o resultado do calculo de distancia dentro de distancia.calculada
            spherical : true -- andar pela esfera para calcular os pontos
            num : 4 -- Traz 4 resultados
        }
    },
    { $skip : 1} -- Pula o primeiro resultado
])

-- CRIANDO INDICE DE BUSCA --
-- Cria um indice para localizacao considerando ela uma esfera 2d.
db.alunos.creatIndex({
    "localizacao" : "2dsphere"
})