// puchando modulos
const express = require('express') // pego o express
const app = express() // executo o express
const handlebars = require('express-handlebars')
const boyParser = require('body-parser')
const Post = require('./models/Post')

//configurar qual o tanplate padrão das paginas, e qual o nome do tamplate
app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

//configurando o body passer --
app.use(boyParser.urlencoded({extended: false}))
app.use(boyParser.json())

// criando rotas
    // esse Post.all vai me retornar os posts que estão dentro da minha tabela. o .then vai receber todos os posts. (mostrar postagens)
    app.get('/', (req, res) => Post.findAll({order: [['id', 'DESC']]}).then((posts) => res.render('home', {posts: posts})))
    // rota do formulario
    app.get('/cad', (req, res) => res.render('formulario'))
        // Post.create vai mandar nosso post usando o modelo Post.js que a gente criou pelo metodo post. (criar postagens)
        app.post('/add', (req, res) => {
            Post.create({ 
                titulo: req.body.titulo,
                conteudo: req.body.conteudo
            }).then(() => res.redirect('/')).catch(() => res.send(`erro: ${erro}`))
    })
    // rota para deletar as postagens (deletar postagens)
    app.get('/deletar/:id', (req, res) => Post.destroy({where: {'id': req.params.id}}).then(() => res.redirect('/')))

app.listen(80, () => console.log('runing...'))