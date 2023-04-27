
export class HttpException extends Error {
    public status: number;
    public message: string;
  
    constructor(status: number, message: string) {
      super(message);
      this.status = status;
      this.message = message;
    }
  }

  
export const JoiValidator = (
	validationSchema,
	key: 'body' | 'query' | 'headers' = 'body'
) => {
	return (req, res, next) => {
		const data = req[key];
		console.log(data);
		const { error } = validationSchema.validate(data, {
			errors: {
				wrap: false,
			},
		});
		if (error) {
			next(new HttpException(400, error));
		}

		next();
	};
};