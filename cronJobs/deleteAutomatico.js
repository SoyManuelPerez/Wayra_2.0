const cron = require('node-cron');
const Pagos = require('../models/Pagos');
const Ventas = require('../models/ventas');
const mongoose = require('mongoose');
const dotenv =  require('dotenv')
dotenv.config();
// Conectar a la base de datos
mongoose.connect(process.env.URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Configurar el cron job
cron.schedule('0 23 * * *', () => {
    Pagos.deleteMany({})
        .then(() => {
            console.log('Todos los pagos han sido eliminados.');
        })
        .catch(err => {
            console.log('Error eliminando los pagos: ', err);
        });
}, {
    scheduled: true,
    timezone: "America/Bogota"
});

// Configurar el cron job para ejecutarse todos los martes a las 11 PM
cron.schedule('0 23 * * 2', async () => {
    try {
        const jobName = 'VentasEliminadasCadaDosSemanas';
        const now = new Date();
        const jobLog = await CronJobLog.findOne({ jobName });

        if (jobLog) {
            const lastRun = jobLog.lastRun;
            const twoWeeks = 14 * 24 * 60 * 60 * 1000; // Dos semanas en milisegundos

            if (now - lastRun >= twoWeeks) {
                await Ventas.deleteMany({});
                jobLog.lastRun = now;
                await jobLog.save();
                console.log('Todos los pagos han sido eliminados.');
            } else {
                console.log('No han pasado dos semanas desde la última ejecución.');
            }
        } else {
            await Ventas.deleteMany({});
            await CronJobLog.create({ jobName, lastRun: now });
            console.log('Todos los Ventas han sido eliminados y se ha registrado la primera ejecución.');
        }
    } catch (err) {
        console.log('Error eliminando los pagos: ', err);
    }
}, {
    scheduled: true,
    timezone: "America/Bogota"
});