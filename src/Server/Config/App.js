import express from 'express';
import path from 'path';
import morgan from 'morgan';
import Routes from '../App/Routes/Routes';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../../../webpack.config';
import bodyParser from 'body-parser';
//import webpackDevServer from 'webpack-dev-server';


//Iniziando paquetes
const app= express();
const compiler = webpack(webpackConfig);
// const devServerOptions = { ...webpackConfig.devServer,port: 8080,hot: true,};
// const server = new webpackDevServer(devServerOptions,compiler);

// Settings
//../../Client
app.set('views', path.join(__dirname, '../../build'));
app.set('view engine', 'ejs');
//   CONFIGURACION DE PUERTOJES DE DESARROLLO 

app.set("port", process.env.PORT || 5000);


//uso de middlewares
app.use(morgan('dev'));
// use server file statics in production
app.use(express.static(path.join(__dirname, '../../build')));
app.use(webpackDevMiddleware(compiler));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Routes
app.use(Routes);


// Iniciando servidor

const Port= app.get("port");
app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
    console.log('la ruta de las vistas es:',path.join(__dirname, '../../build'));
});



/*
    server.startCallback(() => {
        console.log('Successfully started server on http://localhost:8080');
    });
*/
// Usando puertos configurados 

   

