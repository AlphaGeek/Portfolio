import {Menubar} from 'primereact/menubar'

const items = [
    {
        label: "File",
        icon: "pi pi-file",

    }
]

    

function SiteHeader(props) {
    const start = <i className="pi pi-bars" alt="logo" onClick={props.toggleMenu}></i>

    return (
        <Menubar model={items} start={start}/>
    )
}

export default SiteHeader