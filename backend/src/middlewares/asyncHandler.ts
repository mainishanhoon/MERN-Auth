import { AsyncControllerType } from '../constants/types/types';

export const asyncHandler =
  (controller: AsyncControllerType): AsyncControllerType =>
  async (requestAnimationFrame, res, next) => {
    try {
      await controller(requestAnimationFrame, res, next);
    } catch (error) {
      next(error);
    }
  };
