import {Sidebar} from 'primereact/sidebar'

function AppMenu(props) {
    return (
        <Sidebar visible={props.visible} onHide={props.toggleMenu}>
            {props.content}
        </Sidebar>
    )
} 

export default AppMenu