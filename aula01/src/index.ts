import express, { Request, Response } from 'express'
import { CustomResponse } from './types'

const app = express();
const PORT = 3000;

app.use(express.json())

app.get('/', (req: Request, res: Response<CustomResponse>) => {
    const createResponse: CustomResponse = {
        data: { infos: { nome: 'Kely André' } },
        error: false
    }
    res.json(createResponse)
})

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})