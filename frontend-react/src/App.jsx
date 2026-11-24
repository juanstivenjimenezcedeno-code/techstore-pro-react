import Navbar from "./Navbar";
import Footer from "./Footer";
function App() {
  return (

    <main className="max-w-6xl mx-auto px-6 py-10 flex flex-col gap-10">

    <Navbar />
    

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* tarjeta 1*/}
        <div className="flex flex-col gap-2 p-4 rounded-xl shadow-md bg-white">
          <img src="https://images.unsplash.com/photo-1628832307345-7404b47f1751?w=400&h=300&fit=crop" className="rounded-lg" />
          <h3 className="font-bold text-lg">mouse inalámbrico</h3>
          <p className="text-sm text-texto-dim">mouse ergonomico, conexion bluetooth</p>
          <p className=" text-verde  font-extrabold">$ 89.999</p>
        </div>

        {/* tarjeta 2*/}
        <div className="flex flex-col gap-2 p-4 rounded-xl shadow-md bg-white">
          <img src="https://images.unsplash.com/photo-1625130694338-4110ba634e59?w=400&h=300&fit=crop" className="rounded-lg" />
          <h3 className="font-bold text-lg">teclado mecanico</h3>
          <p className="text-sm text-texto-dim">switches azul, retroiluminado RGB</p>
          <p className=" text-verde  font-extrabold">$ 149.999</p>
        </div>
        
        {/* tarjeta 3*/}
        <div className="flex flex-col gap-2 p-4 rounded-xl shadow-md bg-white">
          <img src="https://images.unsplash.com/photo-1666771410003-8437c4781d49?w=400&h=300&fit=crop" className="rounded-lg" />
          <h3 className="font-bold text-lg">monitor 24"</h3>
          <p className="text-sm text-texto-dim">pantalla led, resolución 1920x1080</p>
          <p className=" text-verde  font-extrabold">$ 299.999</p>
        </div>
        
        </section>
      <Footer />

    </main>
  )
}

export default App