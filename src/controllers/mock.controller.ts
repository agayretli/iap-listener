/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Request, Response } from 'express';
import moment from 'moment-timezone';

const verify = (req: Request, res: Response) => {
    try {
        const { receipt } = req.body;
        // Rate-limit error
        /* if (!((receipt % 100) % 6)) {
            if (Math.random() >= 0.5) {
                // todo
                return res.status(200).send({
                    message: 'RATE-LIMIT ERROR',
                    status: false,
                });
            }
        } */
        // validate
        if (receipt % 2) {
            const date = moment().add(1, 'M').tz('America/Belize').format('YYYY-MM-DD HH:mm:ss');
            return res.status(200).send({
                message: 'OK',
                status: true,
                expire_date: date,
            });
        }
        return res.status(200).send({
            message: 'REJECT',
            status: false,
        });
    } catch (error) {
        return res.status(404).send({
            message: 'ERROR',
            status: false,
        });
    }
};

export default {
    verify,
};
