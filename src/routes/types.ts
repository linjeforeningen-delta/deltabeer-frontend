export interface Item {
	name: string;
	price: number;
	img: string;
	description: string;
}

export interface User {
	name: string;
	balance: number;
	id: number;
}

export interface ItemCard {
	name: string;
	price: number;
	descrition: string;
	img?: string;
}
