import {Brewery, mapBrewery} from './Brewery';

export interface Beer {
    id: string;
    name: string;
    description: string;
    brewery: Brewery;
}

export interface ServerBeer {
    id: string;
    name: string;
    description: string;
    breweries: Brewery[];
    style: {
        description: string;
    }
}

export const mapBeer = (o: ServerBeer): Beer => ({
    id: o.id,
    name: o.name,
    description: o.style.description,
    brewery: (o.breweries && o.breweries[0] && mapBrewery(o.breweries[0])) || null
});
