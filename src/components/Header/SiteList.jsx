import './SiteList.scss'
import HubOutlinedIcon from '@mui/icons-material/HubOutlined';
import LanOutlinedIcon from '@mui/icons-material/LanOutlined';
import StreamOutlinedIcon from '@mui/icons-material/StreamOutlined';
import BrowserUpdatedOutlinedIcon from '@mui/icons-material/BrowserUpdatedOutlined';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import SatelliteIcon from '@mui/icons-material/Satellite';
import VpnLockOutlinedIcon from '@mui/icons-material/VpnLockOutlined';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';

const SiteList = (props) => {
  return (
    <div className="othSites" onMouseLeave={props.hideSiteList}>
    <li>
      <HubOutlinedIcon className="othIcon" style={{ color: "#6a0185" }}/>
      <div className="title">
        Network Automation
      </div>
    </li>
    <li>
      <LanOutlinedIcon className="othIcon" style={{ color: "#0293a1" }}/>
      <div className="title">
        NPE Tools
      </div>
    </li>
    <li>
      <StreamOutlinedIcon className="othIcon" style={{ color: "#a10241" }}/>
      <div className="title">
        NSO
      </div>
    </li>
    <li>
      <BrowserUpdatedOutlinedIcon className="othIcon" style={{color: "#a10241"}}/>
      <div className="title">
        Software Image Upgrade
      </div>
    </li>
    <li>
      <LeaderboardIcon className="othIcon" style={{ color: "#91b30c" }}/>
      <div className="title">
        Performance KPI
      </div>
    </li>
    <li>
      <DisabledByDefaultIcon className="othIcon" style={{color: "#8c519e"}}/>
      <div className="title">
        Fault KPI
      </div>
    </li>
    <li>
      <AirplaneTicketIcon className="othIcon" style={{color: "#484ca3" }}/>
      <div className="title">
        Device On Boarding
      </div>
    </li>
    <li>
      <SatelliteIcon className="othIcon" style={{color: "#07c400" }}/>
      <div className="title">
        CNAAP
      </div>
    </li>
    <li>
      <VpnLockOutlinedIcon className="othIcon" style={{color: '#fcba03'}}/>
      <div className="title">
        E-SAT
      </div>
    </li>
    <li>
      <StorageOutlinedIcon className="othIcon" style={{ color: "#015785" }}/>
      <div className="title">
        BNG
      </div>
    </li>
              <li>
                <HubOutlinedIcon className="othIcon" style={{ color: "#6a0185" }}/>
                <div className="title">
                  Network Automation
                </div>
              </li>
              <li>
                <LanOutlinedIcon className="othIcon" style={{ color: "#0293a1" }}/>
                <div className="title">
                  NPE Tools
                </div>
              </li>
              <li>
                <StreamOutlinedIcon className="othIcon" style={{ color: "#a10241" }}/>
                <div className="title">
                  NSO
                </div>
              </li>
              <li>
                <BrowserUpdatedOutlinedIcon className="othIcon" style={{color: "#a10241"}}/>
                <div className="title">
                  Software Image Upgrade
                </div>
              </li>
              <li>
                <LeaderboardIcon className="othIcon" style={{ color: "#91b30c" }}/>
                <div className="title">
                  Performance KPI
                </div>
              </li>
              <li>
                <DisabledByDefaultIcon className="othIcon" style={{color: "#8c519e"}}/>
                <div className="title">
                  Fault KPI
                </div>
              </li>
              <li>
                <AirplaneTicketIcon className="othIcon" style={{color: "#484ca3" }}/>
                <div className="title">
                  Device On Boarding
                </div>
              </li>
              <li>
                <SatelliteIcon className="othIcon" style={{color: "#07c400" }}/>
                <div className="title">
                  CNAAP
                </div>
              </li>
              <li>
                <VpnLockOutlinedIcon className="othIcon" style={{color: '#fcba03'}}/>
                <div className="title">
                  E-SAT
                </div>
              </li>
              <li>
                <StorageOutlinedIcon className="othIcon" style={{ color: "#015785" }}/>
                <div className="title">
                  BNG
                </div>
              </li>
          </div>
  )
}

export default SiteList