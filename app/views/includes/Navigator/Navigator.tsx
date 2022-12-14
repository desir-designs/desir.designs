import ArchitectureIcon from '@mui/icons-material/Architecture';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import CelebrationIcon from '@mui/icons-material/Celebration';
import MenuIcon from '@mui/icons-material/Menu';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import useDrawer from "@hooks/useDrawer"
import useBanner from "@hooks/useBanner"

export default function Navigator() {

    const { toggleDrawer } = useDrawer()
    const { toggleBanner } = useBanner()
    const ActionSx = {

        color: 'black',
        "&:hover": {
            color: 'blue'
        }
    }

    const Destinations = [
        {
            icon: <ArrowUpwardIcon sx={ActionSx} />,
            name: 'Up',
            action: () => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
        },
        {
            icon: <ArrowUpwardIcon className="rotate-180" sx={ActionSx} />,
            name: 'Down',
            action: () => { window.scrollTo({ top: 5000, left: 0, behavior: 'smooth' }) }
        },
        {
            icon: <MenuIcon sx={ActionSx} />,
            name: 'Menu',
            action: () => { toggleDrawer() }
        },
        {
            icon: <AddAlertIcon sx={ActionSx} />,
            name: 'Alerts',
            action: () => { toggleBanner() }
        },


    ];

    return (
        <SpeedDial
            ariaLabel="Desir Designs Navigator"
            sx={{ position: 'fixed', bottom: 16, right: 32 }}
            FabProps={{
                sx: {
                    backgroundColor: "blue",

                    "&:hover": {
                        backgroundColor: "black",
                    }
                }
            }}
            icon={<ArchitectureIcon />}
        >
            {Destinations.map((action) => (
                <SpeedDialAction
                    key={action.name}
                    icon={action.icon}
                    onClick={() => action.action()}
                    tooltipOpen
                    tooltipTitle={<div className="block text-black no-wrap overflow-ellipsis overflow-hidden">{action?.name}</div>}
                />
            ))}
        </SpeedDial>
    )
}
