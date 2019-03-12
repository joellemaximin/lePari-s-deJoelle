//const fs = require ('fs');
const sqlite3 =require('sqlite3').verbose();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dbFile = "blog.db";
const db = new sqlite3.Database(dbFile);

const app= express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

db.serialize(() => {
    
    db.run('CREATE TABLE IF NOT EXISTS articles(article_id INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE, article_img  TEXT, article_description TEXT, article_like BOOLEAN)');
    db.run('INSERT INTO articles (article_img, article_description, article_like) VALUES (?, ?, ?)', "http://localhost:3000/Images/hotel.jpg", "Hotel agréable, près des quais, belle vue", true)
    db.run('INSERT INTO articles (article_img, article_description, article_like) VALUES (?, ?, ?)', "http://localhost:3000/Images/restau.jpg", "Un des meilleurs restaurant que j'ai été durant mon voyage sur Paris", false)
    db.run('INSERT INTO articles (article_img, article_description, article_like) VALUES (?, ?, ?)', "http://localhost:3000/Images/Bmacron.jpeg", "Un theatre magnifique lors de mon voyage sur Paris", true)
    db.run('INSERT INTO articles (article_img, article_description, article_like) VALUES (?, ?, ?)', "http://localhost:3000/Images/sacrecoeur.jpeg", "Superbe place/Eglise a visiter, elle vue sur Paris.", false)


    db.run('CREATE TABLE IF NOT EXISTS users(user_id INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE, user_firstname  TEXT, user_lastname TEXT, user_profile TEXT)');

    db.run('INSERT INTO users (user_profile, user_firstname, user_lastname) VALUES (?, ?, ?)', "http://localhost:3000/Images/user.jpeg", "Alex", "Trian");
    db.run('INSERT INTO users (user_profile, user_firstname, user_lastname) VALUES (?, ?, ?)', "http://localhost:3000/Images/manbeard.jpeg", "Ronan", "Josepe");
    db.run('INSERT INTO users (user_profile, user_firstname, user_lastname) VALUES (?, ?, ?)', "http://localhost:3000/Images/woman.jpeg", "Catherine", "Doree");




    db.run('CREATE TABLE IF NOT EXISTS comments(comment_id INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE, comment_comment TEXT, user_id INTEGER, article_id INTEGER, FOREIGN KEY(user_id) REFERENCES users(id), FOREIGN KEY(article_id) REFERENCES articles(id))');

    db.run('INSERT INTO comments (comment_comment, user_id, article_id) VALUES (?, ?, ?)', "My family is a rather small one, with only three people, my father, my mother and me. My father is a doctor. My mother is a middle-school teacher.", 1, 1);
    db.run('INSERT INTO comments (comment_comment, user_id, article_id) VALUES (?, ?, ?)', "I am still a student. My mother is very gentle and soft while my father is a little bit hot-tempered. We love each other very much. Although sometimes we might become angry at one another.", 2, 1);
    db.run('INSERT INTO comments (comment_comment, user_id, article_id) VALUES (?, ?, ?)', "I have a big family with seven people, my grandparents, parents, two brothers and me. We take care of one another, share housework, and often communicate all together.", 3, 2);


    db.all('SELECT * FROM articles NATURAL JOIN users NATURAL JOIN comments WHERE user_id==1', function (error, data) {
        if (!error) console.log(data);
        else console.log(error);
    });



});

    // app.get('/articles', function(req,res){
    //     db.all('SELECT * FROM articles ', function(error, data){
    //         res.send(data);
    //     });
    // });

    // app.get('/users', function(req,res){
    //     db.all('SELECT * FROM users ', function(error, data){
    //         res.send(data);
    //     });
    // });
// app.post('/articles', function(request, result){
//     db.run('INSERT INTO articles (article_img, article_description, article_like, article_comment) VALUES (?, ?, ?, ?)', ' http://localhost:3000/Images/montmatre.jpg',
//      "Superbe place/Eglise a visiter, quand j'ai été durant mon voyage sur Paris",
//       false,
//      "Le Sacré Coeur est bien. Merci pour le partage FUCK."
//     )
// });

//on affiche tous les articles
app.get('/', function (req, res){
    db.all('SELECT * FROM articles',
     function (error, data){
        if (!error) res.send(data)
        else console.log(error);   
    })
})

app.get('/lastcomment1', function (req, res){
    db.all('SELECT * FROM comments NATURAL JOIN articles WHERE article_id==1 ORDER BY comment_id DESC LIMIT 1',
     function (error, data){
        if (!error) res.send(data)
        else console.log(error);   
    })
})

app.get('/lastcomment2', function (req, res){
    db.all('SELECT * FROM comments NATURAL JOIN articles WHERE article_id==2 ORDER BY comment_id DESC LIMIT e1',
     function (error, data){
        if (!error) res.send(data)
        else console.log(error);   
    })
})




app.post('/users', function(request, response){

    console.log(request.body)
    db.run('INSERT INTO articles (user_firstname) VALUES (?)',
        request.body.user_firstname, function(error, data){
            response.send(request.body.user_firstname)
    });
    
});



app.listen(8080, function(error){
    if(!error) console.log("everything works");
});