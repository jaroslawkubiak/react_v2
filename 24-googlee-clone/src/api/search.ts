import type { Place } from "./Place";

interface SearchResponse {
  features: {
    geometry: {
      coordinates: number[];
    };
    properties: {
      display_name: string;
      place_id: number;
    };
  }[];
}

export const search = async (term: string) => {
  const params = "format=geojson&addressdetails=1&layer=address&limit=5";
  const url = `https://nominatim.openstreetmap.org/search?q=${term}&${params}`;
  const res = await fetch(url);
  const data: SearchResponse = await res.json();

  const places: Place[] = data.features.map((el) => {
    return {
      id: el.properties.place_id,
      name: el.properties.display_name,
      lng: el.geometry.coordinates[0],
      lat: el.geometry.coordinates[1],
    };
  });

  return places;
};
