const express = require('express');
const bodyParser = require('body-parser');
const PORT = 5000;
const app = express();


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, PATCH, PUT, POST, DELETE, OPTIONS");
    next();
})

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static("."));
app.get('/', (req, res) => {
    //res.status(200).json("Сервер працює");
    res.render('index.ejs');
})

const ClientRoutes = require('./router/client.router')
app.use('/api/client', ClientRoutes);

const ApplicationRoutes = require('./router/application.router')
app.use('/api/application', ApplicationRoutes);

const PaymentRoutes = require('./router/payment.router');
app.use('/api/payment', PaymentRoutes);

const RepairRoutes = require('./router/repair.router');
app.use('/api/repair', RepairRoutes);

const RepairerRoutes = require('./router/repairer.router');
app.use('/api/repairer', RepairerRoutes);

const MaterialsRoutes = require('./router/materials.router');
app.use('/api/materials', MaterialsRoutes);

const NeedsRoutes = require('./router/needs.router');
app.use('/api/needs', NeedsRoutes);

app.listen(PORT, () => console.log("SERVER START!!!"))