export interface Item {
	name: string;
	price: number;
	img: string;
	description: string;
}

export interface User {
	userID: number | undefined;
	cardID: number | undefined;
	first_name: string | undefined;
	last_name: string | undefined;
	phone_nr: string | undefined;
	balance: number;
}

export interface ItemCard {
	name: string;
	price: number;
	descrition: string;
	img?: string;
}
