
import { Icon } from '@iconify/react';


export default function MainDash () {
    return (
        <div className="main-dashboard">
            <div className="main-dashboard__header">
                <h1 className="main-dashboard__title">Dashboard</h1>
            </div>
            <div className="main-dashboard__content">
                <div className="main-dashboard__content-card">
                    <Icon icon="bx:bxl-react" className="main-dashboard__content-icon" />
                    <span className="main-dashboard__content-text">React App</span>
                </div>
            </div>
        </div>
    );
}