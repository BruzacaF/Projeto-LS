import { Icon } from '@iconify/react';
import sidebarIcons from '@/components/assets/dashboard-sidebar/references-links';
import { motion } from "framer-motion";


export default function Sidebar() {

    return (

        <motion.div
            initial={{ x: -250 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
            className="sidebar"
        >
            <div className="sidebar__logo">
                <Icon icon="file-icons:owl" className="sidebar__logo-icon" />
                <span className="sidebar__logo-text">Letra a Letra</span>
            </div>
            <div className="sidebar__links">
                {sidebarIcons.map((icon, index) => (
                    <a href={icon.link} key={index} className="sidebar__link">
                        <Icon icon={icon.icon} className="sidebar__link-icon" />
                        <span className="sidebar__link-text">{icon.name}</span>
                    </a>
                ))}
            </div>
        </motion.div>

        
    );
}


