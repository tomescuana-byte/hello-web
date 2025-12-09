import express from 'express';

const statusRouter = express.Router();

statusRouter.get('/status', (req, res) => {
    res.status(200).json({
        message: "Serverul funcționează!"
    });
});

export default statusRouter;
