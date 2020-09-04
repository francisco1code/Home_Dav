import { Router } from 'express';

const routes = new Router();


routes.get('/', (req, res) => {
    return res.json({ 
        ok: true,
        nome: "edson",
        nome2: "xuxu"
    })
});

export default routes;