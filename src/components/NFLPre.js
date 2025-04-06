export default function PreGame({ value, index }) {
    return (
        <div className="col-md-3">
            <table style={{backgroundColor: 'WhiteSmoke'}} key={index}>
                <tbody>
                    <tr><td colSpan="4" width="256px" style={{textAlign:'right'}}>Scheduled - {value.date}</td></tr>
                    <tr>    
                        <td><img src={value.awaylogo} alt="" width="32px" height="32px" /></td>
                        <td><b>{value.awayabrv}</b></td>
                        <td>{value.awayrecord}</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>    
                    <td><img src={value.homelogo} alt="" width="32px" height="32px" /></td>
                        <td><b>{value.homeabrv}</b></td>
                        <td>{value.homerecord}</td>
                        <td>&nbsp;</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
