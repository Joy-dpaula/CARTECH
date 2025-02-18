import express from 'express';
import createVeiculo from '../controllers/shopping/createVeiculo.js'; // Atualize conforme necessário
import deleteVeiculo from '../controllers/shopping/deleteVeiculo.js'; // Atualize conforme necessário
import getVeiculoById from '../controllers/shopping/getByIdVeiculo.js'; // Atualize conforme necessário
import updateVeiculo from '../controllers/shopping/updateVeiculo.js'; // Atualize conforme necessário
import getVeiculos from '../controllers/shopping/getVeiculo.js'; // Atualize conforme necessário
import uploadSingle from '../utils/uploadSingle.js'; // Atualize o caminho para o seu middleware

const router = express.Router();

// Rota para criar um veículo
router.post('/', createVeiculo, uploadSingle);

router.get('/', getVeiculos)

// Rota para obter um veículo específico por ID
router.get('/:id', getVeiculoById);

// Rota para atualizar um veículo específico por ID
router.put('/:id', updateVeiculo);

// Rota para excluir um veículo específico por ID
router.delete('/:id', deleteVeiculo);

export default router;
