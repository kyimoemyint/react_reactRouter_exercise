
function Row({item})
{
    return(
        <>
            <td>{item}</td>
        </>
    )
}

export default function Table()
{
    let items = [
        'one',
        'two',
        'three'
    ]
    return(
        <div>
            <table>
                <tbody>
                    {
                        items.map((item,index) => {
                            return(
                                <tr key={index}>
                                    <Row item={item} />
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}