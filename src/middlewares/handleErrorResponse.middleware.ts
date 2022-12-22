import { ExpressErrorMiddlewareInterface, Middleware } from 'routing-controllers';
import { Request, Response, NextFunction } from 'express';

@Middleware({ type: 'after' })
export class HandleErrorResponse implements ExpressErrorMiddlewareInterface {
	error(error: any, request: Request, response: Response, next: NextFunction) {
		if (!response.headersSent) {
			// console.log(error);

			/* console.log(error)
      
      if (error.errors)
        errorMsg = Object.values(error.errors[0]["constraints"])[0] */
			let errorMsg = error.message;
			response.status(error.status || 400).json({
				success: false,
				message: errorMsg,
				errors: error.errors,
			});
		}
	}
}
