import mockController from '../controllers/mock.controller';

export default function (app: any) {
    app.post('/api/mock/verify', mockController.verify);
}
