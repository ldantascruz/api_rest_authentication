import { ok } from "assert";
import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from 'http-status-codes';


const usersRoute = Router();

usersRoute.get('/users', (req: Request, res: Response, next: NextFunction) => {
    const users = [{ userName: 'Lucas' }];
    res.status(StatusCodes.OK).send(users);
});



usersRoute.get('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;

    res.status(StatusCodes.OK).send({ uuid });
});



usersRoute.post('/users', (req: Request, res: Response, next: NextFunction) => {
    const newUser = req.body;
    res.status(StatusCodes.CREATED).send(newUser);
});



usersRoute.put('/users/:uuid', (req: Request<{uuid: string}>, res: Response, next: NextFunction ) => {
    const uuid = req.params.uuid;
    const modfiedUser = req.body;

    modfiedUser.uuid = uuid;

    res.status(StatusCodes.OK).send(modfiedUser);
});



usersRoute.delete('/users/:uuid', (req: Request<{uuid: string}>, res: Response, next: NextFunction ) => {
   res.sendStatus(StatusCodes.OK);
});

export default usersRoute;