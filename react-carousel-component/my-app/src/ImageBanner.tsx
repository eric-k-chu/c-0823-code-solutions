type Props = {
  imgUrl: string;
  name: string;
};

export function ImageBanner({ imgUrl, name }: Props) {
  return (
    <div className="flex flex-col items-center w-60 h-96 gap-y-2">
      <span>{name}</span>
      <img src={imgUrl} />
    </div>
  );
}
