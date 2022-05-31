import { Info } from "../interfaces/interface";

const InputComp = ({ info }: any) => {
  return (
    <li key={Math.random()}>
      <input value={info} />
      {info}
    </li>
  );
};

export default InputComp;
