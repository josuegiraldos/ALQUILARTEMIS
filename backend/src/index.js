// 2. Importamos app
import app from './app.js';

// 1. Crear el 'método main();'
const main = () => {
    // Utilizamos app dentro del cuerpo del método 'main();'
    app.listen(app.get("port"));
    console.log(`The great super great company's server is running on port ${app.get("port")}`);

    // Ir a package.json y modificar los scripts - 'node src/index.js'
    // Instalar 'nodemon' para reiniciar el servidor una vez se haga un cambio.
    // Una vez instalado nodemon se modifica el script en package.json de node => nodemon
}

main();