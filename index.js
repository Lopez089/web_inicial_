let express =  require("express");

let app = express();

app.set('views', './src/layaut')
app.set("view engine", "pug")
app.use(express.static('src'));

app.get("/", function(req,res){
    res.render('index', { title: 'Heyisi', message: 'Helsasalo there!'});
});

app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), () =>{

});