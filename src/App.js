import logo from './logo.svg';
import './styles/App.css';

import Carousel, { CarouselItem } from './components/Carousel';

function App() {
  return (
    <div>
      <h1>AAI Coding Club</h1>

      <Carousel>
        <CarouselItem>Item 1</CarouselItem>
        <CarouselItem>Item 2</CarouselItem>
        <CarouselItem>Item 3</CarouselItem>
      </Carousel>
    </div>
  );
}

export default App;
