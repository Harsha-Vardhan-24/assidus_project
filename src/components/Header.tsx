import { Avatar } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from "@mui/material/Badge"
import TextField from "@mui/material/TextField";
import SearchIcon from '@mui/icons-material/Search';
const Header = () => {
  return (
    <header>
        <h1>
            ASSIDUSS
        </h1>
        <div className="avatar-section">
            <TextField
                id="input-with-icon-textfield"
                InputProps={{
                startAdornment: (
                    <SearchIcon />
                ),
                disableUnderline: true
                }}
                variant="filled"
                sx={{height: "30px", width: "300px", marginBottom: "22px"}}
            />
            <Badge  badgeContent="1" color="primary">
                <NotificationsIcon sx={{height: "30px", width: "30px"}} color="action" />
            </Badge>
            <Avatar sx={{height: "45px", width: "45px"}} alt="Remy Sharp" src="https://img.freepik.com/free-photo/happy-boy-with-adorable-smile_23-2149352352.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699056000&semt=ais" />
            <KeyboardArrowDownIcon />
        </div>
    </header>
  )
}

export default Header