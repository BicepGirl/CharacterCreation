import BodyOneComponent from "./assets/bodyOne/attributes/BodyOne"

function CharacterField({ character }) {
  return (
    <div className="pointer-events-none">
      <div className=" absolute inset-0 ">{character.backHair}</div>
      <div className=" absolute inset-0">
        {character.bodyOne ? (
          character.bodyOne
        ) : (
          <BodyOneComponent fill={"#701b4d"} />
        )}
      </div>
      <div className=" absolute inset-0">{character.face}</div>
      <div className=" absolute inset-0">{character.facialHair}</div>
      <div className=" absolute inset-0">{character.ears}</div>
      <div className=" absolute inset-0">{character.upperBody}</div>
      <div className=" absolute inset-0">{character.lowerBody}</div>
      <div className=" absolute inset-0">{character.shoes}</div>
      <div className=" absolute inset-0">{character.frontHair}</div>
    </div>
  )
}

export default CharacterField
