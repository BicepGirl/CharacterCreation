const IconPack = ({ icons }) => {
  return (
      <div className=" p-2">

            <img src={require(`./icons/${icons}.png`)} alt={''} key={''} />

      </div>
  );
};

export default IconPack;
