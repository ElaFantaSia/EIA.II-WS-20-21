namespace L04_Hexenkessel {

    interface Item {
        name: string;
        price: number;
    }
    interface Auswahl {
        name: string;
    }

    export interface Data {
        [category: string]: Item[];
    }
    export interface Data2 {
        [category2: string]: Auswahl[];
    }

    export let data2: Data2 = {
        kindOfPotion: [
            {name: "Love potion"},
            {name: "Forever young potion"},
            {name: "Healing potion"},
            {name: "Concentration potion"},
            {name: "Poisoning potion"},
            {name: "Klo potion"}
        ]
    };

    export let data: Data = {

        ingredients: [
            {name: "firefly", price: 1},
            {name: "earwigs", price: 0.4},
            {name: "lizard", price: 0.5},
            {name: "fairy", price: 1.9},
            {name: "nosehair", price: 0.3}
        ]
    };

    
    

}