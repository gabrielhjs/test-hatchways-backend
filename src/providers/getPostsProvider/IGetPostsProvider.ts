export interface IGetPostsProvider {
	execute(url: string, tag: string): Promise<any>
}