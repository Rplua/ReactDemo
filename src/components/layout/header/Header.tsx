import reactImg from '@/assets/react-core-concepts.png'

const reactDescriptions = ['Fundamental', 'Crucial', 'Core']

const getRandomInt = (max: number): number => {
  return Math.floor(Math.random() * max);
};

const getRandomDescription = () =>{
    return reactDescriptions[getRandomInt(reactDescriptions.length)]
}

function Header(){
    const description = getRandomDescription(); 
    return(
        <header>
            <img src={reactImg} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
            {description} React concepts you will need for almost any app you are
            going to build!
            </p>
        </header>
    )
}

export default Header;