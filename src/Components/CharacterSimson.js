const  CharacterSimson= ({CharacterSimson}) => {
    const { name, surname, age, info, img} = CharacterSimson
    return (
        <div>
            <h1>{name}</h1>
            <h2>{surname}</h2>
            <h2>{age}</h2>
            <p>{info}</p>
            <img
            src={img}
            alt={name}
            />
        </div>
    );
};

export {CharacterSimson}