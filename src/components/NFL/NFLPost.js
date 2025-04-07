export default function PostGame({ value, index }) {
    return (
        <div className="col-md-3">
            <table style={{backgroundColor: 'LightGray'}} key={index}>
                <tbody>
                    <tr><td colSpan="3" width="256px" style={{textAlign:'center'}}>{value.date}</td><td>Final</td></tr>
                    <tr>    
                        <td><img src={value.awaylogo} alt="" width="32px" height="32px" /></td>
                        <td><b>{value.awayabrv}</b></td>
                        <td>{value.awayrecord}</td>
                        <td>{value.awayscore}</td>
                    </tr>
                    <tr>    
                    <td><img src={value.homelogo} alt="" width="32px" height="32px" /></td>
                        <td><b>{value.homeabrv}</b></td>
                        <td>{value.homerecord}</td>
                        <td>{value.homescore}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
