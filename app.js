const express = require('express');
const app = express();

app.get('/', (req, res)=> {
    res.send('Hello world, this is the root router');
});


app.listen(3000);
app.get('/uno', (req, res) =>{
    res.send('Hello world, from the route one');
});

app.get('/prueba', (req,res)=> {
    res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <title>Título de la página</title>
    </head>
    <body>
      <header>
            <h1> HEAD 1 </h1>
      </header>
    
      <main>
        <!-- Aquí iría el contenido principal de la página -->
      </main>
    
      <footer>
        <!-- Aquí iría el pie de página, como los enlaces de contacto y los derechos de autor -->
      </footer>
    </body>
    </html>
    `);
});


