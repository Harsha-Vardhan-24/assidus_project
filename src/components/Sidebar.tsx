import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AssessmentIcon from '@mui/icons-material/Assessment';
import PersonIcon from '@mui/icons-material/Person';
import ContactsIcon from '@mui/icons-material/Contacts';

const Sidebar = () => {
  return (
    <section className="sidebar">
        <div className="section">
            <div className="icon">
                <SpaceDashboardIcon />
            </div>
            <p className="section-title">Dashboard</p>
        </div>
        <div className="section">
            <div className="icon">
                <AccountBalanceWalletIcon />
            </div>
            <p className="section-title">Accounts</p>
        </div>
        <div className="section">
            <div className="icon">
                <AttachMoneyIcon />
            </div>
            <p className="section-title">Payroll</p>
        </div>
        <div className="section">
            <div className="icon">
                <AssessmentIcon />
            </div>
            <p className="section-title">Reports</p>
        </div>
        <div className="section">
            <div className="icon">
                <PersonIcon />
            </div>
            <p className="section-title">Advisor</p>
        </div>
        <div className="section">
            <div className="icon">
                <ContactsIcon />
            </div>
            <p className="section-title">Contacts</p>
        </div>
    </section>
  )
}

export default Sidebar