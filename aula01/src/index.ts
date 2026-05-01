import express, { Request, Response } from 'express'
import { CustomResponse } from './types'

const app = express();
const PORT = 3000;

app.use(express.json())

app.get('/', (req: Request, res: Response<CustomResponse>) => {
    const response: CustomResponse = {
        data: { nome: 'Kely André' },
        error: false
    }
    res.json(response)
})

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})