import express from 'express';
import { BuildingController } from './building.controller';
import validateRequest from '../../middlewares/validateRequest';
import { BuildingValidation } from './building.validation';

const router = express.Router();

router.post('/', validateRequest(BuildingValidation.create), BuildingController.insertIntoDB);
router.get('/', BuildingController.getAllFromDB);
router.patch('/:id', validateRequest(BuildingValidation.update), BuildingController.updateFromDB);
router.delete('/:id', BuildingController.deleteFromDB);
router.get('/:id', BuildingController.getByIdFromDB);

export const BuildingRoutes = router;
