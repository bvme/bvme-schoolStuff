export const LoopedIcons = ({ Icondata }) => {
  return Icondata.map((el, i) => <Skill key={i} {...el} />);
};
export const Skill = ({ Name, Logo }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-center">{Logo}</div>
      <div className="flex justify-center">{Name}</div>
    </div>
  );
};
