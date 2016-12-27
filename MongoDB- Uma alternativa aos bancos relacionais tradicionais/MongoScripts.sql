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

-- in --
db.alunos.find({
        "curso.nome" : { 
            $in : ["Sistemas de informação", "Engenharia Química"] -- Busca alunos que estão em Sistemas de Informação ou Engenharia Química.
            }
})