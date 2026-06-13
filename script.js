*{
margin:0;
padding:0;
box-sizing:border-box;
}

body{
font-family:Arial,sans-serif;
background:#f5fff5;
color:#333;
}

header{
background:linear-gradient(90deg,#2e7d32,#4caf50);
color:white;
text-align:center;
padding:40px;
}

nav{
background:#1b5e20;
padding:15px;
text-align:center;
}

nav a{
color:white;
text-decoration:none;
margin:15px;
font-weight:bold;
}

.banner{
height:400px;
background-image:url("https://images.unsplash.com/photo-1500382017468-9049fed747ef");
background-size:cover;
background-position:center;
display:flex;
justify-content:center;
align-items:center;
}

.banner-texto{
background:rgba(0,0,0,0.6);
color:white;
padding:20px;
border-radius:10px;
}

section{
padding:50px 10%;
}

section h2{
margin-bottom:20px;
color:#2e7d32;
}

.cards{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:20px;
}

.card{
background:white;
padding:20px;
border-radius:15px;
box-shadow:0 0 10px rgba(0,0,0,0.1);
}

.calculadora{
background:white;
padding:30px;
border-radius:15px;
box-shadow:0 0 10px rgba(0,0,0,0.2);
max-width:600px;
margin:auto;
}

input{
width:100%;
padding:10px;
margin:10px 0;
}

button{
width:100%;
padding:12px;
background:#2e7d32;
color:white;
border:none;
cursor:pointer;
}

button:hover{
background:#1b5e20;
}

#resultado{
margin-top:20px;
font-size:20px;
font-weight:bold;
color:#2e7d32;
}

footer{
background:#1b5e20;
color:white;
text-align:center;
padding:20px;
}
