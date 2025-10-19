import './CoreConcept.scss'

type CoreConcept = {
    title: string,
    description: string,
    img: string
}

function CoreConcept(props: CoreConcept){
    return(
        <li>
            <img src={props.img} alt={props.title} />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </li>
    )
}

export default CoreConcept;