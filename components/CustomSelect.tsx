import { FC } from "react";
import { Select, Option } from "./select";

export interface CustomSelectProps {
  opt: string[];
}

const CustomSelect: FC<CustomSelectProps> = ({ opt }) => {
  return (
    <div >

      <Select placeholder="Selecciona una opción">
        {
          opt.map((item, index) => <Option value={item} key={index}>{item}</Option>
          )
        }

      </Select>
    </div>
  );
};

export default CustomSelect;
