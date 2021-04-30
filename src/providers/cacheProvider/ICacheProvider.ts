export interface ICacheProvider {
	set(key: string, obj: object, timeout: number): Promise<boolean>
	get(key: string): Promise<object | undefined>
}