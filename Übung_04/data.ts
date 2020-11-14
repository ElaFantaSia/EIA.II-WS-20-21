namespace L04_Hexenkessel {

    export interface Item {
        name: string;
        price: number;
    }
    export interface Auswahl {
        name: string;
    }

    export interface Data {
        [category: string]: Item[];
    }
    export interface Data2 {
        [category2: string]: Auswahl[];
    }

    export let data2: Data2 = {
        Name: [
            {name: "Name"}
        ],

        description: [
            {name: "Description, riscs, side effects"}
        ],

        kindOfPotion: [
            {name: "Choose wanted effect:"},
            {name: "Love potion"},
            {name: "Forever young potion"},
            {name: "Healing potion"},
            {name: "Concentration potion"},
            {name: "Poisoning potion"},
            {name: "Klo potion"}
        ],

        amount: [
            {name: "Amount in gramm"}
        ],

        heat: [
            {name: "Heat to"}
        ],

        cool: [
            {name: "Cool down to"}
        ],

        consist: [
            {name: "Liquid"},
            {name: "pasty"},
            {name: "solid"}
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