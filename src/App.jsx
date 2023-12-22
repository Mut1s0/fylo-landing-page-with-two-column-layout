import { Business, CTA, Footer, Hero, Navigation } from "./components";

function App() {

  return(
    <main>

      <header>

        <Navigation />

        <Hero />

      </header>

      <article>

        <Business />

        <CTA />

      </article>

      <footer>

        <Footer />

      </footer>

    </main>
  )
}

export default App;