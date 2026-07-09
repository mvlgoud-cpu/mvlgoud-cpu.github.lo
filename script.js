.leaders{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:30px;
margin-top:30px;
}

.card{
background:#fff;
border-radius:15px;
overflow:hidden;
box-shadow:0 10px 20px rgba(0,0,0,.12);
text-align:center;
transition:.3s;
}

.card:hover{
transform:translateY(-10px);
}

.card img{
width:100%;
height:280px;
object-fit:cover;
}

.card h3{
padding:15px;
font-size:22px;
color:#222;
}

.gallery{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:20px;
margin-top:30px;
}

.photo{
overflow:hidden;
border-radius:15px;
box-shadow:0 8px 18px rgba(0,0,0,.15);
}

.photo img{
width:100%;
height:250px;
object-fit:cover;
transition:.4s;
}

.photo:hover img{
transform:scale(1.08);
}

.contact-box{
display:grid;
grid-template-columns:1fr 1fr;
gap:40px;
margin-top:30px;
}

form input,
form textarea{
width:100%;
padding:15px;
margin-bottom:15px;
border:1px solid #ccc;
border-radius:10px;
font-size:16px;
}

form button{
background:#ffd600;
color:#000;
padding:15px 25px;
border:none;
border-radius:10px;
font-size:18px;
font-weight:bold;
cursor:pointer;
transition:.3s;
}

form button:hover{
background:#ffb300;
}

.contact-info h3{
margin-bottom:15px;
font-size:28px;
}

.contact-info p{
margin-bottom:15px;
font-size:18px;
}

.social{
display:flex;
gap:15px;
flex-wrap:wrap;
margin-top:20px;
}

.social a{
background:#ffd600;
padding:12px 20px;
border-radius:30px;
text-decoration:none;
color:#000;
font-weight:bold;
transition:.3s;
}

.social a:hover{
background:#ffb300;
}

.whatsapp{
position:fixed;
right:20px;
bottom:20px;
width:60px;
height:60px;
background:#25D366;
color:#fff;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
font-size:30px;
text-decoration:none;
box-shadow:0 5px 15px rgba(0,0,0,.25);
z-index:999;
}

footer{
background:#222;
color:#fff;
text-align:center;
padding:40px 20px;
margin-top:50px;
}

footer h2{
color:#ffd600;
margin-bottom:15px;
}

@media(max-width:768px){

header{
flex-direction:column;
padding:15px;
}

nav{
margin-top:10px;
flex-wrap:wrap;
justify-content:center;
}

.hero{
flex-direction:column;
text-align:center;
}

.hero .left,
.hero .right{
width:100%;
}

.hero .left h2{
font-size:34px;
}

.hero .right img{
width:250px;
height:250px;
margin-top:30px;
}

.contact-box{
grid-template-columns:1fr;
}

}
