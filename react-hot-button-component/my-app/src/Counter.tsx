type Props = {
  count: number;
};

export function Counter({ count }: Props) {
  return (
    <h3 className="flex justify-center items-center bg-[#FFBF00] rounded-md min-w-[4rem] h-14 px-2 shadow-md font-semibold">
      {count < 2 ? count + ' click' : count + ' clicks'}
    </h3>
  );
}
