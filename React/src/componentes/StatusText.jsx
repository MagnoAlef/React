export const StatusText = () =>  {
    const status = true
    return (
        <h2
        style={{
            colors:status ? '#00ff9f' : "#f64348"
        }}
        >Current status : {status ? 'true' : false} </h2>
    )
}
