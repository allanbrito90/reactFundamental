import AnotherComponent from "./AnotherComponent";

function FirstComponent(){
    //Algum comentário
    const name = "Allan";
    return (
        <div className="firstcomponent">
            {/* Comentário do JSX */}
            <p>Primeiro Componente</p>
            {console.log("Teste")}
            <p>Nome: {name}</p>
            <AnotherComponent />
        </div>
    )
}

export default FirstComponent;