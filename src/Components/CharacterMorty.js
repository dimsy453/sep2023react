const  CharacterMorty= ({Character2}) => {
    const { name,status,species,gender,img} = Character2
    return (
        <div>
            <h1>{name}</h1>
            <p>{status}</p>
            <p>{species}</p>
            <p>{gender}</p>
            <img
                src={img}
                alt={name}
            />
        </div>
    );
};

export {CharacterMorty}