
import './App.css';
import About from './components/About';
import Blog from './components/Blog';
import Home from './components/Home';
import Projects from './components/Projects'
import Header from './components/partials/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const post = [
  {
    title: 'Andy Warhol - Revelation',
    date: 'November 19, 2021 - June 19,2022',
    body: 'Although Andy Warhol is one of the most celebrated and recognizable artists of the twentieth century, his Byzantine Catholic upbringing, and its profound impact on his life and work, remains a lesser known facet of his career. Andy Warhol: Revelation explores the artist’s lifelong relationship with his faith that frequently appeared in his artworks. Andy Warhol: Revelation examines themes such as life and death, power and desire, the role and representation of women, Renaissance imagery, family and immigrant traditions and rituals, depictions and duplications of Christ, and the Catholic body and queer desire. Among the more than one hundred objects on view are rare source materials and newly discovered items that provide a fresh and intimate look at Warhol’ss creative process, as well as major paintings from his epic Last Supper series (1986), the experimental film The Chelsea Girls (1966), an unfinished film depicting the setting sun, commissioned by the de Menil family and funded by the Roman Catholic Church, and drawings created by Warhol’s mother, Julia Warhola, when she lived with her son in New York City.',
    img: <img src='./WarholRevelation.jpeg' alt='Revelation' />
  },
  {
    title: 'The Warhol Collection',
    date: 'Ongoing',
    body: 'The Warhol holds the largest collection of Warhol art and archives in the world. The artist’s work from the 1940s through to his death in 1987 is featured on five floors of the museum, as well as is the subject of deep-dive collection exhibitions. The museum also has a permanent film and video gallery on the fourth floor for viewing individual Warhol films and videos.',
    img: <img src='./AndyWarholExhibit.jpeg' alt='Warhol Exhibit' />
  },
  {
    title: 'Andy Warhol - Photo Factory',
    date: 'September 10, 2021 - February 20, 2022',
    body: 'With over 120 images spanning Warhol’s career, including many rare and never-before-seen photographs, Andy Warhol: Photo Factory offers a distinctly intimate visual diary of the artist’s life and work, featuring his iconic Polaroid portraits, photo strips, gelatin silver prints, and stitched photographs. The exhibition pays homage to Warhol’s iconic New York City studio The Factory and offers a distinctly intimate visual diary of the artist’s life and work, including Polaroids of celebrities, artists and friends, such as Debbie Harry, Jean-Michel Basquiat, Dolly Parton, Grace Jones, and Keith Haring. Notably, Warhol’s earliest photographic works will be presented, offering a glimpse into his experimentation with the medium and how it served as a catalyst for his early silkscreen paintings, commissioned portraits, and commercial work.',
    img: <img src='./Warholpolaroid.jpeg' alt='PhotoFactory' />
  }
]

const App = () => {

  return (
    
    <div className="App">

        <BrowserRouter>
            <Header/>

              <Routes>
                <Route path='/' element={<Home />} />

                <Route path='/blog' element={<Blog posts={post} />} />

                <Route path='/about' element={<About />} />

                <Route path='/projects' element={<Projects />} />

              </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
