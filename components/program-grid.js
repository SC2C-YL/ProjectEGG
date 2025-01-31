import '../app/programs/programs.css'
import Link from 'next/link';


function Card({image, path, title}) {

    return (
         <Link href={path} className="button-item">
                <img src={image} alt={title} />
                <span>{title}</span>
            </Link>
    )
}

export default Card;