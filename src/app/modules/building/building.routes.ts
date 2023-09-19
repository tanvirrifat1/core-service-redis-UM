import express from 'express';
import { BuildingController } from './building.controller';
import validateRequest from '../../middlewares/validateRequest';
import { BuildingValidation } from './building.validation';

const router = express.Router();

router.post('/', validateRequest(BuildingValidation.create), BuildingController.insertIntoDB);

export const BuildingRoutes = router;
