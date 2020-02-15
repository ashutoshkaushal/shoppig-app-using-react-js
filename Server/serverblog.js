const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const app = express();

var mysql = require('mysql');
app.set('view engine','jade');

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(fileUpload());
app.use('/public', express.static(__dirname + '/public'));

var con = mysql.createConnection({
	host :'localhost',
	user :'root',
	password :'',
	database :'react_db'
});

const PORT = 4200;
app.use(cors());
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.post('/login',function(req,res){
	var username = req.body.uname;
	var password = req.body.psw;
	
	var sql="select * from login where username='"+req.body.uname+"' and psw='"+req.body.psw+"'";
	con.query(sql,(err,rows)=> {
	   if (err) throw err;
	   if(rows.length > 0){
	   res.json(rows);
	   }
	   else
	   {
		   console.log('wrong username Password');
	   }
	});
});

app.get('/getproducts',function(req,res){

	var sql="select * from product";
	con.query(sql, (err,rows) => {
		if(err) throw err;
		res.json(rows);
	});
});

app.get('/getdonator',function(req,res){

	var sql="select * from donator";
	con.query(sql, (err,rows) => {
		if(err) throw err;
		res.json(rows);
	});
});



app.get('/getusers',function(req,res){

	var sql="select * from login";
	con.query(sql, (err,rows) => {
		if(err) throw err;
		console.log(rows);
		res.json(rows);
		
	});
});







app.post('/delete/:id',function(req,res) {
	
	const id=req.params.id;
	console.log(id);
	const query=`delete from product where product.id=${id}`;
	con.query(query, (err,rows) => {
		if(err) throw err;
		res.json(rows);
	});
});
app.post('/delete1/:id',function(req,res) {
	
	const id=req.params.id;
	console.log(id);
	const query=`delete from login where login.id=${id}`;
	con.query(query, (err,rows) => {
		if(err) throw err;
		res.json(rows);
	});
});


app.get('/getselectedproduct/:id',function(req,res) {
	
	const id=req.params.id;
	console.log(id);
	console.log("www");
	const query=`select * from product where product.id=${id}`;
	con.query(query, (err,rows) => {
		if(err) throw err;
		
		console.log(rows);
		res.json(rows);
	});
});








app.post('/productinsert',function(req,res){
	console.log(req.files.image);
  const pro_name = req.body.pro_name;
  const details = req.body.details;
  const imageFile = req.files.image;
  
  const phone=req.body.phone;
  const psw=req.body.psw;
  const time = req.body.time;
  con.query(
    `INSERT INTO product(pro_name,no_people,phone,details,time) values("${pro_name}","${psw}","${phone}", "${details}", "${time}.jpg")`,
    (err, res) => {
      if (err) throw err;
    }
  );
   
 
  
  
  
  
  
  
  
  
  
  
  
  imageFile.mv(`./../public/${req.body.time}.jpg`, function(err) {
    if (err) {
      return res.status(500).send(err);
    }

    res.json({ file: `public/${req.body.filename}.jpg` });
  });
	
});




app.post('/payment',function(req,res){
	console.log("okk");
  const id = req.body.id;
  const name = req.body.name;
const bname = req.body.bname;
  const phone = req.body.port;
  const cname=req.body.cname;
  const hname=req.body.hname;
  
  con.query(
    `INSERT INTO payment(pid,pname,amount,bname,card,holder) values("${id}","${name}","${phone}", "${bname}", "${cname}","${hname}")`,
    (err, res) => {
      if (err) throw err;
    }
  );
   
 
  
  
  
  
  
  
  
  
  
  
  
  
});




app.post('/donate',function(req,res){
	console.log(req.files.image);
  const pro_name = req.body.pro_name;
  const details = req.body.details;
  const imageFile = req.files.image;
  
  const phone=req.body.phone;
  const psw=req.body.psw;
  
  const bank=req.body.bank;
  
  const ccno=req.body.ccno;
  const time = req.body.time;
  con.query(
    `INSERT INTO donator(ngo_name,donator,money,address,bank,ccno,image) values("${pro_name}","${psw}","${phone}", "${details}","${bank}","${ccno}", "${time}.jpg")`,
    (err, res) => {
      if (err) throw err;
    }
  );
   
 
  
  
  
  
  
  
  
  
  
  
  
  imageFile.mv(`./../public/${req.body.time}.jpg`, function(err) {
    if (err) {
      return res.status(500).send(err);
    }

    res.json({ file: `public/${req.body.filename}.jpg` });
  });
	
});
















 
  app.post('/signup',function(req,res){
	console.log(req.files.image);
  const pro_name = req.body.pro_name;
  const details = req.body.details;
  const imageFile = req.files.image;
  
  const phone=req.body.phone;
  const psw=req.body.psw;
  const time = req.body.time;
  con.query(
    `INSERT INTO login(username,psw,phone,address,image) values("${pro_name}","${psw}","${phone}", "${details}", "${time}.jpg")`,
    (err, res) => {
      if (err) throw err;
    }
  );
   
  imageFile.mv(`./../public/${req.body.time}.jpg`, function(err) {
    if (err) {
      return res.status(500).send(err);
    }

    res.json({ file: `public/${req.body.filename}.jpg` });
  });
	
});










app.listen(PORT,function(){
	console.log('Server running on port:',PORT);
});