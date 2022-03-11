
function JsxSample() {

    let name = "Yuri Gagarin";
    let cities = ['İzmir','İstanbul','Ankara','Trabzon','Diyarbakır','Edirne'];

    let onlineStatus = false;

    return (
        <div>
            <h1>{name}</h1>
            <ul>

            {/* {
                cities.map(function(item){
                    return (<li>{item}</li>)
                })
            } */}

            {
                cities.map( (item) => (<li>{item}</li>) )
            }
            </ul>
            
            {
                onlineStatus == true ? (<h1>user online</h1>) : (<h1>user offline</h1>)
            }

        </div>
    )
}

export default JsxSample
