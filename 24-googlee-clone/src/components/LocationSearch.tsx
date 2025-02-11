import { useState, Fragment } from "react";
import type { Place } from "../api/Place";
import { search } from "../api/search";

interface LocationSearchProps {
  onPlaceClick: (place: Place) => void;
}

export default function LocationSearch({ onPlaceClick }: LocationSearchProps) {
  const [places, setPlaces] = useState<Place[]>([]);
  const [term, setTerm] = useState("san francisco");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const results = await search(term);
    setPlaces(results);
  };

  const renderedPlaces = places.map((place) => {
    return (
      <Fragment key={place.id}>
        <p className="text-sm">{place.name}</p>
        <button
          onClick={() => onPlaceClick(place)}
          className="bg-blue-500 text-xs text-white font-bold py-1 px-1 rounded cursor-pointer"
        >
          GO
        </button>
        <div className="border-b border-blue-800 w-full col-span-2" />
      </Fragment>
    );
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="font-bold text-blue-800 pb-2 block" htmlFor="term">
          Search
        </label>
        <input
          className="focus:bg-blue-200 border border-gray-600 
          rounded-md shadow-sm px-4 py-2 w-full"
          id="term"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </form>
      <h1 className="font-bold mt-6 text-blue-800">Found Locations</h1>
      <div className="grid grid-cols-[1fr_40px] gap-2 mt-2 items-center">
        {renderedPlaces}
      </div>
    </div>
  );
}
