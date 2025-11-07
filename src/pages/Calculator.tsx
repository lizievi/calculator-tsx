import { Button } from "../components/Button";
import { ButtonClear } from "../components/ButtonClear";
import { Screen } from "../components/Screen";
import { Title } from "../components/Title";

export const Calculator = () => {
  const handleAdd = () => {
    console.log();
  };
  return (
    <div className="min-w-[500px] border border-amber-400 flex flex-col items-center justify-center">
      <Title title="Basic Calculator" />
      <div className="text-white flex flex-col bg-fuchsia-800 border-6 rounded-2xl min-w-[360px] border-fuchsia-950 min-h-[450px] p-4 gap-3">
        <Screen input="0" />
        <div className="flex gap-3">
          <Button value="1" handleClick={handleAdd} />
          <Button value="2" handleClick={handleAdd} />
          <Button value="3" handleClick={handleAdd} />
          <Button value="+" handleClick={handleAdd}  />
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
          <Button value="*" handleClick={handleAdd}  />
        </div>
        <div className="flex gap-3">
          <Button value="+" handleClick={handleAdd} />
          <Button value="0" handleClick={handleAdd} />
          <Button value="." handleClick={handleAdd} />
          <Button value="/" handleClick={handleAdd} />
        </div>
        <ButtonClear handleClick={handleAdd} value="Clear"/>
      </div>
    </div>
  );
};
