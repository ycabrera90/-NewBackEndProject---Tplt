const express = require('express');
const router = express.Router(); // metodo que facilita el trabajo con las rutas



router.post('/add-location', (req, res, next) => {
    // esto funciona como un middleware que se ejecuta cuando viene un pedido con un metodo post a add-location

    // guardamos en un arreglo los datos que el cliente me pasa desde la url en formato JSON
    // const id = Math.random();

    // locationStorage.location.push({
    //     id: id,
    //     address: req.body.address,
    //     coords: { lat: req.body.lat, lng: req.body.lng },
    // });
    // console.log(locationStorage);

    // // enviamos una respuesta al cliente para que sepa que fueron procesados los datos
    // res.json({ messagge: 'Stored locations!', locId: id });
});
router.get('/', (req, res, next) => {
    res.json({ message: 'yor server is ready to use' });
    // res.status(404).json({ message: 'Not found!!' });
});

module.exports = router;
