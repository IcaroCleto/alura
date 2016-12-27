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
