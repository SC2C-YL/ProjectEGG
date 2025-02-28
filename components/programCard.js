import '../app/programs/programs.css'
import Link from 'next/link';


function Programcard({image, path, title}) {

    return (
         <Link href={path} className="programBox">
                <img src={image} alt={title} className="program-image"/>
                <span className="building 1 x">{title}</span>
            </Link>
    )
}

export default Programcard;