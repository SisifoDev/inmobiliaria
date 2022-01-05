import React from "react";
import Input from "./Input";

const SearchBar = () => {
  return (
    <div className="flex absolute bottom-24 left-[12.5%] justify-center bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-80 border border-gray-200 h-40 w-3/4 rounded-2xl">
      <div className="flex flex-col justify-center gap-4 ">
        <div>
          <h3 className="text-4xl font-bold text-slate-800">
            Encuentra el inmueble que necesitas
          </h3>
          <p className="text-md font-medium text-slate-800">
            Puedes buscar por ubicación o tipo de inmueble
          </p>
        </div>
        <div className="flex justify-between gap-8 items-center ">
          <form action="" className="flex justify-between gap-8 items-center ">
            <Input
              name="tipo"
              id="tipo"
              opt={[
                "Casas",
                "Apartamentos",
                "Locales",
                "Oficinas",
                "Bodegas",
                "Otros",
              ]}
            />
            <Input
              name="estado"
              id="estado"
              opt={["Nuevo en venta", "Usado en venta", "Nuevo en arriendo"]}
            />
            <Input
              name="ubicacion"
              id="ubicacion"
              opt={["sevilla", "campo nuñez", "centro", "la gaitana"]}
            />
            <button>Buscar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
