//const fs = require ('fs');
const sqlite3 =require('sqlite3').verbose();
const express = require('express');

const cors = require('cors');
const dbFile = "blog.db";
const db = new sqlite3.Database(dbFile);

const app= express();

app.use(cors());

db.serialize(() => {
    db.run('CREATE TABLE IF NOT EXISTS articles(article_id INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE, article_img  TEXT, article_description TEXT, article_like BOOLEAN, article_comment TEXT)');
    
    db.run('INSERT INTO articles (article_img, article_description, article_like, article_comment) VALUES (?, ?, ?, ?)', './Images/hotel.jpg', "blablbalblab", true, "premier commentaire")
    db.run('INSERT INTO articles (article_img, article_description, article_like, article_comment) VALUES (?, ?, ?, ?)', './Images/restau.jpg', "blablbalblab", false, "deuxième commentaire")
    db.run('INSERT INTO articles (article_img, article_description, article_like, article_comment) VALUES (?, ?, ?, ?)', './Images/Bmacron.jpeg', "blablbalblab", true, "troisieme commentaire")
    db.run('INSERT INTO articles (article_img, article_description, article_like, article_comment) VALUES (?, ?, ?, ?)', './Images/sacrecoeur.jpeg', "blablbalblab", false, "quatrieme commentaire")


    db.run('CREATE TABLE IF NOT EXISTS users(user_id INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE, user_firstname  TEXT, user_lastname TEXT, user_profile TEXT)');
    
    db.run('INSERT INTO users (user_profile, user_firstname, user_lastname) VALUES (?, ?, ?)', './Images/user.jpeg', "Alex", "Trian");
    db.run('INSERT INTO users (user_profile, user_firstname, user_lastname) VALUES (?, ?, ?)', './Images/manbeard.jpeg', "Ronan", "Josepe");
    db.run('INSERT INTO users (user_profile, user_firstname, user_lastname) VALUES (?, ?, ?)', './Images/woman.jpeg', "Catherine", "Doree");


    
    db.run('CREATE TABLE IF NOT EXISTS comments(comment_id INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE, comment_comment TEXT, user_id INTEGER, FOREIGN KEY(user_id) REFERENCES users(id))');

    db.run('INSERT INTO comments (comment_comment, user_id) VALUES (?, ?)', 'My family is a rather small one, with only three people, my father, my mother and me. My father is a doctor. My mother is a middle-school teacher.', 1);
    db.run('INSERT INTO comments (comment_comment, user_id) VALUES (?, ?)', 'I am still a student. My mother is very gentle and soft while my father is a little bit hot-tempered. We love each other very much. Although sometimes we might become angry at one another,', 2);
    db.run('INSERT INTO comments (comment_comment, user_id) VALUES (?, ?)', 'I have a big family with seven people, my grandparents, parents, two brothers and me. We take care of one another, share housework, and often communicate all together.', 3);

    app.get('/', function(req,res){
        db.all('SELECT * FROM articles ', function(error, data){
            res.send(data);
        });
    });

});




app.listen(8080, function(error){
    if(!error) console.log("everything works");
});