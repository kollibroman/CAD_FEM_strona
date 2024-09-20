import SinglePost from "../Components/SinglePostPage/SinglePost";
import "./singlePostPage.css"

export class SingleProjectInfo {
    constructor(title, desc, author, date, text, moreImages, paragraphs) {
        this.title = title;
        this.mainDesc = desc;
        this.author = author;
        this.date = date;
        this.text = text;
        this.moreImages = moreImages;
        this.paragraphs = paragraphs;
    }
}

export default function SinglePostPage() {
    var project = new SingleProjectInfo("Tytuł Projektu, który będzie taki",
        "Prosty opis jakiś krótki podobno ale nie wiem jak krótki pewnie tak jest okej.",
        "Imie",
        "26.05.2024",
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, cupiditate ratione ad rem repellat nobis magni dignissimos inventore repudiandae atque voluptatem iure eius odio quo aspernatur magnam in non laudantium! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, cupiditate ratione ad rem repellat nobis magni dignissimos inventore repudiandae atque voluptatem iure eius odio quo aspernatur magnam in non laudantium! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, cupiditate ratione ad rem repellat nobis magni dignissimos inventore repudiandae atque voluptatem iure eius odio quo aspernatur magnam in non laudantium! \n Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, cupiditate ratione ad rem repellat nobis magni dignissimos inventore repudiandae atque voluptatem iure eius odio quo aspernatur magnam in non laudantium! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, cupiditate ratione ad rem repellat nobis magni dignissimos inventore repudiandae atque voluptatem iure eius odio quo aspernatur magnam in non laudantium! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, cupiditate ratione ad rem repellat nobis magni dignissimos inventore repudiandae atque voluptatem iure eius odio quo aspernatur magnam in non laudantium!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, cupiditate ratione ad rem repellat nobis magni dignissimos inventore repudiandae atque voluptatem iure eius odio quo aspernatur magnam in non laudantium! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, cupiditate ratione ad rem repellat nobis magni dignissimos inventore repudiandae atque voluptatem iure eius odio quo aspernatur magnam in non laudantium! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, cupiditate ratione ad rem repellat nobis magni dignissimos inventore repudiandae atque voluptatem iure eius odio quo aspernatur magnam in non laudantium!",
        [{
            key: 0,
            src: "/zdjecia/hugokopter.png"
        },
        {
            key: 1,
            src: "/zdjecia/hugokopter2.png"
        },
        {
            key: 2,
            src: "/ekipa.png"
        },
        {
            key: 3,
            src: "/zdjecia/weWon.jpg"
        },
        {
            key: 4,
            src: "/projekt.png"
        },
        {
            key: 5,
            src: "/ekipa.png"
        },],
        [
            {
                "key": 0,
                "imageDesc": "Zdjęcie lotni w budowie",
                "image": "/zdjecia/gdynia2024/lotniaSpawanie.jpg",
                "desc": "Wraz z KNMK Kompozytywni stworzyliśmy zespół The Airwelders i wzięliśmy udział w Konkursie Lotów organizowanym przez markę Red Bull, który odbył się 18.08. w Gdyni. W zawodach zajęliśmy drugie miejsce, lądując na długości 22,1 metrów oraz otrzymując wysokie noty od jury. Nasz sukces nie byłby możliwy gdyby nie zaangażowanie, poświęcenie i serce, które włożyliśmy w pracę."
            },
            {
                "key": 1,
                "imageDesc": "Projekt Lotni",
                "image": "/zdjecia/gdynia2024/lotniaInventor.jpg",
                "desc": "Naszym pierwszym zadaniem było zaprojektowanie lotni oraz stworzenie jej modelu 3D w programie Inventor. Przez nasze głowy przechodziło wiele pomysłów, zdecydowaliśmy się jednak na koncepcję dużej lotni pozwalającej na wytworzenie znacznej siły nośnej podczas lotu. "
            },
            {
                "key": 3,
                "imageDesc": "Podstawa Lotni",
                "image": "/zdjecia/gdynia2024/podstawaLotni.jpg",
                "desc": "Tymczasem drugi zespół zajmował się konstrukcją podwozia, na którym lotnia miała się trzymać podczas rozpędzania na rampie. Spawanie konstrukcji wózka było wymagającym zajęciem lecz i z nim sobie poradziliśmy, jednocześnie przyjmując spawalnictwo jako nasz motyw przewodni. "
            },
            {
                "key": 4,
                "imageDesc": "Nasza drużyna",
                "image": "/zdjecia/gdynia2024/team1.jpg",
                "desc": "Był to nasz pierwszy tak duży i rozbudowany projekt i jesteśmy dumni z naszego zespołu, Cieszymy się również i dziękujemy za bardzo owocną współpracę z KMNK Kompozytywni. Dzięki wam ten projekt zaistniał najpierw w naszych głowach, potem materializował się w trakcie pracy, by następnie zapisać się w naszej historii."
            }
        ]

    )
    return (
        <div className="singlePostPageContent">
            <SinglePost project={project} />
        </div>
    )
}
