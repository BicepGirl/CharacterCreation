const ImgSetup = (props) => {
    return (
        <section className="bg-amber-50 grid">
            <div className="">
                {props.setup && <h3>Setup: {props.setup}</h3>}
                <p>Punchline: {props.punchline}</p>
                {props.img}
                <hr />
            </div>
        </section>
    )
}
export default ImgSetup