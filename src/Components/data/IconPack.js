const IconPack = ({ icons }) => {
  return (
      <div>
        {icons.map((icon, index) => (
            <img src={require(`./icons/${icon}.png`)} alt={icon} key={index} />
        ))}
      </div>
  );
};

export default IconPack;
