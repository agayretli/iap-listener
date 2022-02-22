import iapController from '../controllers/iap.controller';

export default function (app: any) {
    app.post('/api/subscription/started', iapController.started);
    app.post('/api/subscription/renewed', iapController.renewed);
    app.post('/api/subscription/canceled', iapController.canceled);
}
