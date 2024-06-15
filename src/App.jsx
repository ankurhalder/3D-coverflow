import Slide from "./Slide";
import "./App.css";
import { useReducer } from "react";
const slides = [
  {
    title: "Machu Picchu",
    subtitle: "Peru",
    description: "Adventure is never far away",
    image:
      "https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
  },
  {
    title: "Chamonix",
    subtitle: "France",
    description: "Let your dreams come true",
    image:
      "https://images.unsplash.com/photo-1581836499506-4a660b39478a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
  },
  {
    title: "Mimisa Rocks",
    subtitle: "Australia",
    description: "A piece of heaven",
    image:
      "https://images.unsplash.com/photo-1566522650166-bd8b3e3a2b4b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
  },
  {
    title: "Four",
    subtitle: "Australia",
    description: "A piece of heaven",
    image:
      "https://images.unsplash.com/flagged/photo-1564918031455-72f4e35ba7a6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
  },
  {
    title: "Five",
    subtitle: "Australia",
    description: "A piece of heaven",
    image:
      "https://images.unsplash.com/photo-1579130781921-76e18892b57b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
  },
];

const initialState = {
  slideIndex: 0,
};

const slidesReducer = (state, event) => {
  if (event.type === "NEXT") {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % slides.length,
    };
  }
  if (event.type === "PREV") {
    return {
      ...state,
      slideIndex:
        state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1,
    };
  }
  return state;
};

const App = () => {
  const [state, dispatch] = useReducer(slidesReducer, initialState);

  return (
    <div className="slides">
      <button onClick={() => dispatch({ type: "PREV" })}>‹</button>
      {[...slides, ...slides, ...slides].map((slide, i) => {
        let offset = slides.length + (state.slideIndex - i);
        return <Slide slide={slide} offset={offset} key={i} />;
      })}
      <button onClick={() => dispatch({ type: "NEXT" })}>›</button>
    </div>
  );
};

export default App;
