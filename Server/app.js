const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const app = express();

app.set('views', path.join(__dirname,'views'));
app.set('view engine','jade');

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(fileUpload());
app.use('/public', express.static(__dirname + '/public'));

app.post('/upload',(req,res,next) => {
	//console.log(req);
	console.log('ba');
	let imageFile = req.files.file;
	
	imageFile.mv(`${__dirname}/public/${req.body.filename}.jpg`,function(err){
		
		if(err){
			return res.status(500).send(err);
		}
		res.json({file: `/public/${req.body.filename}.jpg` });
	});
})

app.use(function(req,res,next){
	
	const err = new Error('Not Found');
	err.status = 404;
	next(err);
});

app.use(function(err, req,res,next){
	
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err :{};
	
	res.status(err.status || 500);
    res.render('error');
});

app.listen(8000, () => {
  console.log('8000');
});

module.exports = app;  
	


		