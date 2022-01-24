function Uni(name: string): any {
	console.log(`Инициализация: ${name}`);
	return function () {
		console.log(`Вызов: ${name}`);
	}
}

@Uni('Класс1')
@Uni('Класс2')
class MyClass {
	@Uni('Метод')
	method(@Uni('Параметр метода') _: any) { }

	constructor(@Uni('Параметр конструктора') _: any) {

	}

	@Uni('Свойство 3')
	props3?: any;

	@Uni('Свойство 1')
	props?: any;

	@Uni('Свойство static')
	static prop2?: any;

	@Uni('Метод static')
	static method2(@Uni('Параметр метода static') _: any) { }


}