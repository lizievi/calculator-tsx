import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Screen } from "../components/Screen";
import { Title } from "../components/Title";
import { evaluate } from "mathjs";

export const Calculator = () => {
  const [valueBtn, setValueBtn] = useState("");

  useEffect(() => {
    if (valueBtn.includes('Infinity')) {
      alert("Usted obtuvo Infinity o Error, la pantalla se limpiará");
      setValueBtn("");
    } else if(valueBtn === 'Error'){
      alert("Error en la sintaxis, la pantalla se limpiará");
      setValueBtn("");
    }
  }, [valueBtn]);

  const handleAdd = (value: string) => {
    const valueIn = value;

    setValueBtn((prev) => prev + valueIn);
  };

  console.log(valueBtn);

  const handleAnswer = () => {
    try{
      if(!valueBtn) return

      const answer = evaluate(valueBtn)
      setValueBtn(String(answer))
    }catch(error){
      console.error('Error en la evaluación', error)
      setValueBtn('Error')
    }

  };

  const handleClear = () => {
    setValueBtn("");
  };

  return (
    <div className="min-w-[500px] flex flex-col gap-3 items-center justify-center">
      <Title title="Basic Calculator" />
      <div className="text-white flex flex-col bg-linear-to-r from-amber-200 to-fuchsia-500 border-6 rounded-2xl min-w-[360px] border-fuchsia-950 min-h-[450px] p-4 gap-3">
        <Screen input={valueBtn} />
        <div className="flex gap-3">
          <Button value="1" handleClick={handleAdd} />
          <Button value="2" handleClick={handleAdd} />
          <Button value="3" handleClick={handleAdd} />
          <Button value="+" handleClick={handleAdd} />
        </div>
        <div className="flex gap-3">
          <Button value="4" handleClick={handleAdd} />
          <Button value="5" handleClick={handleAdd} />
          <Button value="6" handleClick={handleAdd} />
          <Button value="-" handleClick={handleAdd} />
        </div>
        <div className="flex gap-3">
          <Button value="7" handleClick={handleAdd} />
          <Button value="8" handleClick={handleAdd} />
          <Button value="9" handleClick={handleAdd} />
          <Button value="*" handleClick={handleAdd} />
        </div>
        <div className="flex gap-3">
          <Button value="(" handleClick={handleAdd} />
          <Button value="0" handleClick={handleAdd} />
          <Button value=")" handleClick={handleAdd} />
          <Button value="/" handleClick={handleAdd} />
        </div>
        <div className="flex gap-3">
          <Button value="=" handleClick={handleAnswer} />
          <Button value="." handleClick={handleAdd} />
          <Button value="AC" handleClick={handleClear} />
          <Button value="%" handleClick={handleAdd} />
        </div>
      </div>
    </div>
  );
};
