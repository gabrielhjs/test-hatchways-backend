import { IDTO } from "../../interfaces/IDTO"


export interface GetPostsDTO extends IDTO {
	tags: string | undefined,
	sortBy: string | undefined,
	direction: string | undefined
}
