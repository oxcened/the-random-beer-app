export interface Brewery {
    id: string;
    name: string;
    description: string;
    established: string;
    images: BreweryImages;
}

export interface BreweryImages {
    icon: string;
    medium: string;
    large: string;
    squareMedium: string;
    squareLarge: string;
}

export const mapBrewery = (o: Brewery): Brewery => ({
    id: o.id,
    name: o.name,
    description: o.description,
    images: o.images,
    established: o.established
});
