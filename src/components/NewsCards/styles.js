import { makeStyles } from "@material-ui/core";
// import { width } from "@material-ui/system";

const styles = makeStyles({
    container:{
        padding: '0 5%',
        width: '100%',
        margin: 0,
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '45vh',
        padding: '5%',
        borderRadius: 10,
        color:'white'
        
    },
    infoCard: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center'
    }
})


export default styles;