import express from 'express';
import { RoomController } from './room.controller';
import validateRequest from '../../middlewares/validateRequest';
import { RoomValidation } from './room.validation';

const router = express.Router();

router.get('/:id', RoomController.getSingleRooms);
router.delete('/:id', RoomController.deleteRooms);
router.patch('/:id', validateRequest(RoomValidation.update), RoomController.updateRooms);
router.get('/', RoomController.getAllFromDb);
router.post('/create', validateRequest(RoomValidation.create), RoomController.insertIntoDb);

export const RoomRoutes = router;
