import { IDTO } from "./IDTO"


interface IUseCaseResponse {
	data?: any
	error: boolean | string
}


interface IUseCase {
	execute(data: IDTO): Promise<IUseCaseResponse>
}


export { IUseCase, IUseCaseResponse }
