/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Request, Response } from 'express';

const started = (req: Request, res: Response) => {
    try {
        const { appID } = req.body;
        const { deviceID } = req.body;
        const { event } = req.body;

        if (appID && deviceID && event === 'started') {
            res.status(200).send({
                message: 'Success.',
            });
        } else {
            res.status(404).send({
                message: 'Error on parameters',
            });
        }
    } catch (error) {
        res.status(404).send({
            message: error,
        });
    }
};

const renewed = (req: Request, res: Response) => {
    try {
        const { appID } = req.body;
        const { deviceID } = req.body;
        const { event } = req.body;

        if (appID && deviceID && event === 'renewed') {
            res.status(200).send({
                message: 'Success.',
            });
        } else {
            res.status(404).send({
                message: 'Error on parameters',
            });
        }
    } catch (error) {
        res.status(404).send({
            message: error,
        });
    }
};

const canceled = (req: Request, res: Response) => {
    try {
        const { appID } = req.body;
        const { deviceID } = req.body;
        const { event } = req.body;

        if (appID && deviceID && event === 'canceled') {
            res.status(200).send({
                message: 'Success.',
            });
        } else {
            res.status(404).send({
                message: 'Error on parameters',
            });
        }
    } catch (error) {
        res.status(404).send({
            message: error,
        });
    }
};

export default {
    started,
    renewed,
    canceled,
};
