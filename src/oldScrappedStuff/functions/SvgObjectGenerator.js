const SvgObjectGenerator = ({polygons, viewBox, path}) => {

//map points with polygon
  return (
      <svg viewBox={viewBox}>
        <g>
          <path path={path}/>
          {polygons.map((test, index) => (
              <polygon key={test.name+index} className={test.name} points={test.points} fill={test.fill}/>
          ))}
        </g>
      </svg>
  )
};

export default SvgObjectGenerator;


