import iapController from '../controllers/iap.controller';

export default function (app: any) {
    app.use(function (req: any, res: { header: (arg0: string, arg1: string) => void }, next: () => void) {
        res.header('Access-Control-Allow-Headers', 'x-access-token, Origin, Content-Type, Accept');
        next();
    });

    app.post('/api/subscription/started', iapController.started);
    app.post('/api/subscription/renewed', iapController.renewed);
    app.post('/api/subscription/canceled', iapController.canceled);
}
