import React from 'react';
import HornedBeast from './HornedBeast.js';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';


class Main extends React.Component {
    render() {
        return (
        <>
            <h2> Dangerous Beasts with Horns </h2>
                <HornedBeast src={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Smaug_par_David_Demaret.jpg/290px-Smaug_par_David_Demaret.jpg"} alt='Dragon' title='Dragon' description='A fercious Dragon'/>
                <HornedBeast src={"https://vignette.wikia.nocookie.net/landbeforetime/images/c/c3/Cera_infobox.png/revision/latest?cb=20180422005003"} alt='Triceratops' title='Triceritops' description='A prehistoric Triceritops'/>
        </>
        )
    }
}

export default Main;