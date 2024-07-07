import waveImage from '../images/wave-header.jpg'

export default function Header(){
    return( 
    <div class = "flex justify-center items-center bg-blue-200 h-[20vh] text-3xl font-extrabold text-white"
    style={{ backgroundImage: `url(${waveImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <p class="drop-shadow-xl">HOT SUMMER GIVEAWAY</p>
    </div>
    )
}