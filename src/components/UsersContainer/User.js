const User = ({user}) => {
    const {id, name, username, email, address:{street, suite, city, zipcode,geo:{lat, lng}}, phone, website,company:{name:company_name, catchPhrase, bs}} = user
    return (
        <div>
            <div> id: {id}</div>
            <div> name: {name}</div>
            <div> username: {username}</div>
            <div> email: {email}</div>
            <div> address:
                <div> street: {street}</div>
                <div> suite: {suite}</div>
                <div> city: {city}</div>
                <div> zipcode: {zipcode}</div>
            </div>
            <div> geo:
                <div> lat: {lat}</div>
                <div> lng: {lng}</div>
            </div>
            <div> phone: {phone}</div>
            <div> website: {website}</div>
            <div> company :
                <div> company_name: {company_name}</div>
                <div> catchPhrase: {catchPhrase}</div>
                <div> bs: {bs}</div>

            </div>
        </div>
    );
};

export {User}