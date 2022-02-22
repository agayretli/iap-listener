import iapRoutes from './iap.routes';
import mockRoutes from './mock.routes';

export default function (app: any) {
    app.use(function (req: any, res: { header: (arg0: string, arg1: string) => void }, next: () => void) {
        res.header('Access-Control-Allow-Headers', 'x-access-token, Origin, Content-Type, Accept');
        next();
    });
    iapRoutes(app);
    mockRoutes(app);
}
