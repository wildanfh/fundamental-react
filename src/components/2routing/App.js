import React from "react";
import { Link, Route, Routes } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    // inisialisasi state
    this.state = {
      page: "/",
    };

    this.navigate = this.navigate.bind(this);
  }

  navigate(target) {
    this.setState(() => {
      return {
        page: target,
      };
    });
  }

  render() {
    return (
      <>
        <header>
          <nav>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/faq" element={<FAQPage />} />
          </Routes>
        </main>
      </>
    );
  }
}

function HomePage() {
  return <p>This is Homepage</p>;
}

function AboutPage() {
  return <p>This is About page</p>;
}

function FAQPage() {
  return <p>This is FAQ page</p>;
}

// function Link({ target, navigate, children }) {
//   return (
//     <a
//       href={target}
//       onClick={(e) => {
//         e.preventDefault();
//         navigate(target);
//       }}
//     >
//       {children}
//     </a>
//   );
// }

export default App;
