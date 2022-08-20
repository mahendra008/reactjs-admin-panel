import "./CounterWidget.scss"
import PersonIcon from '@mui/icons-material/Person';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import ParkIcon from '@mui/icons-material/Park';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';

const CounterWidget = (props) => {
    
    let data = {
        qa_submit:{
            value: '18,560',
            title: 'QA Submit',
            icon: <PersonIcon />,
        },
        qa_approve:{
            value: '15,200',
            title: 'QA Approved',
            icon: <AssignmentTurnedInIcon />,
        },
        hoto_submit:{
            value: '5,220',
            title: 'HOTO Submit',
            icon: <ParkIcon />,
        },
        hoto_approve:{
            value: '9,710',
            title: 'HOTO Approved',
            icon: <LocalPoliceIcon />,
        }
    }

    let widget = data[props.name];

    return (        
        <div class="val">
        {widget.icon}
        <div>
            <h3>{widget.value}</h3>
            <span>{widget.title}</span>
        </div>
        </div>
    )
}

export default CounterWidget