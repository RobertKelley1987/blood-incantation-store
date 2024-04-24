type AccessoryDecriptionProps = {
  desc: string[];
};
function AccessoryDecription({ desc }: AccessoryDecriptionProps) {
  const renderList = () => {
    return (
      <div>
        {desc.map((p) => (
          <p>{p}</p>
        ))}
      </div>
    );
  };

  const renderDesc = () =>
    desc.length === 1 ? <p>{desc[0]}</p> : renderList();

  return (
    <div className="flex flex-col gap-3">
      <h2 className="font-semibold uppercase">Description</h2>
      {renderDesc()}
    </div>
  );
}
export default AccessoryDecription;
