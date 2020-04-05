var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');




//aca van a estar todas las conexiones a las rutas
var indexRouter = require('./routes/index');
var inicioRouter = require('./routes/inicio');
var usersRouter = require('./routes/users');
const productosRouter= require('./routes/productos')
const conjuntosRouter= require('./routes/conjuntos')
const bodysRouter= require('./routes/bodys');
const loginRouter= require('./routes/login');
const registroRouter= require('./routes/registro');
const consultasRouter= require('./routes/consultas');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret : 'proyecto', 
  saveUninitialized : true,
  resave : true,
  cookie : {maxAge : null}
  
}));

//comprobar la sesion del usuario que ingresa y proteger las rutas que involucren al administrador

guardianAdmin= async(req,res,next)=>{
  console.log("la sesion protegida vale: "+req.session.admin);
  try {
    if(req.session.admin){
    next();
    }else{
      res.redirect('/login')
    }
  } catch (error) {
    res.redirect('/login')
  }
  
}




//aca se va a poner que se va a usar la ruta cuando el usuario entre en una ruta
app.use('/', indexRouter);
app.use('/inicio', inicioRouter);
app.use('/users', usersRouter);
app.use('/productos',productosRouter);
app.use('/conjuntos',conjuntosRouter);
app.use('/bodys',bodysRouter);
app.use('/login',loginRouter);
app.use('/registro',registroRouter);
app.use('/consultas',consultasRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
