import "./CounterWidget1.scss"
import ArrowCircleUpRoundedIcon from '@mui/icons-material/ArrowCircleUpRounded';
import ArrowCircleDownRoundedIcon from '@mui/icons-material/ArrowCircleDownRounded';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import BeenhereOutlinedIcon from '@mui/icons-material/BeenhereOutlined';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';


const CounterWidget1 = (props) => {
    
    let data = {
        qa_submit:{
            value: '18560',
            title: 'QA Submit',
            percent: '15.20%',
            icon: <StorageOutlinedIcon />,
        },
        qa_approve:{
            value: '15200',
            title: 'QA Approved',
            percent: '2.85%',
            icon: <AccountBalanceOutlinedIcon />,
            class: 'red'
        },
        hoto_submit:{
            value: '5220',
            title: 'HOTO Submit',
            percent: '42.25%',
            icon: <BeenhereOutlinedIcon />,
        },
        hoto_approve:{
            value: '9710',
            title: 'HOTO Approved',
            percent: '12.5%',
            icon: <DiamondOutlinedIcon />,
        }
    }

    let widget = data[props.name];

    return (
        <div className="widgetCard1">
            <div className="cardtop">
                {widget.icon}
                {widget.title}
            </div>
            <h2>{widget.value}</h2>
            <div className={(widget.class) ? "cardbot red" : "cardbot"}>
                <div className="percent">{widget.percent}</div>
                {(widget.class) ? <ArrowCircleDownRoundedIcon /> : <ArrowCircleUpRoundedIcon />}
            </div>
        </div>
    )
}

export default CounterWidget1